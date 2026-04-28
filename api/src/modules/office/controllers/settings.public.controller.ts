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

import { SettingsUpdateCredentialsRequestDto } from '../dtos/request/settings.update-credentials.request.dto';
import { SettingsUpdatePrivacyRequestDto } from '../dtos/request/settings.update-privacy.request.dto';
import { SettingsUpdateAvailabilityRequestDto } from '../dtos/request/settings.update-availability.request.dto';
import { SettingsUpdateNotificationsRequestDto } from '../dtos/request/settings.update-notifications.request.dto';
import { SettingsDictionaryQueryDto } from '../dtos/request/settings.dictionary.query.dto';
import { SettingsDictionaryCreateRequestDto } from '../dtos/request/settings.dictionary-create.request.dto';
import { SettingsDictionaryUpdateRequestDto } from '../dtos/request/settings.dictionary-update.request.dto';

import { SettingsProfileResponseDto } from '../dtos/response/settings.profile.response.dto';
import { SettingsNotificationsResponseDto } from '../dtos/response/settings.notifications.response.dto';
import { SettingsDictionaryListResponseDto, SettingsDictionaryItemResponseDto } from '../dtos/response/settings.dictionary.response.dto';
import { SettingsDictionaryCreateResponseDto } from '../dtos/response/settings.dictionary-create.response.dto';
import { OfficeSuccessResponseDto } from '../dtos/response/office.success.response.dto';

@ApiTags('[Public] Settings')
@Controller({ path: '/settings' })
export class SettingsPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch personal profile + integrations + settings overview (OFX-016/017)' })
  @ApiSuccessResponse(SettingsProfileResponseDto)
  @ApiErrorResponse()
  async getProfile(): Promise<AppResponseSuccess<SettingsProfileResponseDto>> {
    return this.responseService.success(
      {
        id: 'n4o5p6q7-r8s9-0123-t456-789012345678',
        fullName: 'Nguyen Van A',
        email: 'nguyen.vana@company.com',
        role: 'member',
        departmentName: 'Product Department',
        avatarUrl: 'https://storage.officex.io/avatars/nguyen-vana.jpg',
        signatureText: 'Best regards,\nNguyen Van A',
        calendarLinked: true,
        driveLinked: false,
        defaultMeetingVisibility: 'internal',
        hasWebhook: false,
        browserPushEnabled: true,
      },
      SettingsProfileResponseDto,
    );
  }

  @Put('/security/credentials')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update password and profile details (OFX-017)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateCredentials(
    @Body() _body: SettingsUpdateCredentialsRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Delete('/integrations/:type')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove Calendar/Slack/Teams integration (OFX-018)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async removeIntegration(
    @Param('type') _type: string,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Put('/privacy')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Toggle AI summary public/internal visibility (OFX-019)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updatePrivacy(
    @Body() _body: SettingsUpdatePrivacyRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Put('/booking/availability')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update personal availability schedule (OFX-020)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateAvailability(
    @Body() _body: SettingsUpdateAvailabilityRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/notifications')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch personal notification settings (OFX-021)' })
  @ApiSuccessResponse(SettingsNotificationsResponseDto)
  @ApiErrorResponse()
  async getNotificationSettings(): Promise<AppResponseSuccess<SettingsNotificationsResponseDto>> {
    return this.responseService.success(
      {
        webhookUrl: undefined,
        proxyWebhookUrl: undefined,
        browserPushEnabled: true,
        browserPushSubscription: undefined,
      },
      SettingsNotificationsResponseDto,
    );
  }

  @Put('/notifications')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update personal notification settings (OFX-021)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateNotificationSettings(
    @Body() _body: SettingsUpdateNotificationsRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Get('/dictionary')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List personal dictionary entries (OFX-025)' })
  @ApiSuccessResponse(SettingsDictionaryListResponseDto)
  @ApiErrorResponse()
  async listDictionary(
    @Query() _query: SettingsDictionaryQueryDto,
  ): Promise<AppResponseSuccess<SettingsDictionaryListResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'o5p6q7r8-s9t0-1234-u567-890123456789',
            phrase: 'OfficeX',
            reading: 'オフィスエックス',
            category: 'product_name',
            frequencyCount: 8,
            isApproved: true,
          } as SettingsDictionaryItemResponseDto,
        ],
        page: 1,
        limit: 20,
        total: 1,
      },
      SettingsDictionaryListResponseDto,
    );
  }

  @Post('/dictionary')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register new word (OFX-025)' })
  @ApiSuccessResponse(SettingsDictionaryCreateResponseDto)
  @ApiErrorResponse()
  async createDictionaryEntry(
    @Body() _body: SettingsDictionaryCreateRequestDto,
  ): Promise<AppResponseSuccess<SettingsDictionaryCreateResponseDto>> {
    return this.responseService.success(
      { id: 'o5p6q7r8-s9t0-1234-u567-890123456789' },
      SettingsDictionaryCreateResponseDto,
    );
  }

  @Put('/dictionary/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update existing word (OFX-025)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async updateDictionaryEntry(
    @Param('id') _id: string,
    @Body() _body: SettingsDictionaryUpdateRequestDto,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }

  @Delete('/dictionary/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove word from personal dictionary (OFX-025)' })
  @ApiSuccessResponse(OfficeSuccessResponseDto)
  @ApiErrorResponse()
  async deleteDictionaryEntry(
    @Param('id') _id: string,
  ): Promise<AppResponseSuccess<OfficeSuccessResponseDto>> {
    return this.responseService.success({ success: true }, OfficeSuccessResponseDto);
  }
}
