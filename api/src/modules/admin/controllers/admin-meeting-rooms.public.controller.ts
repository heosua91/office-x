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

import { AdminMeetingRoomsListQueryDto } from '../dtos/request/admin-meeting-rooms.list.query.dto';
import { AdminMeetingRoomsImportRequestDto } from '../dtos/request/admin-meeting-rooms.import.request.dto';
import { AdminMeetingRoomCreateRequestDto } from '../dtos/request/admin-meeting-rooms.create.request.dto';
import { AdminMeetingRoomUpdateRequestDto } from '../dtos/request/admin-meeting-rooms.update.request.dto';

import { AdminMeetingRoomsListResponseDto } from '../dtos/response/admin-meeting-rooms.list.response.dto';
import { AdminMeetingRoomsImportResponseDto } from '../dtos/response/admin-meeting-rooms.import.response.dto';
import { AdminMeetingRoomCreateResponseDto } from '../dtos/response/admin-meeting-rooms.create.response.dto';
import { AdminMeetingRoomDetailResponseDto } from '../dtos/response/admin-meeting-rooms.detail.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin Meeting Rooms')
@Controller({ path: '/admin' })
export class AdminMeetingRoomsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/meeting-rooms')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List all meeting rooms (ADMX-007)' })
  @ApiSuccessResponse(AdminMeetingRoomsListResponseDto)
  @ApiErrorResponse()
  async listRooms(
    @Query() _query: AdminMeetingRoomsListQueryDto,
  ): Promise<AppResponseSuccess<AdminMeetingRoomsListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'd4e5f6a7-b8c9-0123-def0-234567890123',
            name: 'Horizon Room',
            capacity: 10,
            location: '3rd Floor, East Wing',
            isMultiDevice: false,
            isActive: true,
          },
          {
            id: 'd5e6f7a8-b9c0-1234-def0-345678901234',
            name: 'Summit Room',
            capacity: 20,
            location: '5th Floor, West Wing',
            isMultiDevice: true,
            isActive: true,
          },
        ],
        page: 1,
        limit: 20,
        total: 8,
      },
      AdminMeetingRoomsListResponseDto,
    );
  }

  @Post('/meeting-rooms/import')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Bulk import rooms via CSV (ADMX-007)' })
  @ApiSuccessResponse(AdminMeetingRoomsImportResponseDto)
  @ApiErrorResponse()
  async importRooms(
    @Body() _body: AdminMeetingRoomsImportRequestDto,
  ): Promise<AppResponseSuccess<AdminMeetingRoomsImportResponseDto>> {
    return this.responseService.success(
      { jobId: 'job_c3d4e5f6a7b8mock' },
      AdminMeetingRoomsImportResponseDto,
    );
  }

  @Post('/meeting-rooms')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register new meeting room (ADMX-008)' })
  @ApiSuccessResponse(AdminMeetingRoomCreateResponseDto)
  @ApiErrorResponse()
  async createRoom(
    @Body() _body: AdminMeetingRoomCreateRequestDto,
  ): Promise<AppResponseSuccess<AdminMeetingRoomCreateResponseDto>> {
    return this.responseService.success(
      { id: 'd6e7f8a9-b0c1-2345-def0-456789012345' },
      AdminMeetingRoomCreateResponseDto,
    );
  }

  @Get('/meeting-rooms/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'View room details (ADMX-009)' })
  @ApiSuccessResponse(AdminMeetingRoomDetailResponseDto)
  @ApiErrorResponse()
  async getRoom(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminMeetingRoomDetailResponseDto>> {
    return this.responseService.success(
      {
        id: 'd4e5f6a7-b8c9-0123-def0-234567890123',
        name: 'Horizon Room',
        capacity: 10,
        location: '3rd Floor, East Wing',
        equipment: 'Projector, Whiteboard, Video conferencing',
        calendarResourceId: 'calendar-resource-id-abc123',
        mapImageUrl: 'https://storage.example.com/maps/3f-east.png',
        isMultiDevice: false,
        isActive: true,
      },
      AdminMeetingRoomDetailResponseDto,
    );
  }

  @Put('/meeting-rooms/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update room (ADMX-009)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateRoom(
    @Param('id') _id: string,
    @Body() _body: AdminMeetingRoomUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Delete('/meeting-rooms/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete room (ADMX-009)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async deleteRoom(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
