# UKET-011 - Complete notification

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Complete notification |

## Overview

Screen Name: Complete notification
URI: /reception/complete
Screen Overview: Return to TOP screen or automatically return to TOP screen after 1 minute of no operation

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | セッション終了案内（会議室案内あり） | ラベル | O | 予約あり、かつ案内地図（UKET-010等）が表示された場合 | － | － | － | － | － | － | － | － | 固定文言「受付が完了しました。<br>表示されている案内図に従って、会議室までお進みください。」 |
| 2 | セッション終了案内（待機・案内なし） | ラベル | O | 予約なしの場合、または案内地図が非表示の場合 | － | － | － | － | － | － | － | － | 固定文言「受付が完了しました。<br>担当者が参りますので、その場で少々お待ちください。」 |
| 3 | 自動遷移インジケーター | プログレスバー | O | － | － | － | － | － | － | － | － | － | 1分間（60秒）のカウントダウンプログレスを視覚的に表示（F-106）。 |
| 4 | TOPへ戻る | ボタン | O | － | － | － | － | － | － | － | － | － | 押下でプログレスを待たずに即時「UKET-002（スクリーンセーバー）」へ遷移する。 |
| 5 | 自動遷移機能タイマー | その他 | O | 無操作時 | － | － | － | － | － | － | － | － | 1分（60秒）間、画面上で何も操作がなかった場合、自動的に「UKET-002」へ遷移しセッションをリセットする。 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | End guide (with map) | Label | O | With reservation & map shown previously | - | - | - | - | - | - | - | "Reception complete. Proceed to room using map." |
| 2 | End guide (wait/no map) | Label | O | No reservation or no map | - | - | - | - | - | - | - | "Reception complete. Host will come, please wait." |
| 3 | Auto-transition indicator | ProgressBar | O | - | - | - | - | - | - | - | - | Visual countdown (1 minute) (F-106) |
| 4 | Return to TOP | Button | O | - | - | - | - | - | - | - | - | Immediately returns to UKET-002 |
| 5 | Auto transition timer | Other | O | When idle | - | - | - | - | - | - | - | Transition to UKET-002 automatically after 60s idle. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Auto Transition Timer | Auto | Decrement progress bar. When reaches 60s, transition to UKET-002. |
| 2 | Return to TOP | Press | Cancel timer and transition to UKET-002 immediately. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | No validations required. |

## Processing Details

```plain
Initial display
  • Evaluate context: If a map and room was displayed (e.g. booked meeting), display the "End guide (with map)". Otherwise, display "End guide (wait)".
  • Initialize a 60-second visual countdown timer tracking Idle operation (F-106).
  • Show progress bar ticking down to 0.

Interaction
  • None required. The screen serves as a terminal state before reset.

Action
  • [Return to TOP] button is pressed OR the 60 seconds elapses:
    ○ Clear all current check-in session data memory ensuring privacy for the next visitor.
    ○ Transition securely back to UKET-002 (Screensaver / Digital Signage).
```
