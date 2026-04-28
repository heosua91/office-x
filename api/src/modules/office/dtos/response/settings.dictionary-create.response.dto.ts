import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SettingsDictionaryCreateResponseDto {
  @ApiProperty({ example: 'o5p6q7r8-s9t0-1234-u567-890123456789' })
  @Expose()
  id: string;
}
