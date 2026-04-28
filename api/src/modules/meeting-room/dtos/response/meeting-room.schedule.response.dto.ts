import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class MeetingRoomRoomInfoDto {
  @ApiProperty({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Horizon Room' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: '3rd Floor, East Wing' })
  @Expose()
  location?: string;
}

export class MeetingRoomMeetingInfoDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Q2 Planning Sync' })
  @Expose()
  title: string;

  @ApiProperty({ example: '2026-04-25T09:00:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-04-25T10:00:00.000Z' })
  @Expose()
  endTime: string;

  @ApiProperty({ example: 'Alice Johnson' })
  @Expose()
  hostName: string;

  @ApiProperty({ example: 'ongoing', description: 'Meeting status (e.g. scheduled, ongoing, completed)' })
  @Expose()
  status: string;
}

export class MeetingRoomScheduleItemDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Q2 Planning Sync' })
  @Expose()
  title: string;

  @ApiProperty({ example: '2026-04-25T09:00:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-04-25T10:00:00.000Z' })
  @Expose()
  endTime: string;

  @ApiProperty({ example: 'scheduled' })
  @Expose()
  status: string;

  @ApiProperty({ example: 'Alice Johnson' })
  @Expose()
  hostName: string;
}

export class MeetingRoomPersonalJoinDto {
  @ApiProperty({ example: 'https://app.officex.io/join?token=tok_xyz789abc' })
  @Expose()
  url: string;

  @ApiProperty({ example: 'https://storage.officex.io/qr/tok_xyz789abc.png' })
  @Expose()
  qrImageUrl: string;

  @ApiProperty({ example: 'SES-88XY' })
  @Expose()
  sessionCode: string;

  @ApiProperty({ example: '2026-04-25T09:30:00.000Z' })
  @Expose()
  expiresAt: string;

  @ApiProperty({ example: '2026-04-25T08:45:00.000Z', description: 'Earliest time personal devices may join' })
  @Expose()
  joinWindowStartAt: string;
}

export class MeetingRoomScheduleResponseDto {
  @ApiProperty({ type: MeetingRoomRoomInfoDto })
  @Expose()
  @Type(() => MeetingRoomRoomInfoDto)
  room: MeetingRoomRoomInfoDto;

  @ApiPropertyOptional({ type: MeetingRoomMeetingInfoDto, description: 'Currently active meeting, if any' })
  @Expose()
  @Type(() => MeetingRoomMeetingInfoDto)
  currentMeeting?: MeetingRoomMeetingInfoDto;

  @ApiPropertyOptional({ type: MeetingRoomMeetingInfoDto, description: 'Next scheduled meeting, if any' })
  @Expose()
  @Type(() => MeetingRoomMeetingInfoDto)
  nextMeeting?: MeetingRoomMeetingInfoDto;

  @ApiProperty({ type: [MeetingRoomScheduleItemDto], description: "Today's full schedule for this room" })
  @Expose()
  @Type(() => MeetingRoomScheduleItemDto)
  todaysSchedule: MeetingRoomScheduleItemDto[];

  @ApiPropertyOptional({ type: MeetingRoomPersonalJoinDto, description: 'Personal-device join info (parent device only)' })
  @Expose()
  @Type(() => MeetingRoomPersonalJoinDto)
  personalJoin?: MeetingRoomPersonalJoinDto;
}
