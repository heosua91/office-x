import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { AdminMasterDepartmentQueryDto } from '../dtos/request/admin-master-department.query.dto';
import { AdminMasterDepartmentCreateRequestDto } from '../dtos/request/admin-master-department.create.request.dto';
import { AdminMasterDepartmentUpdateRequestDto } from '../dtos/request/admin-master-department.update.request.dto';

import { AdminMasterDepartmentListResponseDto } from '../dtos/response/admin-master-department.list.response.dto';
import { AdminMasterDepartmentCreateResponseDto } from '../dtos/response/admin-master-department.create.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin Master Data')
@Controller({ path: '/admin/master' })
export class AdminMasterDataPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/DEPARTMENT')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch department master data (ADMX-004,006,010)' })
  @ApiSuccessResponse(AdminMasterDepartmentListResponseDto)
  @ApiErrorResponse()
  async listDepartments(
    @Query() _query: AdminMasterDepartmentQueryDto,
  ): Promise<AppResponseSuccess<AdminMasterDepartmentListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
            name: 'Engineering',
            parentId: undefined,
            isReject: false,
            rejectMessage: undefined,
            displayOrder: 1,
          },
          {
            id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
            name: 'Product',
            parentId: undefined,
            isReject: false,
            rejectMessage: undefined,
            displayOrder: 2,
          },
          {
            id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
            name: 'Restricted Contractors',
            parentId: undefined,
            isReject: true,
            rejectMessage: 'Visitors from this department require additional approval.',
            displayOrder: 3,
          },
        ],
        page: 1,
        limit: 20,
        total: 5,
      },
      AdminMasterDepartmentListResponseDto,
    );
  }

  @Post('/DEPARTMENT')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create new department master record (ADMX-010)' })
  @ApiSuccessResponse(AdminMasterDepartmentCreateResponseDto)
  @ApiErrorResponse()
  async createDepartment(
    @Body() _body: AdminMasterDepartmentCreateRequestDto,
  ): Promise<AppResponseSuccess<AdminMasterDepartmentCreateResponseDto>> {
    return this.responseService.success(
      { id: 'd4e5f6a7-b8c9-0123-def0-234567890123' },
      AdminMasterDepartmentCreateResponseDto,
    );
  }

  @Patch('/DEPARTMENT/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update master record (sort/name) (ADMX-010)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateDepartment(
    @Param('id') _id: string,
    @Body() _body: AdminMasterDepartmentUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Delete('/DEPARTMENT/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete master record if unused (ADMX-010)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async deleteDepartment(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
