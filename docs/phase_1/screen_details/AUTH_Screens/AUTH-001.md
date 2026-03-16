# AUTH-001 - Sign In

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-12 | 1 | New | Sign In |

## Overview

Screen Name: Sign In
URI: /auth/login
Screen Overview: Input Admin ID & PASS OR User ID & PASS to access the system.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「サインイン」 |
| 2 | ログインID(メールアドレス) | テキストボックス | I | － | － | － | － | 〇 | Max 255 | 半角英数記号 | メールアドレス形式 | － |  |
| 3 | パスワード | テキストボックス | I | － | － | － | ●●● (伏せ字) | 〇 | 8-32 | 半角英数記号 | － | － |  |
| 4 | パスワードを表示 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ONの場合、ID:3の伏せ字を解除 |
| 5 | ログイン状態を保持 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ONの場合、セッション有効期限延長 |
| 6 | ログイン | ボタン | － | － | 必須入力済 | － | － | － | － | － | － | DB認証照合 | 押下時、ローディング表示 |
| 7 | パスワードを忘れた方 | リンク | － | － | － | － | － | － | － | － | － | － | 押下時、AUTH-003へ遷移 |
| 8 | エラーメッセージ | ラベル | O | 認証失敗時 | － | － | 赤文字 | － | － | － | － | － | 初期表示は非表示 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Sign In" |
| 2 | Login ID (Email) | Text Box | I | - | - | - | - | 〇 | Max 255 | Half-width alphanumeric/symbols | Email format | - |  |
| 3 | Password | Text Box | I | - | - | - | ●●● (Masked) | 〇 | 8-32 | Half-width alphanumeric/symbols | - | - |  |
| 4 | Show Password | Checkbox | I | - | - | - | - | - | - | - | - | - | If ON, unmask ID:3 |
| 5 | Remember Me | Checkbox | I | - | - | - | - | - | - | - | - | - | If ON, extend session expiration |
| 6 | Login | Button | - | - | Required fields filled | - | - | - | - | - | - | DB Auth check | Loading shown on press |
| 7 | Forgot Password? | Link | - | - | - | - | - | - | - | - | - | - | Press to transition to AUTH-003 |
| 8 | Error Message | Label | O | On Auth failure | - | - | Red text | - | - | - | - | - | Hidden by default |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Login | Press | Call the authentication API and navigate based on role. |
| 2 | Forgot Password? | Press | Transition to AUTH-003. |
| 3 | Show Password | Toggle | Mask/unmask the password field. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Login ID (Email) | Required | AUTH-001-ERR-01 | Field cannot be empty. |
| 2 | Login ID (Email) | Email format | AUTH-001-ERR-03 | Must be a valid email format. |
| 3 | Password | Required | AUTH-001-ERR-01 | Field cannot be empty. |

## Processing Details

```plain
初期表示 / Initial display
  • Focus on "Login ID" field.
  • "Error Message" is hidden.
  • "Login" (ID: 6) button is disabled if fields are empty.

画面更新時 / Interaction
  • When "Show Password" (ID: 4) checkbox is toggled, the input type of the "Password" field switches between dynamic password masking and plain text.
  • "Login" (ID: 6) button enables when both Login ID and Password have values.

アクション発生時 / Action
  • Login button (ID: 6) is pressed:
    ○ Validation: Check mandatory fields and email format according to the "Validations" section.
    ○ If validation passes:
      ▪ Execute API request:
        - Endpoint: /auth/login
        - Method: POST
        - Request Body: { "username": "[ID]", "password": "[PASS]" }
      ▪ If successful (200 OK):
        - Store JWT token in the application state/session.
        - Determine the user's role (Admin or User) from the response.
        - Transition:
            - If role = 'Admin' -> Navigate to ADMX-002.
            - If role = 'User' -> Navigate to OFX-001.
      ▪ If failed (e.g., 401 Unauthorized):
        - Show "Error Message" (ID: 8) with text like "Invalid ID or Password".

  • Forgot Password? link (ID: 7) is pressed:
    ○ Transition to AUTH-003.
```
