import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';

export class AdminBillingCustomerPortalRequestDto {
  @ApiPropertyOptional({ example: 'https://app.example.com/billing' })
  @IsOptional()
  @IsUrl()
  returnUrl?: string;
}
