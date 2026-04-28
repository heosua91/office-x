import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class WebhookStripeResponseDto {
  @ApiProperty({ example: true, description: 'Acknowledges receipt of the Stripe webhook event' })
  @Expose()
  received: boolean;
}
