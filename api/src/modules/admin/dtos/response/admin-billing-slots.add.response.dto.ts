import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminBillingSlotsAddResponseDto {
  @ApiProperty({ example: 'req_a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  requestId: string;

  @ApiProperty({ example: 5 })
  @Expose()
  requestedQuantity: number;

  @ApiProperty({ example: 12.5, description: 'Prorated amount to be charged in USD' })
  @Expose()
  proratedAmount: number;

  @ApiProperty({ example: 35, description: 'New effective user seat limit after this request' })
  @Expose()
  newEffectiveLimit: number;
}
