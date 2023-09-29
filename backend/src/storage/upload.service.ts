import { Injectable, NotFoundException } from '@nestjs/common';
import { storage } from './storage.service';
import { CreateSuperheroDto, UpdateSuperheroDto } from 'src/superhero/dto';

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
    superhero: CreateSuperheroDto | UpdateSuperheroDto,
  ): Promise<string[]> {
    const result = await Promise.all(
      files.map((value, index) => {
        return this.uploadFile(value.buffer, superhero.nickname + index);
      }),
    );
    return result;
  }

  async deleteFileByUrl(url: string): Promise<void> {
    const bucketName = process.env.STORAGE_MEDIA_BUCKET;
    const fileName = this.extractFileNameFromUrl(url);
    const file = storage.bucket(bucketName).file('/' + fileName);

    try {
      await file.delete();
    } catch (error) {
      throw new NotFoundException('File not found' + error);
    }
  }

  async deleteFilesByUrl(urls: string[]): Promise<void> {
    await Promise.all(
      urls.map(async (value) => {
        return await this.deleteFileByUrl(value);
      }),
    );
  }

  private extractFileNameFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1];
  }
}
