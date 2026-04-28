import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { SeatOptionType } from './device.link.response.dto';

export class DeviceSeatLinkResponseDto {
  @ApiProperty({ example: 'sess_abc123def456' })
  @Expose()
  deviceSessionId: string;

  @ApiProperty({ example: 'A1' })
  @Expose()
  seatLabel: string;

  @ApiProperty({ enum: SeatOptionType, example: SeatOptionType.CHILD })
  @Expose()
  seatType: SeatOptionType;

  @ApiProperty({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  meetingRoomId: string;
}
