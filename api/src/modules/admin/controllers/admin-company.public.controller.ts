import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { AdminCompanyProfileUpdateRequestDto } from '../dtos/request/admin-company.profile.update.request.dto';

import { AdminCompanyAiUsageLimitSettingResponse, AdminCompanyProfileResponseDto } from '../dtos/response/admin-company.profile.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin Company')
@Controller({ path: '/admin/company' })
export class AdminCompanyPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch company profile/address (ADMX-017,018)' })
  @ApiSuccessResponse(AdminCompanyProfileResponseDto)
  @ApiErrorResponse()
  async getProfile(): Promise<AppResponseSuccess<AdminCompanyProfileResponseDto>> {
    return this.responseService.success(
      {
        id: 'f0e1d2c3-b4a5-9678-0fed-cba987654321',
        name: 'Acme Corporation',
        address: '1-2-3 Shinjuku, Shinjuku-ku, Tokyo 160-0022',
        contactPerson: 'Taro Yamada',
        contactPhone: '+81-3-1234-5678',
        contactEmail: 'contact@acme.com',
        billingEmail: 'billing@acme.com',
        recordingConsentMessage:
          'This meeting will be recorded for quality and training purposes.',
        aiUsageLimitSetting: AdminCompanyAiUsageLimitSettingResponse.AUTO_POSTPAID,
      },
      AdminCompanyProfileResponseDto,
    );
  }

  @Put('/profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update company official info (ADMX-018)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateProfile(
    @Body() _body: AdminCompanyProfileUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
