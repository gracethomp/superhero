import { Injectable } from '@nestjs/common';
import { Superpower } from './entities';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SuperpowersService {
  constructor(
    @InjectModel(Superpower) private superpowerRepository: typeof Superpower,
  ) {}
  async findAll(): Promise<Superpower[]> {
    return this.superpowerRepository.findAll();
  }
}
