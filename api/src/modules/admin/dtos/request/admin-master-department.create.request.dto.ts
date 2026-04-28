import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class AdminMasterDepartmentCreateRequestDto {
  @ApiProperty({ example: 'Engineering' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Parent department ID for hierarchy' })
  @IsOptional()
  @IsUUID()
  parentId?: string;

  @ApiPropertyOptional({ example: false, description: 'Flag this department as a reject/escalation department' })
  @IsOptional()
  @IsBoolean()
  isReject?: boolean;

  @ApiPropertyOptional({ example: 'Visitors from this department require additional approval.' })
  @IsOptional()
  @IsString()
  rejectMessage?: string;
}
