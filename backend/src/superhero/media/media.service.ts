import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Media } from 'src/superhero/entities/media.entity';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private mediaRepository: typeof Media) {}
  async findAll(id: number): Promise<Media[]> {
    return this.mediaRepository.findAll({
      order: [['id', 'ASC']],
      where: {
        superhero_id: id,
      },
    });
  }
  async findFirst(id: number): Promise<Media[]> {
    return this.mediaRepository.findAll({
      where: {
        id: 1,
        superhero_id: id,
      },
      limit: 1,
    });
  }
  async create(id: number, mediaId: string): Promise<Media> {
    return this.mediaRepository.create({
      superhero_id: id,
      mediaId: mediaId,
    });
  }
}
