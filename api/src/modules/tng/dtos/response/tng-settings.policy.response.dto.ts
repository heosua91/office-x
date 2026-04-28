import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export enum TngOverdraftActionResponse {
  BLOCK = 'block',
  AUTO_POSTPAID = 'auto_postpaid',
  NOTIFY_ONLY = 'notify_only',
}

export class TngSettingsPolicyResponseDto {
  @ApiProperty({ example: true })
  @Expose()
  limiterEnabled: boolean;

  @ApiProperty({ enum: TngOverdraftActionResponse, example: TngOverdraftActionResponse.AUTO_POSTPAID })
  @Expose()
  overdraftAction: TngOverdraftActionResponse;
}
