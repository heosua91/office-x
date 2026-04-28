import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ReceptionAuthLoginRequestDto {
  @ApiProperty({ example: 'TAB-00001', description: 'Unique device identifier printed on the tablet' })
  @IsString()
  @IsNotEmpty()
  deviceIdentifier: string;

  @ApiProperty({ example: 'Xk92!vBpQr' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
