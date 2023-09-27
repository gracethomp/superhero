import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PowerHero, Superhero } from './entities';
import { CreateSuperheroDto, UpdateSuperheroDto } from './dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class SuperheroService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(Superhero) private superheroRepository: typeof Superhero,
    @InjectModel(PowerHero) private powerHeroRepository: typeof PowerHero,
  ) {}
  private readonly logger = new Logger(SuperheroService.name);

  async findAll(page: number = 1): Promise<Superhero[]> {
    return this.superheroRepository.findAll({
      limit: 5,
      offset: (page - 1) * 5, //5 should be as const
    });
  }

  async findOne(id: number) {
    const superhero = await this.superheroRepository.findByPk(id);
    if (superhero === null) {
      throw new NotFoundException('Superhero not found');
    }
    return superhero;
  }

  async create(createSuperheroDto: CreateSuperheroDto) {
    const { superpowers } = createSuperheroDto;
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };
        const createdSuperhero = await this.superheroRepository.create(
          {
            ...createSuperheroDto,
            superpowers: [],
          },
          transactionHost,
        );
        await Promise.all(
          superpowers.map(async (superpowerId) => {
            try {
              await this.powerHeroRepository.create(
                {
                  superhero_id: createdSuperhero.id,
                  superpower_id: superpowerId,
                },
                transactionHost,
              );
            } catch (err) {
              throw new NotFoundException(
                superpowerId + ' superpower not found',
              );
            }
          }),
        );

        this.logger.log(`Superhero ${createdSuperhero.id} created`);

        return createdSuperhero;
      });
    } catch (err) {
      throw err;
    }
  }

  async update(id: number, updateSuperheroDto: UpdateSuperheroDto) {
    const superhero = await this.superheroRepository.findByPk(id);
    if (superhero === null) {
      throw new NotFoundException('Superhero not found');
    }
    const [numberOfAffectedRows, updatedSuperhero] =
      await this.superheroRepository.update(
        { ...updateSuperheroDto, superpowers: [] },
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

  async getTotalCount(): Promise<number> {
    return this.superheroRepository.count();
  }
}
