import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiPagingSuccessResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type {
  AppResponsePagingSuccess,
  AppResponseSuccess,
} from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import type { UserManagementCreateRequestDto } from '../dtos/request/user-management.create.request.dto';
import type { UserListRequestDto } from '../dtos/request/user-management.list.request.dto';
import type { UserManagementUpdateRequestDto } from '../dtos/request/user-management.update.request.dto';
import { UserProfileResponseDto } from '../dtos/response/user.profile.response.dto';

@ApiTags('[Admin] User Management')
@Controller({
  path: '/user-management',
})
export class UserManagementPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get paginated list of users (Admin only)',
    description:
      'Returns paginated list of users with sorting. Default limit is 20. Can sort by passwordChangedAt, createdAt',
  })
  @ApiPagingSuccessResponse(UserProfileResponseDto)
  @ApiErrorResponse()
  async listUsers(
    @Query() query: UserListRequestDto
  ): Promise<AppResponsePagingSuccess<UserProfileResponseDto>> {
    return this.responseService.successPaging(
      {
        items: [
          {
            id: 1,
            name: 'Mock User 1',
            username: 'user1',
            role: 'USER',
            lockedAt: null,
            passwordChangedAt: new Date(),
            failedLoginAttempts: 0,
            lastLoginAt: new Date(),
          },
          {
            id: 2,
            name: 'Mock Admin',
            username: 'admin1',
            role: 'ADMIN',
            lockedAt: null,
            passwordChangedAt: new Date(),
            failedLoginAttempts: 0,
            lastLoginAt: new Date(),
          },
        ],
        itemsPerPage: 10,
        total: 2,
        currentPage: 1,
        totalPages: 1,
      },
      UserProfileResponseDto
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get user by id (Admin only)',
    description: 'Returns user by id',
  })
  @ApiSuccessResponse(UserProfileResponseDto)
  @ApiErrorResponse()
  async getUserById(
    @Param('id', ParseIntPipe) _id: number
  ): Promise<AppResponseSuccess<UserProfileResponseDto>> {
    return this.responseService.success(
      {
        id: _id,
        name: 'Mock User',
        username: 'mockuser',
        role: 'USER',
        lockedAt: null,
        passwordChangedAt: new Date(),
        failedLoginAttempts: 0,
        lastLoginAt: new Date(),
      } as any,
      UserProfileResponseDto
    );
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new user (Admin only)',
    description: 'Creates a new user with the given information',
  })
  @ApiSuccessResponse(UserProfileResponseDto)
  @ApiErrorResponse()
  async createUser(
    @Body() body: UserManagementCreateRequestDto
  ): Promise<AppResponseSuccess<UserProfileResponseDto>> {
    return this.responseService.success(
      {
        id: 3,
        name: body.name,
        username: body.username,
        role: (body.role || 'USER') as any,
        lockedAt: null,
        passwordChangedAt: new Date(),
        failedLoginAttempts: 0,
        lastLoginAt: null,
      } as any,
      UserProfileResponseDto
    );
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Update user information (Admin only)',
    description:
      'Updates user information including name, username, and optionally password. Password field is optional and only needs to be filled when changing password.',
  })
  @ApiSuccessResponse(UserProfileResponseDto)
  @ApiErrorResponse()
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UserManagementUpdateRequestDto
  ): Promise<AppResponseSuccess<UserProfileResponseDto>> {
    return this.responseService.success(
      {
        id,
        name: body.name || 'Mock User Updated',
        username: body.username || 'mockuser',
        role: 'USER',
        lockedAt: null,
        passwordChangedAt: new Date(),
        failedLoginAttempts: 0,
        lastLoginAt: new Date(),
      } as any,
      UserProfileResponseDto
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete user by id (Admin only)',
    description: 'Deletes user by id',
  })
  @ApiSuccessResponse(UserProfileResponseDto)
  @ApiErrorResponse()
  async deleteUserById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<AppResponseSuccess<UserProfileResponseDto>> {
    return this.responseService.success(
      {
        id,
        name: 'Deleted User',
        username: 'deleted',
        role: 'USER',
        lockedAt: null,
        passwordChangedAt: new Date(),
        failedLoginAttempts: 0,
        lastLoginAt: new Date(),
      } as any,
      UserProfileResponseDto
    );
  }
}
