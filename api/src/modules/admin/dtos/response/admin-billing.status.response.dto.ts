import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminBillingPlanInfoResponseDto {
  @ApiProperty({ example: 'Enterprise' })
  @Expose()
  name: string;

  @ApiProperty({ example: 49800 })
  @Expose()
  priceMonthly: number;

  @ApiProperty({ example: 50 })
  @Expose()
  userLimit: number;

  @ApiProperty({ example: 600, description: 'Included AI minutes per month' })
  @Expose()
  aiMinutesLimit: number;
}

export class AdminBillingOverridesResponseDto {
  @ApiPropertyOptional({ example: 60 })
  @Expose()
  userLimitOverride?: number;

  @ApiPropertyOptional({ example: 800 })
  @Expose()
  aiMinutesLimitOverride?: number;
}

export class AdminBillingSubscriptionResponseDto {
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

export class AdminBillingUsageResponseDto {
  @ApiProperty({ example: 18 })
  @Expose()
  usersActive: number;

  @ApiProperty({ example: 342, description: 'AI minutes consumed this billing period' })
  @Expose()
  aiMinutesUsed: number;
}

export class AdminBillingLatestInvoiceResponseDto {
  @ApiProperty({ example: 'inv_1Abc2DefGhiJklMno3' })
  @Expose()
  id: string;

  @ApiProperty({ example: 49800 })
  @Expose()
  amount: number;

  @ApiProperty({ example: 'paid' })
  @Expose()
  status: string;

  @ApiProperty({ example: '2026-05-01T00:00:00.000Z' })
  @Expose()
  dueDate: string;

  @ApiPropertyOptional({ example: 'https://invoices.stripe.com/inv_1Abc2DefGhiJklMno3.pdf' })
  @Expose()
  pdfUrl?: string;
}

export class AdminBillingStatusResponseDto {
  @ApiProperty({ type: AdminBillingPlanInfoResponseDto })
  @Expose()
  @Type(() => AdminBillingPlanInfoResponseDto)
  plan: AdminBillingPlanInfoResponseDto;

  @ApiProperty({ type: AdminBillingOverridesResponseDto })
  @Expose()
  @Type(() => AdminBillingOverridesResponseDto)
  overrides: AdminBillingOverridesResponseDto;

  @ApiProperty({ type: AdminBillingSubscriptionResponseDto })
  @Expose()
  @Type(() => AdminBillingSubscriptionResponseDto)
  subscription: AdminBillingSubscriptionResponseDto;

  @ApiProperty({ type: AdminBillingUsageResponseDto })
  @Expose()
  @Type(() => AdminBillingUsageResponseDto)
  usage: AdminBillingUsageResponseDto;

  @ApiPropertyOptional({ type: AdminBillingLatestInvoiceResponseDto })
  @Expose()
  @Type(() => AdminBillingLatestInvoiceResponseDto)
  latestInvoice?: AdminBillingLatestInvoiceResponseDto;
}
