import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TngPresetsScreensaverCreateResponseDto {
  @ApiProperty({ example: 'p2q3r4s5-t6u7-8901-abcd-ef2345678901' })
  @Expose()
  id: string;
}
