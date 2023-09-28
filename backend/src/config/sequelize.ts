import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Media } from 'src/media/entity/media.entity';
import { Superhero, PowerHero } from 'src/superhero';
import { Superpower } from 'src/superpowers';

export const sequelizeDevelopmentConfig: SequelizeModuleOptions = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
  host: 'db',
  dialect: 'postgres',
  autoLoadModels: true,
  sync: { force: true },
  models: [Superhero, Superpower, PowerHero, Media],
};
