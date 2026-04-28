import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PaymentMethod } from '../request/auth.register-checkout.request.dto';

export enum RegistrationStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  FAILED = 'failed',
}

export class AuthRegisterStatusResponseDto {
  @ApiProperty({ enum: RegistrationStatus, example: RegistrationStatus.PENDING })
  @Expose()
  status: RegistrationStatus;

  @ApiProperty({ enum: PaymentMethod, example: PaymentMethod.CREDIT_CARD })
  @Expose()
  paymentMethod: PaymentMethod;

  @ApiPropertyOptional({ example: '2025-05-25T00:00:00.000Z', description: 'Next billing date (ISO 8601), present when status is active' })
  @Expose()
  nextBillingDate?: string;
}
