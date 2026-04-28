import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminAiTemplatesListItemResponseDto {
  @ApiProperty({ example: 'b3c4d5e6-f7a8-9012-bcde-f12345678901' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Executive Summary Template' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'summary', description: 'summary | thank_you_email' })
  @Expose()
  type: string;

  @ApiPropertyOptional({ example: 'internal', description: 'internal | client' })
  @Expose()
  scope?: string;

  @ApiProperty({ example: false })
  @Expose()
  isDefault: boolean;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: '2026-03-15T08:00:00.000Z' })
  @Expose()
  createdAt: string;
}

export class AdminAiTemplatesListResponseDto {
  @ApiProperty({ type: [AdminAiTemplatesListItemResponseDto] })
  @Expose()
  @Type(() => AdminAiTemplatesListItemResponseDto)
  items: AdminAiTemplatesListItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 5 })
  @Expose()
  total: number;
}
