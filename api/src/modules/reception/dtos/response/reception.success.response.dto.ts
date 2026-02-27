import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ReceptionSuccessResponseDto {
  @ApiProperty({
    example: true,
  })
  @Expose()
  success: boolean;
}
