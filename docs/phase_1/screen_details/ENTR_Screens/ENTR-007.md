# ENTR-007 - Child Device (Attendee/Guest)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Child Device (Attendee/Guest) |

## Overview

Screen Name: Child Device (Attendee/Guest)
URI: /room/attendee-standby
Screen Overview: A standby screen for child devices in multi-device mode where seats are pre-assigned. It displays the participant's name and a "Join" button to confirm their physical attendance and readiness for the meeting.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ユーザー名ラベル | ラベル | O | － | － | － | － | － | － | － | － | － | 「◎◎様」と表示（事前に自動で振り分けられた氏名・またはENTR-006で調整された氏名） |
| 2 | 参加する | ボタン | I/O | － | － | － | － | － | － | － | － | － | 参加者が着席した際、出席確認と本人確認の意味でボタンを押下する。押下後、システム上の待機・準備完了状態となる |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Note |
| :--- | :--- | :--- | :--- | :--- |
| 1 | User Name Label | Label | O | Displays "Mr./Ms. ◎◎" (Automatically assigned or adjusted in ENTR-006). |
| 2 | Join | Button | I/O | Pressed when the attendee is seated to confirm attendance. Transitions the device to a "Ready" state. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Join | Press | Confirms attendance and waits for the Host to start the room. |

## Validations

This screen does not have input fields or complex constraints.

## Processing Details

```plain
Initial display
  • Display the name of the participant assigned to this specific device/seat.
  • The "Join" button is active.

Interaction
  • If the host adjusts the seat in ENTR-006, this screen updates in real-time via WebSocket to show the new assigned name.

Action
  • "Join" button is pressed:
    ○ Update device status to "Ready".
    ○ Wait for host action from ENTR-006/008 to transition to the meeting interface.
```
