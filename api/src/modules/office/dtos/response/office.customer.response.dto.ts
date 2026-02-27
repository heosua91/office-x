import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class OfficeCustomerResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  industry: string;

  @ApiProperty()
  @Expose()
  lastVisit?: Date;

  @ApiProperty()
  @Expose()
  aiInsights?: string;
}
