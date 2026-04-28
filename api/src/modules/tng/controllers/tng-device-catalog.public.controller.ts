import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { TngDeviceCatalogListQueryDto } from '../dtos/request/tng-device-catalog.list.query.dto';
import { TngDeviceCatalogCreateRequestDto } from '../dtos/request/tng-device-catalog.create.request.dto';
import { TngDeviceCatalogUpdateRequestDto } from '../dtos/request/tng-device-catalog.update.request.dto';

import { TngDeviceCatalogListResponseDto } from '../dtos/response/tng-device-catalog.list.response.dto';
import { TngDeviceCatalogCreateResponseDto } from '../dtos/response/tng-device-catalog.create.response.dto';
import { TngSuccessResponseDto } from '../dtos/response/tng.success.response.dto';

@ApiTags('[Public] TNG Device Catalog')
@Controller({ path: '/tng/device-catalog' })
export class TngDeviceCatalogPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List hardware catalog entries (Tablet/Mic/Mount) (ADM-009)' })
  @ApiSuccessResponse(TngDeviceCatalogListResponseDto)
  @ApiErrorResponse()
  async listCatalog(
    @Query() _query: TngDeviceCatalogListQueryDto,
  ): Promise<AppResponseSuccess<TngDeviceCatalogListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'd1e2f3a4-b5c6-7890-def0-123456789012',
            modelName: 'iPad Pro 12.9"',
            type: 'tablet',
            rentalPriceJpy: 2500,
            purchasePriceJpy: 120000,
            specifications: { screen: '12.9 inch', storage: '256 GB' },
            isActive: true,
          },
          {
            id: 'd2e3f4a5-b6c7-8901-def0-234567890123',
            modelName: 'Rode NT-USB Mini',
            type: 'microphone',
            rentalPriceJpy: 800,
            purchasePriceJpy: 15000,
            specifications: { pattern: 'cardioid', frequency: '20Hz-20kHz' },
            isActive: true,
          },
        ],
        page: 1,
        limit: 20,
        total: 8,
      },
      TngDeviceCatalogListResponseDto,
    );
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register new catalog entry (ADM-009)' })
  @ApiSuccessResponse(TngDeviceCatalogCreateResponseDto)
  @ApiErrorResponse()
  async createCatalog(
    @Body() _body: TngDeviceCatalogCreateRequestDto,
  ): Promise<AppResponseSuccess<TngDeviceCatalogCreateResponseDto>> {
    return this.responseService.success(
      { id: 'd2e3f4a5-b6c7-8901-def0-234567890123' },
      TngDeviceCatalogCreateResponseDto,
    );
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update catalog entry name/pricing (ADM-009)' })
  @ApiSuccessResponse(TngSuccessResponseDto)
  @ApiErrorResponse()
  async updateCatalog(
    @Param('id') _id: string,
    @Body() _body: TngDeviceCatalogUpdateRequestDto,
  ): Promise<AppResponseSuccess<TngSuccessResponseDto>> {
    return this.responseService.success({ success: true }, TngSuccessResponseDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Soft-delete catalog entry (ADM-009)' })
  @ApiSuccessResponse(TngSuccessResponseDto)
  @ApiErrorResponse()
  async deleteCatalog(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<TngSuccessResponseDto>> {
    return this.responseService.success({ success: true }, TngSuccessResponseDto);
  }
}
