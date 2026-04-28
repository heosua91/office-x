import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class AdminLogsOperationQueryDto {
  @ApiPropertyOptional({ example: '2026-04-01T00:00:00.000Z', description: 'Filter start date (ISO 8601)' })
  @IsDateString()
  @IsOptional()
  from?: string;

  @ApiPropertyOptional({ example: '2026-04-25T23:59:59.000Z', description: 'Filter end date (ISO 8601)' })
  @IsDateString()
  @IsOptional()
  to?: string;

  @ApiPropertyOptional({ example: 'meeting_room', description: 'Filter by module name' })
  @IsString()
  @IsOptional()
  module?: string;

  @ApiPropertyOptional({ example: 'create', description: 'Filter by action (create, update, delete)' })
  @IsString()
  @IsOptional()
  action?: string;

  @ApiPropertyOptional({ example: 'usr_admin_001', description: 'Filter by admin user ID' })
  @IsString()
  @IsOptional()
  adminUserId?: string;

  @ApiPropertyOptional({ example: 'tng_admin_001', description: 'Filter by TNG admin ID' })
  @IsString()
  @IsOptional()
  tngAdminId?: string;

  @ApiPropertyOptional({ example: 'room', description: 'Full-text search across module, action, resource' })
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
