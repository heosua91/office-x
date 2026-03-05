import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import {
  RoomConsentRequestDto,
  RoomEventRequestDto,
  RoomLinkRequestDto,
} from '../dtos/request/room.request.dto';
import { RoomSeatsRequestDto } from '../dtos/request/room.seats.request.dto';
import { RoomParticipantResponseDto } from '../dtos/response/room.participant.response.dto';
import { RoomStatusResponseDto } from '../dtos/response/room.status.response.dto';
import { RoomSuccessResponseDto } from '../dtos/response/room.success.response.dto';

@ApiTags('[Public] Room')
@Controller({
  path: '/room',
})
export class RoomPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/:id/link')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Link device to a specific meeting room' })
  @ApiSuccessResponse(RoomSuccessResponseDto)
  @ApiErrorResponse()
  async linkDevice(
    @Param('id') _id: string,
    @Body() _body: RoomLinkRequestDto
  ): Promise<AppResponseSuccess<RoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, RoomSuccessResponseDto);
  }

  @Get('/:id/status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch current/next meeting status' })
  @ApiSuccessResponse(RoomStatusResponseDto)
  @ApiErrorResponse()
  async getStatus(@Param('id') _id: string): Promise<AppResponseSuccess<RoomStatusResponseDto>> {
    return this.responseService.success(
      {
        isOccupied: false,
        currentMeetingTitle: 'None',
        nextMeetingTitle: 'Board Meeting',
        nextMeetingStartTime: new Date(Date.now() + 1800000),
      },
      RoomStatusResponseDto
    );
  }

  @Post('/:id/start')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Initialize meeting and recording handshake' })
  @ApiSuccessResponse(RoomSuccessResponseDto)
  @ApiErrorResponse()
  async startMeeting(
    @Param('id') _id: string
  ): Promise<AppResponseSuccess<RoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, RoomSuccessResponseDto);
  }

  @Post('/:id/consent')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Capture participant consent for recording' })
  @ApiSuccessResponse(RoomSuccessResponseDto)
  @ApiErrorResponse()
  async captureConsent(
    @Param('id') _id: string,
    @Body() _body: RoomConsentRequestDto
  ): Promise<AppResponseSuccess<RoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, RoomSuccessResponseDto);
  }

  @Post('/:id/stream')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Upload individual participant audio stream' })
  @ApiSuccessResponse(RoomSuccessResponseDto)
  @ApiErrorResponse()
  async uploadStream(
    @Param('id') _id: string
  ): Promise<AppResponseSuccess<RoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, RoomSuccessResponseDto);
  }

  @Get('/:id/live')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'WebSocket/SSE for real-time transcript & sync' })
  @ApiSuccessResponse(RoomSuccessResponseDto)
  @ApiErrorResponse()
  async getLiveFeed(@Param('id') _id: string): Promise<AppResponseSuccess<RoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, RoomSuccessResponseDto);
  }

  @Patch('/:id/extend')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Quick-extend meeting duration by 15 mins' })
  @ApiSuccessResponse(RoomSuccessResponseDto)
  @ApiErrorResponse()
  async extendMeeting(
    @Param('id') _id: string
  ): Promise<AppResponseSuccess<RoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, RoomSuccessResponseDto);
  }

  @Post('/:id/event')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log real-time event (memo, reaction, marker)' })
  @ApiSuccessResponse(RoomSuccessResponseDto)
  @ApiErrorResponse()
  async logEvent(
    @Param('id') _id: string,
    @Body() _body: RoomEventRequestDto
  ): Promise<AppResponseSuccess<RoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, RoomSuccessResponseDto);
  }

  @Get('/:id/participants')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List all participants in the room for manual assignment' })
  @ApiSuccessResponse(RoomParticipantResponseDto, true)
  @ApiErrorResponse()
  async getParticipants(
    @Param('id') _id: string
  ): Promise<AppResponseSuccess<RoomParticipantResponseDto[]>> {
    return this.responseService.success(
      [
        { id: 1, name: 'John Doe', avatarUrl: 'https://avatar.com/1', seatName: 'A1' },
        { id: 2, name: 'Alice Smith', avatarUrl: 'https://avatar.com/2', seatName: 'A2' },
      ],
      RoomParticipantResponseDto
    );
  }

  @Post('/:id/seats')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update/Save participant seat arrangements' })
  @ApiSuccessResponse(RoomSuccessResponseDto)
  @ApiErrorResponse()
  async updateSeats(
    @Param('id') _id: string,
    @Body() _body: RoomSeatsRequestDto
  ): Promise<AppResponseSuccess<RoomSuccessResponseDto>> {
    return this.responseService.success({ success: true }, RoomSuccessResponseDto);
  }
}
