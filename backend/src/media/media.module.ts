import { Module } from '@nestjs/common';
import { StorageModule } from 'src/storage/storage.module';
import { MediaController } from './media.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Media } from './entity/media.entity';

@Module({
  imports: [StorageModule, SequelizeModule.forFeature([Media])],
  controllers: [MediaController],
})
export class MediaModule {}
