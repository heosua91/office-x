import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthRegisterCheckPromoRequestDto {
  @ApiProperty({
    example: 'PROMO10',
    description: 'The promotion code to validate',
  })
  @IsString()
  @IsNotEmpty()
  promoCode: string;
}
