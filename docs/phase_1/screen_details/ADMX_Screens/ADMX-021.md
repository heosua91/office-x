# ADMX-021 - Chi tiết Hóa đơn (Invoice)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Chi tiết Hóa đơn (Invoice) |

## Overview

Screen Name: Chi tiết Hóa đơn (Invoice)
URI: /admin/billing/invoices/:id
Screen Overview: Màn hình hiển thị chi tiết các khoản mục trong hóa đơn của một tháng cụ thể (phí cơ bản, phí người dùng bổ sung, phí AI vượt định mức...).

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「請求書詳細」 |
| 2 | 対象月 | ラベル | O | － | － | － | － | － | － | － | － | － | YYYY年MM月 |
| 3 | 請求明細テーブル | テーブル | O | － | － | － | － | － | － | － | － | － | － |
| 4 | 項目名 | ラベル | O | － | － | － | － | － | － | － | － | － | 基本利用料、追加ユーザー分、AI超過分など |
| 5 | 金額 | ラベル | O | － | － | － | ¥#,### | － | － | － | － | － | － |
| 6 | 合計金額 | ラベル | O | － | － | － | ¥#,### | － | － | － | － | － | － |
| 7 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-020へ戻る |
| 8 | PDF表示/DLボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 請求書の実体PDFを表示/ダウンロード |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Invoice Details" |
| 2 | Target Month | Label | O | - | - | - | - | - | - | - | - | - | YYYY-MM |
| 3 | Breakdown Table | Table | O | - | - | - | - | - | - | - | - | - | - |
| 4 | Item Name | Label | O | - | - | - | - | - | - | - | - | - | Base fee, Extra slots, AI overage, etc. |
| 5 | Amount | Label | O | - | - | - | ¥#,### | - | - | - | - | - | - |
| 6 | Total Amount | Label | O | - | - | - | ¥#,### | - | - | - | - | - | - |
| 7 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-020 |
| 8 | View/DL PDF | Button | O | - | - | - | - | - | - | - | - | - | View or download actual PDF file |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | View/DL PDF | Press | Open the PDF invoice in a new tab or trigger download. |
| 2 | Back Button | Press | Return to Invoice List (ADMX-020). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/billing/invoices/:id
      - Method: GET
    ○ **If successful**:
      - Populate "Breakdown Table" (ID: 3) with line items.
      - Calculate and display "Total Amount" (ID: 6).

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • **View/DL PDF Button is pressed**:
    ○ Obtain secure download URL via backend.
    ○ Browser opens the PDF or initiates download.
```
