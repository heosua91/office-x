import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GuestMeetingsAvailabilityQueryDto {
  @ApiProperty({
    example: '2026-04-25T09:00:00.000Z',
    required: false,
    description: 'Start of the availability window (ISO 8601)',
  })
  @IsOptional()
  @IsISO8601()
  from?: string;

  @ApiProperty({
    example: '2026-04-25T18:00:00.000Z',
    required: false,
    description: 'End of the availability window (ISO 8601)',
  })
  @IsOptional()
  @IsISO8601()
  to?: string;

  @ApiProperty({ example: 30, required: false, description: 'Desired meeting duration in minutes' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(15)
  durationMinutes?: number;
}
