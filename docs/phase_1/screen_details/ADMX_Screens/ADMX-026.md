# ADMX-026 - Xác nhận Mua thêm thời gian AI

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Xác nhận Mua thêm thời gian AI |

## Overview

Screen Name: Xác nhận Mua thêm thời gian AI
URI: /admin/billing/ai-quota/confirm
Screen Overview: Màn hình xác nhận cuối cùng cho việc mua thêm thời gian tóm tắt AI. Người dùng kiểm tra lại các thông số trước khi hệ thống thực hiện lệnh thanh toán và cộng hạn mức vào tài khoản doanh nghiệp.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「購入内容確認」 |
| 2 | 購入時間 | ラベル | O | － | － | － | － | － | － | － | － | － | 追加する時間数 |
| 3 | 購入金額 | ラベル | O | － | － | － | ¥#,### | － | － | － | － | － | 請求金額 |
| 4 | 適用開始指定 | ラベル | O | － | － | － | － | － | － | － | － | － | ADMX-025の入力内容 |
| 5 | 請求タイミング指定 | ラベル | O | － | － | － | － | － | － | － | － | － | ADMX-025の入力内容 |
| 6 | 注意事項 | ラベル | O | － | － | － | － | － | － | － | － | － | 決済後のキャンセル不可等の注記 |
| 7 | 修正するボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-025へ戻る |
| 8 | 確定ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 決済APIへ送信し、成功時はADMX-024へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Purchase Confirmation" |
| 2 | Purchase Hours | Label | O | - | - | - | - | - | - | - | - | - | Number of hours to add |
| 3 | Purchase Amount | Label | O | - | - | - | ¥#,### | - | - | - | - | - | Final billing amount |
| 4 | Start Applicalty | Label | O | - | - | - | - | - | - | - | - | - | Selected value from ADMX-025 |
| 5 | Billing Timing | Label | O | - | - | - | - | - | - | - | - | - | Selected value from ADMX-025 |
| 6 | Notes/Disclaimers | Label | O | - | - | - | - | - | - | - | - | - | e.g. "No cancellations after purchase" |
| 7 | Edit Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-025 |
| 8 | Confirm Button | Button | O | - | - | - | - | - | - | - | - | - | Execute purchase and go to ADMX-024 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Confirm Button | Press | Execute purchase API and transition to status screen (ADMX-024) on success. |
| 2 | Edit Button | Press | Return to purchase input screen (ADMX-025). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
Initial display
  • Render the summary of the purchase choices made on the previous screen (ADMX-025).

Interaction
  • None.

Action
  • Confirm Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/billing/ai-quota/purchase
      ▪ Method: POST
      ▪ Body: { "hours": ..., "apply_at": "...", "billing_timing": "..." }
    ○ If successful:
      ▪ Show Success Message (ADMX-026-SUC-01).
      ▪ Transition: Navigate to ADMX-024.
```
