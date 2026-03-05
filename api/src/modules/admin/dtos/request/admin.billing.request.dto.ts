import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AdminUpdateBillingLimitRequestDto {
  @ApiProperty({ example: 2000 })
  @IsNumber()
  @IsOptional()
  aiQuotaLimit?: number;

  @ApiProperty({ example: 80 })
  @IsNumber()
  @IsOptional()
  alertThresholdPercentage?: number;
}

export class AdminPurchaseUserSlotsRequestDto {
  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsNotEmpty()
  additionalSlots: number;
}

export class AdminPaymentMethodRequestDto {
  @ApiProperty({ example: 'card_token_123' })
  @IsString()
  @IsNotEmpty()
  token: string;

  @ApiProperty({ example: 'Credit Card' })
  @IsString()
  @IsNotEmpty()
  type: string;
}
