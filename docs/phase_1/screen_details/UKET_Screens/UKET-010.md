# UKET-010 - Display guide map and QR code

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Display guide map and QR code |

## Overview

Screen Name: Display guide map and QR code
URI: /reception/map
Screen Overview: When the guest completes reception process, the tablet screen will display "guide map" to the meeting room along with "QR code". Guest can confirm route on spot and scan QR code to save map on phone.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「受付が完了いたしました」または「会議室までのご案内」 |
| 2 | 会議室案内図 | 画像 | O | 会議室マスタ（ADMX-009）で案内図画像が設定されている場合 | － | － | － | － | － | － | － | － | 対象の会議室への道順、フロアマップ画像を表示 |
| 3 | 会議室名 | ラベル | O | 担当者/会議室が特定できる場合 | － | － | － | － | － | － | － | － | 該当の「会議室名」（例：Room A）を表示 |
| 4 | スマホ持ち帰り用QRコード | 画像 | O | － | － | － | － | － | － | － | － | － | このQRコードを来訪者が自身のスマホで読み取ることで、自分の端末上に案内図を表示することができる（F-105）。 |
| 5 | 案内メッセージ | ラベル | O | QRコード表示時 | － | － | － | － | － | － | － | － | 「QRコードをスマートフォンで読み取ると、案内図をお手元で確認できます」等の説明。 |
| 6 | 完了 | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-011（通知完了）」へ遷移する。 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen title | Label | O | - | - | - | - | - | - | - | - | "Reception complete" or "Guide to meeting room" |
| 2 | Meeting room map | Image | O | Map image configured in Admin | - | - | - | - | - | - | - | Floor map guiding to target room |
| 3 | Room name | Label | O | Specific room identifiable | - | - | - | - | - | - | - | E.g. "Room A" |
| 4 | QR code for smartphone | Image | O | - | - | - | - | - | - | - | - | Scan QR to display map on own device (F-105). |
| 5 | Guide message | Label | O | Displaying QR | - | - | - | - | - | - | - | "Scan QR on your smartphone to view the map" |
| 6 | Complete | Button | O | - | - | - | - | - | - | - | - | Transition to UKET-011 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Complete | Press | Transition to `UKET-011` screen. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | No direct field input validation required. |

## Processing Details

```plain
Initial display
  • Check if the current context holds a meeting_room_id.
  • Call GET /reception/map/:room_id to fetch the associated floor map image URL.
  • Render the returned map image and generate the QR code pointing to a static web viewer for the map.

Interaction
  • Setup idle timer (handled in subsequent flow usually). 
  • User can scan QR with independent device; does not require interactions on the tablet apart from visually observing it.

Action
  • [Complete] is pressed:
    ○ Transition directly to UKET-011 (Notification clear).
```
