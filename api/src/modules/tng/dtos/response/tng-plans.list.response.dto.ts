import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngPlanListItemDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Enterprise' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: 'enterprise-v3' })
  @Expose()
  code?: string;

  @ApiProperty({ example: 49800, description: 'Monthly price in JPY' })
  @Expose()
  priceMonthly: number;

  @ApiProperty({ example: 50 })
  @Expose()
  userLimit: number;

  @ApiProperty({ example: 600 })
  @Expose()
  aiMinutesLimit: number;

  @ApiProperty({ example: ['reception', 'meeting_room', 'ai_summary'], type: [String] })
  @Expose()
  features: string[];

  @ApiPropertyOptional({ example: 90 })
  @Expose()
  audioRetentionDays?: number;

  @ApiProperty({ example: false })
  @Expose()
  isSpecial: boolean;

  @ApiProperty({ example: 12 })
  @Expose()
  activeSubscriberCount: number;

  @ApiProperty({ example: false })
  @Expose()
  isDeleted: boolean;
}

export class TngPlansListResponseDto {
  @ApiProperty({ type: [TngPlanListItemDto] })
  @Expose()
  @Type(() => TngPlanListItemDto)
  items: TngPlanListItemDto[];
}
