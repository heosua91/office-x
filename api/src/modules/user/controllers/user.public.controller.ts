import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import type { UserChangePasswordRequestDto } from '../dtos/request/user.change-password.request.dto';
import { UserProfileResponseDto } from '../dtos/response/user.profile.response.dto';
import { UserOptionDto } from '../dtos/response/user-option.response.dto';

@ApiTags('[Public] User')
@Controller({
  path: '/user',
})
export class UserPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('/profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiSuccessResponse(UserProfileResponseDto)
  @ApiErrorResponse()
  async profile(): Promise<AppResponseSuccess<UserProfileResponseDto>> {
    return this.responseService.success(
      {
        id: 1,
        name: 'Mock User',
        username: 'mockuser',
        role: 'USER',
        lockedAt: null,
        passwordChangedAt: new Date(),
        failedLoginAttempts: 0,
        lastLoginAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      } as any,
      UserProfileResponseDto
    );
  }

  @Post('/change-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Change user password',
    description: 'Change current user password with current and new password',
  })
  @ApiSuccessResponse(UserProfileResponseDto)
  @ApiErrorResponse()
  async changePassword(
    @Body() _body: UserChangePasswordRequestDto
  ): Promise<AppResponseSuccess<UserProfileResponseDto>> {
    return this.responseService.success(
      {
        id: 1,
        name: 'Mock User',
        username: 'mockuser',
        role: 'USER',
        lockedAt: null,
        passwordChangedAt: new Date(),
        failedLoginAttempts: 0,
        lastLoginAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      } as any,
      UserProfileResponseDto
    );
  }

  @Get('options')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'List users for dropdown (更新者 options)',
    description:
      'Returns list of users (id, name) for dropdowns such as 更新者 filter. Supports optional keyword and role filter.',
  })
  @ApiSuccessResponse(UserOptionDto, true)
  @ApiErrorResponse()
  async listUserOptions(): Promise<AppResponseSuccess<UserOptionDto[]>> {
    return this.responseService.success(
      [
        {
          id: 1,
          name: 'Mock User 1',
          username: 'user1',
        },
        {
          id: 2,
          name: 'Mock User 2',
          username: 'user2',
        },
      ],
      UserOptionDto
    );
  }
}
