import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsDateString, IsInt, IsObject, IsOptional, IsUUID, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CalendarSuggestionsDateRangeDto {
  @ApiProperty({ example: '2026-05-01T00:00:00.000Z' })
  @IsDateString()
  from: string;

  @ApiProperty({ example: '2026-05-31T23:59:59.000Z' })
  @IsDateString()
  to: string;
}

export class MeetingsCalendarSuggestionsRequestDto {
  @ApiProperty({ type: [String], example: ['c3d4e5f6-a7b8-9012-cdef-123456789012'] })
  @IsArray()
  @IsUUID('4', { each: true })
  participantIds: string[];

  @ApiProperty({ example: 60 })
  @IsInt()
  @Min(15)
  durationMinutes: number;

  @ApiProperty({ type: () => CalendarSuggestionsDateRangeDto })
  @IsObject()
  @ValidateNested()
  @Type(() => CalendarSuggestionsDateRangeDto)
  preferredDateRange: CalendarSuggestionsDateRangeDto;

  @ApiPropertyOptional({ example: 6, description: 'Minimum room capacity required' })
  @IsOptional()
  @IsInt()
  @Min(1)
  requiredRoomCapacity?: number;
}
