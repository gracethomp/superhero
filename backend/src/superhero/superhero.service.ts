import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PowerHero, Superhero } from './entities';
import { CreateSuperheroDto, UpdateSuperheroDto } from './dto';
import { Sequelize } from 'sequelize-typescript';
import { Superpower } from 'src/superpowers';
import { mapSuperhero } from 'src/utils';
import { Media } from './media/entity/media.entity';

@Injectable()
export class SuperheroService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(Superhero) private superheroRepository: typeof Superhero,
    @InjectModel(PowerHero) private powerHeroRepository: typeof PowerHero,
    @InjectModel(Media) private mediaRepository: typeof Media,
  ) {}
  private readonly logger = new Logger(SuperheroService.name);

  async findAll(page: number = 1): Promise<Superhero[]> {
    return this.superheroRepository.findAll({
      order: [['id', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
    });
  }

  async findOne(id: number) {
    const superhero = await this.superheroRepository.findByPk(id, {
      include: [{ model: Superpower }],
    });
    if (superhero === null) {
      throw new NotFoundException('Superhero not found');
    }
    return mapSuperhero(superhero);
  }

  async create(createSuperheroDto: CreateSuperheroDto) {
    const { superpowers, mediaIds } = createSuperheroDto;
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
                  superpower_id: parseInt(superpowerId),
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
        await Promise.all(
          mediaIds.map(async (mediaId) => {
            await this.mediaRepository.create(
              {
                superhero_id: createdSuperhero.id,
                mediaId: mediaId,
              },
              transactionHost,
            );
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
    const { superpowers, mediaIds } = updateSuperheroDto;
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };
        const [numberOfAffectedRows, updatedSuperhero] =
          await this.superheroRepository.update(
            { ...updateSuperheroDto, superpowers: [] },
            { where: { id }, returning: true },
          );
        if (superpowers) {
          await Promise.all(
            superpowers.map(async (superpowerId) => {
              const powerHero = await this.powerHeroRepository.findAll({
                where: {
                  superhero_id: id,
                  superpower_id: superpowerId,
                },
              });
              if (powerHero.length === 0) {
                try {
                  await this.powerHeroRepository.create(
                    {
                      superhero_id: id,
                      superpower_id: parseInt(superpowerId),
                    },
                    transactionHost,
                  );
                } catch (err) {
                  throw new NotFoundException(
                    superpowerId + ' superpower not found',
                  );
                }
              }
            }),
          );
        }
        await Promise.all(
          mediaIds.map(async (mediaId) => {
            await this.mediaRepository.create(
              {
                superhero_id: id,
                mediaId: mediaId,
              },
              transactionHost,
            );
          }),
        );
        if (numberOfAffectedRows > 0) {
          this.logger.log(`Superhero ${id} updated`);
        }
        return updatedSuperhero;
      });
    } catch (err) {
      throw err;
    }
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
