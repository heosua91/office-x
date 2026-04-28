import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class MeetingRoomScheduleAdHocRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the linked tablet' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'Ad-hoc Sync', description: 'Meeting title' })
  @IsString()
  title: string;

  @ApiProperty({ example: 30, description: 'Duration in minutes' })
  @IsInt()
  @Min(1)
  durationMinutes: number;

  @ApiProperty({
    type: [String],
    example: ['f1a2b3c4-d5e6-7890-abcd-ef1234567890'],
    description: 'List of participant IDs to invite',
  })
  @IsArray()
  @IsUUID('all', { each: true })
  participantIds: string[];

  @ApiPropertyOptional({ example: 'c1d2e3f4-a5b6-7890-cdef-012345678901', description: 'Client company ID for external meetings' })
  @IsOptional()
  @IsUUID()
  clientCompanyId?: string;
}
