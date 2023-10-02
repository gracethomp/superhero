import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroTestModule } from './superhero.module.mock';
import { SuperheroController, SuperheroService } from '../../src/superhero';
import { createHeroMock, heroes } from './superhero-data.mock';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SuperheroTestModule],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should create a new hero', async () => {
    expect(await controller.create([], createHeroMock));
    expect(await service.create(createHeroMock)).toEqual(createHeroMock);
  });

  it('should find all heroes', async () => {
    expect(await controller.findAll(1));
    expect(await service.findAll()).toEqual(heroes);
  });

  it('should find hero by id', async () => {
    expect(await controller.findOne(1));
    expect(await service.findOne(1)).toEqual(heroes[0]);
  });
});
