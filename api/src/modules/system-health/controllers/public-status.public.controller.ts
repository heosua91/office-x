import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { PublicSystemStatusResponseDto } from '../dtos/response/public-status.system-status.response.dto';

@ApiTags('[Public] System Status')
@Controller({ path: '/public' })
export class PublicStatusPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/system-status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch maintenance status and scheduled end time. Public endpoint, no JWT. (ERR-004)' })
  @ApiSuccessResponse(PublicSystemStatusResponseDto)
  @ApiErrorResponse()
  async getSystemStatus(): Promise<AppResponseSuccess<PublicSystemStatusResponseDto>> {
    return this.responseService.success(
      {
        active: false,
        endTime: undefined,
        message: undefined,
      },
      PublicSystemStatusResponseDto
    );
  }
}
