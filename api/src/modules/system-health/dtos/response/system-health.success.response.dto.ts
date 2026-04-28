import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SystemHealthSuccessResponseDto {
  @ApiProperty({ example: true })
  @Expose()
  success: boolean;
}
