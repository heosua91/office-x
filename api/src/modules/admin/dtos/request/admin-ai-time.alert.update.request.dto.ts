import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AdminAiTimeAlertUpdateRequestDto {
  @ApiPropertyOptional({ example: 'threshold_percentage' })
  @IsOptional()
  @IsString()
  ruleType?: string;

  @ApiPropertyOptional({ example: 90 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  threshold?: number;

  @ApiPropertyOptional({ example: 7200 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  timeWindowSeconds?: number;

  @ApiPropertyOptional({ example: 'email' })
  @IsOptional()
  @IsString()
  notificationTarget?: string;

  @ApiPropertyOptional({ example: 'once_per_hour' })
  @IsOptional()
  @IsString()
  notificationFrequency?: string;

  @ApiPropertyOptional({ example: 'slack' })
  @IsOptional()
  @IsString()
  integrationType?: string;

  @ApiPropertyOptional({ example: 'alerts@acme.com' })
  @IsOptional()
  @IsEmail()
  notificationEmail?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
