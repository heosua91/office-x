import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminBillingPlanChangeResponseDto {
  @ApiProperty({ example: 'req_c7d8e9f0-a1b2-3456-cdef-789012345678' })
  @Expose()
  requestId: string;

  @ApiProperty({ example: '2026-05-01T00:00:00.000Z' })
  @Expose()
  effectiveDate: string;

  @ApiPropertyOptional({ example: 12500, description: 'Prorated charge/credit in JPY' })
  @Expose()
  proratedAmount?: number;
}
