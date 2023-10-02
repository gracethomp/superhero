import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto, UpdateSuperheroDto } from './dto';
import { createFilesInterceptor } from '../utils/file-inspector';
import { MediaService } from './media/media.service';
import { UploadService } from '../storage/upload.service';

@Controller('superhero')
export class SuperheroController {
  constructor(
    private readonly superheroService: SuperheroService,
    private readonly mediaService: MediaService,
    private readonly uploadService: UploadService,
  ) {}
  @Get()
  async findAll(@Query('page') page: number) {
    const values = await this.superheroService.findAll(page);
    const result = await Promise.all(
      values.map(async (value) => {
        return {
          ...value.dataValues,
          images: await this.mediaService.findAll(value.id),
        };
      }),
    );
    return result;
  }
  @Get('media/superhero/:superheroId')
  async getAllBySuperheroId(@Param('superheroId') superheroId: number) {
    return await this.mediaService.findAll(superheroId);
  }

  @Get('total-count')
  async getTotalCount() {
    const totalCount = await this.superheroService.getTotalCount();
    return { totalCount };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const value = await this.superheroService.findOne(id);
    return {
      ...value,
      images: await this.mediaService.findAll(value.id),
    };
  }

  @Post()
  @UseInterceptors(createFilesInterceptor('files', 3))
  async create(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() createSuperheroDto: CreateSuperheroDto,
  ) {
    try {
      const mediaIds = await this.uploadService.uploadFiles(
        files,
        createSuperheroDto,
      );
      const superhero = await this.superheroService.create({
        ...createSuperheroDto,
        mediaIds,
      });
      return superhero;
    } catch (err) {
      throw new BadRequestException(err.name);
    }
  }
  @Patch(':id')
  @UseInterceptors(createFilesInterceptor('files', 3))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() updateSuperheroDto: UpdateSuperheroDto,
  ) {
    try {
      const oldFileUrls = await this.mediaService.findAllUrls(id);
      await this.uploadService.deleteFilesByUrl(oldFileUrls);
      const mediaIds = await this.uploadService.uploadFiles(
        files,
        updateSuperheroDto,
      );
      return this.superheroService.update(id, {
        ...updateSuperheroDto,
        mediaIds,
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.superheroService.remove(id);
  }
}
