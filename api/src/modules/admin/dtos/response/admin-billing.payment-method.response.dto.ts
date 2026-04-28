import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminBillingPaymentMethodResponseDto {
  @ApiProperty({ example: 'credit_card' })
  @Expose()
  paymentMethodType: string;

  @ApiPropertyOptional({ example: 'https://checkout.stripe.com/pay/cs_test_abc123', nullable: true })
  @Expose()
  redirectUrl?: string | null;
}
