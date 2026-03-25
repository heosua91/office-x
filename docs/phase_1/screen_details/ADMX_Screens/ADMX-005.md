# ADMX-005 - Confirm đăng ký mới

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Confirm đăng ký mới |

## Overview

Screen Name: Confirm đăng ký mới
URI: /admin/users/confirm
Screen Overview: Màn hình xác nhận trước khi lưu thông tin người dùng mới. Sau khi quản trị viên xác nhận lưu, hệ thống sẽ gửi email chứa ID và mật khẩu khởi tạo cho người dùng.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「新規登録内容確認」 |
| 2 | 名前 | ラベル | O | － | － | － | － | － | － | － | － | － | ADMX-004の入力結果を表示（Read-only） |
| 3 | ＩＤ | ラベル | O | － | － | － | － | － | － | － | － | － | ADMX-004の入力結果を表示（Read-only） |
| 4 | メールアドレス | ラベル | O | － | － | － | － | － | － | － | － | － | ADMX-004の入力結果を表示（Read-only） |
| 5 | 部署 | ラベル | O | － | － | － | － | － | － | － | － | － | ADMX-004の入力結果を表示（Read-only） |
| 6 | 通知説明 | ラベル | O | － | － | － | － | － | － | － | － | － | 「登録完了後、入力されたメールアドレスへIDとパスワードが送信されます。」 |
| 7 | 修正するボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-004へ戻る（入力状態保持） |
| 8 | 登録確定ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 情報保存、自動メール送信。完了後ADMX-003へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "New Registration Confirmation" |
| 2 | Name | Label | O | - | - | - | - | - | - | - | - | - | Displayed value from ADMX-004 |
| 3 | ID | Label | O | - | - | - | - | - | - | - | - | - | Displayed value from ADMX-004 |
| 4 | Email Address | Label | O | - | - | - | - | - | - | - | - | - | Displayed value from ADMX-004 |
| 5 | Department | Label | O | - | - | - | - | - | - | - | - | - | Displayed value from ADMX-004 |
| 6 | Notification Info | Label | O | - | - | - | - | - | - | - | - | - | "ID and password will be sent to the email after registration." |
| 7 | Modify Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-004 (Keep input state) |
| 8 | Confirm Registration Button | Button | O | - | - | - | - | - | - | - | - | - | Save info, trigger email, and navigate to ADMX-003 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Confirm Registration Button | Press | Execute user creation API and transition to User List (ADMX-003) on success. |
| 2 | Modify Button | Press | Go back to User Registration form (ADMX-004) to edit data. |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
Initial display
  • Render the data provided by the previous screen (ADMX-004).
  • All data labels must match the user's input for final review.

Interaction
  • None.

Action
  • Confirm Registration Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/users
      ▪ Method: POST
      ▪ Request Body: { "name": "...", "id": "...", "password": "...", "email": "...", "department_id": "...", "webhook_url": "..." }
    ○ If successful (201 Created):
      ▪ Show Success Message (ADMX-005-SUC-01).
      ▪ Transition: Navigate to ADMX-003.
    ○ If failed (409 Conflict - Duplicate ID/Email):
      ▪ Show Error Message (ADMX-004-ERR-05).
      ▪ Stay on screen or provide link back to ADMX-004.
    ○ If failed (Other server errors):
      ▪ Show Error Message (SYS-000-ERR-01).

  • Modify Button is pressed:
    ○ Transition: Navigate back to ADMX-004 with existing data pre-filled.
```
