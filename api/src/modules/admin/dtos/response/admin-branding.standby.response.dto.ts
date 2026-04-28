import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export enum AdminBrandingStandbyResponseItemType {
  SLIDE_IMAGE = 'slide_image',
  SLIDE_VIDEO = 'slide_video',
}

export class AdminBrandingStandbyItemResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ enum: AdminBrandingStandbyResponseItemType, example: AdminBrandingStandbyResponseItemType.SLIDE_IMAGE })
  @Expose()
  type: AdminBrandingStandbyResponseItemType;

  @ApiProperty({ example: 'https://storage.example.com/standby/slide1.jpg' })
  @Expose()
  url: string;

  @ApiProperty({ example: 1 })
  @Expose()
  displayOrder: number;

  @ApiPropertyOptional({ example: 8 })
  @Expose()
  playIntervalSeconds?: number;

  @ApiPropertyOptional({ example: 30 })
  @Expose()
  durationSeconds?: number;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;
}

export class AdminBrandingStandbyResponseDto {
  @ApiProperty({ type: [AdminBrandingStandbyItemResponseDto] })
  @Expose()
  @Type(() => AdminBrandingStandbyItemResponseDto)
  items: AdminBrandingStandbyItemResponseDto[];
}
