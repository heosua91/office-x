import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RoomStatusResponseDto {
  @ApiProperty()
  @Expose()
  isOccupied: boolean;

  @ApiProperty()
  @Expose()
  currentMeetingTitle?: string;

  @ApiProperty()
  @Expose()
  nextMeetingTitle?: string;

  @ApiProperty()
  @Expose()
  nextMeetingStartTime?: Date;
}
