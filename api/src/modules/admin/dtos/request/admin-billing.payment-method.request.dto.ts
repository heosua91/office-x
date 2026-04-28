import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsUrl } from 'class-validator';

export enum AdminBillingPaymentMethodType {
  CREDIT_CARD = 'credit_card',
  BANK_TRANSFER = 'bank_transfer',
}

export class AdminBillingPaymentMethodRequestDto {
  @ApiProperty({ enum: AdminBillingPaymentMethodType, example: AdminBillingPaymentMethodType.CREDIT_CARD })
  @IsEnum(AdminBillingPaymentMethodType)
  paymentMethodType: AdminBillingPaymentMethodType;

  @ApiPropertyOptional({ example: 'https://app.example.com/billing/return' })
  @IsOptional()
  @IsUrl()
  returnUrl?: string;
}
