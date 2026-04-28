import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminLogsOperationItemDto {
  @ApiProperty({ example: 'log_op_001' })
  @Expose()
  id: string;

  @ApiProperty({ example: '2026-04-25T09:15:00.000Z', description: 'Event timestamp (ISO 8601)' })
  @Expose()
  timestamp: string;

  @ApiPropertyOptional({ example: 'usr_admin_001', description: 'ID of the company admin who performed the action' })
  @Expose()
  adminUserId?: string;

  @ApiPropertyOptional({ example: 'tng_admin_001', description: 'ID of the TNG admin who performed the action' })
  @Expose()
  tngAdminId?: string;

  @ApiProperty({ example: 'meeting_room', description: 'Module affected by the operation' })
  @Expose()
  module: string;

  @ApiProperty({ example: 'update', description: 'CRUD action performed (create, update, delete)' })
  @Expose()
  action: string;

  @ApiProperty({ example: 'MeetingRoom#room_001', description: 'Identifier of the affected resource' })
  @Expose()
  targetResource: string;

  @ApiPropertyOptional({
    example: { before: { name: 'Board Room' }, after: { name: 'Executive Board Room' } },
    description: 'Before/after changes snapshot',
  })
  @Expose()
  changes?: Record<string, unknown>;

  @ApiPropertyOptional({ example: 'Jane Admin', description: 'Display name of the acting user' })
  @Expose()
  fullName?: string;

  @ApiPropertyOptional({ example: 'Acme Corp', description: 'Company name (TNG-only view)' })
  @Expose()
  companyName?: string;
}

export class AdminLogsOperationListResponseDto {
  @ApiProperty({ type: [AdminLogsOperationItemDto] })
  @Expose()
  @Type(() => AdminLogsOperationItemDto)
  items: AdminLogsOperationItemDto[];

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
