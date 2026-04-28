import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminStandbyScreenResponseDto {
  @ApiProperty({ example: 'f6a7b8c9-d0e1-2345-f012-456789012345' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Welcome Screen Pack' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: 'Default standby screen for main reception tablets' })
  @Expose()
  description?: string;

  @ApiProperty({ example: 4, description: 'Number of media items in this preset' })
  @Expose()
  mediaCount: number;
}
