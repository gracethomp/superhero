import { Module } from '@nestjs/common';
import { StorageModule } from 'src/storage/storage.module';
import { MediaController } from './media.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Media } from './entity/media.entity';
import { MediaService } from './media.service';

@Module({
  imports: [StorageModule, SequelizeModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
