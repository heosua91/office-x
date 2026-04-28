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

import { MeetingsTimelineQueryDto } from '../dtos/request/meetings.timeline.query.dto';
import { MeetingsBookingGenerateRequestDto } from '../dtos/request/meetings.booking-generate.request.dto';
import { MeetingsBookingUpdateRequestDto } from '../dtos/request/meetings.booking-update.request.dto';
import { MeetingsBookingCancelRequestDto } from '../dtos/request/meetings.booking-cancel.request.dto';
import { MeetingsFolderQueryDto } from '../dtos/request/meetings.folder.query.dto';
import { MeetingsCalendarSuggestionsRequestDto } from '../dtos/request/meetings.calendar-suggestions.request.dto';
import { MeetingsInternalBookingRequestDto } from '../dtos/request/meetings.internal-booking.request.dto';
import { MeetingsBookingLinkUpdateRequestDto } from '../dtos/request/meetings.booking-link-update.request.dto';
import { MeetingsRegenerateLogRequestDto } from '../dtos/request/meetings.regenerate-log.request.dto';
import { MeetingsEditLogRequestDto } from '../dtos/request/meetings.edit-log.request.dto';
import { MeetingsUpdateInternalLogRequestDto } from '../dtos/request/meetings.update-internal-log.request.dto';
import { MeetingsUnbookedQueryDto } from '../dtos/request/meetings.unbooked.query.dto';

import { MeetingsTimelineResponseDto, MeetingsTimelineItemResponseDto } from '../dtos/response/meetings.timeline.response.dto';
import { MeetingsBookingGenerateResponseDto } from '../dtos/response/meetings.booking-generate.response.dto';
import { MeetingsBookingGetResponseDto } from '../dtos/response/meetings.booking-get.response.dto';
import { MeetingsCalendarSuggestionResponseDto } from '../dtos/response/meetings.calendar-suggestions.response.dto';
import { MeetingsInternalBookingResponseDto } from '../dtos/response/meetings.internal-booking.response.dto';
import { MeetingsBookingLinkDetailsResponseDto } from '../dtos/response/meetings.booking-link-details.response.dto';
import { MeetingsRegenerateLogResponseDto } from '../dtos/response/meetings.regenerate-log.response.dto';
import { MeetingsInternalLogResponseDto } from '../dtos/response/meetings.internal-log.response.dto';
import { MeetingsFolderResponseDto } from '../dtos/response/meetings.folder.response.dto';
import { MeetingsUnbookedListResponseDto } from '../dtos/response/meetings.unbooked-list.response.dto';
import { OfficeSuccessResponseDto } from '../dtos/response/office.success.response.dto';

@ApiTags('[Public] Meetings')
@Controller({ path: '/meetings' })
export class MeetingsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/timeline')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch timeline of user\'s meetings (Internal/Client tabs) (OFX-001/002)' })
  @ApiSuccessResponse(MeetingsTimelineResponseDto)
  @ApiErrorResponse()
  async getTimeline(
    @Query() _query: MeetingsTimelineQueryDto,
  ): Promise<AppResponseSuccess<MeetingsTimelineResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
            title: 'Q2 Strategy Sync',
            startTime: '2026-05-10T09:00:00.000Z',
            endTime: '2026-05-10T10:00:00.000Z',
            status: 'confirmed',
            hostName: 'Nguyen Van A',
            roomName: 'Room A - 3F',
            clientName: undefined,
            isInternal: true,
          } as MeetingsTimelineItemResponseDto,
        ],
        page: 1,
        limit: 20,
        total: 1,
      },
      MeetingsTimelineResponseDto,
    );
  }

  @Post('/booking/generate')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Generate guest-facing booking smart link + invite_token (OFX-003)' })
  @ApiSuccessResponse(MeetingsBookingGenerateResponseDto)
  @ApiErrorResponse()
  async generateBookingLink(
    @Body() _body: MeetingsBookingGenerateRequestDto,
  ): Promise<AppResponseSuccess<MeetingsBookingGenerateResponseDto>> {
    return this.responseService.success(
      {
        meetingId: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
        inviteToken: 'inv_tkn_mock_abc123xyz',
        smartUrl: 'https://app.officex.io/book/inv_tkn_mock_abc123xyz',
      },
      MeetingsBookingGenerateResponseDto,
    );
  }

  @Get('/booking/unbooked')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List guest-initiated bookings awaiting host confirmation (OFX-027)' })
  @ApiSuccessResponse(MeetingsUnbookedListResponseDto)
  @ApiErrorResponse()
  async listUnbookedBookings(
    @Query() _query: MeetingsUnbookedQueryDto,
  ): Promise<AppResponseSuccess<MeetingsUnbookedListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'h8i9j0k1-l2m3-4567-n890-123456789012',
            title: 'Product Demo Request',
            guestName: 'John Smith',
            guestEmail: 'john.smith@client.com',
            requestedStartTime: '2026-05-15T14:00:00.000Z',
            status: 'pending',
          },
        ],
        page: 1,
        limit: 20,
        total: 1,
      },
      MeetingsUnbookedListResponseDto,
    );
  }

  @Get('/booking/details/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'View detailed booking link info (OFX-009)' })
  @ApiSuccessResponse(MeetingsBookingLinkDetailsResponseDto)
  @ApiErrorResponse()
  async getBookingLinkDetails(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<MeetingsBookingLinkDetailsResponseDto>> {
    return this.responseService.success(
      {
        id: 'f6a7b8c9-d0e1-2345-f012-456789012345',
        urlType: 'permanent',
        title: 'Product Demo Session',
        clientCompanyName: 'Acme Corp',
        durationMinutes: 60,
        format: 'online',
        isActive: true,
        inviteToken: 'inv_tkn_mock_abc123xyz',
        createdAt: '2026-04-01T08:00:00.000Z',
      },
      MeetingsBookingLinkDetailsResponseDto,
    );
  }

  @Get('/booking/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch specific meeting booking details (OFX-004)' })
  @ApiSuccessResponse(MeetingsBookingGetResponseDto)
  @ApiErrorResponse()
  async getBooking(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<MeetingsBookingGetResponseDto>> {
    return this.responseService.success(
      {
        id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
        title: 'Q2 Strategy Sync',
        startTime: '2026-05-10T09:00:00.000Z',
        endTime: '2026-05-10T10:00:00.000Z',
        hostUserId: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
        hostName: 'Nguyen Van A',
        meetingRoomId: 'd4e5f6a7-b8c9-0123-def0-234567890123',
        roomName: 'Room A - 3F',
        status: 'confirmed',
        format: 'online',
        participants: [
          {
            userId: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
            name: 'Nguyen Van A',
            role: 'host',
            rsvpStatus: 'accepted',
          },
          {
            userId: 'c4d5e6f7-a8b9-0123-cdef-234567890123',
            name: 'Tran Thi B',
            role: 'attendee',
            rsvpStatus: 'accepted',
          },
        ],
        isConfidential: false,
        autoCancelMinutes: 10,
      },
      MeetingsBookingGetResponseDto,
    );
  }

  @Post('/booking/:id/update')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update meeting booking host/participants (OFX-004)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateBooking(
    @Param('id') _id: string,
    @Body() _body: MeetingsBookingUpdateRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Post('/booking/:id/cancel')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Cancel an upcoming meeting (OFX-004)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async cancelBooking(
    @Param('id') _id: string,
    @Body() _body: MeetingsBookingCancelRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Post('/booking/:id/resend')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Resend booking link/confirmation to guest (OFX-027)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async resendBooking(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Put('/booking/details/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Edit booking link details (OFX-009)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateBookingLink(
    @Param('id') _id: string,
    @Body() _body: MeetingsBookingLinkUpdateRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Delete('/booking/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a booking link (OFX-009)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async deleteBooking(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/internal/folders/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch meeting timeline for project/folder (OFX-007)' })
  @ApiSuccessResponse(MeetingsFolderResponseDto)
  @ApiErrorResponse()
  async getFolderMeetings(
    @Param('id') _id: string,
    @Query() _query: MeetingsFolderQueryDto,
  ): Promise<AppResponseSuccess<MeetingsFolderResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
            title: 'Sprint Planning - Week 19',
            startTime: '2026-05-11T09:00:00.000Z',
            endTime: '2026-05-11T10:00:00.000Z',
            status: 'confirmed',
            hostName: 'Nguyen Van A',
            roomName: 'Room B - 2F',
            isInternal: true,
          } as MeetingsTimelineItemResponseDto,
        ],
        page: 1,
        limit: 20,
        total: 1,
      },
      MeetingsFolderResponseDto,
    );
  }

  @Post('/calendar/suggestions')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch AI-assisted time slot suggestions (OFX-008)' })
  @ApiSuccessResponse(MeetingsCalendarSuggestionResponseDto, true)
  @ApiErrorResponse()
  async getCalendarSuggestions(
    @Body() _body: MeetingsCalendarSuggestionsRequestDto,
  ): Promise<AppResponseSuccess<MeetingsCalendarSuggestionResponseDto[]>> {
    return this.responseService.success(
      [
        {
          startTime: '2026-05-12T10:00:00.000Z',
          endTime: '2026-05-12T11:00:00.000Z',
          score: 0.92,
          conflictWarnings: [],
        },
        {
          startTime: '2026-05-13T14:00:00.000Z',
          endTime: '2026-05-13T15:00:00.000Z',
          score: 0.78,
          conflictWarnings: ['Participant Tran Thi B has a soft conflict at 14:30'],
        },
      ],
      MeetingsCalendarSuggestionResponseDto,
    );
  }

  @Post('/internal/booking')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Direct internal meeting reservation (OFX-008)' })
  @ApiSuccessResponse(MeetingsInternalBookingResponseDto)
  @ApiErrorResponse()
  async createInternalBooking(
    @Body() _body: MeetingsInternalBookingRequestDto,
  ): Promise<AppResponseSuccess<MeetingsInternalBookingResponseDto>> {
    return this.responseService.success(
      { meetingId: 'e5f6a7b8-c9d0-1234-ef01-345678901234' },
      MeetingsInternalBookingResponseDto,
    );
  }

  @Post('/log/:id/regenerate')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Trigger AI to re-analyze transcript (OFX-014)' })
  @ApiSuccessResponse(MeetingsRegenerateLogResponseDto)
  @ApiErrorResponse()
  async regenerateLog(
    @Param('id') _id: string,
    @Body() _body: MeetingsRegenerateLogRequestDto,
  ): Promise<AppResponseSuccess<MeetingsRegenerateLogResponseDto>> {
    return this.responseService.success(
      { jobId: 'job_a1b2c3d4e5f6mock' },
      MeetingsRegenerateLogResponseDto,
    );
  }

  @Put('/log/:id/edit')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Manual correction of AI summary/notes (OFX-014)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async editLog(
    @Param('id') _id: string,
    @Body() _body: MeetingsEditLogRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/internal/logs/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch detailed internal meeting log + transcription (OFX-023)' })
  @ApiSuccessResponse(MeetingsInternalLogResponseDto)
  @ApiErrorResponse()
  async getInternalLog(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<MeetingsInternalLogResponseDto>> {
    return this.responseService.success(
      {
        id: 'g7h8i9j0-k1l2-3456-m789-012345678901',
        meetingId: 'e5f6a7b8-c9d0-1234-ef01-345678901234',
        transcriptText: 'Nguyen Van A: Let us review the Q2 targets. Tran Thi B: Agreed, the numbers look promising.',
        segments: [
          {
            id: 'seg_b2c3d4e5f6a7mock',
            startTimeMs: 0,
            endTimeMs: 15200,
            speakerName: 'Nguyen Van A',
            textContent: 'Let us review the Q2 targets.',
          },
          {
            id: 'seg_c3d4e5f6a7b8mock',
            startTimeMs: 15300,
            endTimeMs: 28000,
            speakerName: 'Tran Thi B',
            textContent: 'Agreed, the numbers look promising.',
          },
        ],
        summaryText: 'Team reviewed Q2 targets and agreed on revised KPIs.',
        todoText: '- Follow up on budget approval\n- Share revised deck by Friday',
        status: 'completed',
      },
      MeetingsInternalLogResponseDto,
    );
  }

  @Put('/internal/logs/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Edit internal meeting metadata/tags (OFX-024)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateInternalLog(
    @Param('id') _id: string,
    @Body() _body: MeetingsUpdateInternalLogRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }
}
