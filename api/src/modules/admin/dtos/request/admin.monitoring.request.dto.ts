import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class AdminCreateMonitoringRuleRequestDto {
  @ApiProperty({ example: 'AI Quota Alert' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'ai_usage' })
  @IsString()
  @IsNotEmpty()
  metric: string;

  @ApiProperty({ example: '>' })
  @IsString()
  @IsNotEmpty()
  operator: string;

  @ApiProperty({ example: 900 })
  threshold: number;

  @ApiProperty({ example: ['slack', 'email'] })
  @IsArray()
  channels: string[];
}
