import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class WebhookStripeRequestDto {
  @ApiProperty({ example: 'evt_mock_1234567890', description: 'Stripe event ID' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    example: 'checkout.session.completed',
    description: 'Stripe event type: checkout.session.completed | invoice.finalized | invoice.payment_failed',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    example: { object: { id: 'cs_test_mock', customer: 'cus_mock' } },
    description: 'Stripe event data payload',
  })
  @IsObject()
  data: Record<string, unknown>;
}
