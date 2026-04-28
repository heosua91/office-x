import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class DeviceSessionBindParticipantResponseDto {
  @ApiProperty({ example: 'sess_abc123def456' })
  @Expose()
  deviceSessionId: string;

  @ApiProperty({ example: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890' })
  @Expose()
  participantId: string;

  @ApiProperty({ example: 'ready' })
  @Expose()
  status: 'ready';
}
