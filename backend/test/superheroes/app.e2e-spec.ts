import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { SuperheroTestModule } from './superhero.module.mock';
import { createHeroMock, nonExistingId } from './superhero-data.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SuperheroTestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
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
  describe('/:id (GET)', () => {
    it('/superhero/:id (GET) should return a superhero by ID', () => {
      const superheroId = 1;
      return request(app.getHttpServer())
        .get(`/superhero/${superheroId}`)
        .expect(200)
        .expect((response) => {
          expect(response.body.id).toBe(superheroId);
        });
    });
    it('should return 404 when trying to find hero by non existing id', () => {
      return request(app.getHttpServer())
        .get(`/superhero/${nonExistingId}`)
        .expect(HttpStatus.NOT_FOUND);
    });
  });

  describe('/ (POST)', () => {
    it('should create new hero', () => {
      return request(app.getHttpServer())
        .post(`/superhero`)
        .send(createHeroMock)
        .expect(HttpStatus.CREATED)
        .expect(createHeroMock);
    });

    it('should return 400 when trying to create invalid hero', () => {
      return request(app.getHttpServer())
        .post(`/superhero/`)
        .send({})
        .expect(HttpStatus.BAD_REQUEST);
    });
  });
});
