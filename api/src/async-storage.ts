import { AsyncLocalStorage } from 'node:async_hooks';

/**
 * Request interface for storing in AsyncLocalStorage
 * This represents the HTTP request data we need to access throughout the application
 */
export interface RequestContext {
  method: string;
  url: string;
  headers: Record<string, string>;
  body?: unknown;
  path: string;
  version: string;
  // Add any additional request properties needed across the application
}

/**
 * AsyncLocalStorage store type
 */
export interface AsyncStorageData {
  request: RequestContext;
}

/**
 * Application-wide AsyncLocalStorage instance
 * Used to store request context that can be accessed from anywhere without passing it through parameters
 *
 * Example usage:
 * 1. Store: asyncLocalStorage.run({ request }, () => ...)
 * 2. Access: const store = asyncLocalStorage.getStore(); const request = store?.request;
 */
export const asyncLocalStorage = new AsyncLocalStorage<AsyncStorageData>();
