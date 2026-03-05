import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { AuthLoginRequestDto } from '../dtos/request/auth.login.request.dto';
import { AuthPasswordResetConfirmRequestDto } from '../dtos/request/auth.password-reset-confirm.request.dto';
import { AuthPasswordResetRequestDto } from '../dtos/request/auth.password-reset-request.request.dto';
import { AuthProfileUpdateRequestDto } from '../dtos/request/auth.profile-update.request.dto';
import { AuthRegisterCheckPromoRequestDto } from '../dtos/request/auth.register-check-promo.request.dto';
import { AuthRegisterCompanyRequestDto } from '../dtos/request/auth.register-company.request.dto';
import { AuthRegisterPaymentRequestDto } from '../dtos/request/auth.register-payment.request.dto';
import { AuthVerifyCodeRequestDto } from '../dtos/request/auth.verify-code.request.dto';
import { AuthVerifyEmailRequestDto } from '../dtos/request/auth.verify-email.request.dto';
import { AuthLoginResponseDto } from '../dtos/response/auth.login.response.dto';
import { AuthPlanResponseDto } from '../dtos/response/auth.plans.response.dto';
import { AuthSuccessResponseDto } from '../dtos/response/auth.success.response.dto';
import { AuthTermsResponseDto } from '../dtos/response/auth.terms.response.dto';

@ApiTags('[Public] Auth')
@Controller({
  path: '/auth',
})
export class AuthPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/register/verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send 6-digit verification code to email' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async verifyEmail(
    @Body() _body: AuthVerifyEmailRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/register/verify-code')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validate 6-digit code against DB' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async verifyCode(
    @Body() _body: AuthVerifyCodeRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Get('/register/terms')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch Terms & Conditions and Privacy Policy' })
  @ApiSuccessResponse(AuthTermsResponseDto)
  @ApiErrorResponse()
  async getTerms(): Promise<AppResponseSuccess<AuthTermsResponseDto>> {
    return this.responseService.success(
      {
        termsContent: 'Terms and Conditions content...',
        privacyPolicyContent: 'Privacy Policy content...',
        version: 'v1.0.0',
      },
      AuthTermsResponseDto
    );
  }

  @Post('/register/company')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Initial company & first admin registration' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async registerCompany(
    @Body() _body: AuthRegisterCompanyRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Get('/register/plans')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch available subscription plans' })
  @ApiSuccessResponse(AuthPlanResponseDto, true)
  @ApiErrorResponse()
  async getPlans(): Promise<AppResponseSuccess<AuthPlanResponseDto[]>> {
    return this.responseService.success(
      [
        {
          id: 1,
          name: 'Starter',
          description: 'Best for small teams',
          price: 0,
          currency: 'USD',
          features: ['Up to 5 users', 'Basic AI summaries'],
        },
        {
          id: 2,
          name: 'Pro',
          description: 'Best for growing businesses',
          price: 49,
          currency: 'USD',
          features: ['Up to 20 users', 'Advanced AI analytics', 'Priority support'],
        },
      ],
      AuthPlanResponseDto
    );
  }

  @Post('/register/check-promo')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validate promotion code during registration' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async checkPromo(
    @Body() _body: AuthRegisterCheckPromoRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/register/payment')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register payment method via service (Paid)' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async registerPayment(
    @Body() _body: AuthRegisterPaymentRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/register/finalize')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Finalize registration & trigger onboarding email' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async finalizeRegistration(): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User/Admin login' })
  @ApiSuccessResponse(AuthLoginResponseDto)
  @ApiErrorResponse()
  async login(
    @Body() _body: AuthLoginRequestDto
  ): Promise<AppResponseSuccess<AuthLoginResponseDto>> {
    return this.responseService.success(
      {
        accessToken: 'mock-jwt-token',
        tokenType: 'Bearer',
        expiresIn: 3600,
      },
      AuthLoginResponseDto
    );
  }

  @Patch('/profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update user profile details and password' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async updateProfile(
    @Body() _body: AuthProfileUpdateRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/password-reset/request')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request reset link via email' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async requestPasswordReset(
    @Body() _body: AuthPasswordResetRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/password-reset/confirm')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Set new password using token' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async confirmPasswordReset(
    @Body() _body: AuthPasswordResetConfirmRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }
}
