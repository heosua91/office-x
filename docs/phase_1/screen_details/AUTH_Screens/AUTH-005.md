# AUTH-005 - Password Reset Setting

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-12 | 1 | New | Password Reset Setting |

## Overview

Screen Name: Password Reset Setting
URI: /auth/password-reset/confirm
Screen Overview: Screen to set a new password after using a reset link or for first-time password setting.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 固定文言「パスワード設定」 |
| 2 | 現在のパスワード | テキストボックス | I | 再設定時 | － | － | ●●● | 〇 | － | 半角英数記号 | － | DB照合 | 初期パスワード等を入力 |
| 3 | 新しいパスワード | テキストボックス | I | － | － | － | ●●● | 〇 | 8-32 | 半角英数記号 | 英数混在必須 | － | HTML type="password" |
| 4 | パスワード強度 | その他 | O | 入力時 | － | － | － | － | － | － | － | － | パスワード強度推定 |
| 5 | 確認用パスワード | テキストボックス | I | － | － | － | ●●● | 〇 | 8-32 | 半角英数記号 | － | ID:3と一致 | HTML type="password" |
| 6 | パスワードを表示 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ID:2,3,5の伏せ字解除 |
| 7 | 設定変更 | ボタン | － | － | 全項目入力済 | － | － | － | － | － | － | － | 押下後、AUTH-006へ遷移 |
| 8 | エラーメッセージ | ラベル | O | エラー時 | － | － | 赤文字 | － | － | － | － | － | 不一致、強度不足等 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen Title | Label | O | - | - | - | - | - | - | Full-width | - | - | Fixed text "Password Setting" |
| 2 | Current Password | Text Box | I | On update | - | - | ●●● | 〇 | - | Half-width alphanumeric/symbols | - | DB Match | Input initial password, etc. |
| 3 | New Password | Text Box | I | - | - | - | ●●● | 〇 | 8-32 | Half-width alphanumeric/symbols | Alphanumeric mixed | - | HTML type="password" |
| 4 | Password Strength | Other | O | On input | - | - | - | - | - | - | - | - | Estimate password strength |
| 5 | Confirm Password | Text Box | I | - | - | - | ●●● | 〇 | 8-32 | Half-width alphanumeric/symbols | - | Matches ID:3 | HTML type="password" |
| 6 | Show Password | Checkbox | I | - | - | - | - | - | - | - | - | - | Unmask ID:2, 3, 5 |
| 7 | Change Settings | Button | - | - | All items entered | - | - | - | - | - | - | - | Transition to AUTH-006 on press |
| 8 | Error Message | Label | O | On error | - | - | Red text | - | - | - | - | - | Mismatch, weak strength, etc. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Change Settings | Press | Update the password in the database and transition to AUTH-006. |
| 2 | Show Password | Toggle | Mask/unmask the current, new, and confirmation password fields. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Current Password | Required | AUTH-005-001 | Field cannot be empty (if applicable). |
| 2 | New Password | Required | AUTH-005-002 | Field cannot be empty. |
| 3 | New Password | Format | AUTH-005-003 | Must be 8-32 characters and mix letters/numbers. |
| 4 | Confirm Password | Correlation | AUTH-005-004 | Must match the New Password. |

## Processing Details

```plain
初期表示 / Initial display
  • Focus on "Current Password" (ID: 2) if in update context, or "New Password" (ID: 3) for reset.
  • "Change Settings" (ID: 7) button is disabled by default.
  • All password fields are masked.

画面更新時 / Interaction
  • Password Strength: Real-time evaluation of the "New Password" (ID: 3) complexity to update the strength meter (ID: 4).
  • Match Check: Real-time comparison between "New Password" (ID: 3) and "Confirm Password" (ID: 5).
  • Activation: Enable "Change Settings" (ID: 7) when all validation rules are met.

アクション発生時 / Action
  • Change Settings button (ID: 7) is pressed:
    ○ Validation: Check mandatory fields, password format, and consistency (matching) according to the "Validations" section.
    ○ If validation passes:
      ▪ Execute API request:
        - Endpoint: /auth/password-reset/confirm
        - Method: POST
        - Request Body: { "token": "[Token from URL]", "password": "[New Password]" }
      ▪ If successful:
        - Transition to AUTH-006.
      ▪ If failed:
        - Show "Error Message" (ID: 8) with details such as "Token expired" or "System error".

  • Show Password checkbox (ID: 6) is toggled:
    ○ Toggle the masking state for "Current Password", "New Password", and "Confirm Password" fields.
```
