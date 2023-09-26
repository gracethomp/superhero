import { Module } from '@nestjs/common';
import { SuperpowersService } from './superpowers.service';
import { SuperpowersController } from './superpowers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superpower } from './entities';

@Module({
  imports: [SequelizeModule.forFeature([Superpower])],
  providers: [SuperpowersService],
  controllers: [SuperpowersController],
})
export class SuperpowersModule {}
