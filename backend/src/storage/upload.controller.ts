import {
  Body,
  Controller,
  Delete,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('photo')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPhoto(@UploadedFile() file) {
    const fileUrl = await this.uploadService.uploadFile(
      file.buffer,
      file.originalname,
    );
    return { fileUrl };
  }

  @Delete()
  async deletePhoto(@Body('url') url: string) {
    await this.uploadService.deleteFileByUrl(url);
  }
}
