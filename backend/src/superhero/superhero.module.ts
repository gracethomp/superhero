import { Module } from '@nestjs/common';
import { SuperheroController } from './superhero.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superhero, PowerHero } from './entities';
import { StorageModule } from 'src/storage/storage.module';
import { MediaService } from './media/media.service';
import { SuperheroService } from '.';
import { Media } from './entities/media.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Superhero, PowerHero, Media]),
    StorageModule,
  ],
  controllers: [SuperheroController],
  providers: [SuperheroService, MediaService],
})
export class SuperheroModule {}
