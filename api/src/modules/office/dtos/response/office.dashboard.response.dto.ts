import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

class DashboardScheduleDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  startTime: Date;

  @ApiProperty()
  @Expose()
  endTime: Date;

  @ApiProperty()
  @Expose()
  roomName: string;
}

class DashboardRoomStatusDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  isAvailable: boolean;

  @ApiProperty()
  @Expose()
  nextAvailableTime?: Date;
}

export class OfficeDashboardResponseDto {
  @ApiProperty({ type: [DashboardScheduleDto] })
  @Expose()
  @Type(() => DashboardScheduleDto)
  schedules: DashboardScheduleDto[];

  @ApiProperty({ type: [DashboardRoomStatusDto] })
  @Expose()
  @Type(() => DashboardRoomStatusDto)
  roomStatus: DashboardRoomStatusDto[];

  @ApiProperty()
  @Expose()
  aiUsageMinutes: number;

  @ApiProperty()
  @Expose()
  aiQuotaMinutes: number;
}
