import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TngAnalyticsResponseDto {
  @ApiProperty()
  @Expose()
  totalCompanies: number;

  @ApiProperty()
  @Expose()
  totalActiveUsers: number;

  @ApiProperty()
  @Expose()
  totalRevenueThisMonth: number;
}

export class TngCompanyResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  status: string; // ACTIVE, SUSPENDED

  @ApiProperty()
  @Expose()
  plan: string;
}
