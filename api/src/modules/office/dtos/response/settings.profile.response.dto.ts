import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SettingsProfileResponseDto {
  @ApiProperty({ example: 'n4o5p6q7-r8s9-0123-t456-789012345678' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  fullName: string;

  @ApiProperty({ example: 'nguyen.vana@company.com' })
  @Expose()
  email: string;

  @ApiProperty({ example: 'member', enum: ['member', 'admin', 'manager'] })
  @Expose()
  role: string;

  @ApiPropertyOptional({ example: 'Product Department' })
  @Expose()
  departmentName?: string;

  @ApiPropertyOptional({ example: 'https://storage.officex.io/avatars/nguyen-vana.jpg' })
  @Expose()
  avatarUrl?: string;

  @ApiPropertyOptional({ example: 'Best regards,\nNguyen Van A' })
  @Expose()
  signatureText?: string;

  @ApiProperty({ example: true })
  @Expose()
  calendarLinked: boolean;

  @ApiProperty({ example: false })
  @Expose()
  driveLinked: boolean;

  @ApiProperty({ example: 'internal', enum: ['public', 'internal', 'confidential'] })
  @Expose()
  defaultMeetingVisibility: string;

  @ApiProperty({ example: false })
  @Expose()
  hasWebhook: boolean;

  @ApiProperty({ example: true })
  @Expose()
  browserPushEnabled: boolean;
}
