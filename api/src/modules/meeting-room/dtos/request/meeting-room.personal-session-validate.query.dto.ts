import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class MeetingRoomPersonalSessionValidateQueryDto {
  @ApiPropertyOptional({ example: 'tok_xyz789abc', description: 'Personal join URL token (one of token or sessionCode required)' })
  @IsOptional()
  @IsString()
  token?: string;

  @ApiPropertyOptional({ example: 'SES-88XY', description: 'Session code displayed on room display (one of token or sessionCode required)' })
  @IsOptional()
  @IsString()
  sessionCode?: string;
}
