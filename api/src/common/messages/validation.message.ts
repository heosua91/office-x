export const ValidationMessages = {
  // General validation
  FIELD_REQUIRED: '入力されていません',
  INVALID_FORMAT: '入力形式に誤りがあります',
  INVALID_CHARACTERS: '使用できない文字が入力されています',
  TEXT_LENGTH_EXCEEDED: '文字数オーバーです',

  // Password validation (from requirements)
  PASSWORD_REQUIRED: 'パスワードは必須です',
  PASSWORD_TOO_SHORT: 'パスワードは8文字以上である必要があります',
  PASSWORD_TOO_LONG: 'パスワードは32文字以下である必要があります',
  PASSWORD_REQUIREMENTS_NOT_MET: '入力されたパスワードが要件を満たしていません',
  PASSWORDS_DO_NOT_MATCH: '確認用パスワードが一致していません',

  // User fields
  USERNAME_REQUIRED: 'ユーザ名は必須です',
  USERNAME_TOO_SHORT: 'ユーザ名は4文字以上である必要があります',
  USERNAME_TOO_LONG: 'ユーザ名は32文字以下である必要があります',
  USERNAME_INVALID_FORMAT: 'ユーザ名の形式が正しくありません',

  // Numeric validation
  INVALID_NUMBER: '数値の形式が正しくありません',
} as const;

export type ValidationMessageKey = keyof typeof ValidationMessages;
