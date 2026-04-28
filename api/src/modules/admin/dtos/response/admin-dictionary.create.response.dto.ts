import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminDictionaryCreateResponseDto {
  @ApiProperty({ example: 'd5e6f7a8-b9c0-1234-def0-456789012345' })
  @Expose()
  id: string;
}
