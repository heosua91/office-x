import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ClientsRecentVisitResponseDto {
  @ApiProperty({ example: 'k1l2m3n4-o5p6-7890-q123-456789012345' })
  @Expose()
  logId: string;

  @ApiProperty({ example: '2026-04-20T10:00:00.000Z' })
  @Expose()
  visitDate: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  hostName: string;

  @ApiPropertyOptional({ example: 'Discussed Q2 product roadmap and pricing adjustments.' })
  @Expose()
  summary?: string;
}

export class ClientsProfileResponseDto {
  @ApiProperty({ example: 'i9j0k1l2-m3n4-5678-o901-234567890123' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Acme Corp' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: '123 Main St, Ho Chi Minh City' })
  @Expose()
  address?: string;

  @ApiPropertyOptional({ example: '+84901234567' })
  @Expose()
  phone?: string;

  @ApiPropertyOptional({ example: 'contact@acme.com' })
  @Expose()
  contactEmail?: string;

  @ApiPropertyOptional({ example: 'Jane Doe' })
  @Expose()
  contactPerson?: string;

  @ApiPropertyOptional({ example: 'Technology' })
  @Expose()
  industry?: string;

  @ApiProperty({ example: 'active' })
  @Expose()
  status: string;

  @ApiProperty({ example: 12 })
  @Expose()
  visitCount: number;

  @ApiPropertyOptional({ example: '2026-04-20T10:00:00.000Z' })
  @Expose()
  lastVisit?: string;

  @ApiProperty({ type: [ClientsRecentVisitResponseDto] })
  @Expose()
  @Type(() => ClientsRecentVisitResponseDto)
  recentVisits: ClientsRecentVisitResponseDto[];
}
