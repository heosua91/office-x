# ADMX-032 - Organization Dictionary Management

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-17 | 1 | New | Organization Dictionary Management |

## Overview

Screen Name: Quản lý Từ điển Tổ chức
URI: /admin/dictionary
Screen Overview: AI議事録の音声認識精度のための組織共通の専門用語・社内用語などの辞書登録・編集・削除が行える画面。CSVインポート/エクスポート機能付き。 (Screen to register/edit/delete organization-wide technical terms and internal terminology to improve AI transcription accuracy.)

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「組織辞書管理」 |
| 2 | 新規登録ボタン | ボタン | I | － | － | － | － | － | － | － | － | － | 辞書に新しい単語を登録するモーダルを表示 |
| 3 | CSVインポート | ボタン | I | － | － | － | － | － | － | － | － | － | CSVファイルから単語を一括登録 |
| 4 | CSVエクスポート | ボタン | I | － | － | － | － | － | － | － | － | － | 登録済みの単語リストをCSV出力 |
| 5 | 検索窓 | テキストボックス | I/O | － | － | － | － | － | Max | 全角半角 | － | － | 登録済みの単語を検索・絞り込み |
| 6 | カテゴリ絞り込み | プルダウン | I/O | － | － | － | － | － | － | － | － | － | 「すべて」「専門用語」「社内用語」「製品名」等で絞り込み |
| 7 | 単語一覧 | テーブル | O | － | － | － | － | － | － | － | － | － | 登録済みの単語リスト（単語、読みがな、カテゴリ、最終更新日）を表示 |
| 8 | 単語編集ボタン | ボタン | I | 一覧の各行 | － | － | － | － | － | － | － | － | 該当単語の編集モーダルを表示 |
| 9 | 削除ボタン | ボタン | I | 一覧の各行 | － | － | － | － | － | － | － | － | 該当単語を辞書から削除（確認モーダルあり） |
| 10 | (M) 単語登録モーダル | モーダル | O | 「新規登録」「編集」押下時 | － | － | － | － | － | － | － | － | 単語の新規登録または修正を行うモーダル |
| 11 | (M) 登録単語 | テキストボックス | I | (M)表示時 | － | － | － | 〇 | Max | 全角半角 | － | － | 新規追加または変更する単語を入力 |
| 12 | (M) 読みがな | テキストボックス | I | (M)表示時 | － | － | － | － | Max | 全角半角 | － | － | 音声認識精度向上のための読みがな（任意） |
| 13 | (M) カテゴリ | プルダウン | I | (M)表示時 | － | － | － | － | － | － | － | － | 単語の分類（専門用語、社内用語など）を選択 |
| 14 | (M) 保存ボタン | ボタン | I | (M)表示時 | 登録単語入力あり | － | － | － | － | － | － | － | モーダルの入力内容を保存して一覧に反映 |
| 15 | (M) キャンセル | ボタン | I | (M)表示時 | － | － | － | － | － | － | － | － | 保存せずにモーダルを閉じる |
| 16 | 戻るボタン | ボタン | I | － | － | － | － | － | － | － | － | － | 管理者メニュー一覧(ADMX-001)に戻る |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Organization Dictionary Management" |
| 2 | New Registration Button | Button | I | - | - | - | - | - | - | - | - | - | Show modal to register new word |
| 3 | CSV Import | Button | I | - | - | - | - | - | - | - | - | - | Register words in bulk from CSV |
| 4 | CSV Export | Button | I | - | - | - | - | - | - | - | - | - | Export registered word list to CSV |
| 5 | Search Box | Text Box | I/O | - | - | - | - | - | Max | Full/Half-width | - | - | Search/filter registered words |
| 6 | Category Filter | Pull-down | I/O | - | - | - | - | - | - | - | - | - | Filter by "All", "Technical Terms", "Internal Terms", etc. |
| 7 | Word List | Table | O | - | - | - | - | - | - | - | - | - | Displays list (Word, Kana, Category, Last Updated) |
| 8 | Edit Button | Button | I | Each row | - | - | - | - | - | - | - | - | Show edit modal for selected word |
| 9 | Delete Button | Button | I | Each row | - | - | - | - | - | - | - | - | Delete word from dictionary (with confirmation) |
| 10 | (M) Registration Modal | Modal | O | On New/Edit click| - | - | - | - | - | - | - | - | Modal for registration/edit |
| 11 | (M) Word | Text Box | I | When (M) shown | - | - | - | 〇 | Max | Full/Half-width | - | - | Input word to add/change |
| 12 | (M) Kana | Text Box | I | When (M) shown | - | - | - | - | Max | Full/Half-width | - | - | Reading for better recognition (optional) |
| 13 | (M) Category | Pull-down | I | When (M) shown | - | - | - | - | - | - | - | - | Select word category |
| 14 | (M) Save Button | Button | I | When (M) shown | Word is input | - | - | - | - | - | - | - | Save and reflect to list |
| 15 | (M) Cancel Button | Button | I | When (M) shown | - | - | - | - | - | - | - | - | Close without saving |
| 16 | Back Button | Button | I | - | - | - | - | - | - | - | - | - | Return to ADMX-001 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | New Registration | Press | Open registration modal (ID: 10). |
| 2 | CSV Import | Press | Trigger file picker for CSV upload. |
| 3 | CSV Export | Press | Download current dictionary as CSV. |
| 4 | Search/Filter | Input/Select | Dynamically refresh list (ID: 7). |
| 5 | Edit Button | Press | Open modal (ID: 10) pre-filled with word data. |
| 6 | Delete Button | Press | Show confirmation and delete entry. |
| 7 | (M) Save Button | Press | Create or update dictionary entry via API. |
| 8 | Back Button | Press | Navigate back to Admin Menu (ADMX-001). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | (M) Word | Required | ADMX-032-ERR-01 | Word cannot be empty. |

## Processing Details

```plain
Initial display
  • Render "Organization Dictionary Management" screen layout.
  • "(M) Registration Modal" (ID: 10) is hidden by default.
  • "Word List" (ID: 7) is showing data fetched on load (or a skeleton during loading).

Interaction
  • When "New Registration Button" (ID: 2) is pressed:
    ○ Open "(M) Registration Modal" (ID: 10) in "New" mode.
    ○ Reset modal fields (Word, Kana, Category) to empty values.
  • When "Edit Button" (ID: 8) in the table is pressed:
    ○ Open "(M) Registration Modal" (ID: 10) in "Edit" mode.
    ○ Populate modal fields with the current row's data.
  • When "(M) Cancel Button" (ID: 15) is pressed:
    ○ Close "(M) Registration Modal" (ID: 10).
  • Searching and Filtering:
    ○ Entering text in "Search Box" (ID: 5) or selecting a value in "Category Filter" (ID: 6) triggers a list refresh.

Action
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/dictionary
      ▪ Method: GET
    ○ If successful:
      ▪ Populate "Word List" (ID: 7) with the entries.
    ○ If failed:
      ▪ Show Error Message ID from Error_Messages.md (e.g., SYS-000-ERR-01).

  • "Search Box" (ID: 5) or "Category Filter" (ID: 6) values change:
    ○ Execute API request:
      ▪ Endpoint: /admin/dictionary
      ▪ Method: GET
      ▪ Query Params: { "search": "search_term", "category": "category_id" }
    ○ If successful:
      ▪ Update "Word List" (ID: 7) results.

  • "CSV Import" (ID: 3) button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/dictionary/import
      ▪ Method: POST (Multipart/form-data)
    ○ If successful:
      ▪ Show Success Message (ADMX-003-SUC-01).
      ▪ Refresh the word list.
    ○ If failed:
      ▪ Show Error Message (ADMX-003-ERR-01).

  • "(M) Save Button" (ID: 14) is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/dictionary
      ▪ Method: POST (New) or PATCH (Edit)
    ○ If successful:
      ▪ Show Success Message (ADMX-032-SUC-01).
      ▪ Close the modal and refresh the "Word List" (ID: 7).
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-05).

  • "Delete Button" (ID: 9) is pressed:
    ○ Confirm deletion with a modal.
    ○ If confirmed, execute API request:
      ▪ Endpoint: /admin/dictionary/{id}
      ▪ Method: DELETE
    ○ If successful:
      ▪ Refresh the "Word List" (ID: 7).

```
