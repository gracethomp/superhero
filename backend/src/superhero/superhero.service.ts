import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Superhero } from './entities';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';

@Injectable()
export class SuperheroService {
  constructor(
    @InjectModel(Superhero) private superheroRepository: typeof Superhero,
  ) {}
  private readonly logger = new Logger(SuperheroService.name);

  async findAll(): Promise<Superhero[]> {
    return this.superheroRepository.findAll();
  }

  async findOne(id: number) {
    const superhero = await this.superheroRepository.findByPk(id);
    if (superhero === null) {
      throw new NotFoundException('Superhero not found');
    }
    return superhero;
  }

  async create(createSuperheroDto: CreateSuperheroDto) {
    const createdSuperhero = await this.superheroRepository.create({
      ...createSuperheroDto,
    });
    this.logger.log(`Superhero ${createdSuperhero.id} created`);
    return createdSuperhero;
  }

  async update(id: number, updateSuperheroDto: UpdateSuperheroDto) {
    const superhero = await this.superheroRepository.findByPk(id);
    if (superhero === null) {
      throw new NotFoundException('Superhero not found');
    }

    const [numberOfAffectedRows, updatedSuperhero] =
      await this.superheroRepository.update(
        { ...updateSuperheroDto },
        { where: { id }, returning: true },
      );

    if (numberOfAffectedRows > 0) {
      this.logger.log(`Superhero ${id} updated`);
    }
    return updatedSuperhero;
  }

  async remove(id: number) {
    const superhero = await this.superheroRepository.findByPk(id);
    if (superhero === null) {
      throw new NotFoundException('Superhero not found');
    }
    await this.superheroRepository.destroy({
      where: {
        id: superhero.id,
      },
    });
    this.logger.log(`Superhero ${id} deleted`);
  }
}
