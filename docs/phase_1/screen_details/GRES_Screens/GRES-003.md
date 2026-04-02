# GRES-003 - Confirm Registration

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-02 | 1 | New | Confirm Registration Screen |

## Overview

Screen Name: Confirm Registration
URI: /guest/reserve/step3
Screen Overview: Display all previously entered information (date/time, format, guest info) in read-only mode for final review before confirmation.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 予約日時 | ラベル | O | − | − | − | YYYY/MM/DD HH:mm (Timezone) | − | − | − | − | − | 選択した日時とタイムゾーン |
| 2 | 開催形式 | ラベル | O | − | − | − | − | − | − | − | − | − | オフライン or オンライン |
| 3 | 参加予定人数 | ラベル | O | オフライン時 | − | − | − | − | − | − | − | − | オフライン時のみ表示 |
| 4 | ゲスト情報 | ラベル | O | − | − | − | − | − | − | − | − | − | 入力した企業名・氏名・メール・電話番号 |
| 5 | 同行者情報 | ラベル | O | 同行者あり時 | − | − | − | − | − | − | − | − | 同行者の氏名・メール・電話番号 |
| 6 | 戻る（修正する） | ボタン | O | − | − | − | − | − | − | − | − | − | GRES-002へ戻る |
| 7 | 予約を確定する | ボタン | O | − | − | − | − | − | − | − | − | − | 予約APIを呼び出し GRES-004へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Reservation Date/Time | Label | O | - | - | - | YYYY/MM/DD HH:mm (Timezone) | - | - | - | - | - | Selected slot and timezone |
| 2 | Meeting Format | Label | O | - | - | - | - | - | - | - | - | - | Offline or Online |
| 3 | Number of Participants | Label | O | Offline format only | - | - | - | - | - | - | - | - | Only shown for Offline |
| 4 | Guest Information | Label | O | - | - | - | - | - | - | - | - | - | Company, Name, Email, Mobile of primary guest |
| 5 | Companion Information | Label | O | If companions present | - | - | - | - | - | - | - | - | Name/Email/Mobile per companion |
| 6 | Back (Edit) | Button | O | - | - | - | - | - | - | - | - | - | Return to GRES-002 |
| 7 | Confirm Booking | Button | O | - | - | - | - | - | - | - | - | - | Call booking API → GRES-004 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Back (Edit) | Press | Navigate back to GRES-002 with all data retained |
| 2 | Confirm Booking | Press | Call `POST /guest/reserve` with full payload, then navigate to GRES-004 on success |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | (Screen) | Read-only | - | All fields are display-only; no further client validation needed |

## Processing Details

```plain
Initial display
  • Retrieve all state collected across GRES-001 and GRES-002:
    ○ Selected slot datetime + timezone
    ○ Meeting format (Offline/Online)
    ○ Participants count (if Offline)
    ○ Primary guest: company name, full name, email, mobile
    ○ Companion list: name, email, mobile per entry
  • Render all fields as read-only labels. No editing on this screen.

Interaction
  • Static display screen. No dynamic logic except button interactions.

Action
  • "Back (Edit)" button pressed:
    ○ Navigate to GRES-002, retaining all local state (no data loss).
  • "Confirm Booking" button pressed:
    ○ Show a loading state on the button to prevent duplicate submission.
    ○ Call `POST /guest/reserve` with the full payload.
    ○ If successful:
      - Receive response containing qr_code_hash, booking_code (Offline) or meeting_url (Online).
      - Store response data in state and navigate to GRES-004.
    ○ If failed (e.g., slot already taken):
      - Hide loading state.
      - Show toast error message with the API error code (e.g., ERR-APT-001: slot unavailable).
```
