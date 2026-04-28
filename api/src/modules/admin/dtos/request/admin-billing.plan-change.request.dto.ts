import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum AdminBillingPlanChangeApplyAt {
  IMMEDIATELY = 'immediately',
  NEXT_CYCLE = 'next_cycle',
}

export class AdminBillingPlanChangeRequestDto {
  @ApiProperty({ example: 'plan_enterprise_v2' })
  @IsString()
  @IsNotEmpty()
  targetPlanId: string;

  @ApiPropertyOptional({ example: 'PROMO2026' })
  @IsOptional()
  @IsString()
  promotionCode?: string;

  @ApiPropertyOptional({ enum: AdminBillingPlanChangeApplyAt, example: AdminBillingPlanChangeApplyAt.NEXT_CYCLE })
  @IsOptional()
  @IsEnum(AdminBillingPlanChangeApplyAt)
  applyAt?: AdminBillingPlanChangeApplyAt;
}
