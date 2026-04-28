import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsInt, IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export enum TngAiLimitPolicy {
  AUTO_POSTPAID = 'auto_postpaid',
  FORCE_STOP = 'force_stop',
}

export class TngCompanyQuotaUpdateRequestDto {
  @ApiPropertyOptional({ example: 60, description: 'Override user seat limit for this tenant' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  userLimitOverride?: number;

  @ApiPropertyOptional({ example: 800, description: 'Override AI minutes limit for this tenant' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  aiMinutesLimitOverride?: number;

  @ApiPropertyOptional({ example: 50, description: 'Override AI overage unit price in JPY' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  aiOverageUnitPriceOverride?: number;

  @ApiPropertyOptional({ enum: TngAiLimitPolicy })
  @IsOptional()
  @IsEnum(TngAiLimitPolicy)
  aiLimitPolicy?: TngAiLimitPolicy;

  @ApiPropertyOptional({ example: true, description: 'Send notification email to company admin' })
  @IsOptional()
  @IsBoolean()
  notifyCompanyAdmin?: boolean;
}
