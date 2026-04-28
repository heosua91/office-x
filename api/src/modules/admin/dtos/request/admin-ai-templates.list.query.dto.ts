import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export enum AdminAiTemplateType {
  SUMMARY = 'summary',
  THANK_YOU_EMAIL = 'thank_you_email',
}

export enum AdminAiTemplateScope {
  INTERNAL = 'internal',
  CLIENT = 'client',
}

export class AdminAiTemplatesListQueryDto {
  @ApiPropertyOptional({ example: 'monthly', description: 'Search by template name' })
  @IsOptional()
  @IsString()
  q?: string;

  @ApiPropertyOptional({ enum: AdminAiTemplateType, example: AdminAiTemplateType.SUMMARY })
  @IsOptional()
  @IsEnum(AdminAiTemplateType)
  type?: AdminAiTemplateType;

  @ApiPropertyOptional({ enum: AdminAiTemplateScope, example: AdminAiTemplateScope.INTERNAL })
  @IsOptional()
  @IsEnum(AdminAiTemplateScope)
  scope?: AdminAiTemplateScope;

  @ApiPropertyOptional({ example: 1, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 20, default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;
}
