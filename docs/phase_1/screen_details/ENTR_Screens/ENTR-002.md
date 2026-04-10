# ENTR-002 - Booking Data / Schedule

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Booking Data / Schedule |

## Overview

Screen Name: Booking Data / Schedule
URI: /room/status
Screen Overview: A standby screen that displays the current time, the linked meeting room name, and upcoming reservation details (Subject, Time, Host). Depending on the current schedule, users can either "Enter" an existing meeting or use "Quick Booking" for an immediate meeting.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 会議室名 | ラベル | O | － | － | － | － | － | － | － | － | － | リンクされた会議室名を表示 |
| 2 | 現在時刻 | ラベル | O | － | － | － | HH:mm | － | － | － | － | － | タブレットの現在時刻をリアルタイム表示 |
| 3 | 直近の予約スケジュール | テーブル | O | 予約がある場合 | － | － | － | － | － | － | － | － | 当日の予約予定をリスト形式で表示 |
| 4 | 会議件名 | ラベル | O | 予約がある場合 | － | － | － | － | － | － | － | － | スケジュールの列要素 |
| 5 | 会議時間 | ラベル | O | 予約がある場合 | － | － | HH:mm - HH:mm | － | － | － | － | － | スケジュールの列要素 |
| 6 | 主催者名 | ラベル | O | 予約がある場合 | － | － | － | － | － | － | － | － | スケジュールの列要素 |
| 7 | 入室する | ボタン | I/O | 予約がある場合設定時間内 | 予約時間が近い | － | － | － | － | － | － | － | 次の予約の「入室前」または「入室」へ遷移（ENTR-008 または ENTR-004） |
| 8 | 即入室（クイック予約） | ボタン | I/O | 現在の時刻で予約がない場合 | － | － | － | － | － | － | － | － | タップすると「会議情報登録」画面（ENTR-003）へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Meeting Room Name | Label | O | - | - | Displays the name of the linked meeting room. |
| 2 | Current Time | Label | O | - | - | Displays the current tablet time in real-time (HH:mm). |
| 3 | Recent Schedule | Table | O | If reservations exist | - | List of upcoming meetings for the current day. |
| 4 | Meeting Subject | Label | O | If reservations exist | - | Column element: Subject of the meeting. |
| 5 | Meeting Time | Label | O | If reservations exist | - | Column element: Duration (HH:mm - HH:mm). |
| 6 | Host Name | Label | O | If reservations exist | - | Column element: Name of the organizer. |
| 7 | Enter Room | Button | I/O | During or just before a scheduled slot | Active when slot is near | Transition to ENTR-004 (Multi) or ENTR-008 (Single). |
| 8 | Quick Booking | Button | I/O | If no meeting is currently ongoing | - | Transition to ENTR-003 for an immediate meeting. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Enter Room | Press | Transitions to the pre-entry or entry flow (ENTR-004/ENTR-008). |
| 2 | Quick Booking | Press | Transitions to the meeting information registration screen (ENTR-003). |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Enter Room | Timing | ENTR-003-ERR-01 | Button is disabled if it's too early to enter. |

## Processing Details

```plain
Initial display
  • Display the Meeting Room Name retrieved during device linking.
  • Display current time, updated every minute.
  • Fetch the current day's reservations from the server.
    ○ API Call: GET /room/:id/status
  • If no current meeting exists, the "Quick Booking" button is visible.
  • If a meeting is scheduled to start soon or is currently ongoing:
    ○ Display "Enter Room" button.
    ○ List reservation details (Subject, Time, Host) in the table.

Interaction
  • The "Enter Room" button becomes enabled X minutes before the scheduled start time (configured in system settings).

Action
  • Screen Load:
    ○ API Call: GET /room/:id/status to populate room and schedule data.
    ○ If failed: Display Error Message [ENTR-002-ERR-01].

  • "Enter Room" button is pressed:
    ○ If room is Multi-device mode: Transition to ENTR-004.
    ○ If room is Single-mode: Transition to ENTR-008.

  • "Quick Booking" button is pressed:
    ○ Transition to ENTR-003.
```
