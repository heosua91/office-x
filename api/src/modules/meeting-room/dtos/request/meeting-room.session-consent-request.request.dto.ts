import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class MeetingRoomSessionConsentRequestRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the host tablet' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Meeting ID for which consent is being requested' })
  @IsUUID()
  meetingId: string;
}
