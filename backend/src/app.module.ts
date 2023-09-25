import { Module } from '@nestjs/common';
import { UsersModule } from './superhero/superhero.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeDevelopmentConfig } from './config';

@Module({
  imports: [SequelizeModule.forRoot(sequelizeDevelopmentConfig), UsersModule],
})
export class AppModule {}
