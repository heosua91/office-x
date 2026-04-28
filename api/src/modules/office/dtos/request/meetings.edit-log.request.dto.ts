import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class MeetingsEditLogRequestDto {
  @ApiPropertyOptional({ example: 'Team reviewed Q2 targets and agreed on revised KPIs.' })
  @IsOptional()
  @IsString()
  summaryText?: string;

  @ApiPropertyOptional({ example: '- Follow up on budget approval\n- Share revised deck by Friday' })
  @IsOptional()
  @IsString()
  todoText?: string;

  @ApiPropertyOptional({ example: 'Internal: budget concern raised by CFO.' })
  @IsOptional()
  @IsString()
  internalNotes?: string;
}
