# GRES-002 - Nhập thông tin Guest

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-02 | 1 | New | Input Guest Information Screen |

## Overview

Screen Name: Input Guest Information
URI: /guest/reserve/step2
Screen Overview: Enter company name, full name, email, and mobile number. If meeting has companions (participants ≥ 2), enter name, email, and mobile for each companion.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 企業名 | テキストボックス | I/O | − | − | − | − | 〇 | 100文字 | − | − | − | − |
| 2 | 氏名 | テキストボックス | I/O | − | − | − | − | 〇 | 50文字 | − | − | − | − |
| 3 | メールアドレス | テキストボックス | I/O | − | − | − | − | 〇 | 255文字 | 英数字記号 | 有効なメール形式 | − | − |
| 4 | 携帯電話番号 | テキストボックス | I/O | − | − | − | − | 〇 | 15文字 | 数字・ハイフン | 電話番号形式 | − | − |
| 5 | 同行者氏名 | テキストボックス | I/O | 参加人数 ≥ 2 時 | − | − | − | 〇 | 50文字 | − | − | − | 同行者1人ずつ表示 |
| 6 | 同行者メールアドレス | テキストボックス | I/O | 参加人数 ≥ 2 時 | − | − | − | 〇 | 255文字 | 英数字記号 | 有効なメール形式 | − | − |
| 7 | 同行者携帯電話番号 | テキストボックス | I/O | 参加人数 ≥ 2 時 | − | − | − | 〇 | 15文字 | 数字・ハイフン | 電話番号形式 | − | − |
| 8 | 戻る | ボタン | O | − | − | − | − | − | − | − | − | − | GRES-001へ戻る |
| 9 | 次へ（確認へ） | ボタン | O | − | 必須入力済 | − | − | − | − | − | − | − | GRES-003へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Company Name | Textbox | I/O | - | - | - | - | Yes | 100 chars | - | - | - | - |
| 2 | Full Name | Textbox | I/O | - | - | - | - | Yes | 50 chars | - | - | - | - |
| 3 | Email Address | Textbox | I/O | - | - | - | - | Yes | 255 chars | Alphanumeric + symbols | Valid email format | - | - |
| 4 | Mobile Number | Textbox | I/O | - | - | - | - | Yes | 15 chars | Numbers, hyphens | Valid phone format | - | - |
| 5 | Companion Full Name | Textbox | I/O | If participants ≥ 2 | - | - | - | Yes | 50 chars | - | - | - | One row per companion |
| 6 | Companion Email | Textbox | I/O | If participants ≥ 2 | - | - | - | Yes | 255 chars | Alphanumeric + symbols | Valid email format | - | - |
| 7 | Companion Mobile | Textbox | I/O | If participants ≥ 2 | - | - | - | Yes | 15 chars | Numbers, hyphens | Valid phone format | - | - |
| 8 | Back | Button | O | - | - | - | - | - | - | - | - | - | Return to GRES-001 |
| 9 | Next (To Confirm) | Button | O | - | All required fields filled | - | - | - | - | - | - | - | Go to GRES-003 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Company Name, Full Name, Email, Mobile | Input | Provide primary guest information |
| 2 | Companion fields | Display | Auto-rendered based on `participants_count` from GRES-001 state (one row per additional companion) |
| 3 | Back | Press | Return to GRES-001 retaining current state |
| 4 | Next (To Confirm) | Press | Validate all fields locally and navigate to GRES-003 |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Company Name | Required, Max length | ERR-CMN-001, ERR-CMN-002 | Max 100 chars |
| 2 | Full Name | Required, Max length | ERR-CMN-001, ERR-CMN-002 | Max 50 chars |
| 3 | Email Address | Required, Format | ERR-CMN-001, ERR-CMN-003 | Must match valid email regex |
| 4 | Mobile Number | Required, Format | ERR-CMN-001, ERR-CMN-004 | Must match phone number format |
| 5 | Companion Name/Email/Mobile | Required | ERR-CMN-001 | All 3 fields required per companion row if visible |

## Processing Details

```plain
Initial display
  • Read `participants_count` from state (GRES-001).
  • If participants_count >= 2: render (participants_count - 1) companion rows below primary guest fields.
  • If coming back from GRES-003: pre-fill all fields from local state.

Interaction
  • All validations are client-side only (no API calls on this screen).
  • Enable "Next" button only when all visible required fields pass validation.

Action
  • "Back" button pressed:
    ○ Persist current form data to state and navigate back to GRES-001.
  • "Next" button pressed:
    ○ Run full local validation on primary and companion fields.
    ○ If validation passes: save all guest data to state/context and navigate to GRES-003.
    ○ If validation fails: display inline error messages per field.
```
