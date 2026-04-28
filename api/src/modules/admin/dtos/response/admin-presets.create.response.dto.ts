import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminPresetCreateResponseDto {
  @ApiProperty({ example: 'f6a7b8c9-d0e1-2345-f012-456789012345' })
  @Expose()
  id: string;
}
