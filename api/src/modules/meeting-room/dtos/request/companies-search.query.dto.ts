import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min, MinLength } from 'class-validator';

export class CompaniesSearchQueryDto {
  @ApiProperty({ example: 'Acme', description: 'Search query (minimum 2 characters)' })
  @IsString()
  @MinLength(2)
  q: string;

  @ApiPropertyOptional({ example: 10, description: 'Maximum number of results to return', default: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit?: number;
}
