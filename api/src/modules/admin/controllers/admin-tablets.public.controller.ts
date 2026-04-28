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

import { AdminTabletsListQueryDto } from '../dtos/request/admin-tablets.list.query.dto';
import { AdminTabletCreateRequestDto } from '../dtos/request/admin-tablets.create.request.dto';
import { AdminTabletUpdateRequestDto } from '../dtos/request/admin-tablets.update.request.dto';

import { AdminTabletsListResponseDto } from '../dtos/response/admin-tablets.list.response.dto';
import { AdminTabletCreateResponseDto } from '../dtos/response/admin-tablets.create.response.dto';
import { AdminTabletDetailResponseDto } from '../dtos/response/admin-tablets.detail.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin Tablets')
@Controller({ path: '/admin/tablets' })
export class AdminTabletsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List all reception tablets (ADMX-013)' })
  @ApiSuccessResponse(AdminTabletsListResponseDto)
  @ApiErrorResponse()
  async listTablets(
    @Query() _query: AdminTabletsListQueryDto,
  ): Promise<AppResponseSuccess<AdminTabletsListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'e5f6a7b8-c9d0-1234-ef01-345678901234',
            deviceIdentifier: 'TAB-00001',
            name: 'Main Lobby Tablet',
            location: 'Ground Floor, Reception Area',
            purpose: 'reception',
            status: 'online',
            meetingRoomId: undefined,
            lastActiveAt: '2026-04-25T07:45:00.000Z',
          },
          {
            id: 'e6f7a8b9-c0d1-2345-ef01-456789012345',
            deviceIdentifier: 'TAB-00002',
            name: 'Horizon Room Display',
            location: '3rd Floor, East Wing',
            purpose: 'room_display',
            status: 'online',
            meetingRoomId: 'd4e5f6a7-b8c9-0123-def0-234567890123',
            lastActiveAt: '2026-04-25T07:50:00.000Z',
          },
        ],
        page: 1,
        limit: 20,
        total: 3,
      },
      AdminTabletsListResponseDto,
    );
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register new reception tablet (ADMX-014)' })
  @ApiSuccessResponse(AdminTabletCreateResponseDto)
  @ApiErrorResponse()
  async createTablet(
    @Body() _body: AdminTabletCreateRequestDto,
  ): Promise<AppResponseSuccess<AdminTabletCreateResponseDto>> {
    return this.responseService.success(
      {
        id: 'e7f8a9b0-c1d2-3456-ef01-567890123456',
        deviceIdentifier: 'TAB-00003',
        password: 'Xk92!vBpQr',
        qrCodeImageUrl: 'https://storage.example.com/qr/TAB-00003.png',
      },
      AdminTabletCreateResponseDto,
    );
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve config for specific tablet (ADMX-014)' })
  @ApiSuccessResponse(AdminTabletDetailResponseDto)
  @ApiErrorResponse()
  async getTablet(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminTabletDetailResponseDto>> {
    return this.responseService.success(
      {
        id: 'e5f6a7b8-c9d0-1234-ef01-345678901234',
        deviceIdentifier: 'TAB-00001',
        name: 'Main Lobby Tablet',
        location: 'Ground Floor, Reception Area',
        purpose: 'reception',
        status: 'online',
        meetingRoomId: 'd4e5f6a7-b8c9-0123-def0-234567890123',
        settings: { brightness: 80, orientation: 'landscape' },
        linkedSeatLabel: 'A1',
        linkedSeatType: 'desk',
        lastActiveAt: '2026-04-25T07:45:00.000Z',
      },
      AdminTabletDetailResponseDto,
    );
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update tablet config (ADMX-014)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateTablet(
    @Param('id') _id: string,
    @Body() _body: AdminTabletUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'De-register and remove tablet (ADMX-013)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async deleteTablet(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
