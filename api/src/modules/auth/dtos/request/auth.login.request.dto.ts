import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginRequestDto {
  @ApiProperty({ example: 'admin@acme.com' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'SecureP@ss1' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
