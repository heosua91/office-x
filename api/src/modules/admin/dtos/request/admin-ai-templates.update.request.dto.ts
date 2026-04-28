import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export enum AdminAiTemplateUpdateType {
  SUMMARY = 'summary',
  THANK_YOU_EMAIL = 'thank_you_email',
}

export enum AdminAiTemplateUpdateScope {
  INTERNAL = 'internal',
  CLIENT = 'client',
}

export class AdminAiTemplateUpdateRequestDto {
  @ApiPropertyOptional({ example: 'Executive Summary Template v2' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ enum: AdminAiTemplateUpdateType, example: AdminAiTemplateUpdateType.SUMMARY })
  @IsOptional()
  @IsEnum(AdminAiTemplateUpdateType)
  type?: AdminAiTemplateUpdateType;

  @ApiPropertyOptional({ enum: AdminAiTemplateUpdateScope, example: AdminAiTemplateUpdateScope.INTERNAL })
  @IsOptional()
  @IsEnum(AdminAiTemplateUpdateScope)
  scope?: AdminAiTemplateUpdateScope;

  @ApiPropertyOptional({ example: 'Summarize in 3 bullet points: {{transcript}}' })
  @IsOptional()
  @IsString()
  promptText?: string;

  @ApiPropertyOptional({ example: 'numbered_list' })
  @IsOptional()
  @IsString()
  outputFormat?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
