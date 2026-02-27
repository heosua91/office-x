import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RoomSuccessResponseDto {
  @ApiProperty({
    example: true,
  })
  @Expose()
  success: boolean;
}
