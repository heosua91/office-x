import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { TngSettingsPolicyUpdateRequestDto } from '../dtos/request/tng-settings.policy-update.request.dto';

import { TngSettingsPolicyResponseDto, TngOverdraftActionResponse } from '../dtos/response/tng-settings.policy.response.dto';
import { TngSuccessResponseDto } from '../dtos/response/tng.success.response.dto';

@ApiTags('[Public] TNG Settings')
@Controller({ path: '/tng/settings' })
export class TngSettingsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/policy')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch current global AI limit policy (ADM-011)' })
  @ApiSuccessResponse(TngSettingsPolicyResponseDto)
  @ApiErrorResponse()
  async getPolicy(): Promise<AppResponseSuccess<TngSettingsPolicyResponseDto>> {
    return this.responseService.success(
      {
        limiterEnabled: true,
        overdraftAction: TngOverdraftActionResponse.AUTO_POSTPAID,
      },
      TngSettingsPolicyResponseDto,
    );
  }

  @Patch('/policy')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Set global AI limit policies (ADM-011)' })
  @ApiSuccessResponse(TngSuccessResponseDto)
  @ApiErrorResponse()
  async updatePolicy(
    @Body() _body: TngSettingsPolicyUpdateRequestDto,
  ): Promise<AppResponseSuccess<TngSuccessResponseDto>> {
    return this.responseService.success({ success: true }, TngSuccessResponseDto);
  }
}
