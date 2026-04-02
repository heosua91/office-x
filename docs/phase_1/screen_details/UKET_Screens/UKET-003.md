# UKET-003 - Reception selection

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Reception selection |

## Overview

Screen Name: Reception selection
URI: /reception/select
Screen Overview: Select Reception by QR code / No reservation / Partner company

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 企業ロゴ | 画像 | O | 設定されている場合 | － | － | － | － | － | － | － | － | 画面上部に表示 |
| 2 | 案内メッセージ | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「ご用件を選択してください」 |
| 3 | QRコード受付 | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-004（予約QRコード読込）」へ遷移する |
| 4 | 予約コードで受付 | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-005（予約コード入力）」へ遷移する |
| 5 | 予約なし受付 | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-006（来訪者情報入力）」へ遷移する |
| 6 | 業者用受付 | ボタン | O | 事前に管理画面で業者用受付機能が有効な場合 | － | － | － | － | － | － | － | － | 押下で「UKET-007（業者選択）」へ遷移する |
| 7 | 戻る | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-002（スクリーンセーバー）」へ遷移する。※数十秒無操作の場合も自動で戻る |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Company logo | Image | O | If configured | - | - | - | - | - | - | - | Displayed at the top of the screen |
| 2 | Guide message | Label | O | - | - | - | - | - | - | - | - | Fixed text "Please select your business" |
| 3 | QR code reception | Button | O | - | - | - | - | - | - | - | - | Transition to UKET-004 upon press |
| 4 | Reservation code reception | Button | O | - | - | - | - | - | - | - | - | Transition to UKET-005 upon press |
| 5 | No reservation reception | Button | O | - | - | - | - | - | - | - | - | Transition to UKET-006 upon press |
| 6 | Vendor reception | Button | O | If vendor reception is enabled via admin | - | - | - | - | - | - | - | Transition to UKET-007 upon press |
| 7 | Return | Button | O | - | - | - | - | - | - | - | - | Returns to UKET-002. Transitions automatically if idle. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | QR code reception | Press | Transition to `UKET-004` screen. |
| 2 | Reservation code reception | Press | Transition to `UKET-005` screen. |
| 3 | No reservation reception | Press | Transition to `UKET-006` screen. |
| 4 | Vendor reception | Press | Transition to `UKET-007` screen. |
| 5 | Return | Press | Transition back to `UKET-002`. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | No validations required. |

## Processing Details

```plain
Initial display
  • Retrieve company logo if it is configured to display.
  • Display all available buttons (hide Vendor Reception button if not enabled in settings).

Interaction
  • Setup idle timer. If no interaction happens for 60 seconds, auto-transition to UKET-002.
  • Clicking any button resets the idle timer until transition.

Action
  • [Any function button] is pressed:
    ○ Navigate user correctly based on the button clicked as specified in the Actions table. No API calls required directly on this screen.
```
