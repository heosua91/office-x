import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PublicSystemStatusResponseDto {
  @ApiProperty({ example: false, description: 'Whether maintenance mode is currently active' })
  @Expose()
  active: boolean;

  @ApiPropertyOptional({ example: '2026-04-25T06:00:00.000Z', description: 'Scheduled end time of maintenance window (ISO 8601)' })
  @Expose()
  endTime?: string;

  @ApiPropertyOptional({ example: 'Scheduled maintenance for database upgrade. Back at 06:00 UTC.', description: 'Human-readable maintenance message' })
  @Expose()
  message?: string;
}
