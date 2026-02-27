import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AuthPlanResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  price: number;

  @ApiProperty()
  @Expose()
  currency: string;

  @ApiProperty({
    description: 'Features included in this plan',
    type: [String],
  })
  @Expose()
  features: string[];
}
