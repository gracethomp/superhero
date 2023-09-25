import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superhero } from './entities';

@Module({
  imports: [SequelizeModule.forFeature([Superhero])],
  providers: [SuperheroService],
  controllers: [SuperheroController],
})
export class UsersModule {}
