import { Module, NotFoundException } from '@nestjs/common';
import { SuperheroController, SuperheroService } from '../../src/superhero';
import { MediaService } from '../../src/superhero/media/media.service';
import { UploadService } from '../../src/storage/upload.service';
import { existingId, heroes } from './superhero-data.mock';

export const mockMediaService = {
  findAll: jest.fn(),
  findAllUrls: jest.fn(),
};

export const mockUploadService = {
  uploadFiles: jest.fn(),
  deleteFilesByUrl: jest.fn(),
};

export const mockSuperheroService = {
  findAll: jest.fn().mockResolvedValue(heroes),
  findOne: jest.fn((id: number) => {
    if (id === existingId) {
      return heroes[0];
    } else {
      throw new NotFoundException();
    }
  }),
  create: jest.fn((hero) => hero),
};

@Module({
  controllers: [SuperheroController],
  providers: [
    {
      provide: SuperheroService,
      useValue: mockSuperheroService,
    },
    {
      provide: MediaService,
      useValue: mockMediaService,
    },
    {
      provide: UploadService,
      useValue: mockUploadService,
    },
  ],
})
export class SuperheroTestModule {}
