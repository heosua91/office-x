# ADMX-020 - Danh sách hóa đơn (Invoice)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Danh sách hóa đơn (Invoice) |

## Overview

Screen Name: Danh sách hóa đơn (Invoice)
URI: /admin/billing/invoices
Screen Overview: Màn hình hiển thị danh sách các hóa đơn từ quá khứ đến tháng hiện tại. Cung cấp chức năng xem chi tiết hóa đơn hoặc tải xuống tệp PDF.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「請求書一覧」 |
| 2 | 請求書テーブル | テーブル | O | － | － | － | － | － | － | － | － | － | － |
| 3 | 請求月 | ラベル | O | － | － | － | YYYY年MM月 | － | － | － | － | － | テーブル要素 |
| 4 | 請求金額 | ラベル | O | － | － | － | ¥#,### | － | － | － | － | － | テーブル要素 |
| 5 | ステータス | ラベル | O | － | － | － | － | － | － | － | － | － | 未払い、支払い済み、処理中など |
| 6 | 詳細表示ボタン | リンク | O | 各行 | － | － | － | － | － | － | － | － | 押下でADMX-021へ遷移 |
| 7 | PDFダウンロード | ボタン | O | 各行 | ステータスによる | － | － | － | － | － | － | － | 該当月の請求書PDFをダウンロード |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Invoice List" |
| 2 | Invoice Table | Table | O | - | - | - | - | - | - | - | - | - | - |
| 3 | Billing Month | Label | O | - | - | - | YYYY-MM | - | - | - | - | - | Table element |
| 4 | Amount | Label | O | - | - | - | ¥#,### | - | - | - | - | - | Table element |
| 5 | Status | Label | O | - | - | - | - | - | - | - | - | - | Unpaid, Paid, Pending, etc. |
| 6 | Details Button | Link | O | Per row | - | - | - | - | - | - | - | - | Transition to ADMX-021 |
| 7 | PDF Download | Button | O | Per row | Based on status | - | - | - | - | - | - | - | Download PDF invoice |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Details Button | Press | Navigate to detailed invoice breakdown (ADMX-021). |
| 2 | PDF Download | Press | Trigger browser download of the PDF invoice file. |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/billing/invoices
      ▪ Method: GET
    ○ If successful:
      ▪ Populate the "Invoice Table" (ID: 2) with historical and current invoice records.

Interaction
  • None.

Action
  • Details Button is pressed:
    ○ Transition: Navigate to ADMX-021 with the selected month/invoice ID.

  • PDF Download is pressed:
    ○ Trigger direct file download link from the secure storage (e.g. S3 Signed URL).
```
