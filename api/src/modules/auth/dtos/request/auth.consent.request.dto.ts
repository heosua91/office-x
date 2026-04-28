import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthConsentRequestDto {
  @ApiProperty({ example: 'v2.1.0', description: 'Terms of Use version the user is consenting to' })
  @IsString()
  @IsNotEmpty()
  termsVersion: string;

  @ApiProperty({ example: 'v1.3.0', description: 'Privacy Policy version the user is consenting to' })
  @IsString()
  @IsNotEmpty()
  privacyVersion: string;
}
