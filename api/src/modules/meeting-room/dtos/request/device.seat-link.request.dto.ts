import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsUUID } from 'class-validator';

export enum SeatType {
  PARENT = 'parent',
  CHILD = 'child',
}

export class DeviceSeatLinkRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID from link step' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'A1', description: 'Seat label to bind this device to' })
  @IsString()
  seatLabel: string;

  @ApiProperty({ enum: SeatType, example: SeatType.CHILD, description: 'Seat type — parent (host seat) or child (attendee seat)' })
  @IsEnum(SeatType)
  seatType: SeatType;
}
