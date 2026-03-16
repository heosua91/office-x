# ADMX-031 - Đăng ký / Update AI Template

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Đăng ký / Update AI Template |

## Overview

Screen Name: Đăng ký / Update AI Template
URI: /admin/ai-templates/:id
Screen Overview: Màn hình cho phép đăng ký mới hoặc chỉnh sửa các mẫu (Template) prompt AI. Quản trị viên có thể định nghĩa nội dung chỉ thị cho AI, mô tả và thiết lập thuộc tính mặc định cho template.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 「AIテンプレート登録」または「編集」 |
| 2 | テンプレート名 | テキストボックス | I/O | － | － | － | － | 〇 | 255 | 全角半角 | － | 重複チェック | － |
| 3 | 種別 | プルダウン | I/O | － | － | － | － | 〇 | － | － | － | － | 「社内会議用」「顧客会議用」「メール用」など |
| 4 | 説明文(概要) | テキストエリア | I/O | － | － | － | － | － | 1000 | 全角半角 | － | － | 利用者向けの説明 |
| 5 | AIプロンプト指示 | テキストエリア | I/O | － | － | － | － | 〇 | 5000 | 全角半角 | － | － | AIへの指示、出力フォーマットの定義 |
| 6 | デフォルト適用設定 | チェックボックス | I/O | － | － | － | － | － | － | － | － | － | 指定した種別においてデフォルトで選択状態にするか |
| 7 | テスト実行ボタン | ボタン | O | － | プロンプト有 | － | － | － | － | － | － | － | ダミーデータでプロンプトの出力をテスト |
| 8 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-030へ戻る |
| 9 | 保存ボタン | ボタン | O | － | エラーなし | － | － | － | － | － | － | － | DBに保存しADMX-030へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | "Register" or "Edit" AI Template |
| 2 | Template Name | Text Box | I/O | - | - | - | - | 〇 | 255 | Full/Half-width | - | Duplicate check | - |
| 3 | Category | Dropdown | I/O | - | - | - | - | 〇 | - | - | - | - | e.g. "Meeting", "Sales", "Email" |
| 4 | Description | Textarea | I/O | - | - | - | - | - | 1000 | Full/Half-width | - | - | For internal identification |
| 5 | AI Prompt Instr. | Textarea | I/O | - | - | - | - | 〇 | 5000 | Full/Half-width | - | - | Core instruction for LLM |
| 6 | Default Toggle | Checkbox | I/O | - | - | - | - | - | - | - | - | - | Make this the default for Category |
| 7 | Test Button | Button | O | - | If ID:5 filled | - | - | - | - | - | - | - | Run test against sample data |
| 8 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-030 |
| 9 | Save Button | Button | O | - | No errors | - | - | - | - | - | - | - | Save and return to ADMX-030 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Test Button | Press | Execute a mock AI call to preview the output based on current prompt. |
| 2 | Save Button | Press | Submit data to server (POST/PATCH) and return to list screen. |
| 3 | Back Button | Press | Discard entries and return to ADMX-030. |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Template Name|Required|ADMX-031-ERR-01|Field cannot be empty.|
| 2 |Category|Required|ADMX-031-ERR-03|Must select a category.|
| 3 |AI Prompt|Required|ADMX-031-ERR-02|Instruction field cannot be empty.|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ If editing (ID exists):
      - Execute API request:
        - Endpoint: /admin/ai-templates/:id
        - Method: GET
      - Populate fields with template data.
    ○ Else:
      - Leave fields empty.

画面更新時 / Interaction
  • Interaction: Validation icons appear next to required fields as user types.

アクション発生時 / Action
  • **Save Button is pressed**:
    ○ Logic: If "Default Toggle" (ID: 6) is ON, the server will automatically sunset any other default for the same "Category" (ID: 3).
    ○ Execute API request:
      - Endpoint: /admin/ai-templates[/ :id]
      - Method: POST or PATCH
      - Body: { "name": "...", "category": "...", "description": "...", "prompt": "...", "is_default": ... }
    ○ **If successful**:
      - Transition: Navigate to ADMX-030.

  • **Test Button is pressed**:
    ○ Execute mock AI API request.
    ○ Display output in a preview modal for the user to review.
```
