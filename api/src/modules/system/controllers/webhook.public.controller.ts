import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
} from 'src/common/response/decorators/response.decorator';
import type { AppResponseSuccess } from 'src/common/response/dtos/response.dto';
import { ResponseService } from 'src/common/response/services/response.service';
import { WebhookStripeRequestDto } from '../dtos/request/webhook.stripe.request.dto';
import { WebhookStripeResponseDto } from '../dtos/response/webhook.stripe.response.dto';

@ApiTags('[Public] Webhooks')
@Controller({ path: '/webhooks' })
export class WebhookPublicController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/stripe')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary:
      'Handle Stripe webhook events: checkout.session.completed, invoice.finalized, invoice.payment_failed (REG-008/009)',
  })
  @ApiSuccessResponse(WebhookStripeResponseDto)
  @ApiErrorResponse()
  async handleStripe(
    @Body() _body: WebhookStripeRequestDto
  ): Promise<AppResponseSuccess<WebhookStripeResponseDto>> {
    return this.responseService.success({ received: true }, WebhookStripeResponseDto);
  }
}
