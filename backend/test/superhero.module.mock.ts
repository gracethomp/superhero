import { Module } from '@nestjs/common';
import { SuperheroController, SuperheroService } from '../src/superhero';
import { MediaService } from '../src/superhero/media/media.service';
import { UploadService } from '../src/storage/upload.service';
import { existingId, heroes } from './superhero-data.mock';

const mockMediaService = {
  findAll: jest.fn(),
};

const mockUploadService = {
  uploadFiles: jest.fn(),
  deleteFilesByUrl: jest.fn(),
};

const mockSuperheroService = {
  findAll: jest.fn().mockResolvedValue(heroes),
  findOne: jest.fn((id: number) => (id === existingId ? heroes[0] : null)),
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
