import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingRoomSessionFinishResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: 'completed' })
  @Expose()
  status: 'completed';

  @ApiProperty({ example: '2026-04-25T10:00:00.000Z' })
  @Expose()
  endedAt: string;
}
