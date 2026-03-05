import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { AdminPaymentMethodRequestDto, AdminPurchaseUserSlotsRequestDto, AdminUpdateBillingLimitRequestDto } from '../dtos/request/admin.billing.request.dto';
import { AdminCreateMonitoringRuleRequestDto } from '../dtos/request/admin.monitoring.request.dto';
import {
  AdminBuyAiCreditsRequestDto,
  AdminCreateRoomRequestDto,
  AdminCreateUserRequestDto,
  AdminUpdateBrandingRequestDto,
} from '../dtos/request/admin.request.dto';
import {
  AdminBillingStatusResponseDto,
  AdminInvoiceResponseDto,
} from '../dtos/response/admin.billing.response.dto';
import { AdminDashboardResponseDto } from '../dtos/response/admin.dashboard.response.dto';
import { AdminImportLogResponseDto, AdminRoomResponseDto, AdminUserResponseDto } from '../dtos/response/admin.management.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';
import { AdminVisitLogResponseDto } from '../dtos/response/admin.visit-logs.response.dto';

@ApiTags('[Public] Admin')
@Controller({
  path: '/admin',
})
export class AdminPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/dashboard')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'High-level analytics for the entire organization' })
  @ApiSuccessResponse(AdminDashboardResponseDto)
  @ApiErrorResponse()
  async getDashboard(): Promise<AppResponseSuccess<AdminDashboardResponseDto>> {
    return this.responseService.success(
      {
        totalUsers: 50,
        totalRooms: 10,
        aiUsageThisMonth: 450,
        activeMeetings: 5,
      },

      AdminDashboardResponseDto
    );
  }

  @Get('/users')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List company employees' })
  @ApiSuccessResponse(AdminUserResponseDto, true)
  @ApiErrorResponse()
  async getUsers(): Promise<AppResponseSuccess<AdminUserResponseDto[]>> {
    return this.responseService.success(
      [
        { id: 1, name: 'Admin User', email: 'admin@tqa.com', role: 'ADMIN' },
        { id: 2, name: 'Regular User', email: 'user@tqa.com', role: 'USER' },
      ],
      AdminUserResponseDto
    );
  }

  @Post('/users')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create company employee' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async createUser(
    @Body() _body: AdminCreateUserRequestDto
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Post('/users/import')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Bulk import users via CSV' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async importUsers(): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Get('/users/import/history')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List CSV import history' })
  @ApiSuccessResponse(AdminImportLogResponseDto, true)
  @ApiErrorResponse()
  async getImportHistory(): Promise<AppResponseSuccess<AdminImportLogResponseDto[]>> {
    return this.responseService.success(
      [
        {
          id: 1,
          fileName: 'users.csv',
          status: 'COMPLETED',
          processedCount: 100,
          errorCount: 0,
          createdAt: new Date(),
        },
      ],
      AdminImportLogResponseDto
    );
  }

  @Get('/rooms')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List meeting rooms' })
  @ApiSuccessResponse(AdminRoomResponseDto, true)
  @ApiErrorResponse()
  async getRooms(): Promise<AppResponseSuccess<AdminRoomResponseDto[]>> {
    return this.responseService.success(
      [{ id: 1, name: 'Room A', floor: '1F', capacity: 10, qrCodeUrl: 'https://qr.com/...' }],
      AdminRoomResponseDto
    );
  }

  @Post('/rooms')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create meeting room' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async createRoom(
    @Body() _body: AdminCreateRoomRequestDto
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Get('/master/:type')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'CRUD for Departments, Tools, Floors, Contractors' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async getMasterData(
    @Param('type') _type: string
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Patch('/settings/branding')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update logos, backgrounds, and signage slides' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateBranding(
    @Body() _body: AdminUpdateBrandingRequestDto
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Get('/billing/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'View current plan, AI quota, and overage fees' })
  @ApiSuccessResponse(AdminBillingStatusResponseDto)
  @ApiErrorResponse()
  async getBillingStatus(): Promise<AppResponseSuccess<AdminBillingStatusResponseDto>> {
    return this.responseService.success(
      {
        currentPlan: 'Pro',
        aiQuotaLimit: 1000,
        aiQuotaUsed: 450,
        nextBillingDate: new Date(),
      },
      AdminBillingStatusResponseDto
    );
  }

  @Get('/billing/invoices')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List monthly PDF invoices' })
  @ApiSuccessResponse(AdminInvoiceResponseDto, true)
  @ApiErrorResponse()
  async getInvoices(): Promise<AppResponseSuccess<AdminInvoiceResponseDto[]>> {
    return this.responseService.success(
      [{ id: 'INV-001', date: new Date(), amount: 49, pdfUrl: 'https://inv.pdf' }],
      AdminInvoiceResponseDto
    );
  }

  @Post('/billing/ai-credits')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Purchase pre-paid AI minutes' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async buyAiCredits(
    @Body() _body: AdminBuyAiCreditsRequestDto
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Patch('/billing/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update AI usage limits and alert thresholds' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateBillingStatus(
    @Body() _body: AdminUpdateBillingLimitRequestDto
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Post('/billing/user-slots')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Purchase additional user slots (pro-rated)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async buyUserSlots(
    @Body() _body: AdminPurchaseUserSlotsRequestDto
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Get('/settings/payment-methods')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List company payment methods' })
  @ApiSuccessResponse(AdminSuccessResponseDto, true)
  @ApiErrorResponse()
  async getPaymentMethods(): Promise<AppResponseSuccess<AdminSuccessResponseDto[]>> {
    return this.responseService.success([{ id: 1, type: 'Credit Card', lastFour: '4242' }], AdminSuccessResponseDto);
  }

  @Post('/settings/payment-methods')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add new company payment method' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async addPaymentMethod(
    @Body() _body: AdminPaymentMethodRequestDto
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Get('/visit-logs')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search and export historical visitor logs' })
  @ApiSuccessResponse(AdminVisitLogResponseDto, true)
  @ApiErrorResponse()
  async getVisitLogs(): Promise<AppResponseSuccess<AdminVisitLogResponseDto[]>> {
    return this.responseService.success(
      [{ id: 1, visitorName: 'John Doe', purpose: 'Meeting', checkInTime: new Date(), roomName: 'Room A' }],
      AdminVisitLogResponseDto
    );
  }

  @Post('/monitoring/rules')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create automated monitoring/alert rules' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async createMonitoringRule(
    @Body() _body: AdminCreateMonitoringRuleRequestDto
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
