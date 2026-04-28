import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';

export class MeetingRoomSessionSeatUpdateRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the host tablet' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({
    type: Object,
    example: { A1: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890', B2: 'c3d4e5f6-a7b8-9012-cdef-345678901234' },
    description: 'Map of seatLabel → participantId assignments',
  })
  @IsObject()
  seatAssignments: Record<string, string>;
}
