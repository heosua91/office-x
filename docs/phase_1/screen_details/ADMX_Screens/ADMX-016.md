# ADMX-016 - Payment Menu

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Payment Menu |

## Overview

Screen Name: Payment Menu
URI: /admin/billing
Screen Overview: Màn hình menu cung cấp các liên kết điều hướng đến thông tin doanh nghiệp, phương thức thanh toán, danh sách hóa đơn và thay đổi gói dịch vụ.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「請求関連メニュー」 |
| 2 | 企業・支払い情報ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-017へ遷移 |
| 3 | 請求書一覧ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-020へ遷移 |
| 4 | プラン変更ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-022へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Billing & Payment Menu" |
| 2 | Company/Payment Info Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-017 |
| 3 | Invoice List Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-020 |
| 4 | Change Plan Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-022 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Company/Payment Info Button | Press | Navigate to the billing overview screen (ADMX-017). |
| 2 | Invoice List Button | Press | Navigate to the invoice history list (ADMX-020). |
| 3 | Change Plan Button | Press | Navigate to the plan selection screen (ADMX-022). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
初期表示 / Initial display
  • Render navigation buttons for the billing module.

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • **Any button is pressed**:
    ○ Transition: Navigate to the respective screen URI.
```
