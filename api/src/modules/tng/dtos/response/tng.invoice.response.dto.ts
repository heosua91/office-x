import { ApiProperty } from '@nestjs/swagger';

export class TngInvoiceResponseDto {
  @ApiProperty({ example: 'INV-SYS-001' })
  id: string;

  @ApiProperty({ example: 'Company A' })
  client: string;

  @ApiProperty({ example: 500 })
  amount: number;

  @ApiProperty({ example: '2024-03-01T10:00:00Z' })
  date: Date;
}
