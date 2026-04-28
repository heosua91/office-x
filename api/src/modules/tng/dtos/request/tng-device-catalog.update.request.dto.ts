import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { TngDeviceType } from './tng-device-catalog.list.query.dto';
import { TngDevicePriceApplyPolicy } from './tng-device-catalog.create.request.dto';

export class TngDeviceCatalogUpdateRequestDto {
  @ApiPropertyOptional({ example: 'iPad Pro 12.9" (2026)' })
  @IsOptional()
  @IsString()
  modelName?: string;

  @ApiPropertyOptional({ enum: TngDeviceType })
  @IsOptional()
  @IsEnum(TngDeviceType)
  type?: TngDeviceType;

  @ApiPropertyOptional({ example: 2800 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  rentalPriceJpy?: number;

  @ApiPropertyOptional({ example: 130000 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  purchasePriceJpy?: number;

  @ApiPropertyOptional({ example: { screen: '12.9 inch', storage: '512 GB' } })
  @IsOptional()
  @IsObject()
  specifications?: object;

  @ApiPropertyOptional({ enum: TngDevicePriceApplyPolicy })
  @IsOptional()
  @IsEnum(TngDevicePriceApplyPolicy)
  priceApplyPolicy?: TngDevicePriceApplyPolicy;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ example: '2026-06-01', description: 'Date from which price change applies' })
  @IsOptional()
  @IsDateString()
  effectiveDate?: string;
}
