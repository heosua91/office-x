import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { NotificationsListQueryDto } from '../dtos/request/notifications.list.query.dto';
import { NotificationsListResponseDto, NotificationsItemResponseDto } from '../dtos/response/notifications.list.response.dto';

@ApiTags('[Public] Notifications')
@Controller({ path: '/users' })
export class NotificationsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/notifications')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch user notifications inbox (OFX-001)' })
  @ApiSuccessResponse(NotificationsListResponseDto)
  @ApiErrorResponse()
  async getNotifications(
    @Query() _query: NotificationsListQueryDto,
  ): Promise<AppResponseSuccess<NotificationsListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'p6q7r8s9-t0u1-2345-v678-901234567890',
            type: 'meeting_reminder',
            title: 'Meeting Reminder: Q2 Strategy Sync',
            body: 'Your meeting starts in 15 minutes.',
            linkUrl: '/meetings/b2c3d4e5-f6a7-8901-bcde-f12345678901',
            relatedResourceType: 'meeting',
            relatedResourceId: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
            isRead: false,
            readAt: undefined,
            createdAt: '2026-04-25T08:45:00.000Z',
          } as NotificationsItemResponseDto,
        ],
        page: 1,
        limit: 20,
        total: 1,
      },
      NotificationsListResponseDto,
    );
  }
}
