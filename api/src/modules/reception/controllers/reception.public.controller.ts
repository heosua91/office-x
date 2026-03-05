import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { ReceptionVendorCheckInRequestDto, ReceptionWalkInCheckInRequestDto } from '../dtos/request/reception.check-in.request.dto';
import {
  ReceptionAuthRequestDto,
  ReceptionCheckInRequestDto,
  ReceptionNotifyHostRequestDto,
} from '../dtos/request/reception.request.dto';
import {
  ReceptionMapResponseDto,
  ReceptionSignageResponseDto,
} from '../dtos/response/reception.response.dto';
import { ReceptionSuccessResponseDto } from '../dtos/response/reception.success.response.dto';

@ApiTags('[Public] Reception')
@Controller({
  path: '/reception',
})
export class ReceptionPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Device authentication for Tablet foyer' })
  @ApiSuccessResponse(ReceptionSuccessResponseDto)
  @ApiErrorResponse()
  async authenticateDevice(
    @Body() _body: ReceptionAuthRequestDto
  ): Promise<AppResponseSuccess<ReceptionSuccessResponseDto>> {
    return this.responseService.success({ success: true }, ReceptionSuccessResponseDto);
  }

  @Get('/signage')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch media slides for digital signage' })
  @ApiSuccessResponse(ReceptionSignageResponseDto, true)
  @ApiErrorResponse()
  async getSignage(): Promise<AppResponseSuccess<ReceptionSignageResponseDto[]>> {
    return this.responseService.success(
      [{ id: 1, mediaUrl: 'https://media.com/1', type: 'IMAGE' }],
      ReceptionSignageResponseDto
    );
  }

  @Post('/check-in/qr')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Validate guest QR/Code and trigger notifications' })
  @ApiSuccessResponse(ReceptionSuccessResponseDto)
  @ApiErrorResponse()
  async checkIn(
    @Body() _body: ReceptionCheckInRequestDto
  ): Promise<AppResponseSuccess<ReceptionSuccessResponseDto>> {
    return this.responseService.success({ success: true }, ReceptionSuccessResponseDto);
  }

  @Post('/check-in/no-appointment')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Manual check-in for walk-in visitors' })
  @ApiSuccessResponse(ReceptionSuccessResponseDto)
  @ApiErrorResponse()
  async checkInNoAppointment(
    @Body() _body: ReceptionWalkInCheckInRequestDto
  ): Promise<AppResponseSuccess<ReceptionSuccessResponseDto>> {
    return this.responseService.success({ success: true }, ReceptionSuccessResponseDto);
  }

  @Post('/check-in/vendor')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log-in for contractors/vendor visits' })
  @ApiSuccessResponse(ReceptionSuccessResponseDto)
  @ApiErrorResponse()
  async checkInVendor(
    @Body() _body: ReceptionVendorCheckInRequestDto
  ): Promise<AppResponseSuccess<ReceptionSuccessResponseDto>> {
    return this.responseService.success({ success: true }, ReceptionSuccessResponseDto);
  }

  @Post('/notify-host')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send Slack/Teams/Email alert to host' })
  @ApiSuccessResponse(ReceptionSuccessResponseDto)
  @ApiErrorResponse()
  async notifyHost(
    @Body() _body: ReceptionNotifyHostRequestDto
  ): Promise<AppResponseSuccess<ReceptionSuccessResponseDto>> {
    return this.responseService.success({ success: true }, ReceptionSuccessResponseDto);
  }

  @Post('/calls/signal')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'WebRTC signaling for Audio/Video calls' })
  @ApiSuccessResponse(ReceptionSuccessResponseDto)
  @ApiErrorResponse()
  async signal(): Promise<AppResponseSuccess<ReceptionSuccessResponseDto>> {
    return this.responseService.success({ success: true }, ReceptionSuccessResponseDto);
  }

  @Get('/map/:room_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch guiding map for visitor path' })
  @ApiSuccessResponse(ReceptionMapResponseDto)
  @ApiErrorResponse()
  async getMap(
    @Param('room_id') _roomId: string
  ): Promise<AppResponseSuccess<ReceptionMapResponseDto>> {
    return this.responseService.success(
      { imageUrl: 'https://map.com/1', roomName: 'Room A', floor: '1F' },
      ReceptionMapResponseDto
    );
  }
}
