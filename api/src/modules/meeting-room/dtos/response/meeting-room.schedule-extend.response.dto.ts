import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingRoomScheduleExtendResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: '2026-04-25T10:15:00.000Z', description: 'Updated meeting end time after extension' })
  @Expose()
  newEndTime: string;
}
