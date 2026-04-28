import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID, Min } from 'class-validator';

export class MeetingRoomScheduleExtendRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the linked tablet' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Active meeting ID to extend' })
  @IsUUID()
  meetingId: string;

  @ApiProperty({ example: 15, description: 'Number of minutes to extend (typically 15 min per press)' })
  @IsInt()
  @Min(1)
  extensionMinutes: number;
}
