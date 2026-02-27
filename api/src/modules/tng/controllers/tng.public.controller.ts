import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { TngCreateCompanyRequestDto } from '../dtos/request/tng.request.dto';
import { TngAnalyticsResponseDto, TngCompanyResponseDto } from '../dtos/response/tng.response.dto';
import { TngSuccessResponseDto } from '../dtos/response/tng.success.response.dto';

@ApiTags('[Public] TNG Admin')
@Controller({
  path: '/tng',
})
export class TngPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/analytics')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch cross-company metrics' })
  @ApiSuccessResponse(TngAnalyticsResponseDto)
  @ApiErrorResponse()
  async getAnalytics(): Promise<AppResponseSuccess<TngAnalyticsResponseDto>> {
    return this.responseService.success(
      {
        totalCompanies: 100,
        totalActiveUsers: 5000,
        totalRevenueThisMonth: 150000,
      },
      TngAnalyticsResponseDto
    );
  }

  @Get('/companies')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List all client companies' })
  @ApiSuccessResponse(TngCompanyResponseDto, true)
  @ApiErrorResponse()
  async getCompanies(): Promise<AppResponseSuccess<TngCompanyResponseDto[]>> {
    return this.responseService.success(
      [
        { id: 1, name: 'Company A', status: 'ACTIVE', plan: 'Enterprise' },
        { id: 2, name: 'Company B', status: 'SUSPENDED', plan: 'Pro' },
      ],
      TngCompanyResponseDto
    );
  }

  @Post('/companies')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create/Onboard a new client company' })
  @ApiSuccessResponse(TngSuccessResponseDto)
  @ApiErrorResponse()
  async createCompany(
    @Body() _body: TngCreateCompanyRequestDto
  ): Promise<AppResponseSuccess<TngSuccessResponseDto>> {
    return this.responseService.success({ success: true }, TngSuccessResponseDto);
  }

  @Get('/billing/reconciliation')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Summary of all billing statements' })
  @ApiSuccessResponse(TngSuccessResponseDto)
  @ApiErrorResponse()
  async getBillingReconciliation(): Promise<AppResponseSuccess<TngSuccessResponseDto>> {
    return this.responseService.success({ success: true }, TngSuccessResponseDto);
  }
}
