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

export enum AdminPresetMediaType {
  SLIDE_IMAGE = 'slide_image',
  SLIDE_VIDEO = 'slide_video',
  BACKGROUND = 'background',
}

export class AdminPresetMediaItemRequestDto {
  @ApiProperty({ enum: AdminPresetMediaType, example: AdminPresetMediaType.SLIDE_IMAGE })
  @IsEnum(AdminPresetMediaType)
  type: AdminPresetMediaType;

  @ApiProperty({ example: 'https://storage.example.com/media/slide1.jpg' })
  @IsUrl()
  url: string;

  @ApiPropertyOptional({ example: 1, description: 'Display order index' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  displayOrder?: number;

  @ApiPropertyOptional({ example: 10, description: 'Slide duration in seconds' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  durationSeconds?: number;
}

export class AdminPresetCreateRequestDto {
  @ApiProperty({ example: 'Welcome Screen Pack' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'Default standby screen for main reception tablets' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ type: [AdminPresetMediaItemRequestDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdminPresetMediaItemRequestDto)
  mediaItems?: AdminPresetMediaItemRequestDto[];
}
