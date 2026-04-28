import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class MeetingsTimelineItemResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Q2 Strategy Sync' })
  @Expose()
  title: string;

  @ApiProperty({ example: '2026-05-10T09:00:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-05-10T10:00:00.000Z' })
  @Expose()
  endTime: string;

  @ApiProperty({ example: 'confirmed' })
  @Expose()
  status: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  hostName: string;

  @ApiPropertyOptional({ example: 'Room A - 3F' })
  @Expose()
  roomName?: string;

  @ApiPropertyOptional({ example: 'Acme Corp' })
  @Expose()
  clientName?: string;

  @ApiProperty({ example: true })
  @Expose()
  isInternal: boolean;
}

export class MeetingsTimelineResponseDto {
  @ApiProperty({ type: [MeetingsTimelineItemResponseDto] })
  @Expose()
  @Type(() => MeetingsTimelineItemResponseDto)
  items: MeetingsTimelineItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 42 })
  @Expose()
  total: number;
}
