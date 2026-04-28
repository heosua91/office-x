import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ReceptionVisitQuickNoticeRequestDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440060', description: 'Visit purpose master ID' })
  @IsString()
  purposeId: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440061', required: false })
  @IsOptional()
  @IsString()
  departmentId?: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440062', required: false })
  @IsOptional()
  @IsString()
  vendorId?: string;

  @ApiProperty({ example: 'Tran Thi B', required: false })
  @IsOptional()
  @IsString()
  guestName?: string;

  @ApiProperty({ example: 'Shopee Express', required: false })
  @IsOptional()
  @IsString()
  guestCompany?: string;

  @ApiProperty({ example: 'Fragile items — handle with care', required: false })
  @IsOptional()
  @IsString()
  note?: string;
}
