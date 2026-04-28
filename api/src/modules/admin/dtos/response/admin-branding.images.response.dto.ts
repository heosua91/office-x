import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminBrandingImageItemResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'https://storage.example.com/branding/logo.png' })
  @Expose()
  url: string;
}

export class AdminBrandingImagesResponseDto {
  @ApiPropertyOptional({ type: AdminBrandingImageItemResponseDto })
  @Expose()
  @Type(() => AdminBrandingImageItemResponseDto)
  logo?: AdminBrandingImageItemResponseDto;

  @ApiPropertyOptional({ type: AdminBrandingImageItemResponseDto })
  @Expose()
  @Type(() => AdminBrandingImageItemResponseDto)
  background?: AdminBrandingImageItemResponseDto;
}
