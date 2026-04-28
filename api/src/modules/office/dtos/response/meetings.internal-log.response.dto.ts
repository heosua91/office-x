import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class MeetingsTranscriptSegmentResponseDto {
  @ApiProperty({ example: 'seg_b2c3d4e5f6a7mock' })
  @Expose()
  id: string;

  @ApiProperty({ example: 0 })
  @Expose()
  startTimeMs: number;

  @ApiProperty({ example: 15200 })
  @Expose()
  endTimeMs: number;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  speakerName: string;

  @ApiProperty({ example: 'Let us review the Q2 targets.' })
  @Expose()
  textContent: string;
}

export class MeetingsInternalLogResponseDto {
  @ApiProperty({ example: 'g7h8i9j0-k1l2-3456-m789-012345678901' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'e5f6a7b8-c9d0-1234-ef01-345678901234' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: 'Full transcript text here...' })
  @Expose()
  transcriptText: string;

  @ApiProperty({ type: [MeetingsTranscriptSegmentResponseDto] })
  @Expose()
  @Type(() => MeetingsTranscriptSegmentResponseDto)
  segments: MeetingsTranscriptSegmentResponseDto[];

  @ApiPropertyOptional({ example: 'Team reviewed Q2 targets and agreed on revised KPIs.' })
  @Expose()
  summaryText?: string;

  @ApiPropertyOptional({ example: '- Follow up on budget approval\n- Share revised deck by Friday' })
  @Expose()
  todoText?: string;

  @ApiProperty({ example: 'completed', enum: ['processing', 'completed', 'failed'] })
  @Expose()
  status: string;
}
