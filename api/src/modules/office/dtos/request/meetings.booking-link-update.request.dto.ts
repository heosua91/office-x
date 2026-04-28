import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { BookingFormat } from './meetings.booking-generate.request.dto';

export class MeetingsBookingLinkUpdateRequestDto {
  @ApiPropertyOptional({ example: 'Updated Demo Session' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 60 })
  @IsOptional()
  @IsInt()
  @Min(15)
  durationMinutes?: number;

  @ApiPropertyOptional({ enum: BookingFormat, example: BookingFormat.ONLINE })
  @IsOptional()
  @IsEnum(BookingFormat)
  format?: BookingFormat;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isConfidential?: boolean;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsInt()
  @Min(0)
  autoCancelMinutes?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
