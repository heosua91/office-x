import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class AdminBillingSlotsAddRequestDto {
  @ApiProperty({ example: 5, description: 'Number of additional user seats to add (min 1, max 500)' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  requestedQuantity: number;
}
