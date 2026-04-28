import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class MeetingRoomSessionEnterRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the host tablet' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Meeting ID to enter' })
  @IsUUID()
  meetingId: string;

  @ApiProperty({ example: true, description: 'Whether AI recording is enabled for this session' })
  @IsBoolean()
  recordingEnabled: boolean;
}
