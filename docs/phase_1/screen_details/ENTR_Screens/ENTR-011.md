# ENTR-011 - Exit Completed

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Exit Completed |

## Overview

Screen Name: Exit Completed
URI: /room/finish
Screen Overview: A simple notification screen confirming that the meeting session has ended and the user has successfully exited. After a few seconds, the screen automatically redirects back to the standby/schedule screen (ENTR-002).

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 完了メッセージ | ラベル | O | － | － | － | － | － | － | － | － | － | 「退出処理が完了しました」等の文言 |
| 2 | TOPへ戻る | ボタン | I/O | － | － | － | － | － | － | － | － | － | 押下することで、待機・予約確認画面（ENTR-002）等へ即座に戻る |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Note |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Completion Message | Label | O | Text: "The exit process has been completed successfully." |
| 2 | Return to Top | Button | I/O | Immediately redirects to the standby screen (ENTR-002). |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Return to Top | Press | Redirects to ENTR-002. |

## Validations

This screen does not have input fields or complex constraints.

## Processing Details

```plain
Initial display
  • Display the success message "The exit process has been completed successfully."
  • Start a 5-second countdown timer.

Interaction
  • After the 5-second countdown expires, automatically redirect the app to ENTR-002.

Action
  • "Return to Top" button is pressed:
    ○ Cancel the timer and redirect immediately to ENTR-002.
```
