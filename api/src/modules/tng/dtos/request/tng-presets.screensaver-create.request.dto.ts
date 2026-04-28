import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
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

export enum TngScreensaverMediaType {
  SLIDE_IMAGE = 'slide_image',
  SLIDE_VIDEO = 'slide_video',
  BACKGROUND = 'background',
}

export class TngScreensaverMediaItemDto {
  @ApiProperty({ enum: TngScreensaverMediaType })
  @IsEnum(TngScreensaverMediaType)
  type: TngScreensaverMediaType;

  @ApiProperty({ example: 'https://cdn.officex.jp/media/spring-01.jpg' })
  @IsUrl()
  url: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  displayOrder?: number;

  @ApiPropertyOptional({ example: 10, description: 'Display duration in seconds (for slides)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  durationSeconds?: number;
}

export class TngPresetsScreensaverCreateRequestDto {
  @ApiProperty({ example: 'Spring Collection 2026' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'Cherry blossom themed screensaver.' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ type: [TngScreensaverMediaItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TngScreensaverMediaItemDto)
  mediaItems: TngScreensaverMediaItemDto[];
}
