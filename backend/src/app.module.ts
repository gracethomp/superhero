import { Module } from '@nestjs/common';
import { SuperheroModule } from './superhero/superhero.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeDevelopmentConfig } from './config';
import { SuperpowersModule } from './superpowers/superpowers.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeDevelopmentConfig),
    SuperheroModule,
    SuperpowersModule,
  ],
})
export class AppModule {}
