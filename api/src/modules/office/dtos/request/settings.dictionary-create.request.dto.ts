import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SettingsDictionaryCreateRequestDto {
  @ApiProperty({ example: 'OfficeX' })
  @IsString()
  phrase: string;

  @ApiPropertyOptional({ example: 'オフィスエックス' })
  @IsOptional()
  @IsString()
  reading?: string;

  @ApiPropertyOptional({ example: 'product_name' })
  @IsOptional()
  @IsString()
  category?: string;
}
