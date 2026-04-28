import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AdminMonitoringRuleIdParamDto {
  @ApiProperty({ example: 'rule_001', description: 'Monitoring rule ID' })
  @IsString()
  @IsNotEmpty()
  id: string;
}
