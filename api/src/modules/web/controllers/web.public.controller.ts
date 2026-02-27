import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

@ApiTags('Web')
@Controller({
  path: '/',
})
export class WebPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get()
  async index(): Promise<AppResponseSuccess<{ message: string }>> {
    return this.responseService.success({ message: 'OfficeX API' });
  }

  @Get('health')
  @ApiOperation({ summary: 'Get health status' })
  @ApiSuccessResponse(String)
  @ApiErrorResponse()
  async health(): Promise<AppResponseSuccess<string>> {
    return this.responseService.success('OK');
  }
}
