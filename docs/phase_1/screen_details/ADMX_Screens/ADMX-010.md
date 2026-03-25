# ADMX-010 - Danh sách Master Data

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Danh sách Master Data |

## Overview

Screen Name: Danh sách Master Data
URI: /admin/master/:type
Screen Overview: Màn hình quản lý các danh mục dữ liệu dùng chung (Master Data) như: Tên đối tác (Vendor), Tên Phòng ban (Department), Mục đích (Purpose), Tầng (Floor), Thiết bị (Equipment). Cho phép thêm, sửa, xóa và sắp xếp thứ tự hiển thị trực tiếp trên giao diện.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「マスタデータ管理」 |
| 2 | マスタ種類切替タブ | タブ | I/O | － | － | － | － | － | － | － | － | － | 「業者名」「部署名」「用件」「フロア」「会議室備品」 |
| 3 | データ追加行 | テキストボックス | I | 各タブ | － | － | － | 〇 | 255 | 全角半角 | － | 重複チェック | 新規データの名称を入力 |
| 4 | 追加ボタン | ボタン | O | 追加行 | 入力あり | － | － | － | － | － | － | － | リストに即時追加保存 |
| 5 | マスタデータテーブル | テーブル | I/O | 各タブ | － | － | － | － | － | － | － | － | 選択中の種類に属するデータ一覧 |
| 6 | 名称 | テキストボックス | I/O | 各行 | － | － | － | 〇 | 255 | 全角半角 | － | 重複チェック | クリックで直接インライン編集可能 |
| 7 | 並び順変更 | その他 | O | 各行 | － | － | － | － | － | － | － | － | 行のドラッグ＆ドロップで表示順序を変更 |
| 8 | 削除ボタン | ボタン | O | 各行 | － | － | － | － | － | － | － | － | 対象行のデータを削除（使用中でない場合） |
| 9 | エラーメッセージ | ラベル | O | 削除エラー時 | － | － | － | － | － | － | － | － | 「使用中のため削除できません」等表示 |
| 10 | 受付拒否フラグ | トグルボタン | I/O | 「業者名」「用件」タブ選択時の追加行および各行 | － | － | － | － | － | － | － | － | ONの場合、対象業者/用件での来訪を拒否する |
| 11 | 拒否メッセージ | テキストボックス | I/O | 「業者名」「用件」タブ選択時の追加行および各行 | 受付拒否フラグがON | － | － | 〇（フラグON時） | 255 | 全角半角 | － | － | 拒否時にタブレットに表示するカスタムメッセージ |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Master Data Management" |
| 2 | Master Type Tabs | Tabs | I/O | - | - | - | - | - | - | - | - | - | "Vendor", "Department", "Purpose", "Floor", "Equipment" |
| 3 | Add Data Row | Text Box | I | Per tab | - | - | - | 〇 | 255 | Full/Half-width | - | Duplicate check | Input name for new data |
| 4 | Add Button | Button | O | Add row | Input present | - | - | - | - | - | - | - | Immediate save to list |
| 5 | Master Data Table | Table | I/O | Per tab | - | - | - | - | - | - | - | - | List of data for selected type |
| 6 | Name | Text Box | I/O | Per row | - | - | - | 〇 | 255 | Full/Half-width | - | Duplicate check | Inline editing on click |
| 7 | Sort Order | Other | O | Per row | - | - | - | - | - | - | - | - | Drag & drop to reorder |
| 8 | Delete Button | Button | O | Per row | - | - | - | - | - | - | - | - | Deletes row (if not in use) |
| 9 | Error Message | Label | O | On delete err | - | - | - | - | - | - | - | - | e.g. "Cannot delete while in use" |
| 10 | Rejection Flag | Toggle | I/O | "Vendor", "Purpose" tabs only | - | - | - | - | - | - | - | - | If ON, reject visits for this category |
| 11 | Rejection MSG | Text Box | I/O | "Vendor", "Purpose" tabs only | If ID:10 is ON | - | - | 〇 | 255 | Full/Half-width | - | - | Custom rejection message for Tablet |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Master Type Tabs | Click | Switch the current context and fetch data for the selected type. |
| 2 | Add Button | Press | Execute creation API for the new master record. |
| 3 | Name (Inline) | Blur/Enter | Execute update API to save the modified name. |
| 4 | Sort Order | Drag | Execute sort-order update API after dropping a row. |
| 5 | Delete Button | Press | Execute deletion API (with confirmation). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Name|Required|ADMX-010-ERR-01|Field cannot be empty.|
| 2 |Rejection MSG|Required|ADMX-010-ERR-02|Must provide a message if rejection flag is active.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Default to "Vendor" tab.
    ○ Execute API request:
      ▪ Endpoint: /admin/master/VENDOR
      ▪ Method: GET
    ○ If successful:
      ▪ Populate table with vendor records.

Interaction
  • Switch Tab (ID: 2):
    ○ Change local state and execute GET for the corresponding `:type` (DEPARTMENT, PURPOSE, FLOOR, EQUIPMENT).
    ○ Adjust visibility of Rejection Flag (ID: 10) and MSG (ID: 11).

Action
  • Add Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/master/:type
      ▪ Method: POST
      ▪ Body: { "name": "...", "reject_flag": ..., "reject_message": "..." }
    ○ If successful:
      ▪ Show Success Message (ADMX-010-SUC-01).
      ▪ Append row to table and clear input fields.

  • In-place Edit (ID: 6):
    ○ Upon loss of focus (Blur) or Enter key:
    ○ Execute API request:
      ▪ Endpoint: /admin/master/:type/:id
      ▪ Method: PATCH
      ▪ Body: { "name": "...", "reject_flag": ..., "reject_message": "..." }
    ○ If successful:
      ▪ Show Success Message (ADMX-010-SUC-01).

  • Delete Button is pressed:
    ○ Show Modal confirmation.
    ○ If confirmed:
      ▪ Execute API request:
        - Endpoint: /admin/master/:type/:id
        - Method: DELETE
      ▪ If successful:
        - Show Success Message (ADMX-010-SUC-02).
        - Remove from table.
      ▪ If failed (400 - Constraint check):
        - Show Error Message (ADMX-010-ERR-04).

  • Drag & Drop Reordering:
    ○ Triggered after row movement completes.
    ○ Execute API request:
      ▪ Endpoint: /admin/master/:type/sort
      ▪ Method: PUT
      ▪ Body: { "ordered_ids": [...] }
```
