import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminDashboardResponseDto {
  @ApiProperty()
  @Expose()
  totalUsers: number;

  @ApiProperty()
  @Expose()
  totalRooms: number;

  @ApiProperty()
  @Expose()
  aiUsageThisMonth: number;

  @ApiProperty()
  @Expose()
  activeReservations: number;
}
