import { Body, Controller, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { TasksUpdateTaskRequestDto } from '../dtos/request/tasks.update-task.request.dto';
import { OfficeSuccessResponseDto } from '../dtos/response/office.success.response.dto';

@ApiTags('[Public] Tasks')
@Controller({ path: '/tasks' })
export class TasksPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Patch('/:taskId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update status of AI-detected action items (OFX-013)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateTask(
    @Param('taskId') _taskId: string,
    @Body() _body: TasksUpdateTaskRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }
}
