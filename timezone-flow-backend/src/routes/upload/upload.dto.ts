import { IsDayjsString } from '@/decorators/dayjs/is-dayjs-string-constraint';

export class UploadDto {
  @IsDayjsString()
  dateString: string;
}

export type UploadDtoType = InstanceType<typeof UploadDto>;
