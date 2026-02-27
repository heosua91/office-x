import type { ValidationArguments } from 'class-validator';
import {
  FILE_EXTENSION_TO_MIME,
  FILE_TYPE_TO_EXTENSIONS,
  FILE_TYPE_TO_MIMES,
} from '../constants/file-mappings.constant';
import type { ENUM_FILE_TYPE } from '../enums/file.enum';

/**
 * Checks if a file type is valid
 *
 * @param fileType - The file type to validate
 * @param allowedTypes - Array of allowed file types
 * @returns True if valid, false otherwise
 */
export function isValidFileType(
  fileType: string | string[],
  allowedTypes: ENUM_FILE_TYPE[]
): boolean {
  if (typeof fileType === 'string') {
    return allowedTypes.includes(fileType as ENUM_FILE_TYPE);
  }

  if (Array.isArray(fileType)) {
    return fileType.every((type) => allowedTypes.includes(type as ENUM_FILE_TYPE));
  }

  return false;
}

/**
 * Checks if a file extension is valid for a given file type
 *
 * @param extension - The file extension to validate
 * @param fileType - The file type(s) to check against
 * @param extensionsMap - Mapping of file types to allowed extensions
 * @returns True if valid, false otherwise
 */
export function isExtensionValidForType(
  extension: string,
  fileType: ENUM_FILE_TYPE | ENUM_FILE_TYPE[],
  extensionsMap: Record<string, string[]> = FILE_TYPE_TO_EXTENSIONS
): boolean {
  const fileTypes = Array.isArray(fileType) ? fileType : [fileType];

  const validFileTypes = fileTypes.filter(
    (type) => extensionsMap[type] && extensionsMap[type].length > 0
  );

  if (validFileTypes.length === 0) {
    return true; // No valid file types to check against
  }

  return validFileTypes.some((type) => extensionsMap[type].includes(extension));
}

/**
 * Gets valid file types from validation arguments
 *
 * @param args - Validation arguments
 * @param fileTypePropertyName - Name of the property containing file type
 * @returns Array of file types
 */
export function getFileTypesFromValidationArgs(
  args: ValidationArguments,
  fileTypePropertyName: string
): ENUM_FILE_TYPE[] {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fileTypeValue = (args.object as any)[fileTypePropertyName];
  return Array.isArray(fileTypeValue) ? fileTypeValue : [fileTypeValue];
}

/**
 * Creates an error message for invalid file types
 *
 * @param propertyName - Name of the property being validated
 * @param allowedTypes - Array of allowed file types
 * @returns Formatted error message
 */
export function createFileTypeErrorMessage(
  propertyName: string,
  allowedTypes: ENUM_FILE_TYPE[]
): string {
  return `${propertyName} must be a string or an array of strings, and each value must be one of the following: ${allowedTypes.join(', ')}`;
}

/**
 * Creates an error message for invalid file extensions
 *
 * @param propertyName - Name of the property being validated
 * @param fileTypes - Array of file types
 * @param extensionsMap - Mapping of file types to allowed extensions
 * @returns Formatted error message
 */
export function createFileExtensionErrorMessage(
  propertyName: string,
  fileTypes: ENUM_FILE_TYPE[],
  extensionsMap: Record<string, string[]>
): string {
  const validFileTypes = fileTypes.filter(
    (type) => extensionsMap[type] && extensionsMap[type].length > 0
  );

  if (validFileTypes.length === 0) {
    return `${propertyName} cannot be validated because no valid fileType(s) were provided.`;
  }

  const messages = validFileTypes.map((type) => {
    const validExtensions = extensionsMap[type];
    return `For fileType '${type}', allowed extensions are: ${validExtensions.join(', ')}`;
  });

  return `${propertyName} must match one of the following: ${messages.join('; ')}`;
}

/**
 * Gets MIME type for a file extension
 *
 * @param extension - File extension
 * @returns MIME type or undefined if not found
 */
export function getMimeTypeForExtension(extension: string): string | undefined {
  const normalizedExtension = extension.toLowerCase().replace(/^\./, '');
  return FILE_EXTENSION_TO_MIME[normalizedExtension];
}

/**
 * Checks if a MIME type is valid for a given file type
 *
 * @param mimeType - MIME type to validate
 * @param fileType - File type to check against
 * @returns True if valid, false otherwise
 */
export function isMimeTypeValidForFileType(mimeType: string, fileType: ENUM_FILE_TYPE): boolean {
  const validMimeTypes = FILE_TYPE_TO_MIMES[fileType] || [];
  return validMimeTypes.includes(mimeType);
}
