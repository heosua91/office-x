# ADMX-025 - Mua thêm thời gian AI

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Mua thêm thời gian AI |

## Overview

Screen Name: Mua thêm thời gian AI
URI: /admin/billing/ai-quota/purchase
Screen Overview: Màn hình cho phép doanh nghiệp mua thêm thời gian tóm tắt AI theo phương thức trả trước (Prepaid). Người dùng nhập số lượng thời gian cần mua và lựa chọn thời điểm áp dụng cũng như thời điểm thanh toán.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「AI要約時間追加購入」 |
| 2 | 購入時間(時間) | テキストボックス | I | － | － | － | － | 〇 | 4 | 半角数字 | 1以上の整数 | － | 追加する時間数を入力 |
| 3 | 購入金額表示 | ラベル | O | － | － | － | ¥#,### | － | － | － | － | － | 入力された時間と単価からリアルタイム計算表示 |
| 4 | 適用開始指定 | ラジオボタン | I | － | － | － | － | 〇 | － | － | － | － | 「即時適用」「翌月開始」等 |
| 5 | 請求タイミング指定 | ラジオボタン | I | － | － | － | － | 〇 | － | － | － | － | 「今月の請求に追加」「翌月請求」 |
| 6 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-024へ戻る |
| 7 | 内容確認へボタン | ボタン | O | － | 入力エラーなし | － | － | － | － | － | － | － | 入力情報を保持してADMX-026へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Purchase AI Credits" |
| 2 | Hours to Buy | Text Box | I | - | - | - | - | 〇 | 4 | Numeric | Integer >= 1 | - | Enter number of hours |
| 3 | Calculated Price | Label | O | - | - | - | ¥#,### | - | - | - | - | - | Real-time calculation |
| 4 | Start Applicalty | Radio | I | - | - | - | - | 〇 | - | - | - | - | "Immediate", "Next Month" |
| 5 | Billing Timing | Radio | I | - | - | - | - | 〇 | - | - | - | - | "This Month's Bill", "Next Month" |
| 6 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-024 |
| 7 | Proceed Button | Button | O | - | No errors | - | - | - | - | - | - | - | Carry info to ADMX-026 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Proceed Button | Press | Store the purchase configuration in state and navigate to ADMX-026. |
| 2 | Hours to Buy | Input | Recalculate and display the price dynamically based on unit cost. |
| 3 | Back Button | Press | Return to AI Usage Management (ADMX-024). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Hours to Buy|Required|ADMX-025-ERR-01|Field cannot be empty.|
| 2 |Hours to Buy|Range|ADMX-025-ERR-02|Must be a positive integer.|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Fetch current AI credit unit price via API (e.g. /admin/billing/pricing).
    ○ Default "Start Applicalty" to "Immediate".

画面更新時 / Interaction
  • **Hours to Buy (ID: 2)**:
    ○ Logic: `Purchase Price = Input Hours * Unit Price`. Update "Calculated Price" (ID: 3) label.

アクション発生時 / Action
  • **Proceed Button is pressed**:
    ○ Transition: Navigate to ADMX-026, passing the selected parameters (hours, timing, start date).
```
