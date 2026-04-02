# UKET-007 - Select vendor

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Select vendor |

## Overview

Screen Name: Select vendor
URI: /reception/vendor
Screen Overview: Select vendor (Yamato, Sagawa, Duskin...), can be pre-configured

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「該当する業者様を選択してください」 |
| 2 | 業者ボタンリスト | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-010で事前に登録された業者名（ヤマト運輸、佐川急便など）のボタン一覧をグリッド等で表示。<br>タップ時、選択された業者の受付拒否フラグを判定する。<br>OFFの場合：即時通知（F-102処理）を実行し、「UKET-008」へ遷移。<br>ONの場合：通知は行わず、ID5の拒否メッセージモーダルを表示する。 |
| 3 | その他業者 | ボタン | O | 設定で有効な場合 | － | － | － | － | － | － | － | － | リストにない業者向け。<br>タップすると業者名入力画面（UKET-006相当の簡易UI）を表示するか、そのまま汎用受付として「UKET-008」へ遷移する。 |
| 4 | 戻る | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-003（TOP画面）」へ遷移する。 |
| 5 | 拒否メッセージモーダル | モーダル | O | 受付拒否フラグがONの業者選択時 | － | － | － | － | － | － | － | － | ADMX-010で設定した拒否メッセージと確認ボタン（押下でモーダルを閉じる）を表示する。 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen title | Label | O | - | - | - | - | - | - | - | - | Fixed "Please select applicable vendor" |
| 2 | Vendor buttons list | Button | O | - | - | - | - | - | - | - | - | Shows vendor grid configured in ADMX-010. Tap toggles rejection flag check -> API -> UKET-008 or Modal. |
| 3 | Other vendors | Button | O | If enabled | - | - | - | - | - | - | - | Tap leads to generic vendor UI or UKET-008 directly. |
| 4 | Return | Button | O | - | - | - | - | - | - | - | - | Go to UKET-003. |
| 5 | Rejection modal | Modal | O | 'Rejected' vendor clicked | - | - | - | - | - | - | - | Display admin-configured rejection text |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Vendor button | Press | Trigger validation logic based on vendor reception flag. Transition to UKET-008. |
| 2 | Other vendors | Press | Trigger API for generic vendor or route to simplified input screen. |
| 3 | Return | Press | Transition to UKET-003. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | No direct field input validation required. |

## Processing Details

```plain
Initial display
  • Initialize a dynamic grid of Vendor buttons based on configuration fetched.
  • Render "Other Vendors" if available in company settings.

Interaction
  • Show appropriate tap effects on Vendor item buttons.

Action
  • [Vendor button] is pressed:
    ○ Look up frontend configuration for the selected Vendor.
    ○ If vendor's `reception_rejection_flag` is ON: Display the Rejection message modal (configured text).
    ○ If vendor's `reception_rejection_flag` is OFF: 
      - Call POST /reception/check-in/vendor API.
      - If successful: Transition to UKET-008.
```
