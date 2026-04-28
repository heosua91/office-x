import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SettingsNotificationsResponseDto {
  @ApiPropertyOptional({ example: 'https://hooks.slack.com/services/T00000/B00000/XXXXXXXX' })
  @Expose()
  webhookUrl?: string;

  @ApiPropertyOptional({ example: 'https://proxy.company.com/webhook/officex' })
  @Expose()
  proxyWebhookUrl?: string;

  @ApiPropertyOptional({ example: true })
  @Expose()
  browserPushEnabled?: boolean;

  @ApiPropertyOptional({ example: '{"endpoint":"https://fcm.googleapis.com/fcm/send/...","keys":{"p256dh":"...","auth":"..."}}' })
  @Expose()
  browserPushSubscription?: string;
}
