import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';

export enum TngOverdraftAction {
  BLOCK = 'block',
  AUTO_POSTPAID = 'auto_postpaid',
  NOTIFY_ONLY = 'notify_only',
}

export class TngSettingsPolicyUpdateRequestDto {
  @ApiPropertyOptional({ example: true, description: 'Enable or disable the global AI limiter' })
  @IsOptional()
  @IsBoolean()
  limiterEnabled?: boolean;

  @ApiPropertyOptional({ enum: TngOverdraftAction })
  @IsOptional()
  @IsEnum(TngOverdraftAction)
  overdraftAction?: TngOverdraftAction;
}
