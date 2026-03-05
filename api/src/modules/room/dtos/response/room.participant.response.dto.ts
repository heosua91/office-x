import { ApiProperty } from '@nestjs/swagger';

export class RoomParticipantResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'https://avatar.com/1' })
  avatarUrl: string;

  @ApiProperty({ example: 'A1', description: ' Assigned seat identifier' })
  seatName?: string;
}
