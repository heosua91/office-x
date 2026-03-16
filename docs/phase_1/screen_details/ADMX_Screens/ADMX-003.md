# ADMX-003 - Danh sách User

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Danh sách User |

## Overview

Screen Name: Danh sách User
URI: /admin/users
Screen Overview: Màn hình hiển thị và quản lý danh sách người dùng hiện đang được đăng ký trong doanh nghiệp. Cho phép tìm kiếm, thêm mới, và nhập dữ liệu hàng loạt.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「ユーザー一覧」 |
| 2 | 新規登録ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 押下でADMX-004へ遷移 |
| 3 | CSV一括インポートボタン | ボタン | O | － | － | － | － | － | － | － | － | － | CSVファイルを選択し一括登録 |
| 4 | 専用テンプレートDLボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 一括インポート用CSV雛形DL |
| 5 | ユーザー枠追加申請ボタン | ボタン | O | 登録枠上限に達している時 | － | － | － | － | － | － | － | － | 押下でADMX-004-1へ遷移 |
| 6 | ユーザー一覧テーブル | テーブル | O | － | － | － | － | － | － | － | － | － | 登録ユーザー一覧を表示 |
| 7 | 氏名 | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 8 | ログインID | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 9 | メールアドレス | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素 |
| 10 | 部署 | ラベル | O | － | － | － | － | － | － | － | － | － | テーブル要素（ADMX-010連動） |
| 11 | 詳細表示ボタン | ボタン | O | 各行 | － | － | － | － | － | － | － | － | 押下でADMX-006へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "User List" |
| 2 | New Registration Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-004 on press |
| 3 | CSV Bulk Import Button | Button | O | - | - | - | - | - | - | - | - | - | Select a CSV file and register users in bulk |
| 4 | Template Download Button | Button | O | - | - | - | - | - | - | - | - | - | Download CSV template for bulk import |
| 5 | Request User Slot Addition Button | Button | O | When registration limit reached | - | - | - | - | - | - | - | - | Transition to ADMX-004-1 on press |
| 6 | User List Table | Table | O | - | - | - | - | - | - | - | - | - | Displays registered users list |
| 7 | Full Name | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 8 | Login ID | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 9 | Email Address | Label | O | - | - | - | - | - | - | - | - | - | Table element |
| 10 | Department | Label | O | - | - | - | - | - | - | - | - | - | Table element (linked to ADMX-010) |
| 11 | Details Button | Button | O | Per row | - | - | - | - | - | - | - | - | Transition to ADMX-006 on press |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | New Registration Button | Press | Navigate to User Registration (ADMX-004). |
| 2 | CSV Bulk Import Button | Press | Trigger file picker and then calling the CSV import API. |
| 3 | Template Download Button | Press | Download the standardized CSV template. |
| 4 | Request User Slot Addition Button | Press | Navigate to Slot Purchase screen (ADMX-004-1). |
| 5 | Details Button | Press | Navigate to the details of the specific user (ADMX-006). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |CSV Import|File format|ADMX-003-001|Check if the uploaded file is a valid .csv.|
| 2 |CSV Import|Content validation|ADMX-003-ERR-01|Verify required columns and data types within the CSV.|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/users
      - Method: GET
    ○ **If successful**:
      - Populate the "User List Table" with user data.
      - Check if the total user count has reached the subscription quota.
      - If reached, display the "Request User Slot Addition Button" (ID: 5).
    ○ **If failed**:
      - Show list load error message.

画面更新時 / Interaction
  • None. (Consider search/filter logic if added in later updates).

アクション発生時 / Action
  • **CSV Bulk Import Button is pressed**:
    ○ Open file browser.
    ○ Upon selecting a file:
      ▪ Execute API request:
        - Endpoint: /admin/users/import
        - Method: POST (Multipart/form-data)
      ▪ **If successful (200 OK)**:
        - Show success message with the number of imported users.
        - Refresh user list data.
      ▪ **If failed (400/500)**:
        - Show error message detailing failed lines or general server error.

  • **Template Download Button is pressed**:
    ○ Browser download: static/templates/user_import_template.csv.
```
