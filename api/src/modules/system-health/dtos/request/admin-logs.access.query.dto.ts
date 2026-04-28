import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export const LOG_ACCESS_STATUS_VALUES = ['success', 'failed', 'blocked'] as const;
export type LogAccessStatus = (typeof LOG_ACCESS_STATUS_VALUES)[number];

export class AdminLogsAccessQueryDto {
  @ApiPropertyOptional({ example: '2026-04-01T00:00:00.000Z', description: 'Filter start date (ISO 8601)' })
  @IsDateString()
  @IsOptional()
  from?: string;

  @ApiPropertyOptional({ example: '2026-04-25T23:59:59.000Z', description: 'Filter end date (ISO 8601)' })
  @IsDateString()
  @IsOptional()
  to?: string;

  @ApiPropertyOptional({ example: 'usr_abc123', description: 'Filter by user ID' })
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiPropertyOptional({ example: 'login', description: 'Filter by action type (e.g. login, screen_access)' })
  @IsString()
  @IsOptional()
  action?: string;

  @ApiPropertyOptional({ enum: LOG_ACCESS_STATUS_VALUES, example: 'success', description: 'Filter by request outcome' })
  @IsIn(LOG_ACCESS_STATUS_VALUES)
  @IsOptional()
  status?: LogAccessStatus;

  @ApiPropertyOptional({ example: '192.168.1.100', description: 'Filter by client IP address' })
  @IsString()
  @IsOptional()
  ipAddress?: string;

  @ApiPropertyOptional({ example: 'john', description: 'Full-text search across name, email, path' })
  @IsString()
  @IsOptional()
  q?: string;

  @ApiPropertyOptional({ example: 1, description: 'Page number (1-based)', default: 1 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number;

  @ApiPropertyOptional({ example: 20, description: 'Items per page', default: 20 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  limit?: number;
}
