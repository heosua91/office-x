import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminMeetingRoomsImportResponseDto {
  @ApiProperty({ example: 'job_c3d4e5f6a7b8mock' })
  @Expose()
  jobId: string;
}
