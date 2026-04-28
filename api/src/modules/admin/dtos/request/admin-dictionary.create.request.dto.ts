import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AdminDictionaryCreateRequestDto {
  @ApiProperty({ example: 'OfficeX' })
  @IsString()
  @IsNotEmpty()
  phrase: string;

  @ApiPropertyOptional({ example: 'オフィスエックス', description: 'Reading/pronunciation hint for STT' })
  @IsOptional()
  @IsString()
  reading?: string;

  @ApiPropertyOptional({ example: 'product_name', description: 'Category tag for grouping' })
  @IsOptional()
  @IsString()
  category?: string;
}
