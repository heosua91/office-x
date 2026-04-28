import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { ReceptionAuthLoginRequestDto } from '../dtos/request/reception.auth-login.request.dto';
import { ReceptionVisitCheckInRequestDto } from '../dtos/request/reception.visit-check-in.request.dto';
import { ReceptionVisitQuickNoticeRequestDto } from '../dtos/request/reception.visit-quick-notice.request.dto';
import { ReceptionAiAnalyzeRequestDto } from '../dtos/request/reception.ai-analyze.request.dto';
import { ReceptionVisitNotifyDepartmentRequestDto } from '../dtos/request/reception.visit-notify-department.request.dto';

import { ReceptionAuthLoginResponseDto, DevicePurpose } from '../dtos/response/reception.auth-login.response.dto';
import { ReceptionSignageResponseDto, SignageSlideType } from '../dtos/response/reception.settings-signage.response.dto';
import { ReceptionVisitCheckInResponseDto } from '../dtos/response/reception.visit-check-in.response.dto';
import { ReceptionVisitQuickNoticeResponseDto } from '../dtos/response/reception.visit-quick-notice.response.dto';
import { ReceptionAiAnalyzeResponseDto } from '../dtos/response/reception.ai-analyze.response.dto';
import { ReceptionVisitNotifyDepartmentResponseDto } from '../dtos/response/reception.visit-notify-department.response.dto';
import { ReceptionVisitStatusResponseDto, VisitStatus } from '../dtos/response/reception.visit-status.response.dto';

@ApiTags('[Public] Reception')
@Controller({ path: '/reception' })
export class ReceptionPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/auth/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Device auth for Foyer Tablet (UKET-001)' })
  @ApiSuccessResponse(ReceptionAuthLoginResponseDto)
  @ApiErrorResponse()
  async login(
    @Body() _body: ReceptionAuthLoginRequestDto,
  ): Promise<AppResponseSuccess<ReceptionAuthLoginResponseDto>> {
    return this.responseService.success(
      {
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.device_access_token',
        tokenType: 'Bearer',
        expiresIn: 86400,
        deviceId: '550e8400-e29b-41d4-a716-446655440000',
        companyId: '550e8400-e29b-41d4-a716-446655440001',
        purpose: DevicePurpose.RECEPTION,
      },
      ReceptionAuthLoginResponseDto,
    );
  }

  @Get('/settings/signage')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch media slides for digital signage (UKET-002)' })
  @ApiSuccessResponse(ReceptionSignageResponseDto)
  @ApiErrorResponse()
  async getSignage(): Promise<AppResponseSuccess<ReceptionSignageResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: '550e8400-e29b-41d4-a716-446655440010',
            type: SignageSlideType.SLIDE_IMAGE,
            url: 'https://cdn.example.com/signage/slide1.jpg',
            displayOrder: 1,
            playIntervalSeconds: 10,
            durationSeconds: null,
          },
          {
            id: '550e8400-e29b-41d4-a716-446655440011',
            type: SignageSlideType.SLIDE_VIDEO,
            url: 'https://cdn.example.com/signage/promo.mp4',
            displayOrder: 2,
            playIntervalSeconds: 30,
            durationSeconds: 28,
          },
        ],
      },
      ReceptionSignageResponseDto,
    );
  }

  @Post('/visit/check-in')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validate guest QR/PIN and trigger notify (UKET-004)' })
  @ApiSuccessResponse(ReceptionVisitCheckInResponseDto)
  @ApiErrorResponse()
  async checkIn(
    @Body() _body: ReceptionVisitCheckInRequestDto,
  ): Promise<AppResponseSuccess<ReceptionVisitCheckInResponseDto>> {
    return this.responseService.success(
      {
        visitId: '550e8400-e29b-41d4-a716-446655440020',
        meetingId: '550e8400-e29b-41d4-a716-446655440021',
        hostName: 'Nguyen Van A',
        roomName: 'Horizon Room',
        status: 'notifying',
      },
      ReceptionVisitCheckInResponseDto,
    );
  }

  @Post('/visit/quick-notice')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Walk-in visitor registration (UKET-006)' })
  @ApiSuccessResponse(ReceptionVisitQuickNoticeResponseDto)
  @ApiErrorResponse()
  async quickNotice(
    @Body() _body: ReceptionVisitQuickNoticeRequestDto,
  ): Promise<AppResponseSuccess<ReceptionVisitQuickNoticeResponseDto>> {
    return this.responseService.success(
      {
        visitId: '550e8400-e29b-41d4-a716-446655440030',
        status: 'notifying',
      },
      ReceptionVisitQuickNoticeResponseDto,
    );
  }

  @Post('/ai/analyze')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'AI Analysis for delivery/vendor slips (UKET-007)' })
  @ApiSuccessResponse(ReceptionAiAnalyzeResponseDto)
  @ApiErrorResponse()
  async aiAnalyze(
    @Body() _body: ReceptionAiAnalyzeRequestDto,
  ): Promise<AppResponseSuccess<ReceptionAiAnalyzeResponseDto>> {
    return this.responseService.success(
      {
        matchedDepartmentId: '550e8400-e29b-41d4-a716-446655440040',
        matchedDepartmentName: 'Engineering',
        isReject: false,
        rejectMessage: undefined,
        transcript: 'Package delivery for the engineering team from Shopee Express',
        confidence: 0.93,
      },
      ReceptionAiAnalyzeResponseDto,
    );
  }

  @Post('/visit/notify-department')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Notify department of delivery arrival (UKET-007)' })
  @ApiSuccessResponse(ReceptionVisitNotifyDepartmentResponseDto)
  @ApiErrorResponse()
  async notifyDepartment(
    @Body() _body: ReceptionVisitNotifyDepartmentRequestDto,
  ): Promise<AppResponseSuccess<ReceptionVisitNotifyDepartmentResponseDto>> {
    return this.responseService.success(
      {
        visitId: '550e8400-e29b-41d4-a716-446655440050',
        dispatchCount: 3,
        status: 'notifying',
      },
      ReceptionVisitNotifyDepartmentResponseDto,
    );
  }

  @Get('/visit/:id/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Polling/WebSocket fallback for host response status (UKET-008)' })
  @ApiSuccessResponse(ReceptionVisitStatusResponseDto)
  @ApiErrorResponse()
  async getVisitStatus(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<ReceptionVisitStatusResponseDto>> {
    return this.responseService.success(
      {
        visitId: '550e8400-e29b-41d4-a716-446655440020',
        status: VisitStatus.NOTIFYING,
        hostName: 'Nguyen Van A',
        departmentName: 'Engineering',
        meetingRoomName: 'Horizon Room',
        elapsedSeconds: 42,
        timeoutExceeded: false,
        websocketChannel: 'ws://app.example.com/visit/550e8400-e29b-41d4-a716-446655440020',
      },
      ReceptionVisitStatusResponseDto,
    );
  }
}
