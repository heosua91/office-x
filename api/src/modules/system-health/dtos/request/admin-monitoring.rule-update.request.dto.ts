import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';
import {
  INTEGRATION_TYPE_VALUES,
  NOTIFICATION_FREQUENCY_VALUES,
  NOTIFICATION_TARGET_VALUES,
  type IntegrationType,
  type NotificationFrequency,
  type NotificationTarget,
} from './admin-monitoring.rule-create.request.dto';

export class AdminMonitoringRuleUpdateRequestDto {
  @ApiPropertyOptional({ example: 'Updated Rule Name' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'failed_login_count' })
  @IsString()
  @IsOptional()
  ruleType?: string;

  @ApiPropertyOptional({ example: 20 })
  @IsInt()
  @Min(1)
  @IsOptional()
  threshold?: number;

  @ApiPropertyOptional({ example: 600 })
  @IsInt()
  @Min(1)
  @IsOptional()
  timeWindowSeconds?: number;

  @ApiPropertyOptional({ enum: NOTIFICATION_TARGET_VALUES, example: 'all_users' })
  @IsIn(NOTIFICATION_TARGET_VALUES)
  @IsOptional()
  notificationTarget?: NotificationTarget;

  @ApiPropertyOptional({ enum: NOTIFICATION_FREQUENCY_VALUES, example: 'daily' })
  @IsIn(NOTIFICATION_FREQUENCY_VALUES)
  @IsOptional()
  notificationFrequency?: NotificationFrequency;

  @ApiPropertyOptional({ enum: INTEGRATION_TYPE_VALUES, example: 'slack' })
  @IsIn(INTEGRATION_TYPE_VALUES)
  @IsOptional()
  integrationType?: IntegrationType;

  @ApiPropertyOptional({ example: 'ops@acme.com' })
  @IsEmail()
  @IsOptional()
  notificationEmail?: string;

  @ApiPropertyOptional({ example: false, description: 'Toggle rule active/inactive without changing other fields' })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
