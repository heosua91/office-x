import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { TngComplianceVersionRequestDto } from '../dtos/request/tng-compliance.version.request.dto';

import { TngComplianceVersionResponseDto } from '../dtos/response/tng-compliance.version.response.dto';

@ApiTags('[Public] TNG Compliance')
@Controller({ path: '/tng/compliance' })
export class TngCompliancePublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/versions')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Upload and publish new Terms/Privacy Policy version (ADM-013)' })
  @ApiSuccessResponse(TngComplianceVersionResponseDto)
  @ApiErrorResponse()
  async publishVersion(
    @Body() _body: TngComplianceVersionRequestDto,
  ): Promise<AppResponseSuccess<TngComplianceVersionResponseDto>> {
    return this.responseService.success(
      {
        id: 'v1a2b3c4-d5e6-7890-abcd-ef1234567890',
        docType: 'terms_of_use',
        version: '2.1.0',
        effectiveDate: '2026-06-01',
        isActive: true,
      },
      TngComplianceVersionResponseDto,
    );
  }
}
