import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngAiOverageBillingItemDto {
  @ApiProperty({ example: 'c1d2e3f4-a5b6-7890-cdef-123456789012' })
  @Expose()
  companyId: string;

  @ApiProperty({ example: 'Acme Corporation' })
  @Expose()
  companyName: string;

  @ApiProperty({ example: 720 })
  @Expose()
  totalMinutes: number;

  @ApiProperty({ example: 600 })
  @Expose()
  effectiveLimit: number;

  @ApiProperty({ example: 120 })
  @Expose()
  overageMinutes: number;

  @ApiProperty({ example: 50 })
  @Expose()
  unitPriceJpy: number;

  @ApiProperty({ example: 6000 })
  @Expose()
  amountJpy: number;

  @ApiProperty({ example: false })
  @Expose()
  alreadyBilled: boolean;
}

export class TngAiOverageBillingTotalsDto {
  @ApiProperty({ example: 8 })
  @Expose()
  companyCount: number;

  @ApiProperty({ example: 960 })
  @Expose()
  totalOverageMinutes: number;

  @ApiProperty({ example: 48000 })
  @Expose()
  totalAmountJpy: number;
}

export class TngAiOverageBillingResponseDto {
  @ApiProperty({ example: '2026-04' })
  @Expose()
  month: string;

  @ApiProperty({ type: [TngAiOverageBillingItemDto] })
  @Expose()
  @Type(() => TngAiOverageBillingItemDto)
  items: TngAiOverageBillingItemDto[];

  @ApiProperty({ type: TngAiOverageBillingTotalsDto })
  @Expose()
  @Type(() => TngAiOverageBillingTotalsDto)
  totals: TngAiOverageBillingTotalsDto;
}
