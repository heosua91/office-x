# ADMX-030 - Danh sách AI Template

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Danh sách AI Template |

## Overview

Screen Name: Danh sách AI Template
URI: /admin/ai-templates
Screen Overview: Màn hình hiển thị và quản lý danh sách các mẫu (Template) prompt dùng cho AI (ví dụ: tóm tắt biên bản cuộc họp, soạn email cảm ơn sau họp...). Cho phép thiết lập template mặc định cho từng loại hình công việc.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「AIテンプレート一覧」 |
| 2 | 新規登録ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-031へ遷移 |
| 3 | テンプレート一覧 | テーブル | O | － | － | － | － | － | － | － | － | － | － |
| 4 | 種別 | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素（社内/商談/メール等） |
| 5 | テンプレート名 | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 6 | 説明 | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 7 | デフォルトフラグ | ラベル | O | － | － | － | － | － | － | － | － | － | 会議種別ごとのデフォルト指定有無 |
| 8 | 詳細・編集ボタン | ボタン | O | 各行 | － | － | － | － | － | － | － | － | 押下でADMX-031へ遷移 |
| 9 | 削除ボタン | ボタン | O | 各行 | デフォルト以外 | － | － | － | － | － | － | － | 確認モーダル表示後、テンプレート削除 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "AI Template List" |
| 2 | New Template | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-031 |
| 3 | Template Table | Table | O | - | - | - | - | - | - | - | - | - | List of saved AI prompts |
| 4 | Category | Label | O | - | - | - | - | - | - | - | - | - | e.g. "Internal", "Sales", "Email" |
| 5 | Template Name | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 6 | Description | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 7 | Default Flag | Label | O | - | - | - | - | - | - | - | - | - | Indicates if it's the default for a category |
| 8 | Edit Button | Button | O | Per row | - | - | - | - | - | - | - | - | Transition to ADMX-031 |
| 9 | Delete Button | Button | O | Per row | If not default | - | - | - | - | - | - | - | Remove template (with confirmation) |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | New Template | Press | Navigate to the template creation screen (ADMX-031). |
| 2 | Edit Button | Press | Navigate to the template edit screen (ADMX-031). |
| 3 | Delete Button | Press | Show confirmation and delete the template (prevent if set as default). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/ai-templates
      ▪ Method: GET
    ○ If successful:
      ▪ Populate "Template Table" (ID: 3) with custom and system templates.

Interaction
  • None.

Action
  • Delete Button is pressed:
    ○ Prompt for confirmation.
    ○ Execute API request:
      ▪ Endpoint: /admin/ai-templates/:id
      ▪ Method: DELETE
    ○ If successful:
      ▪ Show Success Message (ADMX-030-SUC-01).
      ▪ Remove the item from the list.
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-01).
```
