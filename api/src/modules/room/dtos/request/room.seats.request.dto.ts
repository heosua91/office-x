import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RoomParticipantSeatRequestDto {
  @IsNumber()
  @IsNotEmpty()
  participantId: number;

  @IsString()
  @IsNotEmpty()
  seatName: string;
}

export class RoomSeatsRequestDto {
  @ApiProperty({
    type: [RoomParticipantSeatRequestDto],
    example: [{ participantId: 1, seatName: 'A1' }],
  })
  @IsArray()
  @IsNotEmpty()
  seats: RoomParticipantSeatRequestDto[];
}
