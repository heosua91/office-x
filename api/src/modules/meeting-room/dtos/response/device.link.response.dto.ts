import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export enum SeatOptionType {
  PARENT = 'parent',
  CHILD = 'child',
}

export class SeatOptionItemDto {
  @ApiProperty({ example: 'A1' })
  @Expose()
  label: string;

  @ApiProperty({ enum: SeatOptionType, example: SeatOptionType.PARENT })
  @Expose()
  type: SeatOptionType;
}

export class DeviceLinkResponseDto {
  @ApiProperty({ example: 'sess_abc123def456' })
  @Expose()
  deviceSessionId: string;

  @ApiProperty({ example: 'e5f6a7b8-c9d0-1234-ef01-345678901234' })
  @Expose()
  deviceId: string;

  @ApiProperty({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  meetingRoomId: string;

  @ApiProperty({ example: 'Horizon Room' })
  @Expose()
  roomName: string;

  @ApiProperty({ example: false, description: 'True when room supports multiple linked tablets' })
  @Expose()
  isMultiDevice: boolean;

  @ApiPropertyOptional({
    type: [SeatOptionItemDto],
    description: 'Available seat options when isMultiDevice is true',
  })
  @Expose()
  @Type(() => SeatOptionItemDto)
  seatOptions?: SeatOptionItemDto[];
}
