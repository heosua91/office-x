# ADMX-018 - Đăng ký / Update Company Info

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Đăng ký / Update Company Info |

## Overview

Screen Name: Đăng ký / Update Company Info
URI: /admin/billing/status (Edit Mode)
Screen Overview: Màn hình cho phép cập nhật thông tin cơ bản của doanh nghiệp (tên, địa chỉ, người liên hệ) và thiết lập các chính sách sử dụng AI (Không giới hạn hoặc giới hạn theo hạn mức) cùng các ngưỡng cảnh báo (Alert).

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「企業情報更新」 |
| 2 | 会社名 | テキストボックス | I/O | － | － | － | － | 〇 | 255 | 全角半角 | － | － | － |
| 3 | 住所 | テキストボックス | I/O | － | － | － | － | 〇 | 255 | 全角半角 | － | － | － |
| 4 | 担当者名 | テキストボックス | I/O | － | － | － | － | 〇 | 255 | 全角半角 | － | － | － |
| 5 | 電話番号 | テキストボックス | I/O | － | － | － | － | 〇 | 20 | 半角数字・ハイフン | 電話番号形式 | － | － |
| 6 | 代表メールアドレス | テキストボックス | I/O | － | － | － | － | 〇 | 255 | 半角英数記号 | メール形式 | － | － |
| 7 | AI利用制限モード | ラジオボタン | I/O | － | － | － | － | 〇 | － | － | － | － | 無制限 / 上限設定あり |
| 8 | AI利用上限枠 | テキストボックス | I/O | 上限設定あり | － | － | － | － | 10 | 半角数字 | － | － | 月間の最大利用時間(時間) |
| 9 | アラート閾値(%) | テキストボックス | I/O | 上限設定あり | － | － | － | － | 3 | 半角数字 | 1-100 | － | 枠の何%消費で通知するか |
| 10 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-017へ戻る |
| 11 | 更新確認ボタン | ボタン | O | － | エラーなし | － | － | － | － | － | － | － | 押下で確認モーダル表示、保存後ADMX-017へ遷移 |
| 12 | 更新確認モーダル | モーダル | O | 更新ボタン押下時 | － | － | － | － | － | － | － | － | 「企業情報を更新しますか？」 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Update Company Info" |
| 2 | Company Name | Text Box | I/O | - | - | - | - | 〇 | 255 | Full/Half-width | - | - | - |
| 3 | Address | Text Box | I/O | - | - | - | - | 〇 | 255 | Full/Half-width | - | - | - |
| 4 | Contact Person | Text Box | I/O | - | - | - | - | 〇 | 255 | Full/Half-width | - | - | Name of the person in charge |
| 5 | Telephone | Text Box | I/O | - | - | - | - | 〇 | 20 | Numeric/Hyphen | Phone format | - | - |
| 6 | Main Email | Text Box | I/O | - | - | - | - | 〇 | 255 | Half-alphanumeric | Email format | - | - |
| 7 | AI Usage Mode | Radio | I/O | - | - | - | - | 〇 | - | - | - | - | Unlimited / Limit Set |
| 8 | AI Usage Quota | Text Box | I/O | If Limit Set | - | - | - | - | 10 | Numeric | - | - | Max monthly hours |
| 9 | Alert Threshold % | Text Box | I/O | If Limit Set | - | - | - | - | 3 | Numeric | 1-100 | - | Send alert at X% of quota |
| 10 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-017 |
| 11 | Update Button | Button | O | - | No errors | - | - | - | - | - | - | - | Show modal and save |
| 12 | Update Modal | Modal | O | On Update click | - | - | - | - | - | - | - | - | "Update company info?" |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Update Button | Press | Validate inputs and show confirmation modal (ID: 12). |
| 2 | Back Button | Press | Discard edits and return to billing overview (ADMX-017). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Company Name|Required|ADMX-018-ERR-01|Field cannot be empty.|
| 2 |Telephone|Format|ADMX-018-ERR-03|Must be a valid phone number.|
| 3 |Main Email|Format|ADMX-018-ERR-02|Must be a valid email.|
| 4 |AI Usage Quota|Required|ADMX-018-ERR-04|Required if limit mode is enabled.|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/billing/status
      - Method: GET
    ○ **If successful**:
      - Pre-fill all fields with current company data.

画面更新時 / Interaction
  • **Toggle AI Usage Mode (ID: 7)**:
    ○ Dynamically show/hide "AI Usage Quota" (ID: 8) and "Alert Threshold" (ID: 9) based on selection.

アクション発生時 / Action
  • **Update Confirmation is accepted**:
    ○ Execute API request:
      - Endpoint: /admin/billing/status
      - Method: PATCH
      - Body: { "name": "...", "address": "...", "contact": "...", "phone": "...", "email": "...", "ai_usage_limit": ..., "ai_alert_threshold": ... }
    ○ **If successful**:
      - Show success toaster.
      - Transition: Navigate to ADMX-017.
    ○ **If failed**:
      - Display specific server validation errors.
```
