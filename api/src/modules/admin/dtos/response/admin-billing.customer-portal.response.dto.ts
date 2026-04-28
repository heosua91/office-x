import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminBillingCustomerPortalResponseDto {
  @ApiProperty({ example: 'https://billing.stripe.com/session/bps_test_abc123def456' })
  @Expose()
  portalUrl: string;
}
