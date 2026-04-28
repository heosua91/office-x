import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ClientsContactResponseDto {
  @ApiProperty({ example: 'l2m3n4o5-p6q7-8901-r234-567890123456' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Jane Doe' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: 'jane.doe@acme.com' })
  @Expose()
  email?: string;

  @ApiPropertyOptional({ example: '+84901234567' })
  @Expose()
  phone?: string;

  @ApiPropertyOptional({ example: 'Director of Operations' })
  @Expose()
  position?: string;

  @ApiProperty({ example: true })
  @Expose()
  isMain: boolean;

  @ApiProperty({ example: true, description: 'Whether contact info is auto-filled in bookings' })
  @Expose()
  autoFill: boolean;
}

export class ClientsEditProfileResponseDto {
  @ApiProperty({ example: 'i9j0k1l2-m3n4-5678-o901-234567890123' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Acme Corp' })
  @Expose()
  name: string;

  @ApiPropertyOptional({ example: '123 Main St, Ho Chi Minh City' })
  @Expose()
  address?: string;

  @ApiPropertyOptional({ example: '+84901234567' })
  @Expose()
  phone?: string;

  @ApiPropertyOptional({ example: 'contact@acme.com' })
  @Expose()
  contactEmail?: string;

  @ApiPropertyOptional({ example: 'Jane Doe' })
  @Expose()
  contactPerson?: string;

  @ApiPropertyOptional({ example: 'Technology' })
  @Expose()
  industry?: string;

  @ApiProperty({ type: [ClientsContactResponseDto] })
  @Expose()
  @Type(() => ClientsContactResponseDto)
  contacts: ClientsContactResponseDto[];
}
