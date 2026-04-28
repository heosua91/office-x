import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { SystemPlansQueryDto } from '../dtos/request/system.plans.query.dto';
import { SystemPromoVerifyQueryDto } from '../dtos/request/system.promo-verify.query.dto';
import { SystemTermsResponseDto } from '../dtos/response/system.terms.response.dto';
import { SystemPlanResponseDto } from '../dtos/response/system.plan.response.dto';
import { SystemPromoVerifyResponseDto } from '../dtos/response/system.promo-verify.response.dto';

@ApiTags('[Public] System')
@Controller({ path: '/system' })
export class SystemPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/terms')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch latest Terms of Use and Privacy Policy (REG-001)' })
  @ApiSuccessResponse(SystemTermsResponseDto)
  @ApiErrorResponse()
  async getTerms(): Promise<AppResponseSuccess<SystemTermsResponseDto>> {
    return this.responseService.success(
      {
        termsContent:
          'Welcome to OfficeX. These Terms of Use govern your use of the OfficeX platform and related services. By accessing or using our services, you agree to be bound by these terms. Please read them carefully before proceeding with registration.',
        privacyPolicyContent:
          'OfficeX Privacy Policy: We are committed to protecting your personal data. This policy explains what data we collect, how we use it, and your rights under applicable data protection regulations including GDPR.',
        termsVersion: 'v2.1.0',
        privacyVersion: 'v1.3.0',
        publishedAt: '2025-01-01T00:00:00.000Z',
      },
      SystemTermsResponseDto
    );
  }

  @Get('/plans')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List active subscription plans (REG-007)' })
  @ApiSuccessResponse(SystemPlanResponseDto, true)
  @ApiErrorResponse()
  async getPlans(
    @Query() _query: SystemPlansQueryDto
  ): Promise<AppResponseSuccess<SystemPlanResponseDto[]>> {
    return this.responseService.success(
      [
        {
          id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
          name: 'Starter',
          code: 'starter',
          priceMonthly: 19.99,
          userLimit: 10,
          aiMinutesLimit: 120,
          features: ['Room booking', 'Basic analytics', 'Email support'],
          isSpecial: false,
        },
        {
          id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
          name: 'Professional',
          code: 'professional',
          priceMonthly: 49.99,
          userLimit: 50,
          aiMinutesLimit: 600,
          features: ['Room booking', 'Analytics dashboard', 'AI assistant', 'Priority support'],
          isSpecial: false,
        },
        {
          id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
          name: 'Enterprise',
          code: 'enterprise',
          priceMonthly: 0,
          userLimit: 0,
          aiMinutesLimit: 0,
          features: ['Unlimited rooms', 'Custom analytics', 'Dedicated AI', 'SLA support', 'Custom integrations'],
          isSpecial: true,
        },
      ],
      SystemPlanResponseDto
    );
  }

  @Get('/plans/promotions/verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validate promotion code (REG-007)' })
  @ApiSuccessResponse(SystemPromoVerifyResponseDto)
  @ApiErrorResponse()
  async verifyPromotion(
    @Query() _query: SystemPromoVerifyQueryDto
  ): Promise<AppResponseSuccess<SystemPromoVerifyResponseDto>> {
    return this.responseService.success(
      {
        valid: true,
        discountType: 'percentage',
        discountValue: 20,
        validFrom: '2025-01-01T00:00:00.000Z',
        validTo: '2025-12-31T23:59:59.000Z',
      },
      SystemPromoVerifyResponseDto
    );
  }
}
