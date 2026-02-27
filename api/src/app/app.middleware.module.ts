import {
  HttpStatus,
  type MiddlewareConsumer,
  Module,
  type NestModule,
  type ValidationPipeOptions,
} from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import type { ValidationError } from 'class-validator';
import { RequestValidationException } from 'src/common/validation/exceptions/request.validation.exception';
import { AllExceptionFilter } from './filters/all-exception.filter';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationExceptionFilter } from './filters/validation-exception.filter';
import { VersionInterceptor } from './interceptors/version.interceptor';
import { RequestIdMiddleware } from './middlewares/request-id.middleware';
import { AppValidationPipe } from './pipes/app-validation.pipe';

/**
 * Throttler configuration for rate limiting
 */
const THROTTLER_CONFIG = [
  {
    ttl: 60000, // 1 minute
    limit: 500, // 500 requests per minute
  },
];

/**
 * Validation pipe configuration
 */
const VALIDATION_PIPE_CONFIG: ValidationPipeOptions = {
  whitelist: true,
  transform: true,
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  exceptionFactory: (errors: ValidationError[]) => new RequestValidationException(errors),
};

/**
 * Application middleware module
 *
 * This module is responsible for configuring:
 * - Global guards (throttling, authentication)
 * - Global interceptors (performance logging, versioning)
 * - Global pipes (validation)
 * - Global filters (exception handling)
 * - Global middleware (request logging, request ID)
 */
@Module({
  imports: [ThrottlerModule.forRoot(THROTTLER_CONFIG)],
  controllers: [],
  providers: [
    // Guards
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },

    // Interceptors
    {
      provide: APP_INTERCEPTOR,
      useClass: VersionInterceptor,
    },
    // Pipes
    {
      provide: APP_PIPE,
      useFactory: () => new AppValidationPipe(VALIDATION_PIPE_CONFIG),
    },

    // Exception Filters
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ValidationExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  exports: [],
})
export class AppMiddlewareModule implements NestModule {
  /**
   * Configure global middleware that should be applied to all routes
   */
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
