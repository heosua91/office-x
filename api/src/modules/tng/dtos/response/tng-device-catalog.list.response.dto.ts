import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngDeviceCatalogListItemDto {
  @ApiProperty({ example: 'd1e2f3a4-b5c6-7890-def0-123456789012' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'iPad Pro 12.9"' })
  @Expose()
  modelName: string;

  @ApiProperty({ example: 'tablet' })
  @Expose()
  type: string;

  @ApiPropertyOptional({ example: 2500 })
  @Expose()
  rentalPriceJpy?: number;

  @ApiPropertyOptional({ example: 120000 })
  @Expose()
  purchasePriceJpy?: number;

  @ApiPropertyOptional({ example: { screen: '12.9 inch', storage: '256 GB' } })
  @Expose()
  specifications?: Record<string, unknown>;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;
}

export class TngDeviceCatalogListResponseDto {
  @ApiProperty({ type: [TngDeviceCatalogListItemDto] })
  @Expose()
  @Type(() => TngDeviceCatalogListItemDto)
  items: TngDeviceCatalogListItemDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 8 })
  @Expose()
  total: number;
}
