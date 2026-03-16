# ADMX-023 - Quản lý Lịch sử Tiếp khách

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Quản lý Lịch sử Tiếp khách |

## Overview

Screen Name: Quản lý Lịch sử Tiếp khách
URI: /admin/visit-history
Screen Overview: Màn hình quản lý cho phép tìm kiếm, lọc và xem danh sách lịch sử khách đến làm việc (Check-in log). Hỗ trợ xuất dữ liệu ra tệp CSV để phục vụ báo cáo.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「来訪履歴管理」 |
| 2 | 検索期間指定(開始) | デートピッカー | I | － | － | － | YYYY/MM/DD | － | － | － | － | 終了以前 | 日・月・年単位での絞り込み開始日 |
| 3 | 検索期間指定(終了) | デートピッカー | I | － | － | － | YYYY/MM/DD | － | － | － | － | 開始以後 | 絞り込み終了日 |
| 4 | 検索ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 条件に従い履歴リストを更新 |
| 5 | 履歴一覧テーブル | テーブル | O | － | － | － | － | － | － | － | － | － | 検索結果の一覧表示 |
| 6 | 来訪日時 | ラベル | O | － | － | － | YYYY/MM/DD HH:mm | － | － | － | － | － | テーブル要素 |
| 7 | ゲスト名(会社名) | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 8 | 対応ステータス | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 9 | 詳細表示ボタン | ボタン | O | 各行 | － | － | － | － | － | － | － | － | 押下でモーダルにて詳細表示 |
| 10 | CSV出力ボタン | ボタン | O | 検索結果あり | － | － | － | － | － | － | － | － | 表示中データのCSV出力 |
| 11 | 履歴詳細モーダル | モーダル | O | 詳細ボタン押下時 | － | － | － | － | － | － | － | － | 選択された履歴の詳細データ情報をポップアップ表示 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Visit History Management" |
| 2 | Search Start | Datepicker | I | - | - | - | YYYY-MM-DD | - | - | - | - | <= ID:3 | Search range start date |
| 3 | Search End | Datepicker | I | - | - | - | YYYY-MM-DD | - | - | - | - | >= ID:2 | Search range end date |
| 4 | Search Button | Button | O | - | - | - | - | - | - | - | - | - | Update table based on filters |
| 5 | History Table | Table | O | - | - | - | - | - | - | - | - | - | Search results list |
| 6 | Visit Time | Label | O | - | - | - | YYYY-MM-DD HH:mm | - | - | - | - | - | Table element |
| 7 | Guest Name (Co) | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 8 | Status | Label | O | - | - | - | - | - | - | - | - | - | e.g. "Completed", "Canceled" |
| 9 | Details Button | Button | O | Per row | - | - | - | - | - | - | - | - | Open popup for details |
| 10 | CSV Export | Button | O | If results | - | - | - | - | - | - | - | - | Download current view as CSV |
| 11 | Detail Modal | Modal | O | On ID:9 click | - | - | - | - | - | - | - | - | Displays full visit details |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Search Button | Press | Execute search API with date/filter and refresh History Table. |
| 2 | CSV Export | Press | Trigger API to generate and download CSV of filtered results. |
| 3 | Details Button | Press | Show modal (ID: 11) with granular visit data (purpose, host, etc.). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Dates|Range|ADMX-023-ERR-01|End date cannot be before start date.|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Default date range to "Past 30 days".
    ○ Execute API request:
      - Endpoint: /admin/visit-history
      - Method: GET
      - Params: { "start": ..., "end": ... }
    ○ **If successful**:
      - Populate "History Table" (ID: 5).

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • **Search Button is pressed**:
    ○ Re-execute GET API with current filter inputs.

  • **CSV Export is pressed**:
    ○ Execute API request:
      - Endpoint: /admin/visit-history/export
      - Method: GET
      - Params: { "start": ..., "end": ..., "format": "csv" }
    ○ Browser triggers download of the resulting file.

  • **Details Button is pressed**:
    ○ Populate "Detail Modal" (ID: 11) with data for the specific visit ID.
```
