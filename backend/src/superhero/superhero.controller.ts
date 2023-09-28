import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
  ServiceUnavailableException,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto, UpdateSuperheroDto } from './dto';
import { StorageService } from 'src/storage/storage.service';
import { createFilesInterceptor } from 'src/utils/file-inspector';
import { v4 as uuidv4 } from 'uuid';
import { StorageFile } from 'src/config';
import { Response } from 'express';
import { MediaService } from './media/media.service';

@Controller('superhero')
export class SuperheroController {
  constructor(
    private readonly superheroService: SuperheroService,
    private readonly storageService: StorageService,
    private readonly mediaService: MediaService,
  ) {}
  @Get()
  findAll(@Query('page') page: number) {
    return this.superheroService.findAll(page);
  }
  @Get('media/superhero/:superheroId')
  async getAllBySuperheroId(@Param('superheroId') superheroId: number) {
    return await this.mediaService.findAll(superheroId);
  }

  @Get('media/:mediaId') //think about it
  async downloadMedia(@Param('mediaId') mediaId: string, @Res() res: Response) {
    let storageFile: StorageFile;
    try {
      storageFile = await this.storageService.get('/' + mediaId);
    } catch (e) {
      if (e.message.toString().includes('No such object')) {
        throw new NotFoundException('image not found');
      } else {
        throw new ServiceUnavailableException('internal error');
      }
    }
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'max-age=3600');
    res.end(storageFile.buffer);
  }
  @Get('total-count')
  async getTotalCount() {
    const totalCount = await this.superheroService.getTotalCount();
    return { totalCount };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.superheroService.findOne(id);
  }

  @Post()
  @UseInterceptors(createFilesInterceptor('files', 3))
  async create(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() createSuperheroDto: CreateSuperheroDto,
  ) {
    const mediaIds: string[] = files.map(() => uuidv4());
    try {
      await this.storageService.saveMany(files, mediaIds);
      const superhero = await this.superheroService.create({
        ...createSuperheroDto,
        mediaIds,
      });
      return superhero;
    } catch (err) {
      this.storageService.deleteMany(mediaIds);
      throw new BadRequestException(err.name);
    }
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSuperheroDto: UpdateSuperheroDto,
  ) {
    return this.superheroService.update(id, updateSuperheroDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.superheroService.remove(id);
  }
}
