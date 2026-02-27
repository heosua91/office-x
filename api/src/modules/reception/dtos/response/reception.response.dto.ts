import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ReceptionSignageResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  mediaUrl: string;

  @ApiProperty()
  @Expose()
  type: string; // IMAGE, VIDEO
}

export class ReceptionMapResponseDto {
  @ApiProperty()
  @Expose()
  imageUrl: string;

  @ApiProperty()
  @Expose()
  roomName: string;

  @ApiProperty()
  @Expose()
  floor: string;
}
