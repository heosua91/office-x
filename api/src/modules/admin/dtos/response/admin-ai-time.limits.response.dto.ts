import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export enum AdminAiTimeLimitPolicyResponse {
  AUTO_POSTPAID = 'auto_postpaid',
  FORCE_STOP = 'force_stop',
}

export class AdminAiTimeQuotaResponseDto {
  @ApiProperty({ example: 'meeting_summary' })
  @Expose()
  featureName: string;

  @ApiProperty({ example: 600 })
  @Expose()
  limitAmount: number;

  @ApiProperty({ example: 'monthly' })
  @Expose()
  period: string;

  @ApiProperty({ example: '2026-05-01T00:00:00.000Z' })
  @Expose()
  resetDate: string;
}

export class AdminAiTimeLimitsResponseDto {
  @ApiProperty({ enum: AdminAiTimeLimitPolicyResponse, example: AdminAiTimeLimitPolicyResponse.AUTO_POSTPAID })
  @Expose()
  aiLimitPolicy: AdminAiTimeLimitPolicyResponse;

  @ApiPropertyOptional({ example: 800 })
  @Expose()
  aiMinutesLimitOverride?: number;

  @ApiPropertyOptional({ example: 1200, description: 'Override overage unit price in JPY' })
  @Expose()
  aiOverageUnitPriceOverride?: number;

  @ApiProperty({ type: [AdminAiTimeQuotaResponseDto] })
  @Expose()
  @Type(() => AdminAiTimeQuotaResponseDto)
  quotas: AdminAiTimeQuotaResponseDto[];
}

export class AdminAiTimeLimitsUpdateResponseDto {
  @ApiProperty({ enum: AdminAiTimeLimitPolicyResponse, example: AdminAiTimeLimitPolicyResponse.AUTO_POSTPAID })
  @Expose()
  aiLimitPolicy: AdminAiTimeLimitPolicyResponse;

  @ApiPropertyOptional({ example: 800 })
  @Expose()
  aiMinutesLimitOverride?: number;
}
