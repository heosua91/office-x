# ENTR-005 - Parent Device (Host)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Parent Device (Host) |

## Overview

Screen Name: Parent Device (Host)
URI: /room/host-standby
Screen Overview: A standby screen displayed on the host's tablet in multi-device mode. It visually identifies the device as the "Parent Device" using a distinct UI (e.g., specific border colors or highlights) to distinguish it from attendee tablets.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 主催者明示ラベル | ラベル | O | － | － | － | － | － | － | － | － | － | 「◎◎様（主催者）」と表示 |
| 2 | 強調UI枠 | その他 | O | － | － | － | － | － | － | － | － | － | 枠線の色変更など、親機であることを視覚的にアピールするUI |
| 3 | 進む | ボタン | I | － | － | － | － | － | － | － | － | － | 席次の最終調整画面（ENTR-006）へ進む |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Note |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Host Identifier Label | Label | O | Displays "Mr./Ms. ◎◎ (Host)". |
| 2 | Highlighted UI Border | Other | O | Visual highlight (e.g., colored border) to signify this is the Parent Device. |
| 3 | Continue | Button | I | Transitions to final seat adjustment (ENTR-006). |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Continue | Press | Transitions to ENTR-006. |

## Validations

This screen does not have input fields or complex constraints.

## Processing Details

```plain
Initial display
  • Display the host's name clearly with the "(Host)" suffix.
  • Apply a distinct visual style (Parent Device UI) such as a different theme or outer glow/border.
  • The "Continue" button is active.

Interaction
  • None.

Action
  • "Continue" button is pressed:
    ○ Transition to ENTR-006.
```
