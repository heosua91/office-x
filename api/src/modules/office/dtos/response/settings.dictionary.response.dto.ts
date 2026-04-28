import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class SettingsDictionaryItemResponseDto {
  @ApiProperty({ example: 'o5p6q7r8-s9t0-1234-u567-890123456789' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'OfficeX' })
  @Expose()
  phrase: string;

  @ApiPropertyOptional({ example: 'オフィスエックス' })
  @Expose()
  reading?: string;

  @ApiPropertyOptional({ example: 'product_name' })
  @Expose()
  category?: string;

  @ApiProperty({ example: 8 })
  @Expose()
  frequencyCount: number;

  @ApiProperty({ example: true })
  @Expose()
  isApproved: boolean;
}

export class SettingsDictionaryListResponseDto {
  @ApiProperty({ type: [SettingsDictionaryItemResponseDto] })
  @Expose()
  @Type(() => SettingsDictionaryItemResponseDto)
  items: SettingsDictionaryItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 24 })
  @Expose()
  total: number;
}
