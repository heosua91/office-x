import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngCompanyPlanDefaultsDto {
  @ApiProperty({ example: 50 })
  @Expose()
  userLimit: number;

  @ApiProperty({ example: 600 })
  @Expose()
  aiMinutesLimit: number;

  @ApiProperty({ example: 49800 })
  @Expose()
  priceMonthly: number;
}

export class TngCompanyInfoDto {
  @ApiProperty({ example: 'c1d2e3f4-a5b6-7890-cdef-123456789012' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Acme Corporation' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'ACME-001' })
  @Expose()
  code: string;

  @ApiPropertyOptional({ example: '1-2-3 Shinjuku, Tokyo' })
  @Expose()
  address?: string;

  @ApiProperty({ example: 'Bob Yamamoto' })
  @Expose()
  contactPerson: string;

  @ApiProperty({ example: '+81-3-1234-5678' })
  @Expose()
  contactPhone: string;

  @ApiProperty({ example: 'bob.yamamoto@acme.com' })
  @Expose()
  contactEmail: string;

  @ApiPropertyOptional({ example: 'billing@acme.com' })
  @Expose()
  billingEmail?: string;

  @ApiPropertyOptional({ example: 'cus_AbCdEfGhIjKlMnOp' })
  @Expose()
  stripeCustomerId?: string;

  @ApiProperty({ example: 30 })
  @Expose()
  expectedUsers: number;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  subscriptionPlanId: string;

  @ApiPropertyOptional({ example: 60 })
  @Expose()
  userLimitOverride?: number;

  @ApiPropertyOptional({ example: 800 })
  @Expose()
  aiMinutesLimitOverride?: number;

  @ApiPropertyOptional({ example: 50 })
  @Expose()
  aiOverageUnitPriceOverride?: number;

  @ApiProperty({ example: 'auto_postpaid' })
  @Expose()
  aiLimitPolicy: string;

  @ApiPropertyOptional()
  @Expose()
  settings?: Record<string, unknown>;

  @ApiProperty({ example: '2026-01-15T09:00:00.000Z' })
  @Expose()
  createdAt: string;

  @ApiProperty({ example: 'Enterprise' })
  @Expose()
  planName: string;

  @ApiProperty({ type: TngCompanyPlanDefaultsDto })
  @Expose()
  @Type(() => TngCompanyPlanDefaultsDto)
  planDefaults: TngCompanyPlanDefaultsDto;
}

export class TngCompanySubscriptionDto {
  @ApiProperty({ example: 'active' })
  @Expose()
  status: string;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  @Expose()
  startDate: string;

  @ApiPropertyOptional({ example: 'sub_1Abc2DefGhiJklMno3' })
  @Expose()
  stripeSubscriptionId?: string;
}

export class TngCompanyDetailResponseDto {
  @ApiProperty({ type: TngCompanyInfoDto })
  @Expose()
  @Type(() => TngCompanyInfoDto)
  company: TngCompanyInfoDto;

  @ApiPropertyOptional({ type: TngCompanySubscriptionDto })
  @Expose()
  @Type(() => TngCompanySubscriptionDto)
  subscription?: TngCompanySubscriptionDto;

  @ApiProperty({ example: 2, description: 'Number of admin-role users in the company' })
  @Expose()
  adminUserCount: number;
}
