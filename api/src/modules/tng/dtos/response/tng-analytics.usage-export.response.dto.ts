import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TngAnalyticsUsageExportResponseDto {
  @ApiProperty({ example: 'https://storage.officex.jp/exports/ai-usage-2026-04.csv?token=abc123' })
  @Expose()
  downloadUrl: string;
}
