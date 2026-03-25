# ADMX-027 - Cài đặt giới hạn sử dụng AI

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Cài đặt giới hạn sử dụng AI |

## Overview

Screen Name: Cài đặt giới hạn sử dụng AI
URI: /admin/billing/ai-quota/settings
Screen Overview: Màn hình cho phép thiết lập hành vi của hệ thống khi doanh nghiệp sử dụng hết hạn mức AI miễn phí/trả trước (Dừng dịch vụ hoặc tự động chuyển sang cấu hình trả sau) và cài đặt thông báo cảnh báo khi sắp hết hạn mức.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「AI利用制限設定」 |
| 2 | リミッター設定 | ラジオボタン | I/O | － | － | － | － | 〇 | － | － | － | － | 「自動従量課金」「利用停止」から選択 |
| 3 | 超過通知 | チェックボックス | I/O | － | － | － | － | － | － | － | － | － | 残り時間が少なくなった際に通知するかどうか |
| 4 | 通知閾値 | プルダウン | I/O | － | 通知ON時 | － | － | － | － | － | － | － | 残り「10%」「5時間」など |
| 5 | 通知先メールアドレス | テキストボックス | I/O | － | 通知ON時 | － | － | － | 255 | 半角英数記号 | メールアドレス形式 | － | カンマ区切りで複数指定も可 |
| 6 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-024へ戻る |
| 7 | 保存ボタン | ボタン | O | 変更あり | エラーなし | － | － | － | － | － | － | － | 設定を保存しADMX-024へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "AI Usage Limit Settings" |
| 2 | Limiter Mode | Radio | I/O | - | - | - | - | 〇 | - | - | - | - | "Auto-Postpaid" or "Stop Service" |
| 3 | Over-usage Notice | Checkbox | I/O | - | - | - | - | - | - | - | - | - | Notify when credits are low |
| 4 | Notification Threshold | Dropdown | I/O | - | If ID:3 is ON | - | - | - | - | - | - | - | e.g. "Left 10%" or "Left 1 hour" |
| 5 | Notification Emails | Text Box | I/O | - | If ID:3 is ON | - | - | - | 255 | Half-alphanumeric | Email format | - | Can be comma-separated list |
| 6 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-024 |
| 7 | Save Button | Button | O | If changed | No errors | - | - | - | - | - | - | - | Save and return to ADMX-024 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Save Button | Press | Execute settings update API and return to AI management (ADMX-024). |
| 2 | Back Button | Press | Discard changes and return to ADMX-024. |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Emails|Format|ADMX-027-ERR-01|Must contain valid email(s).|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/billing/ai-quota/settings
      ▪ Method: GET
    ○ If successful:
      ▪ Populate form with corporate AI settings.

Interaction
  • Threshold/Email fields (ID: 4, 5) are enabled only if "Over-usage Notice" (ID: 3) is checked.

Action
  • Save Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/billing/ai-quota/settings
      ▪ Method: PATCH
      ▪ Body: { "limiter_mode": "...", "notify_low_credits": ..., "threshold": "...", "target_emails": "..." }
    ○ If successful:
      ▪ Show Success Message (ADMX-027-SUC-01).
      ▪ Transition: Navigate to ADMX-024.
```
