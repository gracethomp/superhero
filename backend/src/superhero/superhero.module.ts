import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superhero, PowerHero } from './entities';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [SequelizeModule.forFeature([Superhero, PowerHero]), StorageModule],
  controllers: [SuperheroController],
  providers: [SuperheroService],
})
export class SuperheroModule {}
