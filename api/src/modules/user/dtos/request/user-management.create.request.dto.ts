import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ValidationMessages } from 'src/common/messages';
import {
  ALLOWED_CHARACTERS_REGEX,
  PASSWORD_CONSTRAINTS,
  PASSWORD_REQUIREMENTS_REGEX,
} from '../../constants/password-constraints';
import {
  NAME_CONSTRAINTS,
  USERNAME_ALLOWED_CHARACTERS_REGEX,
  USERNAME_CONSTRAINTS,
} from '../../constants/username-constraints';

export class UserManagementCreateRequestDto {
  @ApiProperty({
    description: 'Account type (アカウント種別)',
    enum: UserRole,
    example: UserRole.USER,
    default: UserRole.USER,
  })
  @IsOptional()
  @IsEnum(UserRole, { message: 'Invalid account type' })
  role?: UserRole = UserRole.USER;

  @ApiProperty({
    description: 'User name (ユーザ名)',
    example: 'John Doe',
    maxLength: NAME_CONSTRAINTS.maxLength,
  })
  @IsString({ message: ValidationMessages.FIELD_REQUIRED })
  @IsNotEmpty({ message: ValidationMessages.FIELD_REQUIRED })
  @MaxLength(NAME_CONSTRAINTS.maxLength, { message: ValidationMessages.TEXT_LENGTH_EXCEEDED })
  name: string;

  @ApiProperty({
    description: 'User ID (ID)',
    example: 'User123',
    minLength: USERNAME_CONSTRAINTS.minLength,
    maxLength: USERNAME_CONSTRAINTS.maxLength,
  })
  @IsString({ message: ValidationMessages.USERNAME_REQUIRED })
  @IsNotEmpty({ message: ValidationMessages.USERNAME_REQUIRED })
  @MinLength(USERNAME_CONSTRAINTS.minLength, { message: ValidationMessages.USERNAME_TOO_SHORT })
  @MaxLength(USERNAME_CONSTRAINTS.maxLength, { message: ValidationMessages.USERNAME_TOO_LONG })
  @Matches(USERNAME_ALLOWED_CHARACTERS_REGEX, {
    message: ValidationMessages.INVALID_CHARACTERS,
  })
  username: string;

  @ApiProperty({
    description: 'Password (パスワード)',
    example: 'Password123!',
    minLength: PASSWORD_CONSTRAINTS.minLength,
    maxLength: PASSWORD_CONSTRAINTS.maxLength,
  })
  @IsString({ message: ValidationMessages.PASSWORD_REQUIRED })
  @IsNotEmpty({ message: ValidationMessages.PASSWORD_REQUIRED })
  @MinLength(PASSWORD_CONSTRAINTS.minLength, { message: ValidationMessages.PASSWORD_TOO_SHORT })
  @MaxLength(PASSWORD_CONSTRAINTS.maxLength, { message: ValidationMessages.PASSWORD_TOO_LONG })
  @Matches(ALLOWED_CHARACTERS_REGEX, {
    message: ValidationMessages.INVALID_CHARACTERS,
  })
  @Matches(PASSWORD_REQUIREMENTS_REGEX, {
    message: ValidationMessages.PASSWORD_REQUIREMENTS_NOT_MET,
  })
  password: string;
}
