import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class OfficeUpdateCustomerRequestDto {
  @ApiProperty({
    example: 'Client X',
    description: 'The updated customer company name',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'Technology',
    description: 'The updated customer industry',
  })
  @IsString()
  @IsOptional()
  industry?: string;

  @ApiProperty({
    example: 'Frequent visitor, interested in scalability.',
    description: 'Optional internal notes/insights',
  })
  @IsString()
  @IsOptional()
  aiInsights?: string;
}
