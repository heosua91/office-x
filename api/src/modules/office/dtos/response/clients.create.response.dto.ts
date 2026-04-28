import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ClientsCreateResponseDto {
  @ApiProperty({ example: 'j0k1l2m3-n4o5-6789-p012-345678901234' })
  @Expose()
  id: string;
}
