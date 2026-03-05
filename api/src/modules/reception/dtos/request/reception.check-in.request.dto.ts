import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ReceptionWalkInCheckInRequestDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  visitorName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  @IsNotEmpty()
  visitorEmail: string;

  @ApiProperty({ example: 'Meeting with HR' })
  @IsString()
  @IsNotEmpty()
  purpose: string;

  @ApiProperty({ example: 'Alice Smith' })
  @IsString()
  @IsOptional()
  hostName?: string;
}

export class ReceptionVendorCheckInRequestDto {
  @ApiProperty({ example: 'Vendor Service' })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({ example: 'Bob Brown' })
  @IsString()
  @IsNotEmpty()
  visitorName: string;

  @ApiProperty({ example: 'Maintenance' })
  @IsString()
  @IsNotEmpty()
  workDescription: string;
}
