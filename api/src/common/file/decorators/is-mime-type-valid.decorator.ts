import {
  registerDecorator,
  type ValidationArguments,
  type ValidationOptions,
} from 'class-validator';
import { FILE_TYPE_TO_MIMES } from '../constants/file-mappings.constant';
import type { ENUM_FILE_TYPE } from '../enums/file.enum';
import { isMimeTypeValidForFileType } from '../utils/file-validation.util';

/**
 * Custom validator decorator that checks if a MIME type is valid for a specific file type
 *
 * Example usage:
 * ```typescript
 * @IsMimeTypeValid(ENUM_FILE_TYPE.IMAGE)
 * mimeType: string;
 * ```
 *
 * @param fileType - The file type to check against
 * @param validationOptions - Optional validation options
 * @returns Property decorator function
 */
export function IsMimeTypeValid(fileType: ENUM_FILE_TYPE, validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'IsMimeTypeValid',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [fileType],
      validator: {
        /**
         * Validates if the MIME type is valid for the specified file type
         */
        validate(value: string, args: ValidationArguments) {
          const [fileType] = args.constraints as [ENUM_FILE_TYPE];
          return isMimeTypeValidForFileType(value, fileType);
        },

        /**
         * Generates a descriptive error message when validation fails
         */
        defaultMessage(args: ValidationArguments) {
          const [fileType] = args.constraints as [ENUM_FILE_TYPE];
          const validMimeTypes = FILE_TYPE_TO_MIMES[fileType] || [];

          return `${args.property} must be one of the following MIME types for ${fileType}: ${validMimeTypes.join(', ')}`;
        },
      },
    });
  };
}
