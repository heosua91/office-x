import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngAnalyticsBucketDto {
  @ApiProperty({ example: '2026-04-01' })
  @Expose()
  bucket: string;

  @ApiProperty({ example: 1420 })
  @Expose()
  totalMinutes: number;
}

export class TngAnalyticsTopCompanyDto {
  @ApiProperty({ example: 'c1d2e3f4-a5b6-7890-cdef-123456789012' })
  @Expose()
  companyId: string;

  @ApiProperty({ example: 'Acme Corporation' })
  @Expose()
  companyName: string;

  @ApiProperty({ example: 312 })
  @Expose()
  totalMinutes: number;

  @ApiProperty({ example: 'Enterprise' })
  @Expose()
  planName: string;
}

export class TngAnalyticsSummaryDto {
  @ApiProperty({ example: 42 })
  @Expose()
  totalCompanies: number;

  @ApiProperty({ example: 18540 })
  @Expose()
  totalMinutes: number;

  @ApiProperty({ example: 860 })
  @Expose()
  totalOverage: number;
}

export class TngAnalyticsUsageResponseDto {
  @ApiProperty({ type: [TngAnalyticsBucketDto] })
  @Expose()
  @Type(() => TngAnalyticsBucketDto)
  buckets: TngAnalyticsBucketDto[];

  @ApiProperty({ type: [TngAnalyticsTopCompanyDto] })
  @Expose()
  @Type(() => TngAnalyticsTopCompanyDto)
  topCompanies: TngAnalyticsTopCompanyDto[];

  @ApiProperty({ type: TngAnalyticsSummaryDto })
  @Expose()
  @Type(() => TngAnalyticsSummaryDto)
  summary: TngAnalyticsSummaryDto;
}
