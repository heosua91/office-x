# ENTR-004 - Pre-Enter (Multi-device)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Pre-Enter (Multi-device) |

## Overview

Screen Name: Pre-Enter (Multi-device)
URI: /room/pre-enter
Screen Overview: A participant selection screen specifically for multi-device mode rooms. It displays a list of attendees retrieved for the current meeting. Each user selects their name to proceed to the next step of the entry flow.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「参加者を選択してください」等 |
| 2 | 会議情報表示 | ラベル | O | － | － | － | － | － | － | － | － | － | 会議の件名、時間を簡易表示 |
| 3 | 参加者名リスト | ラジオボタン | I | － | － | － | － | 〇 | － | － | － | － | 取得された会議予定の参加者名一覧を表示し、一つを選択する。（自分の名前がない場合はゲスト等を選択できるよう配慮） |
| 4 | 参加する | ボタン | I | － | 参加者選択時 | － | － | － | － | － | － | － | 自身の名前を選択後、入室・待機状態（ENTR-007またはENTR-005等）へ進む |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Note |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Screen Title | Label | O | Fixed text: "Please Select Your Name". |
| 2 | Meeting Info Display | Label | O | Briefly displays the meeting subject and time. |
| 3 | Participant List | Radio Button | I | List of attendee names. Includes a "Guest" option if applicable. |
| 4 | Join | Button | I | Becomes active after selecting a name. Transitions to the next entry state. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Join | Press | Confirms identity and transitions to ENTR-005 (Host) or ENTR-007 (Attendee). |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Participant List | Required | SYS-000-ERR-05 | A name must be selected to proceed. |

## Processing Details

```plain
Initial display
  • Display meeting subject and time at the top.
  • Fetch the participants list for the current meeting slot.
    ○ API Call: GET /room/:id/participants
  • The "Join" button is disabled.

Interaction
  • When a name is selected from the list, the "Join" button becomes enabled.

Action
  • Screen Load:
    ○ API Call: GET /room/:id/participants.
    ○ If failed: Display Error Message [ENTR-004-ERR-01].

  • "Join" button is pressed:
    ○ Check the 'role' of the selected participant from the fetched data.
    ○ If selected user is the 'Host'/'Organizer':
      - Transition to ENTR-005.
    ○ If selected user is an 'Attendee' or 'Guest':
      - Transition to ENTR-007.
```
