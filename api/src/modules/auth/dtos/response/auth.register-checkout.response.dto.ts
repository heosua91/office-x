import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AuthRegisterCheckoutResponseDto {
  @ApiProperty({ example: 'https://checkout.stripe.com/pay/cs_test_mock', description: 'Stripe Checkout redirect URL' })
  @Expose()
  redirectUrl: string;

  @ApiProperty({ example: 'reg_token_mock_abc123', description: 'Token used to poll registration status' })
  @Expose()
  registrationToken: string;
}
