# ADMX-004 - Đăng ký mới User

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Đăng ký mới User |

## Overview

Screen Name: Đăng ký mới User
URI: /admin/users/create
Screen Overview: Màn hình cho phép quản trị viên nhập thông tin cơ bản để đăng ký người dùng mới, bao gồm tên, ID, mật khẩu, email và bộ phận.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「ユーザー新規登録」 |
| 2 | 名前 | テキストボックス | I | － | － | － | － | 〇 | 255 | 全角半角 | － | － | ユーザーの氏名を入力 |
| 3 | ＩＤ | テキストボックス | I | － | － | － | － | 〇 | 255 | 半角英数記号 | － | 重複チェック | ログインID。重複不可 |
| 4 | ＰＡＳＳ | テキストボックス | I | － | － | － | － | 〇 | 50 | 半角英数記号 | 英数混在 | － | 初回ログイン用パスワード |
| 5 | メールアドレス | テキストボックス | I | － | － | － | － | 〇 | 255 | 半角英数記号 | メールアドレス形式 | 重複チェック | ユーザーのメールアドレス。重複不可 |
| 6 | 部署 | プルダウン | I | － | － | － | － | － | － | － | － | － | ADMX-010のマスタデータから取得 |
| 7 | Webhook URL | テキストボックス | I | － | － | － | － | － | 2048 | 全角半角 | URL形式 | － | Slack/Teams等のIncoming Webhook URLを入力（任意） |
| 8 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-003へ戻る |
| 9 | 確認画面へボタン | ボタン | O | － | 入力エラーなし | － | － | － | － | － | － | － | ADMX-005へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "User New Registration" |
| 2 | Name | Text Box | I | - | - | - | - | 〇 | 255 | Full-width/Half-width | - | - | Full name of the user |
| 3 | ID | Text Box | I | - | - | - | - | 〇 | 255 | Half-width alphanumeric/symbols | - | Duplicate check | Login ID. Must be unique |
| 4 | Password | Text Box | I | - | - | - | - | 〇 | 50 | Half-width alphanumeric/symbols | Alphanumeric mixed | - | Temporary password for first login |
| 5 | Email Address | Text Box | I | - | - | - | - | 〇 | 255 | Half-width alphanumeric/symbols | Email format | Duplicate check | User's email. Must be unique |
| 6 | Department | Dropdown | I | - | - | - | - | - | - | - | - | - | Fetched from ADMX-010 Master Data |
| 7 | Webhook URL | Text Box | I | - | - | - | - | - | 2048 | Full-width/Half-width | URL format | - | Optional Incoming Webhook for Slack/Teams |
| 8 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Navigate back to ADMX-003 |
| 9 | To Confirmation Button | Button | O | - | No input errors | - | - | - | - | - | - | - | Transition to ADMX-005 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | To Confirmation Button | Press | Validate inputs and transition to Confirmation Screen (ADMX-005). |
| 2 | Back Button | Press | Discard inputs and return to User List (ADMX-003). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |ID|Required|ADMX-004-ERR-01|Field cannot be empty.|
| 2 |Password|Required|ADMX-004-ERR-01|Field cannot be empty.|
| 3 |Password|Format|ADMX-004-ERR-02|Must be 8-50 chars with mixed letters and numbers.|
| 4 |Email|Required|ADMX-004-ERR-01|Field cannot be empty.|
| 5 |Email|Format|ADMX-004-ERR-03|Must be a valid email format.|
| 6 |Webhook URL|Format|ADMX-004-ERR-04|Must follow standard URL pattern.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/master/DEPARTMENT
      ▪ Method: GET
    ○ If successful:
      ▪ Populate "Department" (ID: 6) dropdown options.
    ○ If failed:
      ▪ Show master data fetch error message.

Interaction
  • Enable "To Confirmation Button" (ID: 9) only when all required fields (Name, ID, Password, Email) are filled and satisfy format constraints.

Action
  • To Confirmation Button is pressed:
    ○ Validation: Check all mandatory fields and format rules according to the "Validations" section.
    ○ If validation passes:
      ▪ Transition: Navigate to ADMX-005, passing the input data as state or temporary record.
```
