import {
  type CallHandler,
  type ExecutionContext,
  Injectable,
  type NestInterceptor,
} from '@nestjs/common';
import type { Observable } from 'rxjs';
import { asyncLocalStorage } from '../../async-storage';

/**
 * Interceptor that extracts API version information from requests
 * and makes it available throughout the request lifecycle
 *
 * Supports API versioning via the Accept-Version header
 */
@Injectable()
export class VersionInterceptor implements NestInterceptor {
  // Default API version if none is specified
  private readonly DEFAULT_VERSION = '1';

  // Header used for version specification
  private readonly VERSION_HEADER = 'accept-version';

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();

    // Extract version from header or use default
    const version = request.headers[this.VERSION_HEADER] || this.DEFAULT_VERSION;

    // Make version available on the request object
    request.version = version;

    // Store request context in AsyncLocalStorage for access anywhere in the application
    // without having to pass it through parameters
    return asyncLocalStorage.run({ request }, () => next.handle());
  }
}
