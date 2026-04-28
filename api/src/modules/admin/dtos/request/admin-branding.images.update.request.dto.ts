import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';

export class AdminBrandingImagesUpdateRequestDto {
  @ApiPropertyOptional({ example: 'https://storage.example.com/branding/logo.png' })
  @IsOptional()
  @IsUrl()
  logoUrl?: string;

  @ApiPropertyOptional({ example: 'https://storage.example.com/branding/background.jpg' })
  @IsOptional()
  @IsUrl()
  backgroundUrl?: string;
}
