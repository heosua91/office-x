import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class CompanySearchItemDto {
  @ApiProperty({ example: 'c1d2e3f4-a5b6-7890-cdef-012345678901' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Acme Corporation' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: '123 Business Ave, Suite 100, New York, NY 10001' })
  @Expose()
  address?: string;

  @ApiPropertyOptional({ example: 'Bob Martinez' })
  @Expose()
  contactPerson?: string;

  @ApiPropertyOptional({ example: 'Technology' })
  @Expose()
  industry?: string;
}

export class CompaniesSearchResponseDto {
  @ApiProperty({ type: [CompanySearchItemDto] })
  @Expose()
  @Type(() => CompanySearchItemDto)
  items: CompanySearchItemDto[];
}
