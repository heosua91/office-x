import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminMasterDepartmentItemResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Engineering' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: 'parent-uuid-0000-0000-000000000000' })
  @Expose()
  parentId?: string;

  @ApiProperty({ example: false })
  @Expose()
  isReject: boolean;

  @ApiPropertyOptional({ example: 'Visitors from this department require additional approval.' })
  @Expose()
  rejectMessage?: string;

  @ApiProperty({ example: 1 })
  @Expose()
  displayOrder: number;
}

export class AdminMasterDepartmentListResponseDto {
  @ApiProperty({ type: [AdminMasterDepartmentItemResponseDto] })
  @Expose()
  @Type(() => AdminMasterDepartmentItemResponseDto)
  items: AdminMasterDepartmentItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 5 })
  @Expose()
  total: number;
}
