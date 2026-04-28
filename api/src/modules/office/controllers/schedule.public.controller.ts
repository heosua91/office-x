import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { ScheduleCompanyQueryDto } from '../dtos/request/schedule.company.query.dto';
import { ScheduleCompanyResponseDto } from '../dtos/response/schedule.company.response.dto';

@ApiTags('[Public] Schedule')
@Controller({ path: '/schedule' })
export class SchedulePublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/company')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch GANTT/Timeline for all company rooms (OFX-006)' })
  @ApiSuccessResponse(ScheduleCompanyResponseDto)
  @ApiErrorResponse()
  async getCompanySchedule(
    @Query() _query: ScheduleCompanyQueryDto,
  ): Promise<AppResponseSuccess<ScheduleCompanyResponseDto>> {
    return this.responseService.success(
      {
        rooms: [
          {
            roomId: 'd4e5f6a7-b8c9-0123-def0-234567890123',
            name: 'Room A - 3F',
            capacity: 10,
            location: '3rd Floor, Building B',
            slots: [
              {
                meetingId: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
                title: 'Q2 Strategy Sync',
                startTime: '2026-05-10T09:00:00.000Z',
                endTime: '2026-05-10T10:00:00.000Z',
                hostName: 'Nguyen Van A',
                status: 'confirmed',
              },
            ],
          },
          {
            roomId: 'e5f6a7b8-c9d0-1234-ef01-345678901234',
            name: 'Room B - 2F',
            capacity: 6,
            location: '2nd Floor, Building B',
            slots: [],
          },
        ],
        generatedAt: '2026-04-25T10:00:00.000Z',
      },
      ScheduleCompanyResponseDto,
    );
  }
}
