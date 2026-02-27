import {
  Body,
  Controller,
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
import { OfficeGenerateEmailRequestDto } from '../dtos/request/office.generate-email.request.dto';
import {
  OfficePresenceResponseDto,
  OfficeUpdatePresenceRequestDto,
  OfficeUpdatePrivacyRequestDto,
  OfficeUpdateWebhookRequestDto,
  OfficeWebhookResponseDto,
} from '../dtos/request/office.settings.request.dto';
import { OfficeSmartUrlRequestDto } from '../dtos/request/office.smart-url.request.dto';
import { OfficeUpdateReservationRequestDto } from '../dtos/request/office.update-reservation.request.dto';
import { OfficeUpdateSummaryRequestDto } from '../dtos/request/office.update-summary.request.dto';
import { OfficeCustomerResponseDto } from '../dtos/response/office.customer.response.dto';
import { OfficeDashboardResponseDto } from '../dtos/response/office.dashboard.response.dto';
import { OfficeMeetingAiResponseDto } from '../dtos/response/office.meeting-ai.response.dto';
import { OfficeReservationResponseDto } from '../dtos/response/office.reservation.response.dto';
import { OfficeSuccessResponseDto } from '../dtos/response/office.success.response.dto';

@ApiTags('[Public] Office')
@Controller({
  path: '/office',
})
export class OfficePublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/dashboard')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch schedule, room status, and AI usage widgets' })
  @ApiSuccessResponse(OfficeDashboardResponseDto)
  @ApiErrorResponse()
  async getDashboard(): Promise<AppResponseSuccess<OfficeDashboardResponseDto>> {
    return this.responseService.success(
      {
        schedules: [
          {
            id: 1,
            title: 'Morning Sync',
            startTime: new Date(),
            endTime: new Date(Date.now() + 3600000),
            roomName: 'Room A',
          },
        ],
        roomStatus: [
          { id: 1, name: 'Room A', isAvailable: false },
          { id: 2, name: 'Room B', isAvailable: true },
        ],
        aiUsageMinutes: 120,
        aiQuotaMinutes: 1000,
      },
      OfficeDashboardResponseDto
    );
  }

  @Get('/reservations')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List active and historical reservations' })
  @ApiSuccessResponse(OfficeReservationResponseDto, true)
  @ApiErrorResponse()
  async getReservations(): Promise<AppResponseSuccess<OfficeReservationResponseDto[]>> {
    return this.responseService.success(
      [
        {
          id: 1,
          title: 'Client Meeting',
          roomName: 'Room A',
          date: '2024-03-01',
          startTime: '10:00',
          endTime: '11:00',
          status: 'CONFIRMED',
          hostName: 'Admin User',
        },
      ],
      OfficeReservationResponseDto
    );
  }

  @Post('/reservations/smart-url')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create guest booking link with AI templates' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async createSmartUrl(
    @Body() _body: OfficeSmartUrlRequestDto
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Patch('/reservations/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update meeting details, participants, or seat map' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateReservation(
    @Param('id') _id: string,
    @Body() _body: OfficeUpdateReservationRequestDto
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/schedule/gantt')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch timeline data for all company rooms' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async getGanttSchedule(): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/customers')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search/List client companies' })
  @ApiSuccessResponse(OfficeCustomerResponseDto, true)
  @ApiErrorResponse()
  async getCustomers(): Promise<AppResponseSuccess<OfficeCustomerResponseDto[]>> {
    return this.responseService.success(
      [
        {
          id: 1,
          name: 'Client X',
          industry: 'Technology',
          lastVisit: new Date(),
          aiInsights: 'Frequent visitor, interested in scalability.',
        },
      ],
      OfficeCustomerResponseDto
    );
  }

  @Get('/customers/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Detailed profile, visit timeline, and AI insights' })
  @ApiSuccessResponse(OfficeCustomerResponseDto)
  @ApiErrorResponse()
  async getCustomerDetail(
    @Param('id') _id: string
  ): Promise<AppResponseSuccess<OfficeCustomerResponseDto>> {
    return this.responseService.success(
      {
        id: 1,
        name: 'Client X',
        industry: 'Technology',
        lastVisit: new Date(),
        aiInsights: 'Detailed AI insights here.',
      },
      OfficeCustomerResponseDto
    );
  }

  @Get('/meetings/:id/ai')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch transcript, summary, and action items' })
  @ApiSuccessResponse(OfficeMeetingAiResponseDto)
  @ApiErrorResponse()
  async getMeetingAi(
    @Param('id') _id: string
  ): Promise<AppResponseSuccess<OfficeMeetingAiResponseDto>> {
    return this.responseService.success(
      {
        transcript: 'Meeting transcript here...',
        summary: 'Meeting summary here...',
        actionItems: ['Item 1', 'Item 2'],
      },
      OfficeMeetingAiResponseDto
    );
  }

  @Patch('/meetings/:id/summary')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Edit AI generated summary/notes' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateMeetingSummary(
    @Param('id') _id: string,
    @Body() _body: OfficeUpdateSummaryRequestDto
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Post('/meetings/:id/email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Generate AI draft for thank-you email' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async generateThankYouEmail(
    @Param('id') _id: string,
    @Body() _body: OfficeGenerateEmailRequestDto
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/google-drive/files')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Proxy to fetch Google Drive files' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async getGoogleDriveFiles(): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Patch('/settings/privacy')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Set summary visibility' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updatePrivacy(
    @Body() _body: OfficeUpdatePrivacyRequestDto
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/settings/webhooks')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List Slack/Teams integrations' })
  @ApiSuccessResponse(OfficeWebhookResponseDto, true)
  @ApiErrorResponse()
  async getWebhooks(): Promise<AppResponseSuccess<OfficeWebhookResponseDto[]>> {
    return this.responseService.success(
      [{ id: 1, platform: 'Slack', url: 'https://slack.com/...', isEnabled: true }],
      OfficeWebhookResponseDto
    );
  }

  @Post('/settings/webhooks')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create Slack/Teams integration' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async createWebhook(
    @Body() _body: OfficeUpdateWebhookRequestDto
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/settings/presence')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch personal reservation rules' })
  @ApiSuccessResponse(OfficePresenceResponseDto)
  @ApiErrorResponse()
  async getPresence(): Promise<AppResponseSuccess<OfficePresenceResponseDto>> {
    return this.responseService.success(
      { id: 1, blackoutDates: [], isAutoAcceptEnabled: true },
      OfficePresenceResponseDto
    );
  }

  @Patch('/settings/presence')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update personal reservation rules' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updatePresence(
    @Body() _body: OfficeUpdatePresenceRequestDto
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }
}
