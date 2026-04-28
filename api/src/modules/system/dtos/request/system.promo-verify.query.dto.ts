import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SystemPromoVerifyQueryDto {
  @ApiProperty({ example: 'PROMO2025', description: 'Promotion code to validate' })
  @IsString()
  @IsNotEmpty()
  code: string;
}
