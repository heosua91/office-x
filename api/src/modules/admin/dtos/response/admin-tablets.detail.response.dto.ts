import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminTabletDetailResponseDto {
  @ApiProperty({ example: 'e5f6a7b8-c9d0-1234-ef01-345678901234' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'TAB-00001' })
  @Expose()
  deviceIdentifier: string;

  @ApiProperty({ example: '********', description: 'Password is hashed; always returned as masked value' })
  @Expose()
  passwordMasked: string;

  @ApiProperty({ example: 'Main Lobby Tablet' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Ground Floor, Reception Area' })
  @Expose()
  location: string;

  @ApiProperty({ example: 'reception' })
  @Expose()
  purpose: string;

  @ApiProperty({ example: 'online' })
  @Expose()
  status: string;

  @ApiProperty({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  meetingRoomId: string;

  @ApiProperty({ type: Object, example: { brightness: 80, orientation: 'landscape' } })
  @Expose()
  settings: object;

  @ApiPropertyOptional({ example: 'A1', description: 'Physical seat label linked to this device' })
  @Expose()
  linkedSeatLabel?: string;

  @ApiPropertyOptional({ example: 'desk', description: 'Type of seat linked to this device' })
  @Expose()
  linkedSeatType?: string;

  @ApiPropertyOptional({ example: '2026-04-25T07:45:00.000Z' })
  @Expose()
  lastActiveAt?: string;
}
