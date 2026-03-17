# AUTH-005 - Password Reset Setting

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-12 | 1 | New | Password Reset Setting |

## Overview

Screen Name: Password Reset Setting
URI: /auth/password-reset/confirm
Screen Overview: メール記載のパスワード再設定用URLから遷移し、新しいパスワードを設定する画面。(Screen to set a new password after using a reset link or for first-time password setting.)

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 固定文言「パスワード設定」 |
| 2 | 新しいパスワード | テキストボックス | I | － | － | － | ●●● | 〇 | 8-32 | 半角英数記号 | 英数混在必須 | － | HTML type="password" |
| 3 | パスワード強度 | その他 | O | 入力時 | － | － | － | － | － | － | － | － | パスワード強度推定 |
| 4 | 確認用パスワード | テキストボックス | I | － | － | － | ●●● | 〇 | 8-32 | 半角英数記号 | － | ID:2と一致 | HTML type="password" |
| 5 | パスワードを表示 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ID:2,4の伏せ字解除 |
| 6 | 設定変更 | ボタン | － | － | 全項目入力済 | － | － | － | － | － | － | － | 押下後、AUTH-006へ遷移 |
| 7 | エラーメッセージ | ラベル | O | エラー時 | － | － | 赤文字 | － | － | － | － | － | 不一致、強度不足等 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen Title | Label | O | - | - | - | - | - | - | Full-width | - | - | Fixed text "Password Setting" |
| 2 | New Password | Text Box | I | - | - | - | ●●● | 〇 | 8-32 | Half-width alphanumeric/symbols | Alphanumeric mixed | - | HTML type="password" |
| 3 | Password Strength | Other | O | On input | - | - | - | - | - | - | - | - | Estimate password strength |
| 4 | Confirm Password | Text Box | I | - | - | - | ●●● | 〇 | 8-32 | Half-width alphanumeric/symbols | - | Matches ID:2 | HTML type="password" |
| 5 | Show Password | Checkbox | I | - | - | - | - | - | - | - | - | - | Unmask ID:2, 4 |
| 6 | Change Settings | Button | - | - | All items entered | - | - | - | - | - | - | - | Transition to AUTH-006 on press |
| 7 | Error Message | Label | O | On error | - | - | Red text | - | - | - | - | - | Mismatch, weak strength, etc. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Change Settings | Press | Update the password in the database and transition to AUTH-006. |
| 2 | Show Password | Toggle | Mask/unmask the new and confirmation password fields. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | New Password | Required | AUTH-005-ERR-02 | Field cannot be empty.|
| 2 | New Password | Format | AUTH-005-ERR-03 | Must be 8-32 characters and mix letters/numbers.|
| 3 | Confirm Password | Correlation | AUTH-005-ERR-04 | Must match the New Password.|

## Processing Details

```plain
初期表示 / Initial display
  • Focus on "New Password" (ID: 2).
  • "Change Settings" (ID: 6) button is disabled by default.
  • All password fields are masked.

画面更新時 / Interaction
  • Password Strength: Real-time evaluation of the "New Password" (ID: 2) complexity to update the strength meter (ID: 3).
  • Match Check: Real-time comparison between "New Password" (ID: 2) and "Confirm Password" (ID: 4).
  • Activation: Enable "Change Settings" (ID: 6) when all validation rules are met.

アクション発生時 / Action
  • Change Settings button (ID: 6) is pressed:
    ○ Validation: Check mandatory fields, password format, and consistency (matching) according to the "Validations" section.
    ○ If validation passes:
      ▪ Execute API request:
        - Endpoint: /auth/password-reset/confirm
        - Method: POST
        - Request Body: { "token": "[Token from URL]", "password": "[New Password]" }
      ▪ If successful:
        - Transition to AUTH-006.
      ▪ If failed:
        - Show "Error Message" (ID: 7) with details such as "Token expired" or "System error".

  • Show Password checkbox (ID: 5) is toggled:
    ○ Toggle the masking state for "New Password" and "Confirm Password" fields.
```
