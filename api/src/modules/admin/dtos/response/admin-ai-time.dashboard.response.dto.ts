import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminAiTimeDashboardBucketResponseDto {
  @ApiProperty({ example: '2026-04-01' })
  @Expose()
  bucket: string;

  @ApiProperty({ example: 'meeting_summary' })
  @Expose()
  featureName: string;

  @ApiProperty({ example: 42, description: 'Total AI minutes in this bucket' })
  @Expose()
  total: number;
}

export class AdminAiTimeDashboardLimitResponseDto {
  @ApiProperty({ example: 'meeting_summary' })
  @Expose()
  featureName: string;

  @ApiProperty({ example: 600 })
  @Expose()
  limitAmount: number;

  @ApiProperty({ example: '2026-05-01T00:00:00.000Z' })
  @Expose()
  resetDate: string;
}

export class AdminAiTimeDashboardTopConsumerResponseDto {
  @ApiProperty({ example: 'John Smith' })
  @Expose()
  fullName: string;

  @ApiProperty({ example: 85, description: 'Total AI minutes consumed' })
  @Expose()
  total: number;
}

export class AdminAiTimeDashboardResponseDto {
  @ApiProperty({ type: [AdminAiTimeDashboardBucketResponseDto] })
  @Expose()
  @Type(() => AdminAiTimeDashboardBucketResponseDto)
  buckets: AdminAiTimeDashboardBucketResponseDto[];

  @ApiProperty({ type: [AdminAiTimeDashboardLimitResponseDto] })
  @Expose()
  @Type(() => AdminAiTimeDashboardLimitResponseDto)
  limits: AdminAiTimeDashboardLimitResponseDto[];

  @ApiProperty({ type: [AdminAiTimeDashboardTopConsumerResponseDto] })
  @Expose()
  @Type(() => AdminAiTimeDashboardTopConsumerResponseDto)
  topConsumers: AdminAiTimeDashboardTopConsumerResponseDto[];
}
