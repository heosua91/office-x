import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminDictionaryListItemResponseDto {
  @ApiProperty({ example: 'c4d5e6f7-a8b9-0123-cdef-234567890456' })
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

  @ApiProperty({ example: 14, description: 'Number of times this phrase was recognized' })
  @Expose()
  frequencyCount: number;

  @ApiProperty({ example: true })
  @Expose()
  isApproved: boolean;

  @ApiProperty({ example: 'organization' })
  @Expose()
  scope: string;
}

export class AdminDictionaryListResponseDto {
  @ApiProperty({ type: [AdminDictionaryListItemResponseDto] })
  @Expose()
  @Type(() => AdminDictionaryListItemResponseDto)
  items: AdminDictionaryListItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 38 })
  @Expose()
  total: number;
}
