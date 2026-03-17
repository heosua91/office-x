# AUTH-003 - Password Reset Request

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-12 | 1 | New | Password Reset Request |

## Overview

Screen Name: Password Reset Request
URI: /auth/password-reset
Screen Overview: メールアドレス入力し、リセットボタン押下後 メールアドレスにパスワード再設定用URLを発行し、メールで送信する画面。 (Input email address, press the reset button to generate a reset URL sent to the email address.)

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「パスワードリセット」 |
| 2 | 説明テキスト | ラベル | O | － | － | － | － | － | － | － | － | － | 「登録しているメールアドレスを入力してください。」等の案内文 |
| 3 | メールアドレス | テキストボックス | I | － | － | － | － | 〇 | Max 255 | 半角英数記号 | メールアドレス形式 | － | パスワードをリセットしたいアカウントのメールアドレス |
| 4 | リセットリンクを送信 | ボタン | I | － | － | － | － | － | － | － | － | － | DB存在確認後、リセットトークン生成＆URLメール送信。送信後AUTH-004へ遷移 |
| 5 | サインインに戻る | リンク | I | － | － | － | － | － | － | － | － | － | 押下時、AUTH-001へ遷移 |
| 6 | エラーメッセージ | ラベル | O | 送信失敗時 | － | － | － | － | － | － | － | － | 未登録メールアドレスなどのエラー表示 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Password Reset" |
| 2 | Description Text | Label | O | - | - | - | - | - | - | - | - | - | Guide text like "Please enter your registered email address." |
| 3 | Email Address | Text Box | I | - | - | - | - | 〇 | Max 255 | Half-width alphanumeric/symbols | Email format | - | Email address of the account to reset password |
| 4 | Send Reset Link | Button | I | - | - | - | - | - | - | - | - | - | Generate reset token & send email after DB check. Transition to AUTH-004 on success |
| 5 | Back to Sign In | Link | I | - | - | - | - | - | - | - | - | - | Press to transition to AUTH-001 |
| 6 | Error Message | Label | O | On send failure | - | - | - | - | - | - | - | - | Displays errors for unregistered email, etc. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Send Reset Link | Press | Validate email and trigger the password reset request API. |
| 2 | Back to Sign In | Press | Navigate back to the Sign In screen (AUTH-001). |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Email Address | Required | AUTH-003-ERR-01 | Field cannot be empty. |
| 2 | Email Address | Email format | AUTH-003-ERR-03 | Must be a valid email format. |

## Processing Details

```plain
初期表示 / Initial display
  • Focus on "Email Address" (ID: 3) input.
  • "Send Reset Link" (ID: 4) button status depends on whether input is provided (client-side length check).

画面更新時 / Interaction
  • Real-time validation for email format as user types in the "Email Address" (ID: 3) field.

アクション発生時 / Action
  • Send Reset Link button (ID: 4) is pressed:
    ○ Validation: Check mandatory requirements and email format according to the "Validations" section.
    ○ If validation passes:
      ▪ Execute API request:
        - Endpoint: /auth/password-reset/request
        - Method: POST
        - Request Body: { "email": "[Email]" }
      ▪ If successful:
        - Transition: Navigate to AUTH-004.
      ▪ If failed (API returns error or email not found):
        - Show "Error Message" (ID: 6).

  • Back to Sign In link (ID: 5) is pressed:
    ○ Transition to AUTH-001.
```
