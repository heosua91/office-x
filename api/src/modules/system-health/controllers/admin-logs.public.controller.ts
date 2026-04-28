import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { AdminLogsAccessQueryDto } from '../dtos/request/admin-logs.access.query.dto';
import { AdminLogsOperationQueryDto } from '../dtos/request/admin-logs.operation.query.dto';
import { AdminLogsAccessExportResponseDto } from '../dtos/response/admin-logs.access-export.response.dto';
import { AdminLogsAccessListResponseDto } from '../dtos/response/admin-logs.access-list.response.dto';
import { AdminLogsOperationExportResponseDto } from '../dtos/response/admin-logs.operation-export.response.dto';
import { AdminLogsOperationListResponseDto } from '../dtos/response/admin-logs.operation-list.response.dto';

@ApiTags('[Public] Admin Logs')
@Controller({ path: '/admin/logs' })
export class AdminLogsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/access/export')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Export filtered access logs CSV (90-day window enforced) (LOG-001)' })
  @ApiSuccessResponse(AdminLogsAccessExportResponseDto)
  @ApiErrorResponse()
  async exportAccessLogs(
    @Query() _query: AdminLogsAccessQueryDto
  ): Promise<AppResponseSuccess<AdminLogsAccessExportResponseDto>> {
    return this.responseService.success(
      {
        downloadUrl: 'https://storage.officex.app/exports/access-logs-2026-04-25.csv?token=signed_url_mock',
      },
      AdminLogsAccessExportResponseDto
    );
  }

  @Get('/access')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List access log entries (login + screen access) with pagination + filters (LOG-001). TNG sees all; Admin sees own company only.' })
  @ApiSuccessResponse(AdminLogsAccessListResponseDto)
  @ApiErrorResponse()
  async listAccessLogs(
    @Query() _query: AdminLogsAccessQueryDto
  ): Promise<AppResponseSuccess<AdminLogsAccessListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'log_acc_001',
            timestamp: '2026-04-25T08:30:00.000Z',
            userId: 'usr_abc123',
            tngAdminId: undefined,
            ipAddress: '192.168.1.100',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            action: 'login',
            status: 'success',
            httpMethod: 'POST',
            requestPath: '/auth/login',
            fullName: 'John Doe',
            companyName: 'Acme Corp',
          },
        ],
        page: 1,
        limit: 20,
        total: 87,
      },
      AdminLogsAccessListResponseDto
    );
  }

  @Get('/operation/export')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Export filtered audit logs CSV (LOG-002)' })
  @ApiSuccessResponse(AdminLogsOperationExportResponseDto)
  @ApiErrorResponse()
  async exportOperationLogs(
    @Query() _query: AdminLogsOperationQueryDto
  ): Promise<AppResponseSuccess<AdminLogsOperationExportResponseDto>> {
    return this.responseService.success(
      {
        downloadUrl: 'https://storage.officex.app/exports/operation-logs-2026-04-25.csv?token=signed_url_mock',
      },
      AdminLogsOperationExportResponseDto
    );
  }

  @Get('/operation')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List audit log entries (CRUD actions) with pagination + filters (LOG-002)' })
  @ApiSuccessResponse(AdminLogsOperationListResponseDto)
  @ApiErrorResponse()
  async listOperationLogs(
    @Query() _query: AdminLogsOperationQueryDto
  ): Promise<AppResponseSuccess<AdminLogsOperationListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'log_op_001',
            timestamp: '2026-04-25T09:15:00.000Z',
            adminUserId: 'usr_admin_001',
            tngAdminId: undefined,
            module: 'meeting_room',
            action: 'update',
            targetResource: 'MeetingRoom#room_001',
            changes: {
              before: { name: 'Board Room' },
              after: { name: 'Executive Board Room' },
            },
            fullName: 'Jane Admin',
            companyName: 'Acme Corp',
          },
        ],
        page: 1,
        limit: 20,
        total: 42,
      },
      AdminLogsOperationListResponseDto
    );
  }
}
