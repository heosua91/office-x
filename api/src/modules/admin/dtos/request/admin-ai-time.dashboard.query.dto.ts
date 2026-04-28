import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum AdminAiTimeDashboardGranularity {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export class AdminAiTimeDashboardQueryDto {
  @ApiProperty({ example: '2026-04-01', description: 'Start date (YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  from: string;

  @ApiProperty({ example: '2026-04-30', description: 'End date (YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  to: string;

  @ApiPropertyOptional({ enum: AdminAiTimeDashboardGranularity, example: AdminAiTimeDashboardGranularity.DAY })
  @IsOptional()
  @IsEnum(AdminAiTimeDashboardGranularity)
  granularity?: AdminAiTimeDashboardGranularity;
}
