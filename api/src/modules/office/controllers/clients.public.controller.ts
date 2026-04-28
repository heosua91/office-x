import {
  Body,
  Controller,
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

import { ClientsListQueryDto } from '../dtos/request/clients.list.query.dto';
import { ClientsCreateRequestDto } from '../dtos/request/clients.create.request.dto';
import { ClientsImportRequestDto } from '../dtos/request/clients.import.request.dto';
import { ClientsUpdateRequestDto } from '../dtos/request/clients.update.request.dto';

import { ClientsListResponseDto } from '../dtos/response/clients.list.response.dto';
import { ClientsCreateResponseDto } from '../dtos/response/clients.create.response.dto';
import { ClientsImportResponseDto } from '../dtos/response/clients.import.response.dto';
import { ClientsProfileResponseDto } from '../dtos/response/clients.profile.response.dto';
import { ClientsEditProfileResponseDto } from '../dtos/response/clients.edit-profile.response.dto';
import { ClientsVisitLogResponseDto } from '../dtos/response/clients.visit-log.response.dto';
import { OfficeSuccessResponseDto } from '../dtos/response/office.success.response.dto';

@ApiTags('[Public] Clients')
@Controller({ path: '/clients' })
export class ClientsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search/list client companies (OFX-010)' })
  @ApiSuccessResponse(ClientsListResponseDto)
  @ApiErrorResponse()
  async listClients(
    @Query() _query: ClientsListQueryDto,
  ): Promise<AppResponseSuccess<ClientsListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'i9j0k1l2-m3n4-5678-o901-234567890123',
            name: 'Acme Corp',
            contactEmail: 'contact@acme.com',
            industry: 'Technology',
            status: 'active',
            visitCount: 12,
            lastVisit: '2026-04-20T10:00:00.000Z',
          },
          {
            id: 'j0k1l2m3-n4o5-6789-p012-345678901234',
            name: 'Beta Solutions',
            contactEmail: 'info@betasolutions.com',
            industry: 'Finance',
            status: 'active',
            visitCount: 5,
            lastVisit: '2026-04-15T14:00:00.000Z',
          },
        ],
        page: 1,
        limit: 20,
        total: 2,
      },
      ClientsListResponseDto,
    );
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register new client company (OFX-026)' })
  @ApiSuccessResponse(ClientsCreateResponseDto)
  @ApiErrorResponse()
  async createClient(
    @Body() _body: ClientsCreateRequestDto,
  ): Promise<AppResponseSuccess<ClientsCreateResponseDto>> {
    return this.responseService.success(
      { id: 'j0k1l2m3-n4o5-6789-p012-345678901234' },
      ClientsCreateResponseDto,
    );
  }

  @Post('/import')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Import clients from CSV (OFX-010)' })
  @ApiSuccessResponse(ClientsImportResponseDto)
  @ApiErrorResponse()
  async importClients(
    @Body() _body: ClientsImportRequestDto,
  ): Promise<AppResponseSuccess<ClientsImportResponseDto>> {
    return this.responseService.success(
      { jobId: 'job_import_c1d2e3f4mock' },
      ClientsImportResponseDto,
    );
  }

  @Get('/visit/log/:logId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch specific visit log + AI transcript (OFX-013)' })
  @ApiSuccessResponse(ClientsVisitLogResponseDto)
  @ApiErrorResponse()
  async getVisitLog(
    @Param('logId') _logId: string,
  ): Promise<AppResponseSuccess<ClientsVisitLogResponseDto>> {
    return this.responseService.success(
      {
        id: 'k1l2m3n4-o5p6-7890-q123-456789012345',
        clientId: 'i9j0k1l2-m3n4-5678-o901-234567890123',
        visitDate: '2026-04-20T10:00:00.000Z',
        hostName: 'Nguyen Van A',
        transcriptText: 'Nguyen Van A: Welcome, glad you could make it. Jane Doe: Thank you, excited to discuss the roadmap.',
        segments: [
          {
            id: 'seg_d4e5f6a7b8c9mock',
            startTimeMs: 0,
            endTimeMs: 8500,
            speakerName: 'Nguyen Van A',
            textContent: 'Welcome, glad you could make it.',
          },
          {
            id: 'seg_e5f6a7b8c9d0mock',
            startTimeMs: 8600,
            endTimeMs: 18000,
            speakerName: 'Jane Doe',
            textContent: 'Thank you, excited to discuss the roadmap.',
          },
        ],
        summary: 'Discussed Q2 product roadmap and pricing adjustments.',
        actionItems: [
          {
            id: 'm3n4o5p6-q7r8-9012-s345-678901234567',
            content: 'Send revised pricing proposal',
            status: 'pending',
            dueDate: '2026-05-01T00:00:00.000Z',
            assigneeName: 'Nguyen Van A',
          },
        ],
      },
      ClientsVisitLogResponseDto,
    );
  }

  @Get('/:id/profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Detailed client profile + AI visit history (OFX-011)' })
  @ApiSuccessResponse(ClientsProfileResponseDto)
  @ApiErrorResponse()
  async getClientProfile(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<ClientsProfileResponseDto>> {
    return this.responseService.success(
      {
        id: 'i9j0k1l2-m3n4-5678-o901-234567890123',
        name: 'Acme Corp',
        address: '123 Main St, Ho Chi Minh City',
        phone: '+84901234567',
        contactEmail: 'contact@acme.com',
        contactPerson: 'Jane Doe',
        industry: 'Technology',
        status: 'active',
        visitCount: 12,
        lastVisit: '2026-04-20T10:00:00.000Z',
        recentVisits: [
          {
            logId: 'k1l2m3n4-o5p6-7890-q123-456789012345',
            visitDate: '2026-04-20T10:00:00.000Z',
            hostName: 'Nguyen Van A',
            summary: 'Discussed Q2 product roadmap and pricing adjustments.',
          },
        ],
      },
      ClientsProfileResponseDto,
    );
  }

  @Get('/:id/edit-profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch client profile for editing (OFX-012)' })
  @ApiSuccessResponse(ClientsEditProfileResponseDto)
  @ApiErrorResponse()
  async getClientEditProfile(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<ClientsEditProfileResponseDto>> {
    return this.responseService.success(
      {
        id: 'i9j0k1l2-m3n4-5678-o901-234567890123',
        name: 'Acme Corp',
        address: '123 Main St, Ho Chi Minh City',
        phone: '+84901234567',
        contactEmail: 'contact@acme.com',
        contactPerson: 'Jane Doe',
        industry: 'Technology',
        contacts: [
          {
            id: 'l2m3n4o5-p6q7-8901-r234-567890123456',
            name: 'Jane Doe',
            email: 'jane.doe@acme.com',
            phone: '+84901234567',
            position: 'Director of Operations',
            isMain: true,
            autoFill: true,
          },
        ],
      },
      ClientsEditProfileResponseDto,
    );
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update client company profile (OFX-012)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateClient(
    @Param('id') _id: string,
    @Body() _body: ClientsUpdateRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }
}
