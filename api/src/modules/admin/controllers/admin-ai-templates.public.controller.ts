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

import { AdminAiTemplatesListQueryDto } from '../dtos/request/admin-ai-templates.list.query.dto';
import { AdminAiTemplateCreateRequestDto } from '../dtos/request/admin-ai-templates.create.request.dto';
import { AdminAiTemplateTestRequestDto } from '../dtos/request/admin-ai-templates.test.request.dto';
import { AdminAiTemplateUpdateRequestDto } from '../dtos/request/admin-ai-templates.update.request.dto';

import { AdminAiTemplatesListResponseDto } from '../dtos/response/admin-ai-templates.list.response.dto';
import { AdminAiTemplateCreateResponseDto } from '../dtos/response/admin-ai-templates.create.response.dto';
import { AdminAiTemplateTestResponseDto } from '../dtos/response/admin-ai-templates.test.response.dto';
import { AdminAiTemplateDetailResponseDto } from '../dtos/response/admin-ai-templates.detail.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin AI Templates')
@Controller({ path: '/admin/ai-templates' })
export class AdminAiTemplatesPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List custom AI prompt templates (ADMX-030)' })
  @ApiSuccessResponse(AdminAiTemplatesListResponseDto)
  @ApiErrorResponse()
  async listTemplates(
    @Query() _query: AdminAiTemplatesListQueryDto,
  ): Promise<AppResponseSuccess<AdminAiTemplatesListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'b3c4d5e6-f7a8-9012-bcde-f12345678901',
            name: 'Executive Summary Template',
            type: 'summary',
            scope: 'internal',
            isDefault: true,
            isActive: true,
            createdAt: '2026-03-15T08:00:00.000Z',
          },
          {
            id: 'c4d5e6f7-a8b9-0123-cdef-234567890123',
            name: 'Client Thank You Email',
            type: 'thank_you_email',
            scope: 'client',
            isDefault: false,
            isActive: true,
            createdAt: '2026-04-01T09:00:00.000Z',
          },
        ],
        page: 1,
        limit: 20,
        total: 5,
      },
      AdminAiTemplatesListResponseDto,
    );
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create new template (ADMX-031)' })
  @ApiSuccessResponse(AdminAiTemplateCreateResponseDto)
  @ApiErrorResponse()
  async createTemplate(
    @Body() _body: AdminAiTemplateCreateRequestDto,
  ): Promise<AppResponseSuccess<AdminAiTemplateCreateResponseDto>> {
    return this.responseService.success(
      { id: 'd5e6f7a8-b9c0-1234-def0-345678901234' },
      AdminAiTemplateCreateResponseDto,
    );
  }

  @Post('/test')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Test template with sample data (ADMX-031)' })
  @ApiSuccessResponse(AdminAiTemplateTestResponseDto)
  @ApiErrorResponse()
  async testTemplate(
    @Body() _body: AdminAiTemplateTestRequestDto,
  ): Promise<AppResponseSuccess<AdminAiTemplateTestResponseDto>> {
    return this.responseService.success(
      {
        output:
          '- Q2 roadmap discussed\n- Budget allocation for engineering reviewed\n- Alice to send revised proposal by Friday',
        durationMs: 1240,
      },
      AdminAiTemplateTestResponseDto,
    );
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch AI template for editing (ADMX-031)' })
  @ApiSuccessResponse(AdminAiTemplateDetailResponseDto)
  @ApiErrorResponse()
  async getTemplate(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminAiTemplateDetailResponseDto>> {
    return this.responseService.success(
      {
        id: 'b3c4d5e6-f7a8-9012-bcde-f12345678901',
        name: 'Executive Summary Template',
        type: 'summary',
        scope: 'internal',
        promptText: 'Please summarize the following meeting transcript in bullet points: {{transcript}}',
        outputFormat: 'bullet_points',
        isDefault: true,
        isActive: true,
        createdAt: '2026-03-15T08:00:00.000Z',
        updatedAt: '2026-04-20T10:30:00.000Z',
      },
      AdminAiTemplateDetailResponseDto,
    );
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update existing template (ADMX-031)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateTemplate(
    @Param('id') _id: string,
    @Body() _body: AdminAiTemplateUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove template (ADMX-030)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async deleteTemplate(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
