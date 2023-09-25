import { Module } from '@nestjs/common';
import { SuperheroModule } from './superhero/superhero.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeDevelopmentConfig } from './config';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeDevelopmentConfig),
    SuperheroModule,
  ],
})
export class AppModule {}
