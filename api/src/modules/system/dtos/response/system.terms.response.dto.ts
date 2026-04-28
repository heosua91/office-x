import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SystemTermsResponseDto {
  @ApiProperty({ example: 'These are the Terms of Use for OfficeX platform. By using our services you agree to these terms...' })
  @Expose()
  termsContent: string;

  @ApiProperty({ example: 'This Privacy Policy describes how OfficeX collects, uses, and protects your personal information...' })
  @Expose()
  privacyPolicyContent: string;

  @ApiProperty({ example: 'v2.1.0', description: 'Current Terms of Use version' })
  @Expose()
  termsVersion: string;

  @ApiProperty({ example: 'v1.3.0', description: 'Current Privacy Policy version' })
  @Expose()
  privacyVersion: string;

  @ApiProperty({ example: '2025-01-01T00:00:00.000Z', description: 'ISO 8601 date when current versions were published' })
  @Expose()
  publishedAt: string;
}
