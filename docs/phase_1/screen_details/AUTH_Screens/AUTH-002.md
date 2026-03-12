# AUTH-002 - Sign In for TNG

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-12 | 1 | New | Sign In for TNG |

## Overview

Screen Name: Sign In for TNG
URI: /auth/tng/login
Screen Overview: Account for TNG Admin to sign in and manage the platform.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 固定文言「TNG管理サインイン」 |
| 2 | 管理用アカウントID | テキストボックス | I | － | － | － | － | 〇 | Max 50 | 半角英数記号 | － | － | |
| 3 | パスワード | テキストボックス | I | － | － | － | ●●● (伏せ字) | 〇 | 8-32 | 半角英数記号 | － | － | |
| 4 | パスワードを表示 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ONの場合、ID:3の伏せ字を解除 |
| 5 | ログイン | ボタン | － | － | 必須入力済 | － | － | － | － | － | － | DB認証照合 | 押下時、認証API実行 |
| 6 | エラーメッセージ | ラベル | O | 認証失敗時 | － | － | － | － | － | － | － | － | 初期表示は非表示 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen Title | Label | O | - | - | - | - | - | - | Full-width | - | - | Fixed text "TNG Admin Sign In" |
| 2 | Admin Account ID | Text Box | I | - | - | - | - | 〇 | Max 50 | Half-width alphanumeric/symbols | - | - | |
| 3 | Password | Text Box | I | - | - | - | ●●● (Masked) | 〇 | 8-32 | Half-width alphanumeric/symbols | - | - | |
| 4 | Show Password | Checkbox | I | - | - | - | - | - | - | - | - | - | If ON, unmask ID:3 |
| 5 | Login | Button | - | - | Required fields filled | - | - | - | - | - | - | DB Auth check | Execute Auth API on press |
| 6 | Error Message | Label | O | On Auth failure | - | - | - | - | - | - | - | - | Hidden by default |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Login | Press | Call the authentication API and navigate to the TNG Admin panel. |
| 2 | Show Password | Toggle | Mask/unmask the password field. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Admin Account ID | Required | AUTH-002-001 | Field cannot be empty. |
| 2 | Password | Required | AUTH-002-002 | Field cannot be empty. |

## Processing Details

```plain
初期表示 / Initial display
  • Focus on "Admin Account ID" (ID: 2) field.
  • "Login" (ID: 5) button is disabled if fields are empty.

画面更新時 / Interaction
  • Toggling "Show Password" (ID: 4) checkbox changes the visibility of the "Password" (ID: 3) field.

アクション発生時 / Action
  • Login button (ID: 5) is pressed:
    ○ Validation: Check mandatory fields according to the "Validations" section.
    ○ If validation passes:
      ▪ Execute API request:
        - Endpoint: /auth/login
        - Method: POST
        - Description: Authentication specific for TNG Admin credentials using the TNG-specific endpoint or context.
      ▪ If successful (200 OK):
        - Store JWT token.
        - Transition: Navigate to ADM-001.
      ▪ If failed:
        - Show "Error Message" (ID: 6).
```
