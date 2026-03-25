# ADMX-022 - Thay đổi Plan & Thanh toán

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Thay đổi Plan & Thanh toán |

## Overview

Screen Name: Thay đổi Plan & Thanh toán
URI: /admin/billing/plans
Screen Overview: Màn hình cho phép thay đổi gói dịch vụ đang sử dụng, nhập mã khuyến mãi (Promotion Code) và thực hiện xác nhận thanh toán/chênh lệch phí với hệ thống thanh toán bên ngoài.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「プラン変更・確認」 |
| 2 | 現在のプラン | ラベル | O | － | － | － | － | － | － | － | － | － | － |
| 3 | 変更先プラン選択 | ラジオボタン | I | － | － | － | － | 〇 | － | － | － | － | 提供されているプラン一覧 |
| 4 | プロモーションコード | テキストボックス | I | － | － | － | － | － | 50 | 半角英数 | － | － | 割引クーポンコード |
| 5 | 適用ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | コードの有効性確認と割引額計算 |
| 6 | 変更後料金表示 | ラベル | O | プラン選択後 | － | － | － | － | － | － | － | － | 変更適用による月額と初期費用のシミュレーション |
| 7 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-017へ戻る |
| 8 | 変更・決済実行ボタン | ボタン | O | － | 必須項目入力済 | － | － | － | － | － | － | － | 外部決済システムとの連携実行 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Change Plan & Confirmation" |
| 2 | Current Plan | Label | O | - | - | - | - | - | - | - | - | - | - |
| 3 | Target Plan Select | Radio | I | - | - | - | - | 〇 | - | - | - | - | List of available plans |
| 4 | Promotion Code | Text Box | I | - | - | - | - | - | 50 | Half-alphanumeric | - | - | Discount coupon code |
| 5 | Apply Button | Button | O | - | - | - | - | - | - | - | - | - | Validate code and calc discount |
| 6 | Price Preview | Label | O | After selection | - | - | - | - | - | - | - | - | Monthly fee and initial cost sim |
| 7 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-017 |
| 8 | Execute Change | Button | O | - | Required filled | - | - | - | - | - | - | - | External payment integration |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Apply Button | Press | Call API to validate promo code and update price preview. |
| 2 | Execute Change | Press | Trigger plan change API (may involve immediate prorated billing). |
| 3 | Back Button | Press | Return to billing status (ADMX-017). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Plan Selection|Required|ADMX-022-ERR-02|Must select a target plan.|
| 2 |Promo Code|Validity|ADMX-022-ERR-01|Code must be active and applicable.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/billing/plans
      ▪ Method: GET
    ○ If successful:
      ▪ Display "Current Plan" (ID: 2).
      ▪ Render "Target Plan Selection" (ID: 3) with available tiers.

Interaction
  • Plan Select (ID: 3):
    ○ Call simulation endpoint to receive updated "Price Preview" (ID: 6) including any prorated calculations.

Action
  • Apply Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/billing/promo/validate
      ▪ Method: POST
      ▪ Body: { "code": "..." }
    ○ If successful:
      ▪ Apply discount to simulated price.

  • Execute Change is pressed:
    ○ Show Modal: "Your plan will be changed to [Plan Name]. Tax-inclusive Amount: ¥X. Do you want to proceed?"
    ○ If OK:
      ▪ Execute API request:
        - Endpoint: /admin/billing/plans/change
        - Method: POST
        - Body: { "plan_id": "...", "promo_code": "..." }
      ▪ If successful:
        - Show Success Message (ADMX-022-SUC-01).
        - Transition: Navigate to ADMX-017.
```
