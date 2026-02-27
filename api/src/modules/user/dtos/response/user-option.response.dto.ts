import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserOptionDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  username: string;
}
