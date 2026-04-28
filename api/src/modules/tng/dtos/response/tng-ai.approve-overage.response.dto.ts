import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngApproveOverageApprovedItemDto {
  @ApiProperty({ example: 'c1d2e3f4-a5b6-7890-cdef-123456789012' })
  @Expose()
  companyId: string;

  @ApiProperty({ example: 'Acme Corporation' })
  @Expose()
  companyName: string;

  @ApiProperty({ example: 120 })
  @Expose()
  overageMinutes: number;

  @ApiProperty({ example: 6000 })
  @Expose()
  amountJpy: number;

  @ApiProperty({ example: 'inv_a1b2c3d4e5f6mock' })
  @Expose()
  invoiceId: string;

  @ApiProperty({ example: 'in_1AbCdEfGhIjKlMnOp' })
  @Expose()
  stripeInvoiceId: string;
}

export enum TngApproveOverageSkipReason {
  ALREADY_BILLED = 'already_billed',
  NO_OVERAGE = 'no_overage',
  NO_STRIPE_CUSTOMER = 'no_stripe_customer',
}

export class TngApproveOverageSkippedItemDto {
  @ApiProperty({ example: 'c2d3e4f5-a6b7-8901-cdef-234567890123' })
  @Expose()
  companyId: string;

  @ApiProperty({ enum: TngApproveOverageSkipReason, example: TngApproveOverageSkipReason.NO_OVERAGE })
  @Expose()
  reason: TngApproveOverageSkipReason;
}

export class TngApproveOverageFailedItemDto {
  @ApiProperty({ example: 'c3d4e5f6-a7b8-9012-cdef-345678901234' })
  @Expose()
  companyId: string;

  @ApiProperty({ example: 'stripe_error' })
  @Expose()
  reason: string;

  @ApiPropertyOptional({ example: 'Your card has insufficient funds.' })
  @Expose()
  detail?: string;
}

export class TngApproveOverageTotalsDto {
  @ApiProperty({ example: 5 })
  @Expose()
  approvedCount: number;

  @ApiProperty({ example: 2 })
  @Expose()
  skippedCount: number;

  @ApiProperty({ example: 0 })
  @Expose()
  failedCount: number;

  @ApiProperty({ example: 30000 })
  @Expose()
  totalAmountJpy: number;
}

export class TngApproveOverageFilterDto {
  @ApiPropertyOptional({ example: 'acme' })
  @Expose()
  companyKeyword?: string;

  @ApiPropertyOptional({ example: false })
  @Expose()
  includeBilled?: boolean;
}

export class TngAiApproveOverageResponseDto {
  @ApiProperty({ example: '2026-04' })
  @Expose()
  billingMonth: string;

  @ApiProperty({ type: TngApproveOverageFilterDto })
  @Expose()
  @Type(() => TngApproveOverageFilterDto)
  filter: TngApproveOverageFilterDto;

  @ApiProperty({ type: [TngApproveOverageApprovedItemDto] })
  @Expose()
  @Type(() => TngApproveOverageApprovedItemDto)
  approved: TngApproveOverageApprovedItemDto[];

  @ApiProperty({ type: [TngApproveOverageSkippedItemDto] })
  @Expose()
  @Type(() => TngApproveOverageSkippedItemDto)
  skipped: TngApproveOverageSkippedItemDto[];

  @ApiProperty({ type: [TngApproveOverageFailedItemDto] })
  @Expose()
  @Type(() => TngApproveOverageFailedItemDto)
  failed: TngApproveOverageFailedItemDto[];

  @ApiProperty({ type: TngApproveOverageTotalsDto })
  @Expose()
  @Type(() => TngApproveOverageTotalsDto)
  totals: TngApproveOverageTotalsDto;
}
