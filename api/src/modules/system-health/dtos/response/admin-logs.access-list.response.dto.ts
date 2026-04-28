import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminLogsAccessItemDto {
  @ApiProperty({ example: 'log_acc_001' })
  @Expose()
  id: string;

  @ApiProperty({ example: '2026-04-25T08:30:00.000Z', description: 'Event timestamp (ISO 8601)' })
  @Expose()
  timestamp: string;

  @ApiPropertyOptional({ example: 'usr_abc123', description: 'ID of the company user who triggered the event' })
  @Expose()
  userId?: string;

  @ApiPropertyOptional({ example: 'tng_admin_001', description: 'ID of the TNG admin who triggered the event' })
  @Expose()
  tngAdminId?: string;

  @ApiProperty({ example: '192.168.1.100' })
  @Expose()
  ipAddress: string;

  @ApiProperty({ example: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' })
  @Expose()
  userAgent: string;

  @ApiProperty({ example: 'login', description: 'Action type (e.g. login, screen_access, logout)' })
  @Expose()
  action: string;

  @ApiProperty({ example: 'success', description: 'Outcome of the action' })
  @Expose()
  status: string;

  @ApiPropertyOptional({ example: 'POST', description: 'HTTP method of the request' })
  @Expose()
  httpMethod?: string;

  @ApiPropertyOptional({ example: '/auth/login', description: 'Request path' })
  @Expose()
  requestPath?: string;

  @ApiPropertyOptional({ example: 'John Doe', description: 'Display name of the user' })
  @Expose()
  fullName?: string;

  @ApiPropertyOptional({ example: 'Acme Corp', description: 'Company name (TNG-only view)' })
  @Expose()
  companyName?: string;
}

export class AdminLogsAccessListResponseDto {
  @ApiProperty({ type: [AdminLogsAccessItemDto] })
  @Expose()
  @Type(() => AdminLogsAccessItemDto)
  items: AdminLogsAccessItemDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 87 })
  @Expose()
  total: number;
}
