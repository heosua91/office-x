import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { AdminBrandingImagesUpdateRequestDto } from '../dtos/request/admin-branding.images.update.request.dto';
import { AdminBrandingStandbyUpdateRequestDto } from '../dtos/request/admin-branding.standby.update.request.dto';

import { AdminBrandingImagesResponseDto } from '../dtos/response/admin-branding.images.response.dto';
import { AdminBrandingStandbyResponseDto, AdminBrandingStandbyResponseItemType } from '../dtos/response/admin-branding.standby.response.dto';
import { AdminSuccessResponseDto } from '../dtos/response/admin.success.response.dto';

@ApiTags('[Public] Admin Branding')
@Controller({ path: '/admin/settings' })
export class AdminBrandingPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/images')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch tenant branding images Logo/BG (ADMX-011)' })
  @ApiSuccessResponse(AdminBrandingImagesResponseDto)
  @ApiErrorResponse()
  async getImages(): Promise<AppResponseSuccess<AdminBrandingImagesResponseDto>> {
    return this.responseService.success(
      {
        logo: {
          id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
          url: 'https://storage.example.com/branding/logo.png',
        },
        background: {
          id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
          url: 'https://storage.example.com/branding/background.jpg',
        },
      },
      AdminBrandingImagesResponseDto,
    );
  }

  @Put('/images')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update branding images (ADMX-011)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateImages(
    @Body() _body: AdminBrandingImagesUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }

  @Get('/standby')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fetch digital signage standby settings (ADMX-012)' })
  @ApiSuccessResponse(AdminBrandingStandbyResponseDto)
  @ApiErrorResponse()
  async getStandby(): Promise<AppResponseSuccess<AdminBrandingStandbyResponseDto>> {
    return this.responseService.success(
      {
        items: [
          {
            id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
            type: AdminBrandingStandbyResponseItemType.SLIDE_IMAGE,
            url: 'https://storage.example.com/standby/slide1.jpg',
            displayOrder: 0,
            playIntervalSeconds: 8,
            durationSeconds: undefined,
            isActive: true,
          },
          {
            id: 'd4e5f6a7-b8c9-0123-def0-234567890123',
            type: AdminBrandingStandbyResponseItemType.SLIDE_VIDEO,
            url: 'https://storage.example.com/standby/promo.mp4',
            displayOrder: 1,
            playIntervalSeconds: undefined,
            durationSeconds: 45,
            isActive: true,
          },
          {
            id: 'e5f6a7b8-c9d0-1234-ef01-345678901234',
            type: AdminBrandingStandbyResponseItemType.SLIDE_IMAGE,
            url: 'https://storage.example.com/standby/slide2.jpg',
            displayOrder: 2,
            playIntervalSeconds: 10,
            durationSeconds: undefined,
            isActive: false,
          },
        ],
      },
      AdminBrandingStandbyResponseDto,
    );
  }

  @Put('/standby')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update digital signage content sequence (ADMX-012)' })
  @ApiSuccessResponse(AdminSuccessResponseDto)
  @ApiErrorResponse()
  async updateStandby(
    @Body() _body: AdminBrandingStandbyUpdateRequestDto,
  ): Promise<AppResponseSuccess<AdminSuccessResponseDto>> {
    return this.responseService.success({ success: true }, AdminSuccessResponseDto);
  }
}
