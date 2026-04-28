import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngPresetsScreensaverListItemDto {
  @ApiProperty({ example: 'p1q2r3s4-t5u6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Spring Collection 2026' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: 'Cherry blossom themed screensaver.' })
  @Expose()
  description?: string;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: 5 })
  @Expose()
  mediaCount: number;

  @ApiProperty({ example: 'global' })
  @Expose()
  scope: string;
}

export class TngPresetsScreensaverListResponseDto {
  @ApiProperty({ type: [TngPresetsScreensaverListItemDto] })
  @Expose()
  @Type(() => TngPresetsScreensaverListItemDto)
  items: TngPresetsScreensaverListItemDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 3 })
  @Expose()
  total: number;
}
