# ADMX-019 - Đăng ký / Update Thông tin payment

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Đăng ký / Update Thông tin payment |

## Overview

Screen Name: Đăng ký / Update Thông tin payment
URI: /admin/settings/payment-methods
Screen Overview: Màn hình cho phép đăng ký, cập nhật hoặc kiểm tra phương thức thanh toán của doanh nghiệp (Thẻ tín dụng, Trả sau qua invoice...).

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「支払い情報更新」 |
| 2 | 支払い方法選択 | ラジオボタン | I/O | － | － | － | － | 〇 | － | － | － | － | 「クレジットカード」「請求書払い（Paid等）」 |
| 3 | クレジットカード情報入力エリア | その他 | I/O | クレカ選択時 | － | － | － | 〇 | － | － | カード番号・有効期限・CVC | － | 決済代行のトークン化UI等を利用 |
| 4 | 請求先情報入力エリア | その他 | I/O | 請求書払い選択時 | － | － | － | 〇 | － | － | － | － | 請求先住所、担当者等の入力 |
| 5 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-017へ戻る |
| 6 | 登録・更新ボタン | ボタン | O | － | 入力エラーなし | － | － | － | － | － | － | － | 決済システムへ連携し結果を保存。保存後ADMX-017へ |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Payment Method Settings" |
| 2 | Payment Type | Radio | I/O | - | - | - | - | 〇 | - | - | - | - | "Credit Card", "Invoice (Postpaid)" |
| 3 | Credit Card Area | Other | I/O | If CC selected | - | - | - | 〇 | - | - | - | - | External payment gateway token UI |
| 4 | Billing Info Area | Other | I/O | If Invoice selected | - | - | - | 〇 | - | - | - | - | Address, attention, etc. |
| 5 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-017 |
| 6 | Save Button | Button | O | - | No errors | - | - | - | - | - | - | - | Save to DB and return to ADMX-017 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Save Button | Press | Execute payment method update API and return to billing status screen. |
| 2 | Back Button | Press | Discard changes and return to ADMX-017. |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Credit Card|Integrity|ADMX-019-ERR-02|Verify card details through gateway before submission.|
| 2 |Billing Info|Required|ADMX-019-ERR-01|All required fields for invoice payment must be filled.|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/settings/payment-methods
      - Method: GET
    ○ **If successful**:
      - Populate currently registered payment type and details.

画面更新時 / Interaction
  • **Toggle Payment Type (ID: 2)**:
    ○ Dynamically switch between Credit Card input (ID: 3) and Billing Info input (ID: 4) layouts.

アクション発生時 / Action
  • **Save Button is pressed**:
    ○ For Credit Card:
      ▪ Tokenize card details via Payment Gateway SDK.
      ▪ If tokenization successful:
        - Execute API request:
          - Endpoint: /admin/settings/payment-methods
          - Method: POST
          - Body: { "type": "credit_card", "token": "..." }
    ○ For Invoice:
      ▪ Execute API request:
        - Endpoint: /admin/settings/payment-methods
        - Method: POST
        - Body: { "type": "invoice", "billing_data": { ... } }
    ○ **If successful**:
      - Show success toaster.
      - Transition: Navigate to ADMX-017.
    ○ **If failed**:
      - Show error message from gateway or server.
```
