import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class OfficeSuccessResponseDto {
  @ApiProperty({
    example: true,
  })
  @Expose()
  success: boolean;
}
