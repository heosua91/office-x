import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthRegisterStatusQueryDto {
  @ApiProperty({ example: 'reg_token_mock_abc123', description: 'Registration token received from checkout step' })
  @IsString()
  @IsNotEmpty()
  registrationToken: string;
}
