import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';

import { AiAssistantChatRequestDto } from '../dtos/request/ai-assistant.chat.request.dto';
import { AiAssistantChatResponseDto } from '../dtos/response/ai-assistant.chat.response.dto';

@ApiTags('[Public] AI Assistant')
@Controller({ path: '/ai' })
export class AiAssistantPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/assistant/chat')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'AI Assistant chat interaction (OFX-001)' })
  @ApiSuccessResponse(AiAssistantChatResponseDto)
  @ApiErrorResponse()
  async chat(
    @Body() _body: AiAssistantChatRequestDto,
  ): Promise<AppResponseSuccess<AiAssistantChatResponseDto>> {
    return this.responseService.success(
      {
        conversationId: 'conv_q7r8s9t0u1v2mock',
        message: 'Based on your recent meetings, the Q2 targets have been revised. The team agreed to update the KPIs by end of April. Would you like a detailed summary?',
        citations: [
          {
            source: 'Meeting log: Q2 Strategy Sync (2026-04-20)',
            snippet: 'Team agreed to revise KPIs by end of April.',
          },
        ],
      },
      AiAssistantChatResponseDto,
    );
  }
}
