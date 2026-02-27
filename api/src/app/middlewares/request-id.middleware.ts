import { Injectable, type NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

/**
 * Middleware to attach a unique request ID to each incoming request
 * This ID can be used for request tracing across multiple services
 * and to correlate logs for a single request journey
 */
@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  // Header name for the request ID
  private readonly REQUEST_ID_HEADER = 'request-id';

  use(req: Request, res: Response, next: NextFunction): void {
    // Only generate a new ID if one doesn't already exist
    // This preserves IDs passed from upstream services or gateways
    if (!req.headers[this.REQUEST_ID_HEADER]) {
      req.headers[this.REQUEST_ID_HEADER] = uuid();
    }

    // Also add the request ID to the response headers for client-side tracking
    const requestId = req.headers[this.REQUEST_ID_HEADER];
    res.setHeader('X-Request-ID', requestId);

    next();
  }
}
