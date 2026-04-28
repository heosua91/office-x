import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { AdminAiTimeDashboardQueryDto } from '../dtos/request/admin-ai-time.dashboard.query.dto';
import { AdminAiTimeLimitsUpdateRequestDto } from '../dtos/request/admin-ai-time.limits.update.request.dto';
import { AdminAiTimeAlertCreateRequestDto } from '../dtos/request/admin-ai-time.alert.create.request.dto';
import { AdminAiTimeAlertUpdateRequestDto } from '../dtos/request/admin-ai-time.alert.update.request.dto';
import { AdminAiTimeBillingStatementQueryDto } from '../dtos/request/admin-ai-time.billing-statement.query.dto';

import { AdminAiTimeDashboardResponseDto } from '../dtos/response/admin-ai-time.dashboard.response.dto';
import { AdminAiTimeLimitPolicyResponse, AdminAiTimeLimitsResponseDto, AdminAiTimeLimitsUpdateResponseDto } from '../dtos/response/admin-ai-time.limits.response.dto';
import { AdminAiTimeAlertsListResponseDto, AdminAiTimeAlertCreateResponseDto } from '../dtos/response/admin-ai-time.alerts.response.dto';
import { AdminAiTimeBillingStatementResponseDto, AdminAiTimeBillingStatementExportResponseDto } from '../dtos/response/admin-ai-time.billing-statement.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin AI Time')
@Controller({ path: '/admin/ai-time' })
export class AdminAiTimePublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/dashboard')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch aggregate AI usage graph data (ADMX-024)' })
  @ApiSuccessResponse(AdminAiTimeDashboardResponseDto)
  @ApiErrorResponse()
  async getDashboard(
    @Query() _query: AdminAiTimeDashboardQueryDto,
  ): Promise<AppResponseSuccess<AdminAiTimeDashboardResponseDto>> {
    return this.responseService.success(
      {
        buckets: [
          { bucket: '2026-04-01', featureName: 'meeting_summary', total: 42 },
          { bucket: '2026-04-08', featureName: 'meeting_summary', total: 67 },
          { bucket: '2026-04-15', featureName: 'thank_you_email', total: 18 },
          { bucket: '2026-04-22', featureName: 'meeting_summary', total: 55 },
        ],
        limits: [
          { featureName: 'meeting_summary', limitAmount: 600, resetDate: '2026-05-01T00:00:00.000Z' },
          { featureName: 'thank_you_email', limitAmount: 200, resetDate: '2026-05-01T00:00:00.000Z' },
        ],
        topConsumers: [
          { fullName: 'John Smith', total: 85 },
          { fullName: 'Emily Chen', total: 63 },
          { fullName: 'Kenji Tanaka', total: 47 },
        ],
      },
      AdminAiTimeDashboardResponseDto,
    );
  }

  @Get('/limits')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch current AI usage thresholds (ADMX-027)' })
  @ApiSuccessResponse(AdminAiTimeLimitsResponseDto)
  @ApiErrorResponse()
  async getLimits(): Promise<AppResponseSuccess<AdminAiTimeLimitsResponseDto>> {
    return this.responseService.success(
      {
        aiLimitPolicy: AdminAiTimeLimitPolicyResponse.AUTO_POSTPAID,
        aiMinutesLimitOverride: 800,
        aiOverageUnitPriceOverride: 1200,
        quotas: [
          { featureName: 'meeting_summary', limitAmount: 600, period: 'monthly', resetDate: '2026-05-01T00:00:00.000Z' },
          { featureName: 'thank_you_email', limitAmount: 200, period: 'monthly', resetDate: '2026-05-01T00:00:00.000Z' },
        ],
      },
      AdminAiTimeLimitsResponseDto,
    );
  }

  @Put('/limits')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update AI usage thresholds (ADMX-027)' })
  @ApiSuccessResponse(AdminAiTimeLimitsUpdateResponseDto)
  @ApiErrorResponse()
  async updateLimits(
    @Body() _body: AdminAiTimeLimitsUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminAiTimeLimitsUpdateResponseDto>> {
    return this.responseService.success(
      {
        aiLimitPolicy: AdminAiTimeLimitPolicyResponse.AUTO_POSTPAID,
        aiMinutesLimitOverride: 800,
      },
      AdminAiTimeLimitsUpdateResponseDto,
    );
  }

  @Get('/alerts')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List notification targets for AI alerts (ADMX-028)' })
  @ApiSuccessResponse(AdminAiTimeAlertsListResponseDto)
  @ApiErrorResponse()
  async listAlerts(): Promise<AppResponseSuccess<AdminAiTimeAlertsListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'e1f2a3b4-c5d6-7890-ef12-345678901234',
            ruleType: 'threshold_percentage',
            threshold: 80,
            timeWindowSeconds: null,
            notificationTarget: 'email',
            notificationFrequency: 'once_per_day',
            integrationType: 'email',
            notificationEmail: 'admin@acme.com',
            isActive: true,
          },
          {
            id: 'f2a3b4c5-d6e7-8901-f012-456789012345',
            ruleType: 'threshold_percentage',
            threshold: 95,
            timeWindowSeconds: null,
            notificationTarget: 'email',
            notificationFrequency: 'once_per_hour',
            integrationType: 'email',
            notificationEmail: 'cto@acme.com',
            isActive: true,
          },
        ],
      },
      AdminAiTimeAlertsListResponseDto,
    );
  }

  @Post('/alerts')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register new AI alert notification target (ADMX-028)' })
  @ApiSuccessResponse(AdminAiTimeAlertCreateResponseDto)
  @ApiErrorResponse()
  async createAlert(
    @Body() _body: AdminAiTimeAlertCreateRequestDto,
  ): Promise<AppResponseSuccess<AdminAiTimeAlertCreateResponseDto>> {
    return this.responseService.success(
      { id: 'a3b4c5d6-e7f8-9012-ab34-567890123456' },
      AdminAiTimeAlertCreateResponseDto,
    );
  }

  @Put('/alerts/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update existing AI alert (ADMX-028)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateAlert(
    @Param('id') _id: string,
    @Body() _body: AdminAiTimeAlertUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Delete('/alerts/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove AI alert (ADMX-028)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async deleteAlert(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Get('/billing-statement')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch detailed AI usage logs (ADMX-029)' })
  @ApiSuccessResponse(AdminAiTimeBillingStatementResponseDto)
  @ApiErrorResponse()
  async getBillingStatement(
    @Query() _query: AdminAiTimeBillingStatementQueryDto,
  ): Promise<AppResponseSuccess<AdminAiTimeBillingStatementResponseDto>> {
    return this.responseService.success(
      {
        month: '2026-04',
        totalMinutes: 400,
        overageMinutes: 58,
        lineItems: [
          {
            timestamp: '2026-04-05T09:30:00.000Z',
            userName: 'John Smith',
            featureName: 'meeting_summary',
            amountUsed: 12,
            unit: 'minutes',
            context: 'Weekly Engineering Sync',
          },
          {
            timestamp: '2026-04-10T14:15:00.000Z',
            userName: 'Emily Chen',
            featureName: 'thank_you_email',
            amountUsed: 3,
            unit: 'minutes',
            context: 'Client onboarding session',
          },
          {
            timestamp: '2026-04-18T11:00:00.000Z',
            userName: 'Kenji Tanaka',
            featureName: 'meeting_summary',
            amountUsed: 25,
            unit: 'minutes',
            context: undefined,
          },
        ],
        summary: {
          withinPlan: 342,
          overage: 58,
          currency: 'JPY',
          amountPayable: 69600,
        },
      },
      AdminAiTimeBillingStatementResponseDto,
    );
  }

  @Get('/billing-statement/export')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Export AI usage logs CSV (ADMX-029)' })
  @ApiSuccessResponse(AdminAiTimeBillingStatementExportResponseDto)
  @ApiErrorResponse()
  async exportBillingStatement(
    @Query() _query: AdminAiTimeBillingStatementQueryDto,
  ): Promise<AppResponseSuccess<AdminAiTimeBillingStatementExportResponseDto>> {
    return this.responseService.success(
      { downloadUrl: 'https://signed.example.com/ai-usage.csv' },
      AdminAiTimeBillingStatementExportResponseDto,
    );
  }
}
