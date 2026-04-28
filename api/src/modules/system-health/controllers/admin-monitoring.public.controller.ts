import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { AdminMonitoringRulesQueryDto } from '../dtos/request/admin-monitoring.rules.query.dto';
import { AdminMonitoringRuleCreateRequestDto } from '../dtos/request/admin-monitoring.rule-create.request.dto';
import { AdminMonitoringRuleUpdateRequestDto } from '../dtos/request/admin-monitoring.rule-update.request.dto';
import { AdminMonitoringRuleIdParamDto } from '../dtos/request/admin-monitoring.rule-id.param.dto';
import { AdminMonitoringRulesListResponseDto } from '../dtos/response/admin-monitoring.rules-list.response.dto';
import { AdminMonitoringRuleCreateResponseDto } from '../dtos/response/admin-monitoring.rule-create.response.dto';
import { SystemHealthSuccessResponseDto } from '../dtos/response/system-health.success.response.dto';

@ApiTags('[Public] Admin Monitoring')
@Controller({ path: '/admin/monitoring' })
export class AdminMonitoringPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/rules')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List monitoring rules for tenant or global if TNG (LOG-003)' })
  @ApiSuccessResponse(AdminMonitoringRulesListResponseDto)
  @ApiErrorResponse()
  async listRules(
    @Query() _query: AdminMonitoringRulesQueryDto
  ): Promise<AppResponseSuccess<AdminMonitoringRulesListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'rule_001',
            companyId: 'cmp_abc123',
            name: 'Failed Login Spike',
            ruleType: 'failed_login_count',
            threshold: 10,
            timeWindowSeconds: 300,
            notificationTarget: 'admin',
            notificationFrequency: 'once',
            integrationType: 'email',
            notificationEmail: 'security@acme.com',
            isActive: true,
            isEditable: true,
            createdAt: '2026-04-01T00:00:00.000Z',
            updatedAt: '2026-04-25T08:00:00.000Z',
          },
        ],
        page: 1,
        limit: 20,
        total: 5,
      },
      AdminMonitoringRulesListResponseDto
    );
  }

  @Post('/rules')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create new monitoring rule (LOG-003)' })
  @ApiSuccessResponse(AdminMonitoringRuleCreateResponseDto)
  @ApiErrorResponse()
  async createRule(
    @Body() _body: AdminMonitoringRuleCreateRequestDto
  ): Promise<AppResponseSuccess<AdminMonitoringRuleCreateResponseDto>> {
    return this.responseService.success(
      {
        id: 'rule_002',
      },
      AdminMonitoringRuleCreateResponseDto
    );
  }

  @Patch('/rules/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update existing rule (supports partial payload for toggle) (LOG-003)' })
  @ApiSuccessResponse(SystemHealthSuccessResponseDto)
  @ApiErrorResponse()
  async updateRule(
    @Param() _param: AdminMonitoringRuleIdParamDto,
    @Body() _body: AdminMonitoringRuleUpdateRequestDto
  ): Promise<AppResponseSuccess<SystemHealthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, SystemHealthSuccessResponseDto);
  }

  @Delete('/rules/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Soft-delete a monitoring rule (LOG-003)' })
  @ApiSuccessResponse(SystemHealthSuccessResponseDto)
  @ApiErrorResponse()
  async deleteRule(
    @Param() _param: AdminMonitoringRuleIdParamDto
  ): Promise<AppResponseSuccess<SystemHealthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, SystemHealthSuccessResponseDto);
  }
}
