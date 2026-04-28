import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ClientsImportResponseDto {
  @ApiProperty({ example: 'job_import_c1d2e3f4mock' })
  @Expose()
  jobId: string;
}
