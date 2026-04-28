import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsObject, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AiAssistantChatContextDto {
  @ApiPropertyOptional({ example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901' })
  @IsOptional()
  @IsUUID()
  meetingId?: string;

  @ApiPropertyOptional({ example: 'i9j0k1l2-m3n4-5678-o901-234567890123' })
  @IsOptional()
  @IsUUID()
  clientId?: string;
}

export class AiAssistantChatRequestDto {
  @ApiProperty({ example: 'What were the key action items from the last Acme Corp meeting?' })
  @IsString()
  message: string;

  @ApiPropertyOptional({ type: () => AiAssistantChatContextDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => AiAssistantChatContextDto)
  context?: AiAssistantChatContextDto;

  @ApiPropertyOptional({ example: 'conv_q7r8s9t0u1v2mock' })
  @IsOptional()
  @IsString()
  conversationId?: string;
}
