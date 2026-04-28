import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class MeetingRoomPersonalSessionJoinRequestDto {
  @ApiProperty({ example: 'tok_xyz789abc', description: 'Session token from the personal join URL' })
  @IsString()
  sessionToken: string;

  @ApiPropertyOptional({ example: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890', description: 'Participant ID to link (one of participantId or newName required)' })
  @IsOptional()
  @IsUUID()
  participantId?: string;

  @ApiPropertyOptional({ example: 'Jane Smith', description: 'Name for a new guest participant (one of participantId or newName required)' })
  @IsOptional()
  @IsString()
  newName?: string;
}
