# UKET-008 - Display notification status

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Display notification status |

## Overview

Screen Name: Display notification status
URI: /reception/notify-status
Screen Overview: Notify the person in charge, open URL and display "Waiting for response". If there is no response within a certain time (30s ~ 60s), auto retry notification and display until the person in charge clicks "Process".

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「担当者をお呼び出ししています」 |
| 2 | ステータス呼出中アニメーション | その他 | O | 担当者応答待ち状態時 | － | － | － | － | － | － | － | － | 進行中（またはループ）のアニメーションデザインを表示 |
| 3 | ステータス案内テキスト | ラベル | O | － | － | － | － | － | － | － | － | － | 「応答メッセージを待っています…」等を表示。<br>F-103による自動再通知実行中も表示を継続。<br>担当者が対応ボタンを押すと、自動的に状態が更新され「UKET-010（案内図）」または「UKET-011（完了）」へ遷移。 |
| 4 | 電話通話を希望する | ボタン | O | 管理画面で通話機能が有効になっている場合 | － | － | － | － | － | － | － | － | 通知先担当者と直接通話を希望する場合に押下。<br>押下で「UKET-009（通話画面）」へ遷移する。 |
| 5 | キャンセル（戻る） | ボタン | O | － | － | － | － | － | － | － | － | － | 通知処理をキャンセルし、「UKET-003（TOP画面）」へ遷移する。 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen title | Label | O | - | - | - | - | - | - | - | - | Fixed "Calling the host" |
| 2 | Calling animation | Other | O | While waiting for response | - | - | - | - | - | - | - | Show ongoing loop animation |
| 3 | Status guide text | Label | O | - | - | - | - | - | - | - | - | Show "Waiting for response message...". Updates based on host action -> UKET-010 or 011. |
| 4 | Request Voice Call | Button | O | If calling feature is enabled | - | - | - | - | - | - | - | Transition to UKET-009 for WebRTC session |
| 5 | Cancel (Back) | Button | O | - | - | - | - | - | - | - | - | Cancel notification and return to UKET-003 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Status poller | Auto | Periodically polls host response status. Transition to UKET-010 or UKET-011 if the host confirms receipt. |
| 2 | Resend timer | Auto | Triggers `POST /reception/notify-host` to resend notification if no answer in 30-60s. |
| 3 | Request Voice Call | Press | Transition to UKET-009. |
| 4 | Cancel (Back) | Press | Cancel process and transition to UKET-003. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | No direct field input validation required. |

## Processing Details

```plain
Initial display
  • "Calling the host" animation displayed.
  • Establish an active WebSocket connection (or Server-Sent Events) subscribing to the specific `visit_log_id` channel to receive real-time push events.
  • Set up a local `setInterval` (e.g., 45 seconds) to automatically resend the notification ping.

Interaction
  • Listen for WebSocket events from the BE (e.g., `HOST_ACCEPTED`, `HOST_REJECTED`, `ROOM_ALLOCATED`).
  • If the host acknowledges (event received), CRITICALLY clear the local resend timer, close the WebSocket, and transition automatically to UKET-010 if a room is assigned, or UKET-011 otherwise.
  • If the resend timer strikes before any WebSocket event, trigger the POST /reception/notify-host API with `is_retry=true` to bump the alert.

Action
  • [Request Voice Call] is pressed:
    ○ Clear timers/WebSockets and transition to UKET-009 where WebRTC signaling is initiated.
  • [Cancel] is pressed:
    ○ Clear all timers/polling, close socket.
    ○ Transition to UKET-003.
```
