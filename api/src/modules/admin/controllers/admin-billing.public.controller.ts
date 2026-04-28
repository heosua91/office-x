import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { AdminBillingPaymentMethodRequestDto } from '../dtos/request/admin-billing.payment-method.request.dto';
import { AdminBillingCustomerPortalRequestDto } from '../dtos/request/admin-billing.customer-portal.request.dto';
import { AdminBillingPlanChangeRequestDto } from '../dtos/request/admin-billing.plan-change.request.dto';
import { AdminBillingAiTimePurchaseRequestDto } from '../dtos/request/admin-billing.ai-time-purchase.request.dto';

import { AdminBillingStatusResponseDto } from '../dtos/response/admin-billing.status.response.dto';
import { AdminBillingPaymentMethodResponseDto } from '../dtos/response/admin-billing.payment-method.response.dto';
import { AdminBillingCustomerPortalResponseDto } from '../dtos/response/admin-billing.customer-portal.response.dto';
import { AdminBillingPlanChangeResponseDto } from '../dtos/response/admin-billing.plan-change.response.dto';
import { AdminBillingAiTimePurchaseResponseDto, AdminBillingAiTimePurchaseStatus } from '../dtos/response/admin-billing.ai-time-purchase.response.dto';

@ApiTags('[Public] Admin Billing')
@Controller({ path: '/admin/billing' })
export class AdminBillingPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch current plan + AI limits + latest invoice (ADMX-017)' })
  @ApiSuccessResponse(AdminBillingStatusResponseDto)
  @ApiErrorResponse()
  async getStatus(): Promise<AppResponseSuccess<AdminBillingStatusResponseDto>> {
    return this.responseService.success(
      {
        plan: {
          name: 'Enterprise',
          priceMonthly: 49800,
          userLimit: 50,
          aiMinutesLimit: 600,
        },
        overrides: {
          userLimitOverride: 60,
          aiMinutesLimitOverride: 800,
        },
        subscription: {
          status: 'active',
          startDate: '2026-01-01T00:00:00.000Z',
          stripeSubscriptionId: 'sub_1Abc2DefGhiJklMno3',
        },
        usage: {
          usersActive: 18,
          aiMinutesUsed: 342,
        },
        latestInvoice: {
          id: 'inv_1Abc2DefGhiJklMno3',
          amount: 49800,
          status: 'paid',
          dueDate: '2026-05-01T00:00:00.000Z',
          pdfUrl: 'https://invoices.stripe.com/inv_1Abc2DefGhiJklMno3.pdf',
        },
      },
      AdminBillingStatusResponseDto,
    );
  }

  @Put('/payment-method')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Manage credit card via Stripe Link (ADMX-017)' })
  @ApiSuccessResponse(AdminBillingPaymentMethodResponseDto)
  @ApiErrorResponse()
  async updatePaymentMethod(
    @Body() _body: AdminBillingPaymentMethodRequestDto,
  ): Promise<AppResponseSuccess<AdminBillingPaymentMethodResponseDto>> {
    return this.responseService.success(
      {
        paymentMethodType: 'credit_card',
        redirectUrl: 'https://checkout.stripe.com/pay/cs_test_abc123',
      },
      AdminBillingPaymentMethodResponseDto,
    );
  }

  @Post('/customer-portal')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Generate Stripe portal session URL (ADMX-017,019,020)' })
  @ApiSuccessResponse(AdminBillingCustomerPortalResponseDto)
  @ApiErrorResponse()
  async customerPortal(
    @Body() _body: AdminBillingCustomerPortalRequestDto,
  ): Promise<AppResponseSuccess<AdminBillingCustomerPortalResponseDto>> {
    return this.responseService.success(
      { portalUrl: 'https://billing.stripe.com/session/bps_test_abc123def456' },
      AdminBillingCustomerPortalResponseDto,
    );
  }

  @Post('/plan/change')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit request to change plan (Stripe) (ADMX-022)' })
  @ApiSuccessResponse(AdminBillingPlanChangeResponseDto)
  @ApiErrorResponse()
  async changePlan(
    @Body() _body: AdminBillingPlanChangeRequestDto,
  ): Promise<AppResponseSuccess<AdminBillingPlanChangeResponseDto>> {
    return this.responseService.success(
      {
        requestId: 'req_c7d8e9f0-a1b2-3456-cdef-789012345678',
        effectiveDate: '2026-05-01T00:00:00.000Z',
        proratedAmount: 12500,
      },
      AdminBillingPlanChangeResponseDto,
    );
  }

  @Post('/ai-time/purchase')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Purchase pre-paid AI credits (ADMX-026)' })
  @ApiSuccessResponse(AdminBillingAiTimePurchaseResponseDto)
  @ApiErrorResponse()
  async purchaseAiTime(
    @Body() _body: AdminBillingAiTimePurchaseRequestDto,
  ): Promise<AppResponseSuccess<AdminBillingAiTimePurchaseResponseDto>> {
    return this.responseService.success(
      {
        purchaseId: 'purch_a2b3c4d5-e6f7-8901-abcd-ef2345678901',
        status: AdminBillingAiTimePurchaseStatus.PENDING,
        stripeCheckoutUrl: 'https://checkout.stripe.com/pay/cs_test_def456ghi789',
        amountPaid: 14800,
      },
      AdminBillingAiTimePurchaseResponseDto,
    );
  }
}
