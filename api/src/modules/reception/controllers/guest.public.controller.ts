import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { GuestReserveRequestDto } from '../dtos/request/reception.request.dto';
import { ReceptionSuccessResponseDto } from '../dtos/response/reception.success.response.dto';

@ApiTags('[Public] Guest')
@Controller({
  path: '/guest',
})
export class GuestPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/reserve')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Guest self-booking via smart link' })
  @ApiSuccessResponse(ReceptionSuccessResponseDto)
  @ApiErrorResponse()
  async reserve(
    @Body() _body: GuestReserveRequestDto
  ): Promise<AppResponseSuccess<ReceptionSuccessResponseDto>> {
    return this.responseService.success({ success: true }, ReceptionSuccessResponseDto);
  }
}
