import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminAiTemplateCreateResponseDto {
  @ApiProperty({ example: 'b3c4d5e6-f7a8-9012-bcde-f12345678901' })
  @Expose()
  id: string;
}
