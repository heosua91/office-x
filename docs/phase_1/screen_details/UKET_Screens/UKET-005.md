# UKET-005 - Enter reservation code

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Enter reservation code |

## Overview

Screen Name: Enter reservation code
URI: /reception/checkin/code
Screen Overview: Enter the reservation code issued at GRES-004

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「予約コードを入力してください」 |
| 2 | 予約コード入力欄 | テキストボックス | I | － | － | － | － | 〇 | 指定桁数 | 半角数字 | － | － | タップでソフトウェアキーボードを表示するか、専用のテンキーで入力 |
| 3 | ソフトウェアテンキー | その他 | O | 常時表示または入力欄フォーカス時 | － | － | － | － | － | － | － | － | 画面上に「0〜9」「クリア（1文字削除）」のキーパッドを表示 |
| 4 | 確認 | ボタン | O | － | 予約コードが指定の桁数まで入力されている場合 | － | － | － | － | － | － | － | 押下でAPI照合（F-100）を実行。<br>成功時：「UKET-010（案内地図とQRコード表示）」へ自動遷移。 |
| 5 | エラーメッセージ | ラベル | O | 照合失敗時 | － | － | － | － | － | － | － | － | 「コードが違います」「有効期限切れです」等のエラーを表示。 |
| 6 | 戻る | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-003（TOP画面）」へ遷移する |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen title | Label | O | - | - | - | - | - | - | - | - | Fixed "Enter reservation code" |
| 2 | Reservation code input | Textbox | I | - | - | - | - | Yes | Fixed len | Code | - | - | Input via software numpad |
| 3 | Software numpad | Other | O | Always visible or on focus | - | - | - | - | - | - | - | "0-9", "Clear" keys |
| 4 | Confirm | Button | O | - | Input length matched | - | - | - | - | - | - | Trigger validation F-100 API. Success -> UKET-010 |
| 5 | Error message | Label | O | Validation failed | - | - | - | - | - | - | - | E.g., "Code incorrect", "Expired" |
| 6 | Return | Button | O | - | - | - | - | - | - | - | - | Go back to UKET-003 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Numpad buttons | Press | Enter digits into the reservation code input field. |
| 2 | Confirm | Press | Submit length-validated code to API. |
| 3 | Return | Press | Transition back to UKET-003 |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Reservation code | Length format | MSG-ERR-001 | Check if the exact fixed length of digits are inputted before enabling Confirm button. |

## Processing Details

```plain
Initial display
  • Numpad and Code input box are visible.
  • Confirm button disabled.

Interaction
  • When the Numpad is clicked, the reservation code updates.
  • The Confirm button activates when the length of the string matches the exact predefined PIN length (like 6 or 8 digits).

Action
  • [Confirm] button is pressed:
    ○ Call POST /reception/check-in/qr API with `booking_code`.
    ○ If successful: Transition to UKET-010.
    ○ If failed: Display the error message label with specific context (e.g. Expired).
```
