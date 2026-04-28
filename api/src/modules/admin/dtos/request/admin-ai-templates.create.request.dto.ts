import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export enum AdminAiTemplateCreateType {
  SUMMARY = 'summary',
  THANK_YOU_EMAIL = 'thank_you_email',
}

export enum AdminAiTemplateCreateScope {
  INTERNAL = 'internal',
  CLIENT = 'client',
}

export class AdminAiTemplateCreateRequestDto {
  @ApiProperty({ example: 'Executive Summary Template' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: AdminAiTemplateCreateType, example: AdminAiTemplateCreateType.SUMMARY })
  @IsEnum(AdminAiTemplateCreateType)
  type: AdminAiTemplateCreateType;

  @ApiPropertyOptional({ enum: AdminAiTemplateCreateScope, example: AdminAiTemplateCreateScope.INTERNAL })
  @IsOptional()
  @IsEnum(AdminAiTemplateCreateScope)
  scope?: AdminAiTemplateCreateScope;

  @ApiProperty({ example: 'Please summarize the following meeting transcript in bullet points: {{transcript}}' })
  @IsString()
  @IsNotEmpty()
  promptText: string;

  @ApiPropertyOptional({ example: 'bullet_points', description: 'Output format hint' })
  @IsOptional()
  @IsString()
  outputFormat?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
