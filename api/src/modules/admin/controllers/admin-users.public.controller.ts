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

import { AdminUsersListQueryDto } from '../dtos/request/admin-users.list.query.dto';
import { AdminUserCreateRequestDto } from '../dtos/request/admin-users.create.request.dto';
import { AdminUserUpdateRequestDto } from '../dtos/request/admin-users.update.request.dto';
import { AdminUserPasswordResetRequestDto } from '../dtos/request/admin-users.password-reset.request.dto';
import { AdminUsersImportRequestDto } from '../dtos/request/admin-users.import.request.dto';
import { AdminBillingSlotsAddRequestDto } from '../dtos/request/admin-billing-slots.add.request.dto';

import { AdminUsersSlotsInfoResponseDto } from '../dtos/response/admin-users.slots-info.response.dto';
import { AdminBillingSlotsAddResponseDto } from '../dtos/response/admin-billing-slots.add.response.dto';
import { AdminUsersListResponseDto } from '../dtos/response/admin-users.list.response.dto';
import { AdminUserCreateResponseDto } from '../dtos/response/admin-users.create.response.dto';
import { AdminUsersImportResponseDto } from '../dtos/response/admin-users.import.response.dto';
import { AdminUserDetailResponseDto } from '../dtos/response/admin-users.detail.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin Users')
@Controller({ path: '/admin' })
export class AdminUsersPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/users/slots/info')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch user-seat quota summary (used / limit / available) (ADMX-004-1)' })
  @ApiSuccessResponse(AdminUsersSlotsInfoResponseDto)
  @ApiErrorResponse()
  async getSlotsInfo(): Promise<AppResponseSuccess<AdminUsersSlotsInfoResponseDto>> {
    return this.responseService.success(
      {
        activeUsers: 18,
        planUserLimit: 25,
        userLimitOverride: 30,
        effectiveLimit: 30,
        available: 12,
        planPriceMonthly: 49.0,
      },
      AdminUsersSlotsInfoResponseDto,
    );
  }

  @Post('/billing/slots/add')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request adding additional user seats (prorated billing) (ADMX-004-1)' })
  @ApiSuccessResponse(AdminBillingSlotsAddResponseDto)
  @ApiErrorResponse()
  async addSlots(
    @Body() _body: AdminBillingSlotsAddRequestDto,
  ): Promise<AppResponseSuccess<AdminBillingSlotsAddResponseDto>> {
    return this.responseService.success(
      {
        requestId: 'req_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        requestedQuantity: 5,
        proratedAmount: 12.5,
        newEffectiveLimit: 35,
      },
      AdminBillingSlotsAddResponseDto,
    );
  }

  @Get('/users')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List/search users with filter + pagination (ADMX-003)' })
  @ApiSuccessResponse(AdminUsersListResponseDto)
  @ApiErrorResponse()
  async listUsers(
    @Query() _query: AdminUsersListQueryDto,
  ): Promise<AppResponseSuccess<AdminUsersListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
            fullName: 'John Smith',
            email: 'john.smith@acme.com',
            userCode: 'USR-0042',
            role: 'staff',
            status: 'active',
            departmentName: 'Engineering',
            lastLoginAt: '2026-04-20T08:30:00.000Z',
          },
          {
            id: 'c4d5e6f7-a8b9-0123-cdef-234567890123',
            fullName: 'Emily Chen',
            email: 'emily.chen@acme.com',
            userCode: 'USR-0043',
            role: 'manager',
            status: 'active',
            departmentName: 'Product',
            lastLoginAt: '2026-04-24T09:15:00.000Z',
          },
        ],
        page: 1,
        limit: 20,
        total: 42,
      },
      AdminUsersListResponseDto,
    );
  }

  @Post('/users')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create new user (ADMX-005, ADMX-004 form commit)' })
  @ApiSuccessResponse(AdminUserCreateResponseDto)
  @ApiErrorResponse()
  async createUser(
    @Body() _body: AdminUserCreateRequestDto,
  ): Promise<AppResponseSuccess<AdminUserCreateResponseDto>> {
    return this.responseService.success(
      {
        id: 'c5d6e7f8-a9b0-1234-cdef-345678901234',
        userCode: 'USR-0044',
      },
      AdminUserCreateResponseDto,
    );
  }

  @Post('/users/import')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Bulk import users from CSV (ADMX-003)' })
  @ApiSuccessResponse(AdminUsersImportResponseDto)
  @ApiErrorResponse()
  async importUsers(
    @Body() _body: AdminUsersImportRequestDto,
  ): Promise<AppResponseSuccess<AdminUsersImportResponseDto>> {
    return this.responseService.success(
      { jobId: 'job_b2c3d4e5f6a7mock' },
      AdminUsersImportResponseDto,
    );
  }

  @Get('/users/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve detailed info for specific user (incl. webhook + permission fields) (ADMX-006)' })
  @ApiSuccessResponse(AdminUserDetailResponseDto)
  @ApiErrorResponse()
  async getUser(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminUserDetailResponseDto>> {
    return this.responseService.success(
      {
        id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
        fullName: 'John Smith',
        email: 'john.smith@acme.com',
        userCode: 'USR-0042',
        role: 'staff',
        status: 'active',
        departmentId: 'd4e5f6a7-b8c9-0123-def0-234567890123',
        departmentName: 'Engineering',
        accessDepartmentIds: ['d4e5f6a7-b8c9-0123-def0-234567890123'],
        viewAllInfo: false,
        webhookUrl: 'https://hooks.example.com/user-events',
        proxyWebhookUrl: undefined,
        mustResetPassword: false,
        lastLoginAt: '2026-04-20T08:30:00.000Z',
      },
      AdminUserDetailResponseDto,
    );
  }

  @Put('/users/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update user profile/permissions/webhook (ADMX-006)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateUser(
    @Param('id') _id: string,
    @Body() _body: AdminUserUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Delete('/users/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Soft-delete a user (ADMX-006)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async deleteUser(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Put('/users/:id/password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset/change user password (ADMX-006)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async resetUserPassword(
    @Param('id') _id: string,
    @Body() _body: AdminUserPasswordResetRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
