import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminUsersSlotsInfoResponseDto {
  @ApiProperty({ example: 18, description: 'Number of currently active users' })
  @Expose()
  activeUsers: number;

  @ApiProperty({ example: 25, description: 'User limit defined by the current plan' })
  @Expose()
  planUserLimit: number;

  @ApiPropertyOptional({ example: 30, description: 'Manual override limit set by admin' })
  @Expose()
  userLimitOverride?: number;

  @ApiProperty({ example: 30, description: 'Effective limit (override takes precedence over plan limit)' })
  @Expose()
  effectiveLimit: number;

  @ApiProperty({ example: 12, description: 'Available seat slots' })
  @Expose()
  available: number;

  @ApiProperty({ example: 49.0, description: 'Monthly plan price in USD' })
  @Expose()
  planPriceMonthly: number;
}
