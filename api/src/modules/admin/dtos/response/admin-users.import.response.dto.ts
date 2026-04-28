import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminUsersImportResponseDto {
  @ApiProperty({ example: 'job_b2c3d4e5f6a7mock' })
  @Expose()
  jobId: string;
}
