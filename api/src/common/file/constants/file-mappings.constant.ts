import {
  ENUM_FILE_EXT_AUDIO,
  ENUM_FILE_EXT_DOCUMENT,
  ENUM_FILE_EXT_IMAGE,
  ENUM_FILE_EXT_VIDEO,
  ENUM_FILE_MIME_AUDIO,
  ENUM_FILE_MIME_DOCUMENT,
  ENUM_FILE_MIME_IMAGE,
  ENUM_FILE_MIME_VIDEO,
  ENUM_FILE_TYPE,
} from '../enums/file.enum';

/**
 * Maps file types to their corresponding extension enums
 * Used for easy access to all extensions of a specific file type
 */
export const FILE_TYPE_TO_EXTENSIONS: Record<ENUM_FILE_TYPE, string[]> = {
  [ENUM_FILE_TYPE.IMAGE]: Object.values(ENUM_FILE_EXT_IMAGE),
  [ENUM_FILE_TYPE.AUDIO]: Object.values(ENUM_FILE_EXT_AUDIO),
  [ENUM_FILE_TYPE.VIDEO]: Object.values(ENUM_FILE_EXT_VIDEO),
  [ENUM_FILE_TYPE.DOCUMENT]: Object.values(ENUM_FILE_EXT_DOCUMENT),
};

/**
 * Maps file types to their corresponding MIME type enums
 * Used for easy access to all MIME types of a specific file type
 */
export const FILE_TYPE_TO_MIMES: Record<ENUM_FILE_TYPE, string[]> = {
  [ENUM_FILE_TYPE.IMAGE]: Object.values(ENUM_FILE_MIME_IMAGE),
  [ENUM_FILE_TYPE.AUDIO]: Object.values(ENUM_FILE_MIME_AUDIO),
  [ENUM_FILE_TYPE.VIDEO]: Object.values(ENUM_FILE_MIME_VIDEO),
  [ENUM_FILE_TYPE.DOCUMENT]: Object.values(ENUM_FILE_MIME_DOCUMENT),
};

/**
 * Maps file extensions to their corresponding MIME types
 * Used for getting the correct MIME type for a file extension
 */
export const FILE_EXTENSION_TO_MIME: Record<string, string> = {
  // Image extensions
  jpg: ENUM_FILE_MIME_IMAGE.JPG,
  jpeg: ENUM_FILE_MIME_IMAGE.JPEG,
  png: ENUM_FILE_MIME_IMAGE.PNG,

  // Audio extensions
  mp3: ENUM_FILE_MIME_AUDIO.MP3,
  wav: ENUM_FILE_MIME_AUDIO.WAV,

  // Video extensions
  mp4: ENUM_FILE_MIME_VIDEO.MP4,
  m4a: ENUM_FILE_MIME_VIDEO.M4A,

  // Document extensions
  pdf: ENUM_FILE_MIME_DOCUMENT.PDF,
  doc: ENUM_FILE_MIME_DOCUMENT.DOC,
  xlsx: ENUM_FILE_MIME_DOCUMENT.XLSX,
  xls: ENUM_FILE_MIME_DOCUMENT.XLS,
  ppt: ENUM_FILE_MIME_DOCUMENT.PPT,
  txt: ENUM_FILE_MIME_DOCUMENT.TXT,
  csv: ENUM_FILE_MIME_DOCUMENT.CSV,
};
