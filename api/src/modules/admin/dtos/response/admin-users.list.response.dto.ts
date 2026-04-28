import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminUsersListItemResponseDto {
  @ApiProperty({ example: 'c3d4e5f6-a7b8-9012-cdef-123456789012' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'John Smith' })
  @Expose()
  fullName: string;

  @ApiPropertyOptional({ example: 'john.smith@acme.com' })
  @Expose()
  email?: string;

  @ApiProperty({ example: 'USR-0042' })
  @Expose()
  userCode: string;

  @ApiProperty({ example: 'staff' })
  @Expose()
  role: string;

  @ApiProperty({ example: 'active' })
  @Expose()
  status: string;

  @ApiPropertyOptional({ example: 'Engineering' })
  @Expose()
  departmentName?: string;

  @ApiPropertyOptional({ example: '2026-04-20T08:30:00.000Z' })
  @Expose()
  lastLoginAt?: string;
}

export class AdminUsersListResponseDto {
  @ApiProperty({ type: [AdminUsersListItemResponseDto] })
  @Expose()
  @Type(() => AdminUsersListItemResponseDto)
  items: AdminUsersListItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 42 })
  @Expose()
  total: number;
}
