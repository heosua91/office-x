import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum AdminBrandingStandbyItemType {
  SLIDE_IMAGE = 'slide_image',
  SLIDE_VIDEO = 'slide_video',
}

export class AdminBrandingStandbyItemUpdateRequestDto {
  @ApiPropertyOptional({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Omit to create new item' })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({ enum: AdminBrandingStandbyItemType, example: AdminBrandingStandbyItemType.SLIDE_IMAGE })
  @IsEnum(AdminBrandingStandbyItemType)
  type: AdminBrandingStandbyItemType;

  @ApiProperty({ example: 'https://storage.example.com/standby/slide1.jpg' })
  @IsUrl()
  url: string;

  @ApiProperty({ example: 1, description: 'Display order index (0-based)' })
  @IsInt()
  @Min(0)
  displayOrder: number;

  @ApiPropertyOptional({ example: 8, description: 'Interval between slides in seconds' })
  @IsOptional()
  @IsInt()
  @Min(1)
  playIntervalSeconds?: number;

  @ApiPropertyOptional({ example: 30, description: 'Video duration in seconds (slide_video only)' })
  @IsOptional()
  @IsInt()
  @Min(1)
  durationSeconds?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class AdminBrandingStandbyUpdateRequestDto {
  @ApiProperty({ type: [AdminBrandingStandbyItemUpdateRequestDto] })
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AdminBrandingStandbyItemUpdateRequestDto)
  items: AdminBrandingStandbyItemUpdateRequestDto[];
}
