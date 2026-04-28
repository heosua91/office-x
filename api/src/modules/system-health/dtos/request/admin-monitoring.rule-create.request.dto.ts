import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export const NOTIFICATION_TARGET_VALUES = ['admin', 'all_users'] as const;
export type NotificationTarget = (typeof NOTIFICATION_TARGET_VALUES)[number];

export const NOTIFICATION_FREQUENCY_VALUES = ['once', 'daily', 'weekly'] as const;
export type NotificationFrequency = (typeof NOTIFICATION_FREQUENCY_VALUES)[number];

export const INTEGRATION_TYPE_VALUES = ['email', 'slack', 'teams'] as const;
export type IntegrationType = (typeof INTEGRATION_TYPE_VALUES)[number];

export class AdminMonitoringRuleCreateRequestDto {
  @ApiProperty({ example: 'Failed Login Spike', description: 'Display name for the monitoring rule' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'failed_login_count', description: 'Rule type identifier (e.g. failed_login_count, inactive_users)' })
  @IsString()
  @IsNotEmpty()
  ruleType: string;

  @ApiProperty({ example: 10, description: 'Threshold value that triggers the rule' })
  @IsInt()
  @Min(1)
  threshold: number;

  @ApiPropertyOptional({ example: 300, description: 'Sliding time window in seconds for threshold evaluation' })
  @IsInt()
  @Min(1)
  @IsOptional()
  timeWindowSeconds?: number;

  @ApiProperty({ enum: NOTIFICATION_TARGET_VALUES, example: 'admin', description: 'Who receives the notification' })
  @IsIn(NOTIFICATION_TARGET_VALUES)
  notificationTarget: NotificationTarget;

  @ApiProperty({ enum: NOTIFICATION_FREQUENCY_VALUES, example: 'once', description: 'How often to re-notify after initial trigger' })
  @IsIn(NOTIFICATION_FREQUENCY_VALUES)
  notificationFrequency: NotificationFrequency;

  @ApiProperty({ enum: INTEGRATION_TYPE_VALUES, example: 'email', description: 'Delivery channel for notifications' })
  @IsIn(INTEGRATION_TYPE_VALUES)
  integrationType: IntegrationType;

  @ApiProperty({ example: 'security@acme.com', description: 'Email address for notification delivery' })
  @IsEmail()
  notificationEmail: string;

  @ApiPropertyOptional({ example: true, description: 'Whether the rule is active on creation', default: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
