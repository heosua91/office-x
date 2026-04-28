import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ClientsListItemResponseDto {
  @ApiProperty({ example: 'i9j0k1l2-m3n4-5678-o901-234567890123' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Acme Corp' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'contact@acme.com' })
  @Expose()
  contactEmail: string;

  @ApiPropertyOptional({ example: 'Technology' })
  @Expose()
  industry?: string;

  @ApiProperty({ example: 'active', enum: ['active', 'inactive'] })
  @Expose()
  status: string;

  @ApiProperty({ example: 12 })
  @Expose()
  visitCount: number;

  @ApiPropertyOptional({ example: '2026-04-20T10:00:00.000Z' })
  @Expose()
  lastVisit?: string;
}

export class ClientsListResponseDto {
  @ApiProperty({ type: [ClientsListItemResponseDto] })
  @Expose()
  @Type(() => ClientsListItemResponseDto)
  items: ClientsListItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 38 })
  @Expose()
  total: number;
}
