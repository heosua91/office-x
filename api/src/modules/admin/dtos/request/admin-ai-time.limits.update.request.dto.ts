import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export enum AdminAiTimeLimitPolicy {
  AUTO_POSTPAID = 'auto_postpaid',
  FORCE_STOP = 'force_stop',
}

export class AdminAiTimeLimitsUpdateRequestDto {
  @ApiPropertyOptional({ enum: AdminAiTimeLimitPolicy, example: AdminAiTimeLimitPolicy.AUTO_POSTPAID })
  @IsOptional()
  @IsEnum(AdminAiTimeLimitPolicy)
  aiLimitPolicy?: AdminAiTimeLimitPolicy;

  @ApiPropertyOptional({ example: 800, description: 'Override AI minutes limit (null to remove)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  aiMinutesLimitOverride?: number;

  @ApiPropertyOptional({ example: 1200, description: 'Override overage unit price in JPY (null to remove)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  aiOverageUnitPriceOverride?: number;
}
