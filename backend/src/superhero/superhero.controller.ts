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
import { StorageService } from 'src/storage/storage.service';
import { createFilesInterceptor } from 'src/utils/file-inspector';

@Controller('superhero')
export class SuperheroController {
  constructor(
    private readonly superheroService: SuperheroService,
    private readonly storageService: StorageService,
  ) {}
  @Get()
  findAll(@Query('page') page: number) {
    return this.superheroService.findAll(page);
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
    @Body('mediaIds') mediaIds: string[],
    @Body() createSuperheroDto: CreateSuperheroDto,
  ) {
    try {
      await this.storageService.saveMany(files, mediaIds);
      return this.superheroService.create(createSuperheroDto);
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
