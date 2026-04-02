# GRES-005 - Upload/Chỉnh sửa tài liệu Guest

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-02 | 1 | New | Guest Document Management Screen |

## Overview

Screen Name: Guest Document Management
URI: /guest/documents/:token
Screen Overview: Accessed via the dedicated URL sent in the booking confirmation email. Guest can upload, replace, or delete documents related to a specific meeting without requiring login or authentication.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ミーティング概要ラベル | ラベル | O | − | − | − | YYYY/MM/DD HH:mm | − | − | − | − | − | 予約済みミーティングの日時・形式を表示 |
| 2 | アップロード済み資料一覧 | ラベル | O | 資料が存在する場合 | − | − | − | − | − | − | − | − | ファイル名・アップロード日時を一覧表示 |
| 3 | 追加資料アップロード | ファイル選択 | I/O | − | ミーティング開始前 | − | − | − | 最大10MB/ファイル | PDF・画像 | − | − | − |
| 4 | 資料削除 | ボタン | O | 資料が存在する場合 | ミーティング開始前 | − | − | − | − | − | − | − | 確認モーダル後に削除 |
| 5 | エラーメッセージ | ラベル | O | 無効トークン時・期限切れ時 | − | − | − | − | − | − | − | − | トークンが無効または期限切れの場合 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Meeting summary | Label | O | - | - | - | YYYY/MM/DD HH:mm | - | - | - | - | - | Display date/time and format of the booked meeting |
| 2 | Uploaded documents list | Label | O | When documents exist | - | - | - | - | - | - | - | - | File name and upload date per document |
| 3 | Upload document | File Input | I/O | - | Before meeting start time | - | - | - | Max 10MB/file | PDF, Images | - | - | - |
| 4 | Delete document | Button | O | When documents exist | Before meeting start time | - | - | - | - | - | - | - | Confirmed by modal before deleting |
| 5 | Error message | Label | O | On invalid/expired token | - | - | - | - | - | - | - | - | Display error when token is invalid or meeting has passed |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Upload document | Select | Select file from device and upload via `POST /guest/documents/:token` |
| 2 | Delete document | Press | Show confirmation modal, then call `DELETE /guest/documents/:token/:doc_id` |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Upload document | Max size | ERR-FILE-001 | Max 10MB per file |
| 2 | Upload document | File format | ERR-FILE-002 | Only PDF and image formats accepted |
| 3 | (Screen) | Token validity | ERR-TKN-001 | Invalid or expired token — show error page |
| 4 | (Screen) | Meeting timing | ERR-APT-002 | Document operations disabled after meeting start time |

## Processing Details

```plain
Initial display
  • Extract :token from the URL path.
  • Call `GET /guest/documents/:token` to validate the token and fetch:
    ○ Meeting metadata (title, date/time, format)
    ○ List of existing documents (name, size, upload date)
  • Branch:
    ○ Token invalid or expired → Display error message (ERR-TKN-001). No further interaction.
    ○ Meeting start time has already passed → Display meeting info but disable all upload/delete buttons.
    ○ Valid token & meeting upcoming → Render full UI with upload and delete actions.

Interaction
  • List displays each uploaded document with file name, upload datetime, and a "Delete" button.
  • File selector is visible and active when: token is valid AND current time < meeting start time.
  • File validation (size ≤ 10MB, type = PDF or image) is done client-side before initiating upload.

Action
  • Upload document:
    ○ Validate file client-side.
    ○ Call `POST /guest/documents/:token` with the file as multipart/form-data.
    ○ On success: append new file entry to the document list.
    ○ On failure: show error toast (e.g., ERR-FILE-001 for file too large).
  • Delete document:
    ○ Show a confirmation modal: "Are you sure you want to delete [filename]?"
    ○ On confirm: call `DELETE /guest/documents/:token/:doc_id`.
    ○ On success: remove the document entry from the list.
    ○ On cancel: dismiss modal without action.
```
