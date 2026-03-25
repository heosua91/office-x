# ADMX-033 - Dictionary Registration Bulk Approval

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-17 | 1 | New | Dictionary Registration Bulk Approval |

## Overview

Screen Name: Phê duyệt đăng ký từ điển (Bulk)
URI: /admin/dictionary/approval
Screen Overview: 議事録の「修正頻度の高い単語リスト」をレコメンド表示し、管理者が一覧からチェックボックスで選択して一括で組織辞書に追加する画面。 (A screen that displays recommended words frequently corrected in minutes, allowing administrators to select them via checkboxes and add them to the organization dictionary in bulk.)

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「辞書登録一括承認」 |
| 2 | サマリー情報 | ラベル | O | － | － | － | － | － | － | － | － | － | 「承認待ちの単語が〇〇件あります」等の状態表示 |
| 3 | レコメンド一覧 | テーブル | O | － | － | － | － | － | － | － | － | － | 頻出修正ワードのリスト（修正前単語、修正後単語、修正回数、直近修正日）を表示 |
| 4 | 全選択チェック | チェックボックス | I | 一覧ヘッダ | 一覧にデータあり | － | － | － | － | － | － | － | 一覧のすべての単語を選択・解除 |
| 5 | 行チェック | チェックボックス | I | 一覧の各行 | － | － | － | － | － | － | － | － | 辞書に登録する単語を個別に選択 |
| 6 | 修正後単語編集 | テキストボックス | I/O | 一覧の各行 | チェックON時 | － | － | － | Max | 全角半角 | － | － | 登録前に、該当単語の表記を微調整することが可能 |
| 7 | 音声再生リンク | リンク | I | 一覧の各行 | 該当音声あり時 | － | － | － | － | － | － | － | 修正前単語が発話された場面の音声を再生して確認 |
| 8 | 一括承認ボタン | ボタン | I | － | 1件以上選択あり | － | － | － | － | － | － | － | 選択した単語を「組織辞書(ADMX-032)」へ正式に一括登録する（確認モーダルあり） |
| 9 | 拒否(除外)ボタン | ボタン | I | － | 1件以上選択あり | － | － | － | － | － | － | － | レコメンド一覧から除外し、以降は提案させない（「一時的な修正」として処理） |
| 10 | 戻るボタン | ボタン | I | － | － | － | － | － | － | － | － | － | 管理者メニュー一覧(ADMX-001)に戻る |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Dictionary Bulk Approval" |
| 2 | Summary Info | Label | O | - | - | - | - | - | - | - | - | - | Status display like "XX words waiting for approval" |
| 3 | Recommendation List | Table | O | - | - | - | - | - | - | - | - | - | List of frequently corrected words (Before, After, Count, Date) |
| 4 | Select All Check | Checkbox | I | Header | Data exists | - | - | - | - | - | - | - | Select/deselect all words in list |
| 5 | Row Check | Checkbox | I | Each row | - | - | - | - | - | - | - | - | Select individual word for registration |
| 6 | Edit Corrected Word | Text Box | I/O | Each row | If Checked | - | - | - | Max | Full/Half-width | - | - | Fine-tune word spelling before registration |
| 7 | Audio Play Link | Link | I | Each row | If audio exists| - | - | - | - | - | - | - | Play audio context where the word was used |
| 8 | Bulk Approve Button| Button | I | - | 1+ selected | - | - | - | - | - | - | - | Officially register to ADMX-032 |
| 9 | Reject/Exclude Button| Button | I | - | 1+ selected | - | - | - | - | - | - | - | Exclude from list and stop suggesting |
| 10 | Back Button | Button | I | - | - | - | - | - | - | - | - | - | Return to ADMX-001 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Bulk Approve | Press | Register selected words to organization dictionary via API. |
| 2 | Reject/Exclude | Press | Remove selected words from the recommendation list. |
| 3 | Edit Word | Input | Update the "After Correction" text locally before approval. |
| 4 | Play Audio | Press | Trigger audio player at specific timestamp. |
| 5 | Back Button | Press | Return to ADMX-001. |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Selection | At least one | ADMX-033-ERR-01 | Select at least one word to approve or reject. |

## Processing Details

```plain
Initial display
  • Render "Dictionary Bulk Approval" screen layout.
  • "Bulk Approve Button" (ID: 8) and "Reject/Exclude Button" (ID: 9) are disabled by default.
  • "Recommendation List" (ID: 3) is showing data fetched on load (or a skeleton during loading).

Interaction
  • When "Select All Check" (ID: 4) in the header is toggled:
    ○ All "Row Checks" (ID: 5) are updated to match the header state.
    ○ Update the activity state of buttons (ID: 8, 9) based on the new selection count.
  • When a "Row Check" (ID: 5) is toggled:
    ○ Toggle the enabled state of "Edit Corrected Word" (ID: 6) for that row.
    ○ Update the state of "Select All Check" (ID: 4).
    ○ Update the activity state of buttons (ID: 8, 9).
  • When "Edit Corrected Word" (ID: 6) is changed:
    ○ Update the word's corrected value locally.

Action
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/dictionary/recommendations
      ▪ Method: GET
    ○ If successful:
      ▪ Populate "Recommendation List" (ID: 3) and "Summary Info" (ID: 2).
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-01).

  • "Bulk Approve Button" (ID: 8) is pressed:
    ○ Confirm with a modal.
    ○ If confirmed, execute API request:
      ▪ Endpoint: /admin/dictionary/bulk-approve
      ▪ Method: POST
      ▪ Body: { "items": [{ "id": "...", "corrected_word": "..." }] }
    ○ If successful:
      ▪ Show Success Message (ADMX-033-SUC-01).
      ▪ Refresh the list (remove approved items).
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-05).

  • "Reject/Exclude Button" (ID: 9) is pressed:
    ○ Confirm with a modal.
    ○ If confirmed, execute API request:
      ▪ Endpoint: /admin/dictionary/recommendations/exclude
      ▪ Method: POST
      ▪ Body: { "ids": ["..."] }
    ○ If successful:
      ▪ Show Success Message (ADMX-033-SUC-02).
      ▪ Refresh the list (remove excluded items).
    ○ If failed:
      ▪ Show Error Message (SYS-000-ERR-05).

  • "Audio Play Link" (ID: 7) is pressed:
    ○ Trigger audio playback locally for the corresponding snippet.

```
