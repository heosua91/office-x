import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class TngCreateDeviceRequestDto {
  @ApiProperty({ example: 'Room Tablet v2' })
  @IsString()
  @IsNotEmpty()
  modelName: string;

  @ApiProperty({ example: 'Android 13' })
  @IsString()
  @IsNotEmpty()
  osVersion: string;

  @ApiProperty({ example: ['Handshake', 'Real-time Transcript'] })
  @IsArray()
  features: string[];
}

export class TngUpdatePolicyRequestDto {
  @ApiProperty({ example: 'Global AI Summary Policy' })
  @IsString()
  @IsNotEmpty()
  policyName: string;

  @ApiProperty({ example: 'enforced' })
  @IsString()
  @IsNotEmpty()
  status: string;
}
