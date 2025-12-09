import { IsString } from 'class-validator';

export class UploadDto {
  @IsString()
  dateString: string;
}

export type UploadDtoType = InstanceType<typeof UploadDto>;
