# ADMX-006 - User Chi tiết/Chỉnh sửa/Xóa

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | User Chi tiết/Chỉnh sửa/Xóa |

## Overview

Screen Name: User Chi tiết/Chỉnh sửa/Xóa
URI: /admin/users/:id
Screen Overview: Màn hình cho phép xem chi tiết thông tin của một người dùng cụ thể, thực hiện chỉnh sửa thông tin hoặc xóa người dùng khỏi hệ thống.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「ユーザー詳細・編集」 |
| 2 | 名前 | テキストボックス | I/O | － | 編集モード | － | － | 〇 | 255 | 全角半角 | － | － | DBから現在の情報を表示 |
| 3 | ＩＤ | テキストボックス | I/O | － | 編集モード | － | － | 〇 | 255 | 半角英数記号 | － | 重複チェック | ログインID |
| 4 | ＰＡＳＳリセット | ボタン | O | － | － | － | － | － | － | － | － | － | パスワード強制リセット・通知メール送信を実行 |
| 5 | メールアドレス | テキストボックス | I/O | － | 編集モード | － | － | 〇 | 255 | 半角英数記号 | メールアドレス形式 | 重複チェック | － |
| 6 | 部署 | プルダウン | I/O | － | 編集モード | － | － | － | － | － | － | － | ADMX-010のマスタから取得 |
| 7 | Webhook URL | テキストボックス | I/O | － | 編集モード | － | － | － | 2048 | 全角半角 | URL形式 | － | Slack/Teams等のIncoming Webhook URLを入力（任意） |
| 8 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-003へ戻る |
| 9 | 削除ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で削除確認モーダルを表示（対象ユーザーを削除＆ADMX-003へ遷移） |
| 10 | 更新確認ボタン | ボタン | O | 編集モードで変更あり | エラーなし | － | － | － | － | － | － | － | 押下で更新確認モーダルを表示（情報を上書き＆ADMX-003へ遷移） |
| 11 | 削除確認モーダル | モーダル | O | 削除ボタン押下時 | － | － | － | － | － | － | － | － | 「本当に削除しますか？」進む/キャンセル |
| 12 | 更新確認モーダル | モーダル | O | 更新ボタン押下時 | － | － | － | － | － | － | － | － | 「更新してよろしいですか？」進む/キャンセル |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "User Details/Edit" |
| 2 | Name | Text Box | I/O | - | Edit mode | - | - | 〇 | 255 | Full/Half-width | - | - | Displays current info from DB |
| 3 | ID | Text Box | I/O | - | Edit mode | - | - | 〇 | 255 | Half-width alphanumeric/symbols | - | Duplicate check | Login ID |
| 4 | Reset Password | Button | O | - | - | - | - | - | - | - | - | - | Execute force reset and send email |
| 5 | Email Address | Text Box | I/O | - | Edit mode | - | - | 〇 | 255 | Half-width alphanumeric/symbols | Email format | Duplicate check | - |
| 6 | Department | Dropdown | I/O | - | Edit mode | - | - | - | - | - | - | - | Fetched from ADMX-010 Master |
| 7 | Webhook URL | Text Box | I/O | - | Edit mode | - | - | - | 2048 | Full/Half-width | URL format | - | Optional Incoming Webhook for Slack/Teams |
| 8 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-003 |
| 9 | Delete Button | Button | O | - | - | - | - | - | - | - | - | - | Show Delete Modal |
| 10 | Update Button | Button | O | If data changed | No errors | - | - | - | - | - | - | - | Show Update Modal |
| 11 | Delete Modal | Modal | O | On Delete press | - | - | - | - | - | - | - | - | "Are you sure you want to delete?" |
| 12 | Update Modal | Modal | O | On Update press | - | - | - | - | - | - | - | - | "Are you sure you want to update?" |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Update Button | Press | Show confirmation modal (ID: 12). |
| 2 | Delete Button | Press | Show confirmation modal (ID: 11). |
| 3 | Reset Password | Press | Trigger immediate password reset API and send notification email. |
| 4 | Back Button | Press | Return to User List (ADMX-003). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Name|Required|ADMX-006-ERR-01|Field cannot be empty.|
| 2 |ID|Required|ADMX-006-ERR-01|Field cannot be empty.|
| 3 |Email|Required|ADMX-006-ERR-01|Field cannot be empty.|
| 4 |Email|Format|ADMX-006-ERR-02|Must be a valid email.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/users/:id
      ▪ Method: GET
    ○ If successful:
      ▪ Populate all form fields with current user data.
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-03) and redirect to ADMX-003.
    ○ Execute API request to fetch Master Data for Departments (ADMX-010):
      ▪ Endpoint: /admin/master/DEPARTMENT
      ▪ Method: GET
    ○ If successful:
      ▪ Populate "Department" dropdown.

Interaction
  • Logic: Detect if any field value differs from its initial state to enable the "Update Button" (ID: 10).

Action
  • Update Confirmation is accepted in Modal:
    ○ Execute API request:
      ▪ Endpoint: /admin/users/:id
      ▪ Method: PATCH
      ▪ Payload: { "name": "...", "id": "...", "email": "...", "department_id": "...", "webhook_url": "..." }
    ○ If successful:
      ▪ Show success toaster.
      ▪ Transition: Navigate to ADMX-003.
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-05).

  • Delete Confirmation is accepted in Modal:
    ○ Execute API request:
      ▪ Endpoint: /admin/users/:id
      ▪ Method: DELETE
    ○ If successful:
      ▪ Show success toaster.
      ▪ Transition: Navigate to ADMX-003.
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-01).

  • Reset Password button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/users/:id/password-reset
      ▪ Method: POST
    ○ If successful:
      ▪ Show Success Message (ADMX-006-SUC-03).
```
