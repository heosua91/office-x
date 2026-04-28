import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { GuestMeetingsAvailabilityQueryDto } from '../dtos/request/guest.meetings-availability.query.dto';
import { GuestMeetingsReserveRequestDto } from '../dtos/request/guest.meetings-reserve.request.dto';
import { GuestMeetingsDocumentsUploadRequestDto } from '../dtos/request/guest.meetings-documents-upload.request.dto';

import { GuestMeetingsAvailabilityResponseDto, MeetingFormat } from '../dtos/response/guest.meetings-availability.response.dto';
import { GuestMeetingsReserveResponseDto } from '../dtos/response/guest.meetings-reserve.response.dto';
import { GuestMeetingsReceiptResponseDto } from '../dtos/response/guest.meetings-receipt.response.dto';
import { GuestMeetingsDocumentsUploadResponseDto } from '../dtos/response/guest.meetings-documents-upload.response.dto';

@ApiTags('[Public] Guest')
@Controller({ path: '/guest' })
export class GuestPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/meetings/reserve')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create reservation via smart link (GRES-003)' })
  @ApiSuccessResponse(GuestMeetingsReserveResponseDto)
  @ApiErrorResponse()
  async reserve(
    @Body() _body: GuestMeetingsReserveRequestDto,
  ): Promise<AppResponseSuccess<GuestMeetingsReserveResponseDto>> {
    return this.responseService.success(
      {
        meetingId: '550e8400-e29b-41d4-a716-446655440070',
        bookingCode: 'BK-20260425-0001',
        qrCodeHash: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
        receiptToken: 'rcpt_tok_xyz789',
      },
      GuestMeetingsReserveResponseDto,
    );
  }

  @Get('/meetings/:token/availability')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Check host/room availability for guest booking link + prefill guest profile (GRES-001/002)' })
  @ApiSuccessResponse(GuestMeetingsAvailabilityResponseDto)
  @ApiErrorResponse()
  async getAvailability(
    @Param('token') _token: string,
    @Query() _query: GuestMeetingsAvailabilityQueryDto,
  ): Promise<AppResponseSuccess<GuestMeetingsAvailabilityResponseDto>> {
    return this.responseService.success(
      {
        meeting: {
          title: 'Quarterly Business Review',
          durationMinutes: 30,
          format: MeetingFormat.IN_PERSON,
          hostName: 'Nguyen Van A',
          hostCompanyName: 'OfficeX Corp',
          isConfidential: false,
        },
        slots: [
          { startTime: '2026-04-25T10:00:00.000Z', endTime: '2026-04-25T10:30:00.000Z', available: true },
          { startTime: '2026-04-25T10:30:00.000Z', endTime: '2026-04-25T11:00:00.000Z', available: false },
          { startTime: '2026-04-25T11:00:00.000Z', endTime: '2026-04-25T11:30:00.000Z', available: true },
        ],
        prefilledGuest: {
          name: 'Tran Thi B',
          email: 'b.tran@vendor.com',
          companyName: 'Vendor Corp',
          phone: '+84901234567',
        },
      },
      GuestMeetingsAvailabilityResponseDto,
    );
  }

  @Get('/meetings/:token/receipt')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch reservation confirmation (meeting + QR + PDF + host info) (GRES-004/005)' })
  @ApiSuccessResponse(GuestMeetingsReceiptResponseDto)
  @ApiErrorResponse()
  async getReceipt(
    @Param('token') _token: string,
  ): Promise<AppResponseSuccess<GuestMeetingsReceiptResponseDto>> {
    return this.responseService.success(
      {
        meeting: {
          id: '550e8400-e29b-41d4-a716-446655440070',
          title: 'Quarterly Business Review',
          startTime: '2026-04-25T10:00:00.000Z',
          endTime: '2026-04-25T10:30:00.000Z',
          format: 'in_person',
          meetingUrl: undefined,
          bookingCode: 'BK-20260425-0001',
          qrCodeImageUrl: 'https://signed.example.com/qr.png',
          bookingTimezone: 'Asia/Ho_Chi_Minh',
        },
        room: {
          name: 'Horizon Room',
          location: '3rd Floor, East Wing',
          mapImageUrl: 'https://cdn.example.com/maps/floor3.png',
        },
        host: {
          fullName: 'Nguyen Van A',
          email: 'a.nguyen@officex.com',
          companyName: 'OfficeX Corp',
          companyAddress: '123 Le Loi, District 1, Ho Chi Minh City',
          companyPhone: '+84281234567',
          logoUrl: 'https://cdn.example.com/logos/officex.png',
        },
        guests: [
          {
            name: 'Tran Thi B',
            email: 'b.tran@vendor.com',
            meetingRoomJoinUrl: undefined,
          },
        ],
        documentsUploadUrl: 'https://signed.example.com/upload?token=abc',
      },
      GuestMeetingsReceiptResponseDto,
    );
  }

  @Post('/meetings/:token/documents/upload')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Guest append-upload pre-visit NDAs/documents via signed URL (GRES-005)' })
  @ApiSuccessResponse(GuestMeetingsDocumentsUploadResponseDto)
  @ApiErrorResponse()
  async uploadDocuments(
    @Param('token') _token: string,
    @Body() _body: GuestMeetingsDocumentsUploadRequestDto,
  ): Promise<AppResponseSuccess<GuestMeetingsDocumentsUploadResponseDto>> {
    return this.responseService.success(
      {
        uploads: [
          {
            fileName: 'nda_signed.pdf',
            signedUrl: 'https://storage.example.com/upload?token=xyz&expires=1745000000',
            expiresAt: '2026-04-25T11:00:00.000Z',
            documentId: '550e8400-e29b-41d4-a716-446655440080',
          },
        ],
      },
      GuestMeetingsDocumentsUploadResponseDto,
    );
  }
}
