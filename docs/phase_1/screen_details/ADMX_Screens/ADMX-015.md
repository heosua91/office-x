# ADMX-015 - Chi tiết Tablet Lễ Tân

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Chi tiết Tablet Lễ Tân |

## Overview

Screen Name: Chi tiết Tablet Lễ Tân
URI: /admin/reception-devices/:id
Screen Overview: Màn hình cho phép xem thông tin chi tiết của một thiết bị tablet lễ tân cụ thể. Quản trị viên có thể thay đổi cấu hình hiển thị, đặt lại mật khẩu của thiết bị hoặc xóa thiết bị khỏi hệ thống.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「受付タブレット詳細・編集」 |
| 2 | タブレットID | テキストボックス | I/O | － | 編集モード | － | － | 〇 | 50 | 半角英数記号 | － | 重複チェック | － |
| 3 | ＰＡＳＳ | テキストボックス | I/O | － | 編集モード | － | － | － | 50 | 半角英数記号 | － | － | 変更する場合のみ入力 |
| 4 | 設置場所(メモ) | テキストボックス | I/O | － | 編集モード | － | － | － | 255 | 全角半角 | － | － | － |
| 5 | 業者・部署・用件・備品 | チェックボックス | I/O | － | 編集モード | － | － | － | － | － | － | － | 各設定値を修正可能 |
| 6 | 通知設定 | テキストボックス | I/O | － | 編集モード | － | － | － | 255 | － | － | － | － |
| 7 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-013へ戻る |
| 8 | 削除ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 確認モーダル表示後、削除しADMX-013へ戻る |
| 9 | 更新ボタン | ボタン | O | 変更あり | エラーなし | － | － | － | － | － | － | － | 情報を上書き保存しADMX-013へ戻る |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Reception Tablet Detail/Edit" |
| 2 | Tablet ID | Text Box | I/O | - | Edit mode | - | - | 〇 | 50 | Half-width alphanumeric/symbols | - | Duplicate check | - |
| 3 | Password | Text Box | I/O | - | Edit mode | - | - | - | 50 | Half-width alphanumeric/symbols | - | - | Only input if changing |
| 4 | Location (Memo) | Text Box | I/O | - | Edit mode | - | - | - | 255 | Full/Half-width | - | - | - |
| 5 | Master Filters | Checkbox | I/O | - | Edit mode | - | - | - | - | - | - | - | Vendors, Depts, etc. |
| 6 | Notifications | Text Box | I/O | - | Edit mode | - | - | - | 255 | - | - | - | - |
| 7 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-013 |
| 8 | Delete Button | Button | O | - | - | - | - | - | - | - | - | - | Show modal and delete |
| 9 | Update Button | Button | O | If changed | No errors | - | - | - | - | - | - | - | Save changes to DB |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Update Button | Press | Submit changes via PATCH API and return to ADMX-013. |
| 2 | Delete Button | Press | Show confirmation and delete via DELETE API. |
| 3 | Back Button | Press | Return to list (ADMX-013). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Tablet ID|Required|ADMX-015-ERR-01|Field cannot be empty.|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/reception-devices/:id
      - Method: GET
    ○ **If successful**:
      - Populate all fields with existing tablet configuration.
    ○ **If failed**:
      - Redirect to ADMX-013 with error message.
    ○ Fetch all Master Data groups for the checkbox selections.

画面更新時 / Interaction
  • Enable "Update Button" (ID: 9) if any setting in the form is modified compared to its initial state.

アクション発生時 / Action
  • **Update Button is pressed**:
    ○ Execute API request:
      - Endpoint: /admin/reception-devices/:id
      - Method: PATCH
      - Body: { "device_id": "...", "password": "[Optional]", "location": "...", ... }
    ○ **If successful**:
      - Show success toaster and transition to ADMX-013.

  • **Delete Button is pressed**:
    ○ Request confirmation via Modal.
    ○ On approval, execute API request:
      - Endpoint: /admin/reception-devices/:id
      - Method: DELETE
    ○ **If successful**:
      - Transition to ADMX-013.
```
