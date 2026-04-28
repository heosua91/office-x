import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminUserDetailResponseDto {
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

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @Expose()
  departmentId?: string;

  @ApiPropertyOptional({ example: 'Engineering' })
  @Expose()
  departmentName?: string;

  @ApiProperty({ type: [String], example: ['d4e5f6a7-b8c9-0123-def0-234567890123'] })
  @Expose()
  accessDepartmentIds: string[];

  @ApiProperty({ example: false })
  @Expose()
  viewAllInfo: boolean;

  @ApiPropertyOptional({ example: 'https://hooks.example.com/user-events' })
  @Expose()
  webhookUrl?: string;

  @ApiPropertyOptional({ example: 'https://proxy.example.com/hook' })
  @Expose()
  proxyWebhookUrl?: string;

  @ApiProperty({ example: false })
  @Expose()
  mustResetPassword: boolean;

  @ApiPropertyOptional({ example: '2026-04-20T08:30:00.000Z' })
  @Expose()
  lastLoginAt?: string;
}
