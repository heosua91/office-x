import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class MeetingsBookingCancelRequestDto {
  @ApiPropertyOptional({ example: 'Host schedule conflict' })
  @IsOptional()
  @IsString()
  reason?: string;
}
