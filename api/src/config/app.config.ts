import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME,
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  timezone: process.env.APP_TIMEZONE,
  appUrl: process.env.APP_URL,

  enableSwagger: process.env.ENABLE_SWAGGER ?? true,
  basicAuthUsername: process.env.BASIC_AUTH_USERNAME ?? 'username',
  basicAuthPassword: process.env.BASIC_AUTH_PASSWORD ?? 'password',

  internalApiWhitelist: process.env.INTERNAL_API_WHITELIST,
  internalApiKey: process.env.INTERNAL_API_KEY,

  cors: {
    enabled: Boolean(process.env.CORS_ENABLED === 'true'),
    origin: process.env.CORS_ORIGIN?.split(',') ?? [],
  },
}));
