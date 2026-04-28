import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export enum AdminBillingAiTimePurchaseStatus {
  PENDING = 'pending',
  QUEUED = 'queued',
}

export class AdminBillingAiTimePurchaseResponseDto {
  @ApiProperty({ example: 'purch_a2b3c4d5-e6f7-8901-abcd-ef2345678901' })
  @Expose()
  purchaseId: string;

  @ApiProperty({ enum: AdminBillingAiTimePurchaseStatus, example: AdminBillingAiTimePurchaseStatus.PENDING })
  @Expose()
  status: AdminBillingAiTimePurchaseStatus;

  @ApiPropertyOptional({ example: 'https://checkout.stripe.com/pay/cs_test_def456ghi789' })
  @Expose()
  stripeCheckoutUrl?: string;

  @ApiProperty({ example: 14800, description: 'Total amount charged in JPY' })
  @Expose()
  amountPaid: number;
}
