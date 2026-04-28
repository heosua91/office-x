import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SystemPlanResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Professional' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'professional', description: 'Machine-readable plan identifier' })
  @Expose()
  code: string;

  @ApiProperty({ example: 49.99, description: 'Monthly subscription price in USD' })
  @Expose()
  priceMonthly: number;

  @ApiProperty({ example: 50, description: 'Maximum number of users allowed' })
  @Expose()
  userLimit: number;

  @ApiProperty({ example: 600, description: 'Monthly AI minutes quota' })
  @Expose()
  aiMinutesLimit: number;

  @ApiProperty({ example: ['Room booking', 'Analytics dashboard', 'AI assistant', 'Priority support'], isArray: true, type: [String] })
  @Expose()
  features: string[];

  @ApiProperty({ example: false, description: 'Whether this is a special/enterprise plan requiring custom quotation' })
  @Expose()
  isSpecial: boolean;
}
