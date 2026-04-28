import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingsCalendarSuggestionResponseDto {
  @ApiProperty({ example: '2026-05-12T10:00:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-05-12T11:00:00.000Z' })
  @Expose()
  endTime: string;

  @ApiProperty({ example: 0.92, description: 'AI score 0–1 for time slot quality' })
  @Expose()
  score: number;

  @ApiProperty({ type: [String], example: [] })
  @Expose()
  conflictWarnings: string[];
}
