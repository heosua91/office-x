import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SystemPromoVerifyResponseDto {
  @ApiProperty({ example: true, description: 'Whether the promotion code is valid and applicable' })
  @Expose()
  valid: boolean;

  @ApiProperty({ example: 'percentage', description: 'Type of discount: "percentage" or "fixed"' })
  @Expose()
  discountType: string;

  @ApiProperty({ example: 20, description: 'Discount value (percentage points or fixed currency amount)' })
  @Expose()
  discountValue: number;

  @ApiPropertyOptional({ example: '2025-01-01T00:00:00.000Z', description: 'ISO 8601 date from which the promotion is valid' })
  @Expose()
  validFrom?: string;

  @ApiPropertyOptional({ example: '2025-12-31T23:59:59.000Z', description: 'ISO 8601 date until which the promotion is valid' })
  @Expose()
  validTo?: string;
}
