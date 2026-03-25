# ADMX-007 - Danh sách phòng họp

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Danh sách phòng họp |

## Overview

Screen Name: Danh sách phòng họp
URI: /admin/rooms
Screen Overview: Màn hình hiển thị danh sách các phòng họp đã được đăng ký trong doanh nghiệp. Cho phép điều hướng đến việc đăng ký mới hoặc xem chi tiết/chỉnh sửa từng phòng.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「会議室一覧」 |
| 2 | 新規登録ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-008へ遷移 |
| 3 | 企業設定ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 企業の設定関連へ遷移 |
| 4 | タブレット設定ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-013へ遷移 |
| 5 | 会議室一覧テーブル | テーブル | O | － | － | － | － | － | － | － | － | － | 登録済み会議室一覧 |
| 6 | 会議室名 | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 7 | フロア | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 8 | 収容人数 | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 9 | 備品 | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素（カンマ区切り表示等） |
| 10 | モード | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素（シングル/マルチ） |
| 11 | 詳細表示ボタン | ボタン | O | 各行 | － | － | － | － | － | － | － | － | ADMX-009へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Meeting Room List" |
| 2 | New Registration Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-008 on press |
| 3 | Enterprise Settings Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to Enterprise setup screen |
| 4 | Tablet Settings Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-013 on press |
| 5 | Room List Table | Table | O | - | - | - | - | - | - | - | - | - | Displays registered meeting rooms |
| 6 | Room Name | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 7 | Floor | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 8 | Capacity | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 9 | Equipment | Label | O | - | - | - | - | - | - | - | - | - | Table element (e.g. comma-separated list) |
| 10 | Mode | Label | O | - | - | - | - | - | - | - | - | - | Table element (Single/Multi-device) |
| 11 | Details Button | Button | O | Per row | - | - | - | - | - | - | - | - | Transition to ADMX-009 on press |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | New Registration Button | Press | Navigate to Meeting Room Registration (ADMX-008). |
| 2 | Tablet Settings Button | Press | Navigate to Reception Tablet List (ADMX-013). |
| 3 | Details Button | Press | Navigate to details of the specific room (ADMX-009). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/rooms
      ▪ Method: GET
    ○ If successful:
      ▪ Populate the "Room List Table" (ID: 5) with data.
    ○ If failed:
      ▪ Show list load error message.

Interaction
  • None.

Action
  • Details Button is pressed:
    ○ Transition: Navigate to ADMX-009.
```
