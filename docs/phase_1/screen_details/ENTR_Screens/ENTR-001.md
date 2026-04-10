# ENTR-001 - Link device to Meeting Room

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Link device to Meeting Room |

## Overview

Screen Name: Link device to Meeting Room
URI: /room/link
Screen Overview: Link a device to a meeting room by scanning a room-specific QR code or manually entering a confirmation code (4-6 digits). In single-mode, only one device can be linked at a time. In multi-device mode, a seat selection layout is displayed immediately after scanning.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「端末と会議室をリンク（初期設定）」 |
| 2 | QRコード読取エリア | その他 | I | － | － | － | － | 〇 | － | － | － | － | フロントカメラ起動、ADMXで発行されたQRコードをスキャン。 |
| 2-1 | 確認コード入力 | テキストボックス | I | － | － | 「コードが無効です」 | － | 〇 | 4〜6 | 半角数字 | 数字4〜6桁 | QRコードまたは確認コードのいずれか必須 | QRコードをスキャンできない場合（PC利用等）、会議室専用QRコードに併記された確認コード（数字4〜6桁）を手動入力して端末をリンクする |
| 3 | エラーメッセージ | ラベル | O | 読取失敗時<br>またはコード認証失敗時 | － | － | － | － | － | － | － | － | 無効なQRコードまたは確認コードの場合エラー表示 |
| 4 | 座席一覧エリア | その他 | O | マルチデバイスモード時 | － | － | － | － | － | － | － | － | 会議室がマルチデバイスの場合、主催者の席とその他の座席一覧（座席表レイアウト）を表示 |
| 5 | 座席選択ボタン | ボタン | O | マルチデバイスモード時 | 未選択の席 | － | － | 〇 | － | － | － | － | 適当な位置（まだ選択されていない座席）を選択する |
| 6 | 連携（登録）する | ボタン | I | マルチデバイスモード時 | 座席選択時 | － | － | － | － | － | － | － | 座席の選択を確定しリンクを完了する |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Char. count | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text: "Link Device to Meeting Room (Initial Setup)" |
| 2 | QR Code Scanning Area | Other | I | - | - | - | - | Yes | - | - | - | - | Activates front camera to scan the QR code issued in ADMX. |
| 2-1 | Confirmation Code Input | Textbox | I | - | - | "Invalid code" | - | Yes | 4-6 | Half-width digits | 4-6 digits | Either QR code or confirmation code is required | Manually enter the 4-6 digit confirmation code if QR cannot be scanned. |
| 3 | Error Message | Label | O | Scan failure or authentication failure | - | - | - | - | - | - | - | - | Displayed if the QR code or confirmation code is invalid. |
| 4 | Seat List Area | Other | O | Multi-device mode | - | - | - | - | - | - | - | - | Displays host seat and other seats (seat map layout) for multi-device rooms. |
| 5 | Seat Selection Button | Button | O | Multi-device mode | Unselected seat | - | - | Yes | - | - | - | - | Select an available seat. |
| 6 | Link (Register) | Button | I | Multi-device mode | Seat selected | - | - | - | - | - | - | - | Confirms seat selection and completes the linking process. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | QR Code Scanning Area | Scan | Scans the QR code to identify the meeting room. |
| 2 | Confirmation Code Input | Input | Manually enter code to identify the meeting room. |
| 3 | Seat Selection Button | Press | Selects a specific seat in multi-device mode. |
| 4 | Link (Register) | Press | Executes linking API and transitions to ENTR-002. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Confirmation Code Input | Format | SYS-000-ERR-05 | Must be 4-6 digits. |
| 2 | Confirmation Code Input | Required | SYS-000-ERR-05 | If QR code is not scanned, this field is mandatory. |

## Processing Details

```plain
Initial display
  • The screen title "Link Device to Meeting Room (Initial Setup)" is displayed.
  • The QR code scanner is activated by default.
  • The confirmation code input field is ready for manual entry.
  • For multi-device rooms, the Seat List Area and Link button are hidden until the room is identified.

Interaction
  • When a room is identified (via QR or code) and it's a multi-device room:
    ○ Display the seat map layout in the Seat List Area.
    ○ Enable selection of seats that are currently unassigned.
    ○ The "Link (Register)" button becomes active once a seat is selected.

Action
  • QR Code Scanned or Confirmation Code Entered:
    ○ API Call: POST /room/:id/link
    ○ If successful:
      - If Multi-device mode: Display seat selection UI.
      - If Single-mode: Register device to room and transition to ENTR-002.
    ○ If failed: Display Error Message [ENTR-001-ERR-01] (Room ID not found).

  • "Link (Register)" button is pressed (Multi-device mode):
    ○ API Call: POST /room/:id/seats (to register the chosen seat to this device)
    ○ If successful: transition to ENTR-002.
    ○ If failed: Display Error Message [SYS-000-ERR-01].
```
