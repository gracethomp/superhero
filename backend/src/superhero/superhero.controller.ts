import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto, UpdateSuperheroDto } from './dto';

@Controller('superhero')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}
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
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroService.create(createSuperheroDto);
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
