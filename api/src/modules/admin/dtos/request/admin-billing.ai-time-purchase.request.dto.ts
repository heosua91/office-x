import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, Min } from 'class-validator';
import { Type } from 'class-transformer';

export enum AdminBillingAiTimePurchaseApplicationStart {
  IMMEDIATELY = 'immediately',
  NEXT_CYCLE = 'next_cycle',
}

export enum AdminBillingAiTimePurchaseBillingTiming {
  IMMEDIATE = 'immediate',
  NEXT_INVOICE = 'next_invoice',
}

export class AdminBillingAiTimePurchaseRequestDto {
  @ApiProperty({ example: 120, description: 'Additional AI minutes to purchase' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  amountMinutes: number;

  @ApiProperty({ enum: AdminBillingAiTimePurchaseApplicationStart, example: AdminBillingAiTimePurchaseApplicationStart.IMMEDIATELY })
  @IsEnum(AdminBillingAiTimePurchaseApplicationStart)
  @IsNotEmpty()
  applicationStart: AdminBillingAiTimePurchaseApplicationStart;

  @ApiProperty({ enum: AdminBillingAiTimePurchaseBillingTiming, example: AdminBillingAiTimePurchaseBillingTiming.IMMEDIATE })
  @IsEnum(AdminBillingAiTimePurchaseBillingTiming)
  @IsNotEmpty()
  billingTiming: AdminBillingAiTimePurchaseBillingTiming;
}
