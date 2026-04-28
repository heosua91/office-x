import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { TngDeviceType } from './tng-device-catalog.list.query.dto';

export enum TngDevicePriceApplyPolicy {
  KEEP = 'keep',
  UPDATE_ALL = 'update_all',
}

export class TngDeviceCatalogCreateRequestDto {
  @ApiProperty({ example: 'iPad Pro 12.9"' })
  @IsString()
  modelName: string;

  @ApiProperty({ enum: TngDeviceType })
  @IsEnum(TngDeviceType)
  type: TngDeviceType;

  @ApiPropertyOptional({ example: 2500, description: 'Monthly rental price in JPY' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  rentalPriceJpy?: number;

  @ApiPropertyOptional({ example: 120000, description: 'Purchase price in JPY' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  purchasePriceJpy?: number;

  @ApiPropertyOptional({ example: { screen: '12.9 inch', storage: '256 GB' } })
  @IsOptional()
  @IsObject()
  specifications?: object;

  @ApiPropertyOptional({ enum: TngDevicePriceApplyPolicy, default: TngDevicePriceApplyPolicy.KEEP })
  @IsOptional()
  @IsEnum(TngDevicePriceApplyPolicy)
  priceApplyPolicy?: TngDevicePriceApplyPolicy;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
