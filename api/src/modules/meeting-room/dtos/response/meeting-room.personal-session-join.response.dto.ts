import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingRoomPersonalSessionJoinResponseDto {
  @ApiProperty({ example: 'sess_personal_xyz789' })
  @Expose()
  deviceSessionId: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890' })
  @Expose()
  participantId: string;

  @ApiProperty({ example: 'linked' })
  @Expose()
  status: 'linked';
}
