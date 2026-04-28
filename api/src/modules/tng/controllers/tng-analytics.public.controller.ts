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

import { TngAnalyticsUsageQueryDto } from '../dtos/request/tng-analytics.usage.query.dto';

import { TngAnalyticsUsageResponseDto } from '../dtos/response/tng-analytics.usage.response.dto';
import { TngAnalyticsUsageExportResponseDto } from '../dtos/response/tng-analytics.usage-export.response.dto';

@ApiTags('[Public] TNG Analytics')
@Controller({ path: '/tng/analytics' })
export class TngAnalyticsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/usage/export')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Export multi-tenant AI usage analytics CSV (ADM-010)' })
  @ApiSuccessResponse(TngAnalyticsUsageExportResponseDto)
  @ApiErrorResponse()
  async exportUsage(
    @Query() _query: TngAnalyticsUsageQueryDto,
  ): Promise<AppResponseSuccess<TngAnalyticsUsageExportResponseDto>> {
    return this.responseService.success(
      {
        downloadUrl: 'https://storage.officex.jp/exports/ai-usage-2026-04.csv?token=abc123mocktoken',
      },
      TngAnalyticsUsageExportResponseDto,
    );
  }

  @Get('/usage')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch multi-tenant AI usage analytics (ADM-010)' })
  @ApiSuccessResponse(TngAnalyticsUsageResponseDto)
  @ApiErrorResponse()
  async getUsage(
    @Query() _query: TngAnalyticsUsageQueryDto,
  ): Promise<AppResponseSuccess<TngAnalyticsUsageResponseDto>> {
    return this.responseService.success(
      {
        buckets: [
          { bucket: '2026-04-01', totalMinutes: 1420 },
          { bucket: '2026-04-02', totalMinutes: 1385 },
          { bucket: '2026-04-03', totalMinutes: 1510 },
        ],
        topCompanies: [
          {
            companyId: 'c1d2e3f4-a5b6-7890-cdef-123456789012',
            companyName: 'Acme Corporation',
            totalMinutes: 312,
            planName: 'Enterprise',
          },
          {
            companyId: 'c2d3e4f5-a6b7-8901-cdef-234567890123',
            companyName: 'Globex Ltd.',
            totalMinutes: 248,
            planName: 'Standard',
          },
        ],
        summary: {
          totalCompanies: 42,
          totalMinutes: 18540,
          totalOverage: 860,
        },
      },
      TngAnalyticsUsageResponseDto,
    );
  }
}
