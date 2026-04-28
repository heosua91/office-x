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

import { TngPresetsScreensaverListQueryDto } from '../dtos/request/tng-presets.screensaver-list.query.dto';
import { TngPresetsScreensaverCreateRequestDto } from '../dtos/request/tng-presets.screensaver-create.request.dto';
import { TngPresetsScreensaverUpdateRequestDto } from '../dtos/request/tng-presets.screensaver-update.request.dto';

import { TngPresetsScreensaverListResponseDto } from '../dtos/response/tng-presets.screensaver-list.response.dto';
import { TngPresetsScreensaverCreateResponseDto } from '../dtos/response/tng-presets.screensaver-create.response.dto';
import { TngSuccessResponseDto } from '../dtos/response/tng.success.response.dto';

@ApiTags('[Public] TNG Presets')
@Controller({ path: '/tng/presets' })
export class TngPresetsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/screensaver')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List global screensaver presets (ADM-015)' })
  @ApiSuccessResponse(TngPresetsScreensaverListResponseDto)
  @ApiErrorResponse()
  async listScreensavers(
    @Query() _query: TngPresetsScreensaverListQueryDto,
  ): Promise<AppResponseSuccess<TngPresetsScreensaverListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'p1q2r3s4-t5u6-7890-abcd-ef1234567890',
            name: 'Spring Collection 2026',
            description: 'Cherry blossom themed screensaver.',
            isActive: true,
            mediaCount: 5,
            scope: 'global',
          },
          {
            id: 'p2q3r4s5-t6u7-8901-abcd-ef2345678901',
            name: 'Corporate Default',
            isActive: true,
            mediaCount: 3,
            scope: 'global',
          },
        ],
        page: 1,
        limit: 20,
        total: 3,
      },
      TngPresetsScreensaverListResponseDto,
    );
  }

  @Post('/screensaver')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create new global preset (ADM-015)' })
  @ApiSuccessResponse(TngPresetsScreensaverCreateResponseDto)
  @ApiErrorResponse()
  async createScreensaver(
    @Body() _body: TngPresetsScreensaverCreateRequestDto,
  ): Promise<AppResponseSuccess<TngPresetsScreensaverCreateResponseDto>> {
    return this.responseService.success(
      { id: 'p3q4r5s6-t7u8-9012-abcd-ef3456789012' },
      TngPresetsScreensaverCreateResponseDto,
    );
  }

  @Put('/screensaver/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update global preset (ADM-015)' })
  @ApiSuccessResponse(TngSuccessResponseDto)
  @ApiErrorResponse()
  async updateScreensaver(
    @Param('id') _id: string,
    @Body() _body: TngPresetsScreensaverUpdateRequestDto,
  ): Promise<AppResponseSuccess<TngSuccessResponseDto>> {
    return this.responseService.success({ success: true }, TngSuccessResponseDto);
  }

  @Delete('/screensaver/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Soft-delete global preset (ADM-015)' })
  @ApiSuccessResponse(TngSuccessResponseDto)
  @ApiErrorResponse()
  async deleteScreensaver(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<TngSuccessResponseDto>> {
    return this.responseService.success({ success: true }, TngSuccessResponseDto);
  }
}
