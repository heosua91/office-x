import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminTabletsListItemResponseDto {
  @ApiProperty({ example: 'e5f6a7b8-c9d0-1234-ef01-345678901234' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'TAB-00001' })
  @Expose()
  deviceIdentifier: string;

  @ApiPropertyOptional({ example: 'Main Lobby Tablet' })
  @Expose()
  name?: string;

  @ApiPropertyOptional({ example: 'Ground Floor, Reception Area' })
  @Expose()
  location?: string;

  @ApiProperty({ example: 'reception' })
  @Expose()
  purpose: string;

  @ApiProperty({ example: 'online' })
  @Expose()
  status: string;

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  meetingRoomId?: string;

  @ApiPropertyOptional({ example: '2026-04-25T07:45:00.000Z' })
  @Expose()
  lastActiveAt?: string;
}

export class AdminTabletsListResponseDto {
  @ApiProperty({ type: [AdminTabletsListItemResponseDto] })
  @Expose()
  @Type(() => AdminTabletsListItemResponseDto)
  items: AdminTabletsListItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 3 })
  @Expose()
  total: number;
}
