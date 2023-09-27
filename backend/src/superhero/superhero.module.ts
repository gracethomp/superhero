import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superhero, PowerHero } from './entities';

@Module({
  imports: [SequelizeModule.forFeature([Superhero, PowerHero])],
  controllers: [SuperheroController],
  providers: [SuperheroService],
})
export class SuperheroModule {}
