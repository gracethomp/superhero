import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SuperheroTestModule } from './superhero.module.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SuperheroTestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/superhero (GET) should return an array of superheroes', () => {
    return request(app.getHttpServer())
      .get('/superhero')
      .expect(200)
      .expect((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/superhero/:id (GET) should return a superhero by ID', () => {
    const superheroId = 1;
    return request(app.getHttpServer())
      .get(`/superhero/${superheroId}`)
      .expect(200)
      .expect((response) => {
        expect(response.body.id).toBe(superheroId);
      });
  });
});
