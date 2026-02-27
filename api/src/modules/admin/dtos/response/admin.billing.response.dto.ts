import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminBillingStatusResponseDto {
  @ApiProperty()
  @Expose()
  currentPlan: string;

  @ApiProperty()
  @Expose()
  aiQuotaLimit: number;

  @ApiProperty()
  @Expose()
  aiQuotaUsed: number;

  @ApiProperty()
  @Expose()
  nextBillingDate: Date;
}

export class AdminInvoiceResponseDto {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  date: Date;

  @ApiProperty()
  @Expose()
  amount: number;

  @ApiProperty()
  @Expose()
  pdfUrl: string;
}
