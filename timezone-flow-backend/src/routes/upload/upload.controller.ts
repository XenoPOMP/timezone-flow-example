import { Body, Controller } from '@nestjs/common';
import dayjs from 'dayjs';

import { Endpoint } from '@/decorators/endpoint';
import { UploadDto, UploadDtoType } from '@/routes/upload/upload.dto';

import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Endpoint('POST', '/', {
    validate: true,
  })
  upload(@Body() dto: UploadDto): UploadDtoType {
    const date = dayjs(dto.dateString);
    return {
      dateString: date.format(),
    };
  }
}
