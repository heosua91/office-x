import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SettingsDictionaryUpdateRequestDto {
  @ApiPropertyOptional({ example: 'OfficeX Platform' })
  @IsOptional()
  @IsString()
  phrase?: string;

  @ApiPropertyOptional({ example: 'オフィスエックスプラットフォーム' })
  @IsOptional()
  @IsString()
  reading?: string;

  @ApiPropertyOptional({ example: 'platform_name' })
  @IsOptional()
  @IsString()
  category?: string;
}
