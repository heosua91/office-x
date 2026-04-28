import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { DeviceLinkRequestDto } from '../dtos/request/device.link.request.dto';
import { DeviceSeatLinkRequestDto } from '../dtos/request/device.seat-link.request.dto';
import { DeviceSessionBindParticipantRequestDto } from '../dtos/request/device.session-bind-participant.request.dto';
import { DeviceSessionReadyRequestDto } from '../dtos/request/device.session-ready.request.dto';

import { DeviceLinkResponseDto, SeatOptionType } from '../dtos/response/device.link.response.dto';
import { DeviceSeatLinkResponseDto } from '../dtos/response/device.seat-link.response.dto';
import { DeviceSessionBindParticipantResponseDto } from '../dtos/response/device.session-bind-participant.response.dto';
import { DeviceSessionReadyResponseDto } from '../dtos/response/device.session-ready.response.dto';

@ApiTags('[Public] Device')
@Controller({ path: '/device' })
export class DevicePublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/link')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Link tablet to a meeting room via QR/Code (ENTR-001)' })
  @ApiSuccessResponse(DeviceLinkResponseDto)
  @ApiErrorResponse()
  async linkDevice(
    @Body() _body: DeviceLinkRequestDto,
  ): Promise<AppResponseSuccess<DeviceLinkResponseDto>> {
    return this.responseService.success(
      {
        deviceSessionId: 'sess_abc123def456',
        deviceId: 'e5f6a7b8-c9d0-1234-ef01-345678901234',
        meetingRoomId: 'd4e5f6a7-b8c9-0123-def0-234567890123',
        roomName: 'Horizon Room',
        isMultiDevice: true,
        seatOptions: [
          { label: 'Host', type: SeatOptionType.PARENT },
          { label: 'A1', type: SeatOptionType.CHILD },
          { label: 'A2', type: SeatOptionType.CHILD },
        ],
      },
      DeviceLinkResponseDto,
    );
  }

  @Post('/seat-link')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Link tablet to a specific seat (Multi-device, ENTR-001). Persists seat binding on reception_devices permanently.' })
  @ApiSuccessResponse(DeviceSeatLinkResponseDto)
  @ApiErrorResponse()
  async seatLink(
    @Body() _body: DeviceSeatLinkRequestDto,
  ): Promise<AppResponseSuccess<DeviceSeatLinkResponseDto>> {
    return this.responseService.success(
      {
        deviceSessionId: 'sess_abc123def456',
        seatLabel: 'A1',
        seatType: SeatOptionType.CHILD,
        meetingRoomId: 'd4e5f6a7-b8c9-0123-def0-234567890123',
      },
      DeviceSeatLinkResponseDto,
    );
  }

  @Post('/session/bind-participant')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Link seat-tablet to attendee ID (claim profile) (ENTR-004)' })
  @ApiSuccessResponse(DeviceSessionBindParticipantResponseDto)
  @ApiErrorResponse()
  async bindParticipant(
    @Body() _body: DeviceSessionBindParticipantRequestDto,
  ): Promise<AppResponseSuccess<DeviceSessionBindParticipantResponseDto>> {
    return this.responseService.success(
      {
        deviceSessionId: 'sess_abc123def456',
        participantId: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890',
        status: 'ready',
      },
      DeviceSessionBindParticipantResponseDto,
    );
  }

  @Post('/session/ready')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Signal child-device participant is ready (ENTR-007)' })
  @ApiSuccessResponse(DeviceSessionReadyResponseDto)
  @ApiErrorResponse()
  async signalReady(
    @Body() _body: DeviceSessionReadyRequestDto,
  ): Promise<AppResponseSuccess<DeviceSessionReadyResponseDto>> {
    return this.responseService.success(
      {
        deviceSessionId: 'sess_abc123def456',
        status: 'ready',
        readyAt: '2026-04-25T08:00:00.000Z',
      },
      DeviceSessionReadyResponseDto,
    );
  }
}
