import { Controller, Get } from '@nestjs/common';
import { SuperpowersService } from './superpowers.service';

@Controller('superpowers')
export class SuperpowersController {
  constructor(private readonly superpowerService: SuperpowersService) {}
  @Get()
  findAll() {
    return this.superpowerService.findAll();
  }
}
