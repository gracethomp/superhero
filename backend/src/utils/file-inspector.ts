import { BadRequestException } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const MAX_FILE_SIZE = 1024 * 1024;

const fileFilter = (req, file, callback) => {
  const fileExtname = extname(file.originalname).toLowerCase();
  if (ALLOWED_EXTENSIONS.includes(fileExtname)) {
    return callback(null, true);
  } else {
    return callback(
      new BadRequestException('wrong type. only images allowed'),
      false,
    );
  }
};

export const createFilesInterceptor = (field: string, maxCount: number) =>
  FilesInterceptor(field, maxCount, {
    limits: {
      fileSize: MAX_FILE_SIZE,
    },
    fileFilter,
  });
