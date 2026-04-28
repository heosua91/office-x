import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminMeetingRoomCreateResponseDto {
  @ApiProperty({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  id: string;
}
