import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { CompaniesSearchQueryDto } from '../dtos/request/companies-search.query.dto';
import { CompaniesSearchResponseDto } from '../dtos/response/companies-search.response.dto';

@ApiTags('[Public] Companies')
@Controller({ path: '/companies' })
export class CompaniesSearchPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/search')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search existing client companies for ad-hoc booking (ENTR-003)' })
  @ApiSuccessResponse(CompaniesSearchResponseDto)
  @ApiErrorResponse()
  async searchCompanies(
    @Query() _query: CompaniesSearchQueryDto,
  ): Promise<AppResponseSuccess<CompaniesSearchResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'c1d2e3f4-a5b6-7890-cdef-012345678901',
            name: 'Acme Corporation',
            address: '123 Business Ave, Suite 100, New York, NY 10001',
            contactPerson: 'Bob Martinez',
            industry: 'Technology',
          },
          {
            id: 'd2e3f4a5-b6c7-8901-defa-123456789012',
            name: 'Acme Logistics',
            address: '456 Commerce St, Chicago, IL 60601',
            contactPerson: 'Sarah Kim',
            industry: 'Logistics',
          },
        ],
      },
      CompaniesSearchResponseDto,
    );
  }
}
