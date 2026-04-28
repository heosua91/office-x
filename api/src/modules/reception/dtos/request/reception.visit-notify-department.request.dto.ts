import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ReceptionVisitNotifyDepartmentRequestDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440040' })
  @IsString()
  departmentId: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440060', required: false })
  @IsOptional()
  @IsString()
  purposeId?: string;

  @ApiProperty({ example: 'Package delivery for the engineering team', required: false })
  @IsOptional()
  @IsString()
  transcript?: string;

  @ApiProperty({ example: 'Tran Thi B', required: false })
  @IsOptional()
  @IsString()
  guestName?: string;
}
