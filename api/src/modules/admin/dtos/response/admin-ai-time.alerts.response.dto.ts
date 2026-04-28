import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminAiTimeAlertItemResponseDto {
  @ApiProperty({ example: 'e1f2a3b4-c5d6-7890-ef12-345678901234' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'threshold_percentage' })
  @Expose()
  ruleType: string;

  @ApiProperty({ example: 80 })
  @Expose()
  threshold: number;

  @ApiProperty({ example: 3600, nullable: true })
  @Expose()
  timeWindowSeconds: number | null;

  @ApiProperty({ example: 'email' })
  @Expose()
  notificationTarget: string;

  @ApiProperty({ example: 'once_per_day' })
  @Expose()
  notificationFrequency: string;

  @ApiProperty({ example: 'email' })
  @Expose()
  integrationType: string;

  @ApiProperty({ example: 'admin@acme.com' })
  @Expose()
  notificationEmail: string;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;
}

export class AdminAiTimeAlertsListResponseDto {
  @ApiProperty({ type: [AdminAiTimeAlertItemResponseDto] })
  @Expose()
  @Type(() => AdminAiTimeAlertItemResponseDto)
  items: AdminAiTimeAlertItemResponseDto[];
}

export class AdminAiTimeAlertCreateResponseDto {
  @ApiProperty({ example: 'e1f2a3b4-c5d6-7890-ef12-345678901234' })
  @Expose()
  id: string;
}
