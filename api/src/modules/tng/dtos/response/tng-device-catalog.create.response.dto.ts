import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TngDeviceCatalogCreateResponseDto {
  @ApiProperty({ example: 'd2e3f4a5-b6c7-8901-def0-234567890123' })
  @Expose()
  id: string;
}
