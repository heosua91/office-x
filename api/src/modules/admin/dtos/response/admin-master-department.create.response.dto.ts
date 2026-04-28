import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminMasterDepartmentCreateResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;
}
