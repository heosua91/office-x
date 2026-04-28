import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingRoomSessionEnterResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: 'ongoing' })
  @Expose()
  status: 'ongoing';

  @ApiProperty({ example: '2026-04-25T09:02:00.000Z' })
  @Expose()
  startedAt: string;

  @ApiProperty({ example: true })
  @Expose()
  recordingEnabled: boolean;
}
