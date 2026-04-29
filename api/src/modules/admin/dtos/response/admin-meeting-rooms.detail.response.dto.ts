import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminMeetingRoomDetailResponseDto {
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

  @ApiProperty({ example: 'Projector, Whiteboard, Video conferencing' })
  @Expose()
  equipment: string;

  @ApiPropertyOptional({ example: 'calendar-resource-id-abc123' })
  @Expose()
  calendarResourceId?: string;

  @ApiPropertyOptional({ example: 'https://storage.example.com/maps/3f-east.png' })
  @Expose()
  mapImageUrl?: string;

  @ApiProperty({ example: false })
  @Expose()
  isMultiDevice: boolean;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;
}
