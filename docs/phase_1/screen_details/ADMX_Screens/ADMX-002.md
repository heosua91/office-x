# ADMX-002 - Admin Dashboard

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Admin Dashboard |

## Overview

Screen Name: Admin Dashboard
URI: /admin/dashboard
Screen Overview: Dashboard summarizing corporate-wide reservations, room utilization, AI usage statistics, and individual schedules.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「ダッシュボード」 |
| 2 | 管理者メニュー | その他 | O | － | － | － | － | － | － | － | － | － | 共通ナビゲーションメニュー |
| 3 | 当日予定ウィジェット | その他 | O | － | － | － | － | － | － | － | － | － | 個人の当日予定をカレンダーから取得しリスト表示 |
| 4 | 予定詳細リンク | リンク | O | 予定あり | － | － | － | － | － | － | － | － | 予定クリックでOFX-004等へ遷移 |
| 5 | 会議室利用状況ウィジェット | その他 | O | － | － | － | － | － | － | － | － | － | 「空き」「使用中」の稼働率ステータス表示 |
| 6 | 使用AI要約時間(個人) | ラベル | O | － | － | － | － | － | － | － | － | － | 個人のAI利用時間を表示 |
| 7 | 残りAI要約時間(全体) | ラベル | O | － | － | － | － | － | － | － | － | － | 企業全体の残AI時間を表示 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Dashboard" |
| 2 | Admin Menu | Other | O | - | - | - | - | - | - | - | - | - | Common navigation menu |
| 3 | Today's Schedule Widget | Other | O | - | - | - | - | - | - | - | - | - | Fetch and list individual's schedule for today from calendar |
| 4 | Schedule Detail Link | Link | O | If schedule exists | - | - | - | - | - | - | - | - | Click to transition to OFX-004, etc. |
| 5 | Meeting Room Status Widget | Other | O | - | - | - | - | - | - | - | - | - | Displays "Available" / "In Use" utilization status |
| 6 | Personal AI Usage Time | Label | O | - | - | - | - | - | - | - | - | - | Display individual AI usage time |
| 7 | Corporate Remaining AI Time | Label | O | - | - | - | - | - | - | - | - | - | Display organizational remaining AI time |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Schedule Item | Press | Navigate to the meeting detail screen (e.g., OFX-004). |
| 2 | Admin Menu | Press | Navigate to various management screens (ADMX-003 to ADMX-030). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Data Load|Availability|ADMX-002-ERR-01|Show empty state if no schedule or usage data is found.|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/dashboard
      - Method: GET
    ○ **If successful**:
      - Render "Today's Schedule Widget" with personal calendar data.
      - Render "Meeting Room Status Widget" with real-time occupancy stats.
      - Populate AI Usage and Remaining Time labels.
    ○ **If failed**:
      - Display generic data load error message.

画面更新時 / Interaction
  • None. (Consider periodic polling or WebSockets for room status updates if required by the design).

アクション発生時 / Action
  • **Schedule Detail Link is pressed**:
    ○ Transition: Navigate to the respective Meeting Detail screen.
```
