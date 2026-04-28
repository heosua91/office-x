import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminSuccessResponseDto {
  @ApiProperty({ example: true })
  @Expose()
  success: boolean;
}
