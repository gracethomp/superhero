import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Superhero } from './entities';

@Injectable()
export class SuperheroService {
  constructor(
    @InjectModel(Superhero) private superheroRepository: typeof Superhero,
  ) {}
}
