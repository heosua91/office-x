import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { TngCompaniesListQueryDto } from '../dtos/request/tng-companies.list.query.dto';
import { TngCompaniesProxyCreateRequestDto } from '../dtos/request/tng-companies.proxy-create.request.dto';
import { TngCompanyQuotaUpdateRequestDto } from '../dtos/request/tng-companies.quota-update.request.dto';

import { TngCompaniesListResponseDto } from '../dtos/response/tng-companies.list.response.dto';
import { TngCompaniesProxyCreateResponseDto } from '../dtos/response/tng-companies.proxy-create.response.dto';
import { TngCompanyDetailResponseDto } from '../dtos/response/tng-companies.detail.response.dto';
import { TngSuccessResponseDto } from '../dtos/response/tng.success.response.dto';

@ApiTags('[Public] TNG Companies')
@Controller({ path: '/tng/companies' })
export class TngCompaniesPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Dashboard of all active tenants and health (ADM-001)' })
  @ApiSuccessResponse(TngCompaniesListResponseDto)
  @ApiErrorResponse()
  async listCompanies(
    @Query() _query: TngCompaniesListQueryDto,
  ): Promise<AppResponseSuccess<TngCompaniesListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'c1d2e3f4-a5b6-7890-cdef-123456789012',
            name: 'Acme Corporation',
            code: 'ACME-001',
            planName: 'Enterprise',
            status: 'active',
            activeUsers: 18,
            mrr: 49800,
            createdAt: '2026-01-15T09:00:00.000Z',
          },
          {
            id: 'c2d3e4f5-a6b7-8901-cdef-234567890123',
            name: 'Globex Ltd.',
            code: 'GLBX-002',
            planName: 'Standard',
            status: 'active',
            activeUsers: 9,
            mrr: 19800,
            createdAt: '2026-02-10T10:30:00.000Z',
          },
        ],
        page: 1,
        limit: 20,
        total: 42,
      },
      TngCompaniesListResponseDto,
    );
  }

  @Post('/proxy-create')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'TNG creates new tenant company + initial admin user + trial plan, bypassing Stripe (ADM-014)' })
  @ApiSuccessResponse(TngCompaniesProxyCreateResponseDto)
  @ApiErrorResponse()
  async proxyCreate(
    @Body() _body: TngCompaniesProxyCreateRequestDto,
  ): Promise<AppResponseSuccess<TngCompaniesProxyCreateResponseDto>> {
    return this.responseService.success(
      {
        companyId: 'c2d3e4f5-a6b7-8901-cdef-234567890123',
        companyCode: 'ACME-002',
        adminUserId: 'u3e4f5a6-b7c8-9012-def0-345678901234',
        planName: 'Enterprise Trial',
      },
      TngCompaniesProxyCreateResponseDto,
    );
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch full detail of a contracted company (for edit form) (ADM-002)' })
  @ApiSuccessResponse(TngCompanyDetailResponseDto)
  @ApiErrorResponse()
  async getCompany(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<TngCompanyDetailResponseDto>> {
    return this.responseService.success(
      {
        company: {
          id: 'c1d2e3f4-a5b6-7890-cdef-123456789012',
          name: 'Acme Corporation',
          code: 'ACME-001',
          address: '1-2-3 Shinjuku, Tokyo',
          contactPerson: 'Bob Yamamoto',
          contactPhone: '+81-3-1234-5678',
          contactEmail: 'bob.yamamoto@acme.com',
          billingEmail: 'billing@acme.com',
          stripeCustomerId: 'cus_AbCdEfGhIjKlMnOp',
          expectedUsers: 30,
          subscriptionPlanId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
          userLimitOverride: 60,
          aiMinutesLimitOverride: 800,
          aiOverageUnitPriceOverride: 50,
          aiLimitPolicy: 'auto_postpaid',
          settings: {},
          createdAt: '2026-01-15T09:00:00.000Z',
          planName: 'Enterprise',
          planDefaults: {
            userLimit: 50,
            aiMinutesLimit: 600,
            priceMonthly: 49800,
          },
        },
        subscription: {
          status: 'active',
          startDate: '2026-01-01T00:00:00.000Z',
          stripeSubscriptionId: 'sub_1Abc2DefGhiJklMno3',
        },
        adminUserCount: 2,
      },
      TngCompanyDetailResponseDto,
    );
  }

  @Patch('/:id/quota')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update license quotas and unit prices (ADM-002/003)' })
  @ApiSuccessResponse(TngSuccessResponseDto)
  @ApiErrorResponse()
  async updateQuota(
    @Param('id') _id: string,
    @Body() _body: TngCompanyQuotaUpdateRequestDto,
  ): Promise<AppResponseSuccess<TngSuccessResponseDto>> {
    return this.responseService.success({ success: true }, TngSuccessResponseDto);
  }
}
