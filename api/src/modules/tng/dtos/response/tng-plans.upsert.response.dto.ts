import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngPlanUpsertPlanDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Enterprise' })
  @Expose()
  name: string;

  @ApiProperty({ example: 49800 })
  @Expose()
  priceMonthly: number;
}

export class TngPlanUpsertResponseDto {
  @ApiProperty({ type: TngPlanUpsertPlanDto })
  @Expose()
  @Type(() => TngPlanUpsertPlanDto)
  plan: TngPlanUpsertPlanDto;

  @ApiProperty({ example: 'price_1AbCdEfGhIjKlMnOp2QrStUv' })
  @Expose()
  stripePriceId: string;

  @ApiPropertyOptional({ example: 'job_batch_a1b2c3d4e5f6', description: 'Job ID if applyGlobally was true' })
  @Expose()
  batchApplyJobId?: string;
}
