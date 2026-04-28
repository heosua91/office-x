import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { MeetingsTranscriptSegmentResponseDto } from './meetings.internal-log.response.dto';

export class ClientsActionItemResponseDto {
  @ApiProperty({ example: 'm3n4o5p6-q7r8-9012-s345-678901234567' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Send revised pricing proposal' })
  @Expose()
  content: string;

  @ApiProperty({ example: 'pending', enum: ['pending', 'in_progress', 'completed', 'cancelled'] })
  @Expose()
  status: string;

  @ApiPropertyOptional({ example: '2026-05-01T00:00:00.000Z' })
  @Expose()
  dueDate?: string;

  @ApiPropertyOptional({ example: 'Nguyen Van A' })
  @Expose()
  assigneeName?: string;
}

export class ClientsVisitLogResponseDto {
  @ApiProperty({ example: 'k1l2m3n4-o5p6-7890-q123-456789012345' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'i9j0k1l2-m3n4-5678-o901-234567890123' })
  @Expose()
  clientId: string;

  @ApiProperty({ example: '2026-04-20T10:00:00.000Z' })
  @Expose()
  visitDate: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  hostName: string;

  @ApiPropertyOptional({ example: 'Full transcript text of the meeting...' })
  @Expose()
  transcriptText?: string;

  @ApiProperty({ type: [MeetingsTranscriptSegmentResponseDto] })
  @Expose()
  @Type(() => MeetingsTranscriptSegmentResponseDto)
  segments: MeetingsTranscriptSegmentResponseDto[];

  @ApiPropertyOptional({ example: 'Discussed Q2 product roadmap and pricing adjustments.' })
  @Expose()
  summary?: string;

  @ApiProperty({ type: [ClientsActionItemResponseDto] })
  @Expose()
  @Type(() => ClientsActionItemResponseDto)
  actionItems: ClientsActionItemResponseDto[];
}
