import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminAiTemplateDetailResponseDto {
  @ApiProperty({ example: 'b3c4d5e6-f7a8-9012-bcde-f12345678901' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Executive Summary Template' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'summary' })
  @Expose()
  type: string;

  @ApiPropertyOptional({ example: 'internal' })
  @Expose()
  scope?: string;

  @ApiProperty({ example: 'Please summarize the following meeting transcript in bullet points: {{transcript}}' })
  @Expose()
  promptText: string;

  @ApiPropertyOptional({ example: 'bullet_points' })
  @Expose()
  outputFormat?: string;

  @ApiProperty({ example: false })
  @Expose()
  isDefault: boolean;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: '2026-03-15T08:00:00.000Z' })
  @Expose()
  createdAt: string;

  @ApiProperty({ example: '2026-04-20T10:30:00.000Z' })
  @Expose()
  updatedAt: string;
}
