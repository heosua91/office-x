import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export enum TngDeviceType {
  TABLET = 'tablet',
  MICROPHONE = 'microphone',
  CAMERA = 'camera',
  MOUNT = 'mount',
}

export class TngDeviceCatalogListQueryDto {
  @ApiPropertyOptional({ example: 'iPad', description: 'Search by model name' })
  @IsOptional()
  @IsString()
  q?: string;

  @ApiPropertyOptional({ enum: TngDeviceType })
  @IsOptional()
  @IsEnum(TngDeviceType)
  type?: TngDeviceType;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ example: 1, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 20, default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;
}
