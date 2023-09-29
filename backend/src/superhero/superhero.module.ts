import { Module } from '@nestjs/common';
import { SuperheroController } from './superhero.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superhero, PowerHero } from './entities';
import { MediaService } from './media/media.service';
import { SuperheroService } from '.';
import { Media } from './media/entity/media.entity';
import { UploadService } from 'src/storage/upload.service';

@Module({
  imports: [SequelizeModule.forFeature([Superhero, PowerHero, Media])],
  controllers: [SuperheroController],
  providers: [SuperheroService, MediaService, UploadService],
})
export class SuperheroModule {}
