import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MessageResponseDto {
  @ApiProperty({
    required: true,
    nullable: false,
    description: 'Response message',
    example: 'Successfully processed request',
  })
  @Expose()
  message: string;
}
