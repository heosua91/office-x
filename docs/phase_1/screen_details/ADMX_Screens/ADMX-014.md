# ADMX-014 - Đăng ký mới Tablet Lễ Tân

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Đăng ký mới Tablet Lễ Tân |

## Overview

Screen Name: Đăng ký mới Tablet Lễ Tân
URI: /admin/reception-devices/create
Screen Overview: Màn hình cho phép cấp tài khoản (ID & PASS) cho thiết bị tablet lễ tân và cấu hình các nội dung hiển thị (đối tác, bộ phận, mục đích) cũng như cài đặt thông báo.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「受付タブレット新規登録」 |
| 2 | タブレットID | テキストボックス | I | － | － | － | － | 〇 | 50 | 半角英数記号 | － | 重複チェック | タブレット側のアプリログイン用ID |
| 3 | ＰＡＳＳ | テキストボックス | I | － | － | － | － | 〇 | 50 | 半角英数記号 | － | － | タブレット側のアプリログイン用パスワード |
| 4 | 設置場所(メモ) | テキストボックス | I | － | － | － | － | － | 255 | 全角半角 | － | － | 管理用のメモ（例「本社1Fエントランス」） |
| 5 | 業者表示設定 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ADMX-010から選択。表示する業者 |
| 6 | 部署表示設定 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ADMX-010から選択。表示する部署 |
| 7 | 用件表示設定 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ADMX-010から選択。表示する用件 |
| 8 | 備品選択 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ADMX-010から選択 |
| 9 | 呼び出し通知設定 | テキストボックス | I | － | － | － | － | － | 255 | － | Webhook等形式 | － | SlackやTeams等への通知用URL・設定 |
| 10 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-013へ戻る |
| 11 | 登録完了ボタン | ボタン | O | － | エラーなし | － | － | － | － | － | － | － | DBに保存し、ADMX-013へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Reception Tablet Registration" |
| 2 | Tablet ID | Text Box | I | - | - | - | - | 〇 | 50 | Half-width alphanumeric/symbols | - | Duplicate check | ID for the tablet app login |
| 3 | Password | Text Box | I | - | - | - | - | 〇 | 50 | Half-width alphanumeric/symbols | - | - | Password for the tablet app login |
| 4 | Location (Memo) | Text Box | I | - | - | - | - | - | 255 | Full/Half-width | - | - | Administrative note (e.g. "1F Entrance") |
| 5 | Vendor Filter | Checkbox | I | - | - | - | - | - | - | - | - | - | Select from ADMX-010 (Multiple) |
| 6 | Dept Filter | Checkbox | I | - | - | - | - | - | - | - | - | - | Select from ADMX-010 (Multiple) |
| 7 | Purpose Filter | Checkbox | I | - | - | - | - | - | - | - | - | - | Select from ADMX-010 (Multiple) |
| 8 | Equipment Filter | Checkbox | I | - | - | - | - | - | - | - | - | - | Select from ADMX-010 (Multiple) |
| 9 | Notification URL | Text Box | I | - | - | - | - | - | 255 | - | URL format | - | Webhook URL for meeting notifications |
| 10 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-013 |
| 11 | Complete Button | Button | O | - | No errors | - | - | - | - | - | - | - | Save to DB and navigate to ADMX-013 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Complete Button | Press | Submit tablet configuration and return to list (ADMX-013) on success. |
| 2 | Back Button | Press | Discard inputs and return to list (ADMX-013). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Tablet ID|Required|ADMX-014-ERR-01|Field cannot be empty.|
| 2 |Password|Required|ADMX-014-ERR-01|Field cannot be empty.|
| 3 |Notification URL|Format|ADMX-014-ERR-03|Must follow URL pattern.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API requests to fetch Master Data (ADMX-010):
      ▪ Endpoint: /admin/master/VENDOR
      ▪ Method: GET
    ○ Execute API requests to fetch Master Data (ADMX-010):
      ▪ Endpoint: /admin/master/DEPARTMENT
      ▪ Method: GET
    ○ Execute API requests to fetch Master Data (ADMX-010):
      ▪ Endpoint: /admin/master/PURPOSE
      ▪ Method: GET
    ○ Execute API requests to fetch Master Data (ADMX-010):
      ▪ Endpoint: /admin/master/EQUIPMENT
      ▪ Method: GET
    ○ If successful:
      ▪ Populate checkbox groups (ID: 5, 6, 7, 8).

Interaction
  • Enable "Complete Button" (ID: 11) when ID and Password are validly entered.

Action
  • Complete Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/reception-devices
      ▪ Method: POST
      ▪ Body: { "device_id": "...", "password": "...", "location": "...", "vendor_ids": [...], "dept_ids": [...], "purpose_ids": [...], "equipment_ids": [...], "notification_url": "..." }
    ○ If successful (201 Created):
      ▪ Show Success Message (ADMX-014-SUC-01).
      ▪ Transition: Navigate to ADMX-013.
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-05).
```
