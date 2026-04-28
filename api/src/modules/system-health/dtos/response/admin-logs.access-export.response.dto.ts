import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminLogsAccessExportResponseDto {
  @ApiProperty({ example: 'https://storage.officex.app/exports/access-logs-2026-04-25.csv?token=signed_url_mock', description: 'Pre-signed download URL for the CSV export' })
  @Expose()
  downloadUrl: string;
}
