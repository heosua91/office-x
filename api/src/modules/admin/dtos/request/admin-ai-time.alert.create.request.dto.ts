import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AdminAiTimeAlertCreateRequestDto {
  @ApiProperty({ example: 'threshold_percentage', description: 'Alert rule type (e.g. threshold_percentage, time_window)' })
  @IsString()
  @IsNotEmpty()
  ruleType: string;

  @ApiProperty({ example: 80, description: 'Threshold value (e.g. percentage or minutes)' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  threshold: number;

  @ApiPropertyOptional({ example: 3600, description: 'Sliding time window in seconds (optional)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  timeWindowSeconds?: number;

  @ApiProperty({ example: 'email', description: 'Notification target type (email, slack, webhook)' })
  @IsString()
  @IsNotEmpty()
  notificationTarget: string;

  @ApiProperty({ example: 'once_per_day', description: 'Notification frequency key' })
  @IsString()
  @IsNotEmpty()
  notificationFrequency: string;

  @ApiProperty({ example: 'email', description: 'Integration type (email, slack)' })
  @IsString()
  @IsNotEmpty()
  integrationType: string;

  @ApiProperty({ example: 'admin@acme.com' })
  @IsEmail()
  notificationEmail: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
