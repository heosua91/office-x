import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AdminPresetMediaType } from './admin-presets.create.request.dto';

export class AdminPresetMediaItemUpdateRequestDto {
  @ApiPropertyOptional({ example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901', description: 'Existing media item ID (omit for new items)' })
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiPropertyOptional({ enum: AdminPresetMediaType })
  @IsOptional()
  @IsEnum(AdminPresetMediaType)
  type?: AdminPresetMediaType;

  @ApiPropertyOptional({ example: 'https://storage.example.com/media/slide1.jpg' })
  @IsOptional()
  @IsUrl()
  url?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  displayOrder?: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  durationSeconds?: number;
}

export class AdminPresetUpdateRequestDto {
  @ApiPropertyOptional({ example: 'Welcome Screen Pack' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Default standby screen for main reception tablets' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ type: [AdminPresetMediaItemUpdateRequestDto], description: 'Full replacement of media item list' })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdminPresetMediaItemUpdateRequestDto)
  mediaItems?: AdminPresetMediaItemUpdateRequestDto[];
}
