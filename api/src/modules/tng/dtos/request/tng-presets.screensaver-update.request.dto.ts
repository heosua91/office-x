import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
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
import { TngScreensaverMediaType } from './tng-presets.screensaver-create.request.dto';

export class TngScreensaverMediaItemUpdateDto {
  @ApiPropertyOptional({ example: 'e1f2a3b4-c5d6-7890-abcd-ef1234567890', description: 'Omit to add new item' })
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiPropertyOptional({ enum: TngScreensaverMediaType })
  @IsOptional()
  @IsEnum(TngScreensaverMediaType)
  type?: TngScreensaverMediaType;

  @ApiPropertyOptional({ example: 'https://cdn.officex.jp/media/spring-02.jpg' })
  @IsOptional()
  @IsUrl()
  url?: string;

  @ApiPropertyOptional({ example: 2 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  displayOrder?: number;

  @ApiPropertyOptional({ example: 8 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  durationSeconds?: number;
}

export class TngPresetsScreensaverUpdateRequestDto {
  @ApiPropertyOptional({ example: 'Spring Collection 2026 (Updated)' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Updated cherry blossom themed screensaver.' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ type: [TngScreensaverMediaItemUpdateDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TngScreensaverMediaItemUpdateDto)
  mediaItems?: TngScreensaverMediaItemUpdateDto[];
}
