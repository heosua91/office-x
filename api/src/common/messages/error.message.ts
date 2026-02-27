export const SYSTEM_ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: 'システムエラーが発生しました',
  DATABASE_CONNECTION_ERROR: 'データベース接続エラーが発生しました',
  FILE_UPLOAD_ERROR: 'ファイルのアップロードに失敗しました',
  FILE_SIZE_EXCEEDED: 'ファイルサイズが上限を超えています',
  INVALID_FILE_FORMAT: 'ファイル形式が正しくありません',
} as const;

export const HTTP_ERROR_MESSAGES = {
  BAD_REQUEST: '不正なリクエストです',
  UNAUTHORIZED: '認証が必要です',
  FORBIDDEN: 'アクセス権限がありません',
  NOT_FOUND: 'リソースが見つかりません',
  CONFLICT: 'データの競合が発生しました',
} as const;

export type SystemErrorMessageKey = keyof typeof SYSTEM_ERROR_MESSAGES;
export type HttpErrorMessageKey = keyof typeof HTTP_ERROR_MESSAGES;
