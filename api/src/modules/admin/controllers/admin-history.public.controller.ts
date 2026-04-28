import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { AdminHistoryVisitsQueryDto } from '../dtos/request/admin-history.visits.query.dto';

import { AdminHistoryVisitsListResponseDto, AdminHistoryVisitsExportResponseDto } from '../dtos/response/admin-history.visits.response.dto';

@ApiTags('[Public] Admin History')
@Controller({ path: '/admin/history' })
export class AdminHistoryPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/visits')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search visitor access logs (ADMX-023)' })
  @ApiSuccessResponse(AdminHistoryVisitsListResponseDto)
  @ApiErrorResponse()
  async listVisits(
    @Query() _query: AdminHistoryVisitsQueryDto,
  ): Promise<AppResponseSuccess<AdminHistoryVisitsListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'f8a9b0c1-d2e3-4567-f012-678901234567',
            checkInTime: '2026-04-15T09:05:00.000Z',
            checkOutTime: '2026-04-15T10:30:00.000Z',
            checkInMethod: 'qr_code',
            status: 'checked_out',
            guestName: 'Hiroshi Tanaka',
            guestCompany: 'Global Tech Inc.',
            meetingTitle: 'Q2 Partner Review',
            hostName: 'John Smith',
            roomName: 'Horizon Room',
          },
          {
            id: 'a9b0c1d2-e3f4-5678-a012-789012345678',
            checkInTime: '2026-04-16T13:45:00.000Z',
            checkOutTime: undefined,
            checkInMethod: 'facial',
            status: 'checked_in',
            guestName: 'Yuki Sato',
            guestCompany: 'Sato Consulting',
            meetingTitle: 'Vendor Introduction',
            hostName: 'Emily Chen',
            roomName: 'Summit Room',
          },
          {
            id: 'b0c1d2e3-f4a5-6789-b012-890123456789',
            checkInTime: '2026-04-17T10:00:00.000Z',
            checkOutTime: undefined,
            checkInMethod: 'manual',
            status: 'no_show',
            guestName: 'Kenji Matsuda',
            guestCompany: undefined,
            meetingTitle: undefined,
            hostName: undefined,
            roomName: undefined,
          },
        ],
        page: 1,
        limit: 20,
        total: 154,
      },
      AdminHistoryVisitsListResponseDto,
    );
  }

  @Get('/visits/export')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Export visit logs CSV (ADMX-023)' })
  @ApiSuccessResponse(AdminHistoryVisitsExportResponseDto)
  @ApiErrorResponse()
  async exportVisits(
    @Query() _query: AdminHistoryVisitsQueryDto,
  ): Promise<AppResponseSuccess<AdminHistoryVisitsExportResponseDto>> {
    return this.responseService.success(
      { downloadUrl: 'https://signed.example.com/visit-logs-export.csv' },
      AdminHistoryVisitsExportResponseDto,
    );
  }
}
