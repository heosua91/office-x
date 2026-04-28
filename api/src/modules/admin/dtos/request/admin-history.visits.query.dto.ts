import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class AdminHistoryVisitsQueryDto {
  @ApiProperty({ example: '2026-02-01', description: 'Start date (YYYY-MM-DD). Max 3-month window from `to`.' })
  @IsString()
  @IsNotEmpty()
  from: string;

  @ApiProperty({ example: '2026-04-30', description: 'End date (YYYY-MM-DD). Max 3-month window from `from`.' })
  @IsString()
  @IsNotEmpty()
  to: string;

  @ApiPropertyOptional({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Filter by client company ID' })
  @IsOptional()
  @IsString()
  clientCompanyId?: string;

  @ApiPropertyOptional({ example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901', description: 'Filter by host user ID' })
  @IsOptional()
  @IsString()
  hostUserId?: string;

  @ApiPropertyOptional({ example: 'checked_in', description: 'Visit status filter (checked_in | checked_out | no_show)' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ example: 'qr_code', description: 'Check-in method filter (qr_code | facial | manual)' })
  @IsOptional()
  @IsString()
  checkInMethod?: string;

  @ApiPropertyOptional({ example: 'Tanaka', description: 'Free-text search on guest name or company' })
  @IsOptional()
  @IsString()
  q?: string;

  @ApiPropertyOptional({ example: 1, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 20, default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;
}
