import { Injectable } from '@nestjs/common';
import { storage } from './storage.service';
import { CreateSuperheroDto } from 'src/superhero/dto';

@Injectable()
export class UploadService {
  async uploadFile(fileBuffer: Buffer, filename: string): Promise<string> {
    const bucket = storage.bucket(process.env.STORAGE_MEDIA_BUCKET);
    const file = bucket.file(filename);

    await file.save(fileBuffer, {
      contentType: 'image/jpeg',
    });

    return `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}/${filename}`;
  }
  async uploadFiles(
    files: Express.Multer.File[],
    superhero: CreateSuperheroDto,
  ): Promise<string[]> {
    const result = await Promise.all(
      files.map((value, index) => {
        return this.uploadFile(value.buffer, superhero.nickname + index);
      }),
    );
    return result;
  }
}
