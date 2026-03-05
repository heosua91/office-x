import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthRegisterPaymentRequestDto {
  @ApiProperty({
    example: 'card_123456789',
    description: 'The payment token from provider',
  })
  @IsString()
  @IsNotEmpty()
  paymentToken: string;

  @ApiProperty({
    example: 'Credit Card',
    description: 'The type of payment method',
  })
  @IsString()
  @IsNotEmpty()
  paymentType: string;

  @ApiProperty({
    example: '**** **** **** 1234',
    description: 'The masked card number',
  })
  @IsString()
  @IsOptional()
  lastFour?: string;
}
