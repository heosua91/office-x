import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class ScheduleCompanyQueryDto {
  @ApiProperty({ example: '2026-05-01T00:00:00.000Z', description: 'Range start (ISO 8601)' })
  @IsDateString()
  from: string;

  @ApiProperty({ example: '2026-05-07T23:59:59.000Z', description: 'Range end (ISO 8601)' })
  @IsDateString()
  to: string;

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123,e5f6a7b8-c9d0-1234-ef01-345678901234', description: 'Comma-separated room UUIDs to filter' })
  @IsOptional()
  @IsString()
  roomIds?: string;
}
