import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { AuthRegisterRequestCodeRequestDto } from '../dtos/request/auth.register-request-code.request.dto';
import { AuthRegisterVerifyCodeRequestDto } from '../dtos/request/auth.register-verify-code.request.dto';
import { AuthRegisterResendCodeRequestDto } from '../dtos/request/auth.register-resend-code.request.dto';
import { AuthRegisterCheckoutRequestDto } from '../dtos/request/auth.register-checkout.request.dto';
import { AuthRegisterStatusQueryDto } from '../dtos/request/auth.register-status.query.dto';
import { AuthLoginRequestDto } from '../dtos/request/auth.login.request.dto';
import { AuthTngLoginRequestDto } from '../dtos/request/auth.tng-login.request.dto';
import { AuthPasswordResetRequestDto } from '../dtos/request/auth.password-reset-request.request.dto';
import { AuthPasswordResetConfirmRequestDto } from '../dtos/request/auth.password-reset-confirm.request.dto';
import { AuthConsentRequestDto } from '../dtos/request/auth.consent.request.dto';
import { AuthResetPasswordFirstTimeRequestDto } from '../dtos/request/auth.reset-password-first-time.request.dto';
import { AuthSuccessResponseDto } from '../dtos/response/auth.success.response.dto';
import { AuthRegisterVerifyCodeResponseDto } from '../dtos/response/auth.register-verify-code.response.dto';
import { AuthRegisterCheckoutResponseDto } from '../dtos/response/auth.register-checkout.response.dto';
import { AuthRegisterStatusResponseDto, RegistrationStatus } from '../dtos/response/auth.register-status.response.dto';
import { AuthLoginResponseDto } from '../dtos/response/auth.login.response.dto';
import { PaymentMethod } from '../dtos/request/auth.register-checkout.request.dto';

@ApiTags('[Public] Auth')
@Controller({ path: '/auth' })
export class AuthPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/register/request-code')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request 6-digit verification code to email (REG-002)' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async requestCode(
    @Body() _body: AuthRegisterRequestCodeRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/register/verify-code')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validate 6-digit code (REG-004)' })
  @ApiSuccessResponse(AuthRegisterVerifyCodeResponseDto)
  @ApiErrorResponse()
  async verifyCode(
    @Body() _body: AuthRegisterVerifyCodeRequestDto
  ): Promise<AppResponseSuccess<AuthRegisterVerifyCodeResponseDto>> {
    return this.responseService.success(
      {
        verificationToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.verify_token',
        expiresInSeconds: 900,
      },
      AuthRegisterVerifyCodeResponseDto
    );
  }

  @Post('/register/resend-code')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Resend 6-digit verification code (REG-004)' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async resendCode(
    @Body() _body: AuthRegisterResendCodeRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/register/checkout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Commit registration + Stripe Checkout/Invoice (REG-008)' })
  @ApiSuccessResponse(AuthRegisterCheckoutResponseDto)
  @ApiErrorResponse()
  async checkout(
    @Body() _body: AuthRegisterCheckoutRequestDto
  ): Promise<AppResponseSuccess<AuthRegisterCheckoutResponseDto>> {
    return this.responseService.success(
      {
        redirectUrl: 'https://checkout.stripe.com/pay/cs_test_mock_session_id',
        registrationToken: 'reg_token_mock_abc123',
      },
      AuthRegisterCheckoutResponseDto
    );
  }

  @Get('/register/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch registration completion status after Stripe redirect (REG-009)' })
  @ApiSuccessResponse(AuthRegisterStatusResponseDto)
  @ApiErrorResponse()
  async getRegisterStatus(
    @Query() _query: AuthRegisterStatusQueryDto
  ): Promise<AppResponseSuccess<AuthRegisterStatusResponseDto>> {
    return this.responseService.success(
      {
        status: RegistrationStatus.ACTIVE,
        paymentMethod: PaymentMethod.CREDIT_CARD,
        nextBillingDate: '2025-05-25T00:00:00.000Z',
      },
      AuthRegisterStatusResponseDto
    );
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User/Admin login — returns JWT (AUTH-001)' })
  @ApiSuccessResponse(AuthLoginResponseDto)
  @ApiErrorResponse()
  async login(
    @Body() _body: AuthLoginRequestDto
  ): Promise<AppResponseSuccess<AuthLoginResponseDto>> {
    return this.responseService.success(
      {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.access_token',
        tokenType: 'Bearer',
        expiresIn: 3600,
        requireConsent: false,
        requirePasswordReset: false,
      },
      AuthLoginResponseDto
    );
  }

  @Post('/tng/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'TNG Super-Admin login (AUTH-002)' })
  @ApiSuccessResponse(AuthLoginResponseDto)
  @ApiErrorResponse()
  async tngLogin(
    @Body() _body: AuthTngLoginRequestDto
  ): Promise<AppResponseSuccess<AuthLoginResponseDto>> {
    return this.responseService.success(
      {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.tng_access_token',
        tokenType: 'Bearer',
        expiresIn: 3600,
        requireConsent: false,
        requirePasswordReset: false,
      },
      AuthLoginResponseDto
    );
  }

  @Post('/password-reset/request')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request password reset email (AUTH-003)' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async requestPasswordReset(
    @Body() _body: AuthPasswordResetRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/password-reset/confirm')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Confirm password reset with token + new password (AUTH-005)' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async confirmPasswordReset(
    @Body() _body: AuthPasswordResetConfirmRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/consent')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Record consent to latest Terms/Privacy version (AUTH-007)' })
  @ApiSuccessResponse(AuthSuccessResponseDto)
  @ApiErrorResponse()
  async recordConsent(
    @Body() _body: AuthConsentRequestDto
  ): Promise<AppResponseSuccess<AuthSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AuthSuccessResponseDto);
  }

  @Post('/reset-password-first-time')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Force first-time password reset for proxy-created accounts (AUTH-008)' })
  @ApiSuccessResponse(AuthLoginResponseDto)
  @ApiErrorResponse()
  async resetPasswordFirstTime(
    @Body() _body: AuthResetPasswordFirstTimeRequestDto
  ): Promise<AppResponseSuccess<AuthLoginResponseDto>> {
    return this.responseService.success(
      {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.new_access_token',
        tokenType: 'Bearer',
        expiresIn: 3600,
        requireConsent: false,
        requirePasswordReset: false,
      },
      AuthLoginResponseDto
    );
  }
}
