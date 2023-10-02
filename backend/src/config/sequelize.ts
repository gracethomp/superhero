import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Superhero, PowerHero } from '../superhero';
import { Media } from '../superhero/media/entity/media.entity';
import { Superpower } from '../superpowers';

export const sequelizeDevelopmentConfig: SequelizeModuleOptions = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
  host: 'db',
  dialect: 'postgres',
  autoLoadModels: true,
  // sync: { force: true },
  models: [Superhero, Superpower, PowerHero, Media],
};
