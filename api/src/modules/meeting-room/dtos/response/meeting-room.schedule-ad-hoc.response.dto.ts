import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingRoomScheduleAdHocResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: '2026-04-25T09:05:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-04-25T09:35:00.000Z' })
  @Expose()
  endTime: string;
}
