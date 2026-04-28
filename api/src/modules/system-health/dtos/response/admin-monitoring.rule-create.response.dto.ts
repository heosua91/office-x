import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminMonitoringRuleCreateResponseDto {
  @ApiProperty({ example: 'rule_002', description: 'ID of the newly created monitoring rule' })
  @Expose()
  id: string;
}
