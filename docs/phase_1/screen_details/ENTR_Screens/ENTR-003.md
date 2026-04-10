# ENTR-003 - Meeting Registration

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Meeting Registration |

## Overview

Screen Name: Meeting Registration
URI: /room/start
Screen Overview: A screen for registering basic meeting information for an immediate (quick) entry. Users select the meeting type, guest status (New/Existing), participants, and intended duration. The system performs a real-time check for schedule conflicts.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「会議情報登録」 |
| 2 | 会議種別選択 | ラジオボタン | I | － | － | － | － | 〇 | － | － | － | － | 「顧客会議」か「社内会議」から選択 |
| 3 | 顧客種別選択 | ラジオボタン | I | 顧客会議選択時 | － | － | － | 〇 | － | － | － | － | 「新規顧客」か「既存顧客」から選択 |
| 4 | 会社名 | コンボボックス | I | 既存顧客選択時 | － | － | － | 〇 | － | － | － | － | 既存企業情報（DB）と紐付け。サジェスト機能あり |
| 5 | 参加メンバー選択 | チェックボックス | I | － | － | － | － | 〇 | － | － | － | － | 社内のユーザーリストを表示。複数選択可能。 |
| 6 | 利用時間 | デートタイムピッカー | I | － | － | － | HH:mm - HH:mm | 〇 | － | － | － | 時間の被り | 即入室の予定時間を入力する。 |
| 7 | エラーメッセージ | ラベル | O | 時間の被り時 | － | － | － | － | － | － | － | － | 利用時間と予定（次の予約など）が被る場合、「利用時間と予約時間が被っています」と表示する |
| 8 | 次へ | ボタン | I/O | － | 時間の被りなし | － | － | － | － | － | － | － | 被りがない場合活性化。ENTR-004またはENTR-008へ進む |
| 9 | 戻る | リンク | I/O | － | － | － | － | － | － | － | － | － | 待機画面（ENTR-002）へ戻る |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen Title | Label | O | - | Fixed text: "Meeting Registration" |
| 2 | Meeting Type Selection | Radio Button | I | - | Choose "Customer Meeting" or "Internal Meeting". |
| 3 | Guest Type Selection | Radio Button | I | If Customer Meeting selected | Choose "New Customer" or "Existing Customer". |
| 4 | Company Name | Combo Box | I | If Existing Customer selected | Linked with existing company data (DB). Includes auto-suggest. |
| 5 | Participant Selection | Checkbox | I | - | List of internal users. Multiple choices allowed. |
| 6 | Usage Time | Time Picker | I | - | Enter the intended meeting duration (HH:mm - HH:mm). |
| 7 | Error Message | Label | O | If time overlap occurs | "The usage time overlaps with an existing reservation." |
| 8 | Next | Button | I/O | - | Disabled if there is a conflict. Transitions to ENTR-004 or ENTR-008. |
| 9 | Back | Link | I/O | - | Returns to the standby screen (ENTR-002). |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Meeting Type Selection | Select | Toggles visibility of Guest Type fields. |
| 2 | Guest Type Selection | Select | Toggles visibility of the Company Name field. |
| 3 | Next | Press | Saves temporary meeting data and continues to pre-entry flow. |
| 4 | Back | Press | Returns to the standby screen. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Company Name | Required | SYS-000-ERR-05 | Mandatory if "Existing Customer" is selected. |
| 2 | Usage Time | Conflict | OFX-004-ERR-02 | Must not overlap with existing future reservations. |

## Processing Details

```plain
Initial display
  • "Meeting Type" defaults to "Internal Meeting".
  • "Participant Selection" displays a list of active company users.
  • "Usage Time" defaults to the current time with a 30-minute block.
  • "Guest Type Selection" and "Company Name" are hidden initially.

Interaction
  • If "Customer Meeting" is selected: Show "Guest Type Selection".
  • If "Existing Customer" is selected: Show "Company Name" combo box.
  • Company Name Combo Box: As user types, fetch matching records from client_companies.
    ○ API Call: GET /office/customers (with search query)
  • Usage Time change: Real-time check against room status.
    ○ API Call: GET /room/:id/status
    ○ If conflict detected: Display Error Message [OFX-004-ERR-02] and disable "Next" button.

Action
  • "Next" button is pressed:
    ○ API Call: POST /room/:id/start (Initialize temporary meeting)
    ○ If successful:
      - If room is Multi-device mode: Transition to ENTR-004.
      - If room is Single-mode: Transition to ENTR-008.
    ○ If failed: Display Error Message [SYS-000-ERR-05].

  • "Back" link is pressed:
    ○ Transition to ENTR-002.
```
