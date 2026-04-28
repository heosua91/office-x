import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingsRegenerateLogResponseDto {
  @ApiProperty({ example: 'job_a1b2c3d4e5f6mock' })
  @Expose()
  jobId: string;
}
