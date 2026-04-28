import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class DeviceSessionBindParticipantRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890', description: 'Participant ID to bind (claim profile)' })
  @IsUUID()
  participantId: string;
}
