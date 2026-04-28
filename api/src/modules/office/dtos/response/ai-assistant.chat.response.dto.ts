import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AiAssistantCitationResponseDto {
  @ApiProperty({ example: 'Meeting log: Q2 Strategy Sync (2026-04-20)' })
  @Expose()
  source: string;

  @ApiProperty({ example: 'Team agreed to revise KPIs by end of April.' })
  @Expose()
  snippet: string;
}

export class AiAssistantChatResponseDto {
  @ApiProperty({ example: 'conv_q7r8s9t0u1v2mock' })
  @Expose()
  conversationId: string;

  @ApiProperty({ example: 'Based on your recent meetings, the Q2 targets have been revised. Would you like a summary?' })
  @Expose()
  message: string;

  @ApiPropertyOptional({ type: [AiAssistantCitationResponseDto] })
  @Expose()
  @Type(() => AiAssistantCitationResponseDto)
  citations?: AiAssistantCitationResponseDto[];
}
