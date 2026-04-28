import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AdminAiTemplateTestRequestDto {
  @ApiProperty({ example: 'Please summarize the following meeting transcript in bullet points: {{transcript}}' })
  @IsString()
  @IsNotEmpty()
  promptText: string;

  @ApiPropertyOptional({ example: 'bullet_points' })
  @IsOptional()
  @IsString()
  outputFormat?: string;

  @ApiProperty({ example: 'Attendees: Alice, Bob. Discussed Q2 roadmap and budget allocation for engineering. Alice agreed to send the revised proposal by Friday.' })
  @IsString()
  @IsNotEmpty()
  sampleTranscript: string;
}
