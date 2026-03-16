# ADMX-013 - Danh sách Tablet Lễ Tân

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Danh sách Tablet Lễ Tân |

## Overview

Screen Name: Danh sách Tablet Lễ Tân
URI: /admin/reception-devices
Screen Overview: Màn hình hiển thị danh sách các thiết bị tablet lễ tân đã được đăng ký và cấu hình trong hệ thống. Quản trị viên có thể theo dõi trạng thái và quản lý cấu hình từng thiết bị.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「受付タブレット一覧」 |
| 2 | 新規登録ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-014へ遷移 |
| 3 | タブレット一覧テーブル | テーブル | O | － | － | － | － | － | － | － | － | － | 登録されているタブレットの一覧 |
| 4 | タブレットID | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 5 | 設置場所(メモ) | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 6 | 割り当てられた設定 | ラベル | O | － | － | － | － | － | － | － | － | － | 業者/部署/用件/備品の概要 |
| 7 | 詳細表示ボタン | ボタン | O | 各行 | － | － | － | － | － | － | － | － | 押下でADMX-015へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Reception Tablet List" |
| 2 | New Registration Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-014 on press |
| 3 | Tablet List Table | Table | O | - | - | - | - | - | - | - | - | - | List of registered tablets |
| 4 | Tablet ID | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 5 | Location (Memo) | Label | O | - | - | - | - | - | - | - | - | - | Table element e.g. "Main Entrance" |
| 6 | Assigned Settings | Label | O | - | - | - | - | - | - | - | - | - | Summary of Vendors/Depts/Purposes/Equip |
| 7 | Details Button | Button | O | Per row | - | - | - | - | - | - | - | - | Transition to ADMX-015 on press |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | New Registration Button | Press | Navigate to Tablet Registration screen (ADMX-014). |
| 2 | Details Button | Press | Navigate to the detail/edit screen for the selected tablet (ADMX-015). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/reception-devices
      - Method: GET
    ○ **If successful**:
      - Populate "Tablet List Table" (ID: 3) with device data.
    ○ **If failed**:
      - Show generic loading error message.

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • **Details Button is pressed**:
    ○ Transition: Navigate to ADMX-015.
```
