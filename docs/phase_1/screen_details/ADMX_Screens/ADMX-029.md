# ADMX-029 - Chi tiết sử dụng AI & Billing

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Chi tiết sử dụng AI & Billing |

## Overview

Screen Name: Chi tiết sử dụng AI & Billing
URI: /admin/members/ai-status
Screen Overview: Màn hình hiển thị chi tiết lượng tiêu thụ tóm tắt AI trong tháng hiện tại (phân tách theo Free/Prepaid/Postpaid) và dự toán số tiền sẽ bị tính phí vào cuối tháng dựa trên mức độ sử dụng thực tế.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「AI利用明細・予想請求」 |
| 2 | プラン内無料枠明細 | ラベル | O | － | － | － | － | － | － | － | － | － | 消費時間、残り時間を表示 |
| 3 | プリペイド枠明細 | ラベル | O | 購入歴あり | － | － | － | － | － | － | － | － | 購入時間、消費時間、残り時間を表示 |
| 4 | ポストペイド枠明細 | ラベル | O | 従量課金設定時 | － | － | － | － | － | － | － | － | 当月利用時間、従量単価、現在の発生額 |
| 5 | 当月合計請求見込額 | ラベル | O | － | － | － | ¥#,### | － | － | － | － | － | 末日時点の予想請求額シミュレーション結果 |
| 6 | CSVダウンロード | ボタン | O | － | － | － | － | － | － | － | － | － | ユーザーごとの利用明細を含めた詳細CSV |
| 7 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-024へ戻る |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "AI Usage Detail & Est. Billing" |
| 2 | Free Quota Details | Label | O | - | - | - | - | - | - | - | - | - | Consumed time, remaining time |
| 3 | Prepaid Details | Label | O | If purchased | - | - | - | - | - | - | - | - | Bought, Consumed, Remaining |
| 4 | Postpaid Details | Label | O | If enabled | - | - | - | - | - | - | - | - | Usage time, unit price, accrued fee |
| 5 | Est. Total Amount | Label | O | - | - | - | ¥#,### | - | - | - | - | - | Simulation result for month-end bill |
| 6 | CSV Download | Button | O | - | - | - | - | - | - | - | - | - | Detail CSV including per-user logs |
| 7 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-024 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | CSV Download | Press | Call API to generate and download detailed usage CSV. |
| 2 | Back Button | Press | Return to AI Usage Management (ADMX-024). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/billing/ai-quota/details
      ▪ Method: GET
    ○ If successful:
      ▪ Display granular breakdown of Free, Prepaid, and Postpaid consumption.
      ▪ Calculate and show "Estimated Total Amount" (ID: 5).

Interaction
  • None.

Action
  • CSV Download is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/billing/ai-quota/details/export
      ▪ Method: GET
      ▪ Params: { "format": "csv" }
    ○ Browser triggers download of the usage data file.
```
