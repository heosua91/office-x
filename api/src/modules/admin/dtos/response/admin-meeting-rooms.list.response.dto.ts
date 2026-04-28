import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminMeetingRoomsListItemResponseDto {
  @ApiProperty({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Horizon Room' })
  @Expose()
  name: string;

  @ApiProperty({ example: 10 })
  @Expose()
  capacity: number;

  @ApiPropertyOptional({ example: '3rd Floor, East Wing' })
  @Expose()
  location?: string;

  @ApiProperty({ example: false })
  @Expose()
  isMultiDevice: boolean;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;
}

export class AdminMeetingRoomsListResponseDto {
  @ApiProperty({ type: [AdminMeetingRoomsListItemResponseDto] })
  @Expose()
  @Type(() => AdminMeetingRoomsListItemResponseDto)
  items: AdminMeetingRoomsListItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 8 })
  @Expose()
  total: number;
}
