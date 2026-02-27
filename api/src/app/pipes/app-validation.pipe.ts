import { type ArgumentMetadata, Injectable, ValidationPipe } from '@nestjs/common';

/**
 * Custom validation pipe that extends NestJS ValidationPipe
 * Automatically removes empty values (undefined, empty objects) from validated data
 *
 * Features:
 * - All standard ValidationPipe options are supported
 * - Empty objects are automatically removed from validated objects
 * - Undefined values are filtered out
 */
@Injectable()
export class AppValidationPipe extends ValidationPipe {
  /**
   * Transform and validate incoming data
   * @param value - The value to transform/validate
   * @param metadata - Metadata about the value being processed
   * @returns The transformed value with empty values removed
   */
  async transform(value: unknown, metadata: ArgumentMetadata): Promise<unknown> {
    // Skip validation for primitives and null values
    if (value === null || value === undefined || typeof value !== 'object') {
      return super.transform(value, metadata);
    }

    // Apply standard NestJS validation
    const transformedValue = await super.transform(value, metadata);

    // Then remove any empty values
    return this.removeEmpty(transformedValue, new WeakMap());
  }

  /**
   * Recursively removes empty values from objects and arrays
   * - Removes undefined values
   * - Removes empty objects (no properties)
   * - Processes arrays and objects recursively
   * - Handles circular references with WeakMap
   * - Preserves Date objects and other built-in objects
   *
   * @param obj - The object or array to process
   * @param seenObjects - WeakMap to track already processed objects and prevent circular references
   * @returns The cleaned object with empty values removed
   */
  private removeEmpty(obj: unknown, seenObjects: WeakMap<object, unknown>): unknown {
    // Handle null, undefined, and primitive values
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    // Handle Date objects and other built-in objects that should be preserved
    if (obj instanceof Date || obj instanceof RegExp || obj instanceof Error) {
      return obj;
    }

    // Check for circular references
    if (seenObjects.has(obj)) {
      return seenObjects.get(obj);
    }

    // Handle arrays by recursively processing each item
    if (Array.isArray(obj)) {
      const result = obj.map((item) => this.removeEmpty(item, seenObjects));
      seenObjects.set(obj, result);
      return result;
    }

    // Handle plain objects only (not built-in objects)
    // Skip built-in objects that might look like empty objects but shouldn't be removed
    if (obj.constructor !== Object && obj.constructor !== undefined) {
      // This is likely a built-in object (Buffer, etc.) or class instance
      return obj;
    }

    // Handle plain objects
    const newObj: Record<string, unknown> = {};
    seenObjects.set(obj, newObj);

    Object.keys(obj).forEach((key) => {
      // Process each property recursively
      const cleanedValue = this.removeEmpty(obj[key], seenObjects);

      // Only keep non-empty values
      const isEmptyObject =
        typeof cleanedValue === 'object' &&
        cleanedValue !== null &&
        !Array.isArray(cleanedValue) &&
        !(cleanedValue instanceof Date) &&
        !(cleanedValue instanceof RegExp) &&
        !(cleanedValue instanceof Error) &&
        cleanedValue.constructor === Object &&
        Object.keys(cleanedValue).length === 0;

      if (cleanedValue !== undefined && !isEmptyObject) {
        newObj[key] = cleanedValue;
      }
    });

    return newObj;
  }
}
