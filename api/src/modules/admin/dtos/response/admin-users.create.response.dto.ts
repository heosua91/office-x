import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminUserCreateResponseDto {
  @ApiProperty({ example: 'c3d4e5f6-a7b8-9012-cdef-123456789012' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'USR-0043' })
  @Expose()
  userCode: string;
}
