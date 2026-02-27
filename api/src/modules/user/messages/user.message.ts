export const UserMessages = {
  // Profile
  USER_NOT_FOUND: 'ユーザが見つかりません',
  USER_ALREADY_EXISTS: 'ユーザが既に存在します',
  CANNOT_DELETE_SELF: '自分自身のアカウントは削除できません。',
  CANNOT_MODIFY_ADMIN: '管理者アカウントを変更できません',
  INVALID_USER_ROLE: '無効なユーザ権限です',

  // Labels for API documentation
  CURRENT_PASSWORD_LABEL: '現在のパスワード',
  NEW_PASSWORD_LABEL: '新しいパスワード',
  CONFIRM_PASSWORD_LABEL: '新しいパスワード（確認）',
} as const;

export type UserMessageKey = keyof typeof UserMessages;
