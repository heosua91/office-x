/**
 * Enumeration of supported file types
 * Used to categorize files into major categories
 */
export enum ENUM_FILE_TYPE {
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  DOCUMENT = 'document',
}

/**
 * MIME types for image files
 */
export enum ENUM_FILE_MIME_IMAGE {
  JPG = 'image/jpg',
  JPEG = 'image/jpeg',
  PNG = 'image/png',
}

/**
 * MIME types for audio files
 */
export enum ENUM_FILE_MIME_AUDIO {
  MPEG = 'audio/mpeg',
  MP3 = 'audio/mp3',
  WAV = 'audio/wav',
}

/**
 * MIME types for video files
 */
export enum ENUM_FILE_MIME_VIDEO {
  M4A = 'audio/x-m4a',
  MP4 = 'video/mp4',
}

/**
 * MIME types for document files
 */
export enum ENUM_FILE_MIME_DOCUMENT {
  PDF = 'application/pdf',
  DOC = 'application/msword',
  DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  XLS = 'application/vnd.ms-excel',
  PPT = 'application/vnd.ms-powerpoint',
  PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  TXT = 'text/plain',
  CSV = 'text/csv',
}

/**
 * File extensions for image files
 */
export enum ENUM_FILE_EXT_IMAGE {
  JPG = 'jpg',
  JPEG = 'jpeg',
  PNG = 'png',
  GIF = 'gif',
}

/**
 * File extensions for audio files
 */
export enum ENUM_FILE_EXT_AUDIO {
  MP3 = 'mp3',
  M4A = 'm4a',
  WAV = 'wav',
}

/**
 * File extensions for video files
 */
export enum ENUM_FILE_EXT_VIDEO {
  MP4 = 'mp4',
  MOV = 'mov',
}

/**
 * File extensions for document files
 */
export enum ENUM_FILE_EXT_DOCUMENT {
  PDF = 'pdf',
  DOC = 'doc',
  DOCX = 'docx',
  XLS = 'xls',
  XLSX = 'xlsx',
  PPT = 'ppt',
  PPTX = 'pptx',
  TXT = 'txt',
  CSV = 'csv',
}

/**
 * Combined object containing all MIME types
 */
export const ENUM_FILE_MIME = {
  ...ENUM_FILE_MIME_IMAGE,
  ...ENUM_FILE_MIME_AUDIO,
  ...ENUM_FILE_MIME_VIDEO,
  ...ENUM_FILE_MIME_DOCUMENT,
};

/**
 * Combined object containing all file extensions
 */
export const ENUM_FILE_EXT = {
  ...ENUM_FILE_EXT_IMAGE,
  ...ENUM_FILE_EXT_AUDIO,
  ...ENUM_FILE_EXT_VIDEO,
  ...ENUM_FILE_EXT_DOCUMENT,
};

/**
 * Union type of all MIME type enums
 */
export type ENUM_FILE_MIME =
  | ENUM_FILE_MIME_IMAGE
  | ENUM_FILE_MIME_AUDIO
  | ENUM_FILE_MIME_VIDEO
  | ENUM_FILE_MIME_DOCUMENT;

/**
 * Union type of all file extension enums
 */
export type ENUM_FILE_EXT =
  | ENUM_FILE_EXT_IMAGE
  | ENUM_FILE_EXT_AUDIO
  | ENUM_FILE_EXT_VIDEO
  | ENUM_FILE_EXT_DOCUMENT;
