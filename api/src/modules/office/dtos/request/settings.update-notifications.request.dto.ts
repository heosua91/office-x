import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class SettingsUpdateNotificationsRequestDto {
  @ApiPropertyOptional({ example: 'https://hooks.slack.com/services/T00000/B00000/XXXXXXXX' })
  @IsOptional()
  @IsUrl()
  webhookUrl?: string;

  @ApiPropertyOptional({ example: 'https://proxy.company.com/webhook/officex' })
  @IsOptional()
  @IsUrl()
  proxyWebhookUrl?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  browserPushEnabled?: boolean;

  @ApiPropertyOptional({ example: '{"endpoint":"https://fcm.googleapis.com/fcm/send/...","keys":{"p256dh":"...","auth":"..."}}' })
  @IsOptional()
  @IsString()
  browserPushSubscription?: string;
}
