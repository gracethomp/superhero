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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto, UpdateSuperheroDto } from './dto';
import { StorageService } from 'src/storage/storage.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

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
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        files: 1,
        fileSize: 1024 * 1024,
      },
      fileFilter: (req, file, callback) => {
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        const fileExtname = extname(file.originalname).toLowerCase();

        if (allowedExtensions.includes(fileExtname)) {
          return callback(null, true);
        } else {
          return callback(
            new BadRequestException('wrong type. only images allowed'),
            false,
          );
        }
      },
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body('mediaId') mediaId: string,
    @Body() createSuperheroDto: CreateSuperheroDto,
  ) {
    console.log(createSuperheroDto);
    try {
      await this.storageService.save('/' + mediaId, file.buffer, [
        { mediaId: mediaId },
      ]);
      return this.superheroService
        .create(createSuperheroDto)
        .catch(() => this.storageService.delete('/' + mediaId)); //to change
    } catch (err) {
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
