import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminPresetsListItemResponseDto {
  @ApiProperty({ example: 'f6a7b8c9-d0e1-2345-f012-456789012345' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Welcome Screen Pack' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: 'Default standby screen for main reception tablets' })
  @Expose()
  description?: string;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: 4 })
  @Expose()
  mediaCount: number;

  @ApiProperty({ example: 3, description: 'Number of devices currently applying this preset' })
  @Expose()
  appliedToDeviceCount: number;
}

export class AdminPresetsListResponseDto {
  @ApiProperty({ type: [AdminPresetsListItemResponseDto] })
  @Expose()
  @Type(() => AdminPresetsListItemResponseDto)
  items: AdminPresetsListItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 6 })
  @Expose()
  total: number;
}
