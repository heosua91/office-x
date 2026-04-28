import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
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

import { TngAiOverageBillingQueryDto } from '../dtos/request/tng-ai.overage-billing.query.dto';
import { TngAiApproveOverageRequestDto } from '../dtos/request/tng-ai.approve-overage.request.dto';

import { TngAiOverageBillingResponseDto } from '../dtos/response/tng-ai.overage-billing.response.dto';
import { TngAiApproveOverageResponseDto, TngApproveOverageSkipReason } from '../dtos/response/tng-ai.approve-overage.response.dto';

@ApiTags('[Public] TNG AI Overage')
@Controller({ path: '/tng/ai' })
export class TngAiPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/overage-billing')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List per-tenant AI overage billing aggregates for a month (ADM-012)' })
  @ApiSuccessResponse(TngAiOverageBillingResponseDto)
  @ApiErrorResponse()
  async listOverageBilling(
    @Query() _query: TngAiOverageBillingQueryDto,
  ): Promise<AppResponseSuccess<TngAiOverageBillingResponseDto>> {
    return this.responseService.success(
      {
        month: '2026-04',
        items: [
          {
            companyId: 'c1d2e3f4-a5b6-7890-cdef-123456789012',
            companyName: 'Acme Corporation',
            totalMinutes: 720,
            effectiveLimit: 600,
            overageMinutes: 120,
            unitPriceJpy: 50,
            amountJpy: 6000,
            alreadyBilled: false,
          },
          {
            companyId: 'c2d3e4f5-a6b7-8901-cdef-234567890123',
            companyName: 'Globex Ltd.',
            totalMinutes: 260,
            effectiveLimit: 200,
            overageMinutes: 60,
            unitPriceJpy: 50,
            amountJpy: 3000,
            alreadyBilled: true,
          },
        ],
        totals: {
          companyCount: 8,
          totalOverageMinutes: 960,
          totalAmountJpy: 48000,
        },
      },
      TngAiOverageBillingResponseDto,
    );
  }

  @Post('/approve-overage')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Approve and generate invoices for postpaid AI overages for filtered set (ADM-012)' })
  @ApiSuccessResponse(TngAiApproveOverageResponseDto)
  @ApiErrorResponse()
  async approveOverage(
    @Body() _body: TngAiApproveOverageRequestDto,
  ): Promise<AppResponseSuccess<TngAiApproveOverageResponseDto>> {
    return this.responseService.success(
      {
        billingMonth: '2026-04',
        filter: {
          companyKeyword: undefined,
          includeBilled: false,
        },
        approved: [
          {
            companyId: 'c1d2e3f4-a5b6-7890-cdef-123456789012',
            companyName: 'Acme Corporation',
            overageMinutes: 120,
            amountJpy: 6000,
            invoiceId: 'inv_a1b2c3d4e5f6mock',
            stripeInvoiceId: 'in_1AbCdEfGhIjKlMnOp',
          },
        ],
        skipped: [
          {
            companyId: 'c3d4e5f6-a7b8-9012-cdef-345678901234',
            reason: TngApproveOverageSkipReason.NO_OVERAGE,
          },
        ],
        failed: [],
        totals: {
          approvedCount: 5,
          skippedCount: 2,
          failedCount: 0,
          totalAmountJpy: 30000,
        },
      },
      TngAiApproveOverageResponseDto,
    );
  }
}
