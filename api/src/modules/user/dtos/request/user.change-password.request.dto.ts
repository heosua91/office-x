import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { ValidationMessages } from 'src/common/messages';
import { Match } from 'src/modules/user/decorators/match-password.decorator';
import { UserMessages } from 'src/modules/user/messages';
import {
  ALLOWED_CHARACTERS_REGEX,
  PASSWORD_CONSTRAINTS,
  PASSWORD_REQUIREMENTS_REGEX,
} from '../../constants/password-constraints';

export class UserChangePasswordRequestDto {
  @ApiProperty({
    description: UserMessages.CURRENT_PASSWORD_LABEL,
    example: 'OldPassword123!',
    maxLength: PASSWORD_CONSTRAINTS.maxLength,
  })
  @IsString({ message: ValidationMessages.PASSWORD_REQUIRED })
  @MaxLength(PASSWORD_CONSTRAINTS.maxLength, { message: ValidationMessages.PASSWORD_TOO_LONG })
  @IsNotEmpty({ message: ValidationMessages.PASSWORD_REQUIRED })
  currentPassword: string;

  @ApiProperty({
    description: UserMessages.NEW_PASSWORD_LABEL,
    example: 'NewPassword123!',
    minLength: PASSWORD_CONSTRAINTS.minLength,
    maxLength: PASSWORD_CONSTRAINTS.maxLength,
  })
  @IsString({ message: ValidationMessages.PASSWORD_REQUIRED })
  @MinLength(PASSWORD_CONSTRAINTS.minLength, { message: ValidationMessages.PASSWORD_TOO_SHORT })
  @MaxLength(PASSWORD_CONSTRAINTS.maxLength, { message: ValidationMessages.PASSWORD_TOO_LONG })
  @Matches(ALLOWED_CHARACTERS_REGEX, {
    message: ValidationMessages.INVALID_CHARACTERS,
  })
  @Matches(PASSWORD_REQUIREMENTS_REGEX, {
    message: ValidationMessages.PASSWORD_REQUIREMENTS_NOT_MET,
  })
  newPassword: string;

  @ApiProperty({
    description: UserMessages.CONFIRM_PASSWORD_LABEL,
    example: 'NewPassword123!',
    maxLength: PASSWORD_CONSTRAINTS.maxLength,
  })
  @IsString({ message: ValidationMessages.PASSWORD_REQUIRED })
  @MaxLength(PASSWORD_CONSTRAINTS.maxLength, { message: ValidationMessages.PASSWORD_TOO_LONG })
  @Match('newPassword', { message: ValidationMessages.PASSWORDS_DO_NOT_MATCH })
  newPasswordConfirm: string;
}
