import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthTermsResponseDto {
  @ApiProperty({
    example: 'Terms and Conditions content...',
    description: 'The full text of T&C',
  })
  @IsString()
  @IsNotEmpty()
  termsContent: string;

  @ApiProperty({
    example: 'Privacy Policy content...',
    description: 'The full text of Privacy Policy',
  })
  @IsString()
  @IsNotEmpty()
  privacyPolicyContent: string;

  @ApiProperty({
    example: 'v1.0.0',
    description: 'The current version of policies',
  })
  @IsString()
  @IsNotEmpty()
  version: string;
}
