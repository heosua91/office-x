import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class TngCompanyListItemDto {
  @ApiProperty({ example: 'c1d2e3f4-a5b6-7890-cdef-123456789012' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Acme Corporation' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'ACME-001' })
  @Expose()
  code: string;

  @ApiProperty({ example: 'Enterprise' })
  @Expose()
  planName: string;

  @ApiProperty({ example: 'active' })
  @Expose()
  status: string;

  @ApiProperty({ example: 18 })
  @Expose()
  activeUsers: number;

  @ApiProperty({ example: 49800, description: 'Monthly recurring revenue in JPY' })
  @Expose()
  mrr: number;

  @ApiProperty({ example: '2026-01-15T09:00:00.000Z' })
  @Expose()
  createdAt: string;
}

export class TngCompaniesListResponseDto {
  @ApiProperty({ type: [TngCompanyListItemDto] })
  @Expose()
  @Type(() => TngCompanyListItemDto)
  items: TngCompanyListItemDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 42 })
  @Expose()
  total: number;
}
