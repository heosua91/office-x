import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsDateString, IsInt, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class MeetingsInternalBookingRequestDto {
  @ApiProperty({ example: 'Q2 Strategy Sync' })
  @IsString()
  meetingName: string;

  @ApiPropertyOptional({ example: 'fdr_a1b2c3d4mock' })
  @IsOptional()
  @IsString()
  folderId?: string;

  @ApiProperty({ type: [String], example: ['c3d4e5f6-a7b8-9012-cdef-123456789012'] })
  @IsArray()
  @IsUUID('4', { each: true })
  participantIds: string[];

  @ApiProperty({ example: '2026-05-10T09:00:00.000Z' })
  @IsDateString()
  startTime: string;

  @ApiProperty({ example: '2026-05-10T10:00:00.000Z' })
  @IsDateString()
  endTime: string;

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @IsOptional()
  @IsUUID()
  roomId?: string;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsInt()
  @Min(0)
  autoCancelMinutes?: number;

  @ApiPropertyOptional({ example: 'tpl_a1b2c3d4mock' })
  @IsOptional()
  @IsString()
  aiTemplateId?: string;

  @ApiPropertyOptional({ type: [String], example: ['mat_b2c3d4e5mock'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  uploadedMaterialIds?: string[];
}
