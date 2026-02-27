import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class OfficeReservationResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  roomName: string;

  @ApiProperty()
  @Expose()
  date: string;

  @ApiProperty()
  @Expose()
  startTime: string;

  @ApiProperty()
  @Expose()
  endTime: string;

  @ApiProperty()
  @Expose()
  status: string;

  @ApiProperty()
  @Expose()
  hostName: string;
}
