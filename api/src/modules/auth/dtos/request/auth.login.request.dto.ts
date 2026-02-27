import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginRequestDto {
  @ApiProperty({
    example: 'admin@tqa.com',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'Password123!',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
