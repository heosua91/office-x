import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class MeetingRoomSessionFinishRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the host tablet' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Meeting ID to terminate' })
  @IsUUID()
  meetingId: string;

  @ApiPropertyOptional({ example: 'Meeting concluded early', description: 'Optional reason for ending the session' })
  @IsOptional()
  @IsString()
  reason?: string;
}
