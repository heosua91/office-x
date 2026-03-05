import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { GuestMeetingRequestDto } from '../dtos/request/reception.request.dto';
import { GuestAvailabilityResponseDto } from '../dtos/response/guest.availability.response.dto';
import { ReceptionSuccessResponseDto } from '../dtos/response/reception.success.response.dto';

@ApiTags('[Public] Guest')
@Controller({
  path: '/guest',
})
export class GuestPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/meetings')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Guest self-booking via smart link' })
  @ApiSuccessResponse(ReceptionSuccessResponseDto)
  @ApiErrorResponse()
  async createMeeting(
    @Body() _body: GuestMeetingRequestDto
  ): Promise<AppResponseSuccess<ReceptionSuccessResponseDto>> {
    return this.responseService.success({ success: true }, ReceptionSuccessResponseDto);
  }

  @Get('/availability')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Check room availability for guest self-booking' })
  @ApiSuccessResponse(GuestAvailabilityResponseDto)
  @ApiErrorResponse()
  async getAvailability(): Promise<AppResponseSuccess<GuestAvailabilityResponseDto>> {
    return this.responseService.success(
      {
        startTime: new Date(),
        endTime: new Date(),
        isAvailable: true,
        availableRoomIds: [1, 2],
      },
      GuestAvailabilityResponseDto
    );
  }
}

