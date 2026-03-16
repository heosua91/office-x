# ADMX-017 - Thông tin Doanh nghiệp / Thanh toán

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Thông tin Doanh nghiệp / Thanh toán |

## Overview

Screen Name: Thông tin Doanh nghiệp / Thanh toán
URI: /admin/billing/status
Screen Overview: Màn hình hiển thị thông tin đăng ký của doanh nghiệp, phương thức thanh toán hiện tại, gói dịch vụ đang sử dụng cùng các hạn mức (quota) và ưu đãi đang được áp dụng.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「企業・支払い情報」 |
| 2 | 企業情報(会社名等) | ラベル | O | － | － | － | － | － | － | － | － | － | DBから現在の情報を表示 |
| 3 | 企業情報編集ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-018へ遷移 |
| 4 | 支払い方法情報 | ラベル | O | － | － | － | － | － | － | － | － | － | クレカ情報等（マスク表示） |
| 5 | 支払い情報編集ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-019へ遷移 |
| 6 | 現在のプラン名 | ラベル | O | － | － | － | － | － | － | － | － | － | － |
| 7 | プラン変更ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-022へ遷移 |
| 8 | 月間AI要約時間枠 | ラベル | O | － | － | － | － | － | － | － | － | － | － |
| 9 | 適用済み割引情報 | ラベル | O | 割引適用時 | － | － | － | － | － | － | － | － | プロモーションコード等による割引内容 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Company & Payment Info" |
| 2 | Company Info | Label | O | - | - | - | - | - | - | - | - | - | Name, Address, etc. from DB |
| 3 | Edit Company Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-018 |
| 4 | Payment Method Info | Label | O | - | - | - | - | - | - | - | - | - | Masked Credit Card info, etc. |
| 5 | Edit Payment Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-019 |
| 6 | Current Plan Name | Label | O | - | - | - | - | - | - | - | - | - | - |
| 7 | Change Plan Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-022 |
| 8 | Monthly AI Quota | Label | O | - | - | - | - | - | - | - | - | - | e.g. "50 hours / month" |
| 9 | Applied Discounts | Label | O | If applicable | - | - | - | - | - | - | - | - | Coupon or promo code details |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Edit Company Button | Press | Navigate to company info editor (ADMX-018). |
| 2 | Edit Payment Button | Press | Navigate to payment method registration (ADMX-019). |
| 3 | Change Plan Button | Press | Navigate to plan selection (ADMX-022). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/billing/status
      - Method: GET
    ○ **If successful**:
      - Populate all company details, current plan, usage quotas, and payment source summary.

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • **Edit Company Button is pressed**:
    ○ Transition: Navigate to ADMX-018.

  • **Edit Payment Button is pressed**:
    ○ Transition: Navigate to ADMX-019.

  • **Change Plan Button is pressed**:
    ○ Transition: Navigate to ADMX-022.
```
