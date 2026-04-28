import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ScheduleRoomSlotResponseDto {
  @ApiProperty({ example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: 'Q2 Strategy Sync' })
  @Expose()
  title: string;

  @ApiProperty({ example: '2026-05-10T09:00:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-05-10T10:00:00.000Z' })
  @Expose()
  endTime: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  hostName: string;

  @ApiProperty({ example: 'confirmed', enum: ['confirmed', 'pending', 'cancelled'] })
  @Expose()
  status: string;
}

export class ScheduleRoomResponseDto {
  @ApiProperty({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  roomId: string;

  @ApiProperty({ example: 'Room A - 3F' })
  @Expose()
  name: string;

  @ApiProperty({ example: 10 })
  @Expose()
  capacity: number;

  @ApiPropertyOptional({ example: '3rd Floor, Building B' })
  @Expose()
  location?: string;

  @ApiProperty({ type: [ScheduleRoomSlotResponseDto] })
  @Expose()
  @Type(() => ScheduleRoomSlotResponseDto)
  slots: ScheduleRoomSlotResponseDto[];
}

export class ScheduleCompanyResponseDto {
  @ApiProperty({ type: [ScheduleRoomResponseDto] })
  @Expose()
  @Type(() => ScheduleRoomResponseDto)
  rooms: ScheduleRoomResponseDto[];

  @ApiProperty({ example: '2026-04-25T10:00:00.000Z' })
  @Expose()
  generatedAt: string;
}
