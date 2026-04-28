import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class TngPlanUpsertRequestDto {
  @ApiPropertyOptional({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Omit to create new plan' })
  @IsOptional()
  @IsUUID()
  planId?: string;

  @ApiProperty({ example: 49800, description: 'Monthly price in JPY' })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  priceMonthly: number;

  @ApiProperty({ example: '2026-06-01', description: 'Date from which new price is effective (ISO date)' })
  @IsNotEmpty()
  @IsDateString()
  effectiveDate: string;

  @ApiProperty({ example: 90, description: 'Audio retention in days' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  audioRetentionDays: number;

  @ApiPropertyOptional({ example: 'Enterprise' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 50 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  userLimit?: number;

  @ApiPropertyOptional({ example: 600 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  aiMinutesLimit?: number;

  @ApiPropertyOptional({ example: ['reception', 'meeting_room', 'ai_summary'], type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  features?: string[];

  @ApiPropertyOptional({ example: false, description: 'Mark as special/custom plan' })
  @IsOptional()
  @IsBoolean()
  isSpecial?: boolean;

  @ApiPropertyOptional({ example: false, description: 'Apply price change to all existing subscribers' })
  @IsOptional()
  @IsBoolean()
  applyGlobally?: boolean;
}
