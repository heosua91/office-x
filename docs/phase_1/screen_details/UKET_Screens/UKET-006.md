# UKET-006 - Enter walk-in visitor info

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Enter walk-in visitor info |

## Overview

Screen Name: Enter walk-in visitor info
URI: /reception/no-appointment
Screen Overview: Enter visitor information: Company name / Display name / Select department / Purpose / Other items

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「来訪者情報を入力してください」 |
| 2 | 会社名 | テキストボックス | I | － | － | － | － | ✕ | Max 100 | 全角/半角 | － | － | お客様の会社名（任意項目、企業設定による） |
| 3 | 氏名 | テキストボックス | I | － | － | － | － | 〇 | Max 100 | 全角/半角 | － | － | お客様の氏名 |
| 4 | 訪問先部署 | プルダウン | I | 管理画面で部署名マスタが登録されている場合 | － | － | － | 〇 | － | － | － | － | ADMX-010で設定した部署名一覧から選択。 |
| 5 | ご用件 | プルダウン | I | 管理画面で用件マスタが登録されている場合 | － | － | － | 〇 | － | － | － | － | ADMX-010で設定した用件一覧から選択（商談、面接、その他等）。 |
| 6 | その他（詳細） | テキストエリア | I | － | － | － | － | ✕ | Max 500 | 全角/半角 | － | － | 補足情報などを入力 |
| 7 | ソフトウェアキーボード | その他 | O | テキストボックスフォーカス時 | － | － | － | － | － | － | － | － | タブレット標準UIまたはカスタムのソフトウェアQWERTY/フリックキーボードを表示 |
| 8 | 呼出 | ボタン | O | － | 必須項目（氏名、訪問先部署、ご用件等）が入力済であること | － | － | － | － | － | － | － | 押下時、選択された用件の受付拒否フラグを判定する。<br>OFFの場合：即時通知（F-101処理）を実行し、「UKET-008」へ遷移。<br>ONの場合：通知は行わず、ID10の拒否メッセージモーダルを表示する。 |
| 9 | 戻る | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-003（TOP画面）」へ遷移する。 |
| 10 | 拒否メッセージモーダル | モーダル | O | 受付拒否フラグがONの用件選択時に「呼出」押下 | － | － | － | － | － | － | － | － | ADMX-010で設定した拒否メッセージと確認ボタン（押下でモーダルを閉じる）を表示する。 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen title | Label | O | - | - | - | - | - | - | - | - | Fixed "Please enter visitor info" |
| 2 | Company name | Textbox | I | - | - | - | - | No | Max 100 | Full/Half width | - | - | Optional visitor company name |
| 3 | Name | Textbox | I | - | - | - | - | Yes | Max 100 | Full/Half width | - | - | Visitor full name |
| 4 | Destination Dept | Dropdown | I | If dept master exists | - | - | - | Yes | - | - | - | - | Select from configured departments |
| 5 | Purpose | Dropdown | I | If purpose master exists | - | - | - | Yes | - | - | - | - | Select from configured purposes |
| 6 | Others (details) | Textbox (area) | I | - | - | - | - | No | Max 500 | Full/Half width | - | - | Additional info |
| 7 | Software keyboard | Other | O | On textbox focus | - | - | - | - | - | - | - | - | Standard tablet layout |
| 8 | Call | Button | O | - | All required items filled | - | - | - | - | - | - | Check rejection flag of purpose. If OFF: Call `check-in/no-appointment` -> UKET-008. If ON: Show rejection modal. |
| 9 | Return | Button | O | - | - | - | - | - | - | - | - | Target: UKET-003 |
| 10 | Rejection modal | Modal | O | 'Call' clicked on rejected purpose | - | - | - | - | - | - | - | Display admin-configured rejection text |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Call | Press | Trigger purpose validation logic and transition to UKET-008 or show Rejection Modal. |
| 2 | Return | Press | Transition to UKET-003. |
| 3 | Modal close | Press | Close the Rejection Modal and remain on screen. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Name | Required | MSG-ERR-001 | Frontend check |
| 2 | Destination Dept | Required | MSG-ERR-001 | Frontend check |
| 3 | Purpose | Required | MSG-ERR-001 | Frontend check |

## Processing Details

```plain
Initial display
  • Initialize input fields.
  • Load the list of valid Departments and Purposes for the Dropdowns based on local cache or previous API load.
  • Disable "Call" button initially.

Interaction
  • Verify required fields are not empty before enabling "Call" button.
  • Display software keyboard upon clicking inputs.

Action
  • [Call] button is pressed:
    ○ Look up frontend configuration for the selected 'Purpose'.
    ○ If purpose's `reception_rejection_flag` is ON: Display the Rejection message modal (configured text).
    ○ If purpose's `reception_rejection_flag` is OFF: 
      - Call POST /reception/check-in/no-appointment API.
      - If successful: Transition to UKET-008.
```
