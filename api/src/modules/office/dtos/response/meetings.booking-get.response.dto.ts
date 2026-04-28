import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class MeetingsBookingParticipantResponseDto {
  @ApiPropertyOptional({ example: 'c3d4e5f6-a7b8-9012-cdef-123456789012' })
  @Expose()
  userId?: string;

  @ApiPropertyOptional({ example: 'guest_d4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  guestId?: string;

  @ApiProperty({ example: 'Tran Thi B' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'attendee' })
  @Expose()
  role: string;

  @ApiProperty({ example: 'accepted' })
  @Expose()
  rsvpStatus: string;
}

export class MeetingsBookingGetResponseDto {
  @ApiProperty({ example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901' })
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

  @ApiProperty({ example: 'c3d4e5f6-a7b8-9012-cdef-123456789012' })
  @Expose()
  hostUserId: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  hostName: string;

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  meetingRoomId?: string;

  @ApiPropertyOptional({ example: 'Room A - 3F' })
  @Expose()
  roomName?: string;

  @ApiProperty({ example: 'confirmed' })
  @Expose()
  status: string;

  @ApiProperty({ example: 'online' })
  @Expose()
  format: string;

  @ApiProperty({ type: [MeetingsBookingParticipantResponseDto] })
  @Expose()
  @Type(() => MeetingsBookingParticipantResponseDto)
  participants: MeetingsBookingParticipantResponseDto[];

  @ApiProperty({ example: false })
  @Expose()
  isConfidential: boolean;

  @ApiPropertyOptional({ example: 10 })
  @Expose()
  autoCancelMinutes?: number;
}
