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

import { AdminDictionaryListQueryDto } from '../dtos/request/admin-dictionary.list.query.dto';
import { AdminDictionaryCreateRequestDto } from '../dtos/request/admin-dictionary.create.request.dto';
import { AdminDictionaryUpdateRequestDto } from '../dtos/request/admin-dictionary.update.request.dto';

import { AdminDictionaryListResponseDto } from '../dtos/response/admin-dictionary.list.response.dto';
import { AdminDictionaryCreateResponseDto } from '../dtos/response/admin-dictionary.create.response.dto';
import { AdminDictionaryExportResponseDto } from '../dtos/response/admin-dictionary.export.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin Dictionary')
@Controller({ path: '/admin/dictionary' })
export class AdminDictionaryPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List company-wide dictionary terms (ADMX-032)' })
  @ApiSuccessResponse(AdminDictionaryListResponseDto)
  @ApiErrorResponse()
  async listDictionary(
    @Query() _query: AdminDictionaryListQueryDto,
  ): Promise<AppResponseSuccess<AdminDictionaryListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'c4d5e6f7-a8b9-0123-cdef-234567890456',
            phrase: 'OfficeX',
            reading: 'オフィスエックス',
            category: 'product_name',
            frequencyCount: 14,
            isApproved: true,
            scope: 'organization',
          },
          {
            id: 'd5e6f7a8-b9c0-1234-def0-345678901234',
            phrase: 'Acme Corporation',
            reading: undefined,
            category: 'company_name',
            frequencyCount: 38,
            isApproved: true,
            scope: 'organization',
          },
          {
            id: 'e6f7a8b9-c0d1-2345-ef01-456789012345',
            phrase: 'KPI',
            reading: 'ケーピーアイ',
            category: 'abbreviation',
            frequencyCount: 7,
            isApproved: false,
            scope: 'organization',
          },
        ],
        page: 1,
        limit: 20,
        total: 38,
      },
      AdminDictionaryListResponseDto,
    );
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register new organization dictionary term (ADMX-032)' })
  @ApiSuccessResponse(AdminDictionaryCreateResponseDto)
  @ApiErrorResponse()
  async createTerm(
    @Body() _body: AdminDictionaryCreateRequestDto,
  ): Promise<AppResponseSuccess<AdminDictionaryCreateResponseDto>> {
    return this.responseService.success(
      { id: 'f7a8b9c0-d1e2-3456-f012-567890123456' },
      AdminDictionaryCreateResponseDto,
    );
  }

  @Get('/export')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Export dictionary to CSV (ADMX-032)' })
  @ApiSuccessResponse(AdminDictionaryExportResponseDto)
  @ApiErrorResponse()
  async exportDictionary(): Promise<AppResponseSuccess<AdminDictionaryExportResponseDto>> {
    return this.responseService.success(
      { downloadUrl: 'https://signed.example.com/dictionary-export.csv' },
      AdminDictionaryExportResponseDto,
    );
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update term (ADMX-032)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateTerm(
    @Param('id') _id: string,
    @Body() _body: AdminDictionaryUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Soft-delete term (ADMX-032)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async deleteTerm(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
