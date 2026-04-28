import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class MeetingsRegenerateLogRequestDto {
  @ApiPropertyOptional({ example: 'tpl_a1b2c3d4mock' })
  @IsOptional()
  @IsString()
  aiTemplateId?: string;
}
