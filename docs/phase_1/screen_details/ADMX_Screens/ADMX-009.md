# ADMX-009 - Chi tiết phòng họp (Edit, Xóa)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Chi tiết phòng họp (Edit, Xóa) |

## Overview

Screen Name: Chi tiết phòng họp (Edit, Xóa)
URI: /admin/rooms/:id
Screen Overview: Màn hình hiển thị thông tin chi tiết của phòng họp, cho phép chỉnh sửa hoặc xóa phòng. Ngoài ra còn cung cấp mã QR cho khách (bản đồ hướng dẫn) và mã QR để liên kết thiết bị tablet.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「会議室詳細・編集」 |
| 2 | 会議室名 | テキストボックス | I/O | － | 編集モード | － | － | 〇 | 255 | 全角半角 | － | 重複チェック | － |
| 3 | フロア名 | プルダウン | I/O | － | 編集モード | － | － | 〇 | － | － | － | － | ADMX-010マスタから |
| 4 | 収容人数 | テキストボックス | I/O | － | 編集モード | － | － | 〇 | 4 | 半角数字 | 1以上の整数 | － | － |
| 5 | 会議室備品 | チェックボックス | I/O | － | 編集モード | － | － | － | － | － | － | － | ADMX-010マスタから |
| 6 | システムモード | ラジオボタン | I/O | － | 編集モード | － | － | 〇 | － | － | － | － | シングルモード / マルチデバイスモード |
| 7 | 案内画像 | ボタン | I/O | － | 編集モード | － | 画像 | － | － | － | 拡張子/サイズ確認 | － | 現在の画像再表示・置き換え可能 |
| 8 | ゲスト案内QR表示 | 画像 | O | － | － | － | － | － | － | － | － | － | 会議室案内マップURL用QRコード |
| 9 | ゲスト案内QR DL | ボタン | O | － | － | － | － | － | － | － | － | － | QRコード画像ダウンロード |
| 10 | 端末紐付けQR表示 | 画像 | O | － | － | － | － | － | － | － | － | － | 端末と会議室を紐づけるため専用QR |
| 11 | 端末紐付けQR DL | ボタン | O | － | － | － | － | － | － | － | － | － | QRコード画像ダウンロード |
| 12 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-007へ戻る |
| 13 | 削除ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で削除確認モーダルを表示（対象削除＆ADMX-007へ遷移） |
| 14 | 更新確認ボタン | ボタン | O | 変更あり | エラーなし | － | － | － | － | － | － | － | 押下で更新確認モーダルを表示（情報上書き＆ADMX-007へ遷移） |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Meeting Room Details/Edit" |
| 2 | Room Name | Text Box | I/O | - | Edit mode | - | - | 〇 | 255 | Full/Half-width | - | Duplicate check | - |
| 3 | Floor Name | Dropdown | I/O | - | Edit mode | - | - | 〇 | - | - | - | - | Fetched from ADMX-010 |
| 4 | Capacity | Text Box | I/O | - | Edit mode | - | - | 〇 | 4 | Half-width numeric | Integer ≥ 1 | - | - |
| 5 | Room Equipment | Checkbox | I/O | - | Edit mode | - | - | - | - | - | - | - | Fetched from ADMX-010 |
| 6 | System Mode | Radio Button | I/O | - | Edit mode | - | - | 〇 | - | - | - | - | Single-mode / Multi-device-mode |
| 7 | Guide Image | Button | I/O | - | Edit mode | - | Image | - | - | - | Extension & Size check | - | Re-display current or replace |
| 8 | Guest QR Display | Image | O | - | - | - | - | - | - | - | - | - | QR for Guest Map URL |
| 9 | Guest QR DL | Button | O | - | - | - | - | - | - | - | - | - | Download Guest QR code |
| 10 | Device QR Display | Image | O | - | - | - | - | - | - | - | - | - | Dedicated QR for Tablet-Room binding |
| 11 | Device QR DL | Button | O | - | - | - | - | - | - | - | - | - | Download Device QR code |
| 12 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-007 |
| 13 | Delete Button | Button | O | - | - | - | - | - | - | - | - | - | Show Delete Modal |
| 14 | Update Button | Button | O | If changed | No errors | - | - | - | - | - | - | - | Show Update Modal |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Update Button | Press | Show confirmation modal and proceed to update on OK. |
| 2 | Delete Button | Press | Show confirmation modal and proceed to delete on OK. |
| 3 | QR Download buttons | Press | Download the respective QR code as an image file. |
| 4 | Back Button | Press | Return to Room List (ADMX-007). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Room Name|Required|ADMX-009-ERR-01|Field cannot be empty.|
| 2 |Floor|Required|ADMX-009-ERR-02|Must select a floor.|
| 3 |Capacity|Required|ADMX-009-ERR-01|Field cannot be empty.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/rooms/:id
      ▪ Method: GET
    ○ If successful:
      ▪ Populate form with room data.
      ▪ Render Guest QR (ID: 8) and Device QR (ID: 10) using URI returned by API.
    ○ If failed:
      ▪ Redirect to ADMX-007 with error msg.
    ○ Execute API request to fetch Master Data (ADMX-010):
      ▪ Endpoint: /admin/master/FLOOR
      ▪ Method: GET
    ○ Execute API request to fetch Master Data (ADMX-010):
      ▪ Endpoint: /admin/master/EQUIPMENT
      ▪ Method: GET
    ○ If successful:
      ▪ Populate Floor and Equipment options in the form.

Interaction
  • Enable "Update Button" (ID: 14) if any attribute of the room has been modified.

Action
  • Update Confirmation is accepted:
    ○ Execute API request:
      ▪ Endpoint: /admin/rooms/:id
      ▪ Method: PATCH
      ▪ Body: { "name": "...", "floor_id": "...", "capacity": ..., "equipment_ids": [...], "mode": "...", "map_image": "..." }
    ○ If successful:
      ▪ Transition: Navigate to ADMX-007.

  • Delete Confirmation is accepted:
    ○ Execute API request:
      ▪ Endpoint: /admin/rooms/:id
      ▪ Method: DELETE
    ○ If successful:
      ▪ Transition: Navigate to ADMX-007.

  • QR Download buttons are pressed:
    ○ Browser triggers download of the image file (blob or direct URL).
```
