import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum TngAnalyticsGranularity {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export class TngAnalyticsUsageQueryDto {
  @ApiProperty({ example: '2026-04-01', description: 'Start date (ISO date, inclusive)' })
  @IsNotEmpty()
  @IsDateString()
  from: string;

  @ApiProperty({ example: '2026-04-30', description: 'End date (ISO date, inclusive)' })
  @IsNotEmpty()
  @IsDateString()
  to: string;

  @ApiPropertyOptional({ enum: TngAnalyticsGranularity, default: TngAnalyticsGranularity.DAY })
  @IsOptional()
  @IsEnum(TngAnalyticsGranularity)
  granularity?: TngAnalyticsGranularity;

  @ApiPropertyOptional({ example: 'acme', description: 'Filter by company name keyword' })
  @IsOptional()
  @IsString()
  companyKeyword?: string;
}
