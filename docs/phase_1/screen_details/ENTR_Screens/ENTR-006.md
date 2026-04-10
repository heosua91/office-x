# ENTR-006 - Final Seat Adjustment (Host)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Final Seat Adjustment (Host) |

## Overview

Screen Name: Final Seat Adjustment (Host)
URI: /room/seat-adjustment
Screen Overview: This screen displays the room's seat layout and current occupancy. On the host's tablet (Parent Device), the organizer can finalize seat assignments via drag-and-drop. All adjustments are synchronized in real-time with all other connected devices (Child Devices).

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「レイアウト・席次の最終調整」 |
| 2 | 座席表（レイアウトエリア） | その他 | I/O | － | － | － | － | － | － | － | － | － | 会議室情報に基づいた座席配置マップ |
| 3 | ユーザーアイコン | その他 | I/O | － | － | － | － | － | － | － | － | － | 参加者のアイコン・氏名。ドラッグ＆ドロップで位置（座席）を入れ替える事が可能 |
| 4 | ドラッグ＆ドロップイベント | その他 | I | UI操作時 | － | － | － | － | － | － | － | － | 座席の移動イベントをフックし、他の子機端末とリアルタイムに同期を行う |
| 5 | 入室する | ボタン | I/O | － | － | － | － | － | － | － | － | － | 席次の調整を完了し全員を入室（ENTR-008またはENTR-009/010）させる |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Note |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Screen Title | Label | O | Fixed text: "Final Layout & Seat Adjustment". |
| 2 | Seat Map (Layout Area) | Other | I/O | Map layout based on the meeting room configuration. |
| 3 | User Icons | Other | I/O | Attendee icons and names. Can be moved via drag-and-drop. |
| 4 | Drag & Drop Event | Other | I | Triggered during UI manipulation to sync positions. |
| 5 | Enter | Button | I/O | Finalizes adjustment and moves all participants to entry (ENTR-008). |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | User Icons | Drag | Repositions a participant on the seat map. |
| 2 | Enter | Press | Saves final seat positions and transitions to ENTR-008. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | User Icons | Position | ENTR-006-ERR-01 | Invalid seat coordinates or overlapping. |

## Processing Details

```plain
Initial display
  • Render the predefined seat map for the current meeting room.
  • Place user icons at their currently assigned or default positions.
  • Establish a real-time sync channel (WebSocket) to broadcast changes.

Interaction
  • When a user icon is dragged and dropped onto a new seat:
    ○ Update the local state.
    ○ Broadcast the new coordinates to all linked tablets (Child Devices).
    ○ Sync UI on all devices to reflect the movement.

Action
  • "Enter" button is pressed:
    ○ API Call: POST /room/:id/seats (to save the final configuration)
    ○ If successful:
      - Transition to ENTR-008.
    ○ If failed: Display Error Message [SYS-000-ERR-01].
```
