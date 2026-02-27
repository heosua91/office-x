import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TngCreateCompanyRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adminEmail: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  plan: string;
}
