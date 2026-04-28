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

import { TngPlansListQueryDto } from '../dtos/request/tng-plans.list.query.dto';
import { TngPlanUpsertRequestDto } from '../dtos/request/tng-plans.upsert.request.dto';

import { TngPlansListResponseDto } from '../dtos/response/tng-plans.list.response.dto';
import { TngPlanUpsertResponseDto } from '../dtos/response/tng-plans.upsert.response.dto';

@ApiTags('[Public] TNG Plans')
@Controller({ path: '/tng/plans' })
export class TngPlansPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List global subscription tiers (ADM-006)' })
  @ApiSuccessResponse(TngPlansListResponseDto)
  @ApiErrorResponse()
  async listPlans(
    @Query() _query: TngPlansListQueryDto,
  ): Promise<AppResponseSuccess<TngPlansListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
            name: 'Enterprise',
            code: 'enterprise-v3',
            priceMonthly: 49800,
            userLimit: 50,
            aiMinutesLimit: 600,
            features: ['reception', 'meeting_room', 'ai_summary'],
            audioRetentionDays: 90,
            isSpecial: false,
            activeSubscriberCount: 12,
            isDeleted: false,
          },
          {
            id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
            name: 'Standard',
            code: 'standard-v2',
            priceMonthly: 19800,
            userLimit: 20,
            aiMinutesLimit: 200,
            features: ['reception', 'meeting_room'],
            audioRetentionDays: 30,
            isSpecial: false,
            activeSubscriberCount: 28,
            isDeleted: false,
          },
        ],
      },
      TngPlansListResponseDto,
    );
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create or update plan and sync to Stripe Price (ADM-007)' })
  @ApiSuccessResponse(TngPlanUpsertResponseDto)
  @ApiErrorResponse()
  async upsertPlan(
    @Body() _body: TngPlanUpsertRequestDto,
  ): Promise<AppResponseSuccess<TngPlanUpsertResponseDto>> {
    return this.responseService.success(
      {
        plan: {
          id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
          name: 'Enterprise',
          priceMonthly: 49800,
        },
        stripePriceId: 'price_1AbCdEfGhIjKlMnOp2QrStUv',
        batchApplyJobId: undefined,
      },
      TngPlanUpsertResponseDto,
    );
  }
}
