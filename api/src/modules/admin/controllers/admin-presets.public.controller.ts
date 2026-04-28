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

import { AdminPresetsListQueryDto } from '../dtos/request/admin-presets.list.query.dto';
import { AdminPresetCreateRequestDto } from '../dtos/request/admin-presets.create.request.dto';
import { AdminPresetUpdateRequestDto } from '../dtos/request/admin-presets.update.request.dto';

import { AdminPresetsListResponseDto } from '../dtos/response/admin-presets.list.response.dto';
import { AdminPresetCreateResponseDto } from '../dtos/response/admin-presets.create.response.dto';
import { AdminPresetUsageResponseDto } from '../dtos/response/admin-presets.usage.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin Presets')
@Controller({ path: '/admin/presets' })
export class AdminPresetsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List standby-screen presets (ADMX-015)' })
  @ApiSuccessResponse(AdminPresetsListResponseDto)
  @ApiErrorResponse()
  async listPresets(
    @Query() _query: AdminPresetsListQueryDto,
  ): Promise<AppResponseSuccess<AdminPresetsListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'f6a7b8c9-d0e1-2345-f012-456789012345',
            name: 'Welcome Screen Pack',
            description: 'Default standby screen for main reception tablets',
            isActive: true,
            mediaCount: 4,
            appliedToDeviceCount: 3,
          },
          {
            id: 'f7a8b9c0-d1e2-3456-f012-567890123456',
            name: 'Corporate Branding Pack',
            description: 'Slides showcasing company values and news',
            isActive: true,
            mediaCount: 6,
            appliedToDeviceCount: 1,
          },
        ],
        page: 1,
        limit: 20,
        total: 6,
      },
      AdminPresetsListResponseDto,
    );
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create new preset group (ADMX-015)' })
  @ApiSuccessResponse(AdminPresetCreateResponseDto)
  @ApiErrorResponse()
  async createPreset(
    @Body() _body: AdminPresetCreateRequestDto,
  ): Promise<AppResponseSuccess<AdminPresetCreateResponseDto>> {
    return this.responseService.success(
      { id: 'f8a9b0c1-d2e3-4567-f012-678901234567' },
      AdminPresetCreateResponseDto,
    );
  }

  @Get('/:id/usage')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List reception devices currently applying this preset (ADMX-015)' })
  @ApiSuccessResponse(AdminPresetUsageResponseDto)
  @ApiErrorResponse()
  async getPresetUsage(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminPresetUsageResponseDto>> {
    return this.responseService.success(
      {
        presetId: 'f6a7b8c9-d0e1-2345-f012-456789012345',
        devices: [
          {
            deviceId: 'e5f6a7b8-c9d0-1234-ef01-345678901234',
            deviceName: 'Main Lobby Tablet',
            location: 'Ground Floor, Reception Area',
            status: 'online',
          },
          {
            deviceId: 'e6f7a8b9-c0d1-2345-ef01-456789012345',
            deviceName: 'Horizon Room Display',
            location: '3rd Floor, East Wing',
            status: 'online',
          },
          {
            deviceId: 'e7f8a9b0-c1d2-3456-ef01-567890123456',
            deviceName: 'South Entrance Tablet',
            location: 'Ground Floor, South Entrance',
            status: 'offline',
          },
        ],
        roomCount: 2,
      },
      AdminPresetUsageResponseDto,
    );
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update preset metadata + member media (ADMX-015)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updatePreset(
    @Param('id') _id: string,
    @Body() _body: AdminPresetUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Soft-delete preset group (ADMX-015)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async deletePreset(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
