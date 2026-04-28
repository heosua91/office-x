import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class AdminDictionaryUpdateRequestDto {
  @ApiPropertyOptional({ example: 'OfficeX Pro' })
  @IsOptional()
  @IsString()
  phrase?: string;

  @ApiPropertyOptional({ example: 'オフィスエックスプロ' })
  @IsOptional()
  @IsString()
  reading?: string;

  @ApiPropertyOptional({ example: 'product_name' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isApproved?: boolean;
}
