import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

export enum LogVisibilityScope {
  PARTICIPANTS = 'participants',
  DEPARTMENT = 'department',
  COMPANY = 'company',
}

export class MeetingsUpdateInternalLogRequestDto {
  @ApiPropertyOptional({ example: 'fdr_a1b2c3d4mock' })
  @IsOptional()
  @IsString()
  folderId?: string;

  @ApiPropertyOptional({ type: [String], example: ['q2-review', 'strategy'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({ enum: LogVisibilityScope, example: LogVisibilityScope.PARTICIPANTS })
  @IsOptional()
  @IsEnum(LogVisibilityScope)
  visibilityScope?: LogVisibilityScope;
}
