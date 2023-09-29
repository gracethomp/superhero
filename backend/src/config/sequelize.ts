import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Superhero, PowerHero } from 'src/superhero';
import { Media } from 'src/superhero/media/entity/media.entity';
import { Superpower } from 'src/superpowers';

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
