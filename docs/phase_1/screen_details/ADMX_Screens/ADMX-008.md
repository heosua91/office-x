# ADMX-008 - Đăng ký phòng họp mới

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Đăng ký phòng họp mới |

## Overview

Screen Name: Đăng ký phòng họp mới
URI: /admin/rooms/create
Screen Overview: Màn hình cho phép quản trị viên đăng ký một phòng họp mới. Thiết lập các chế độ hệ thống (Single/Multi-device) và tự động tạo mã QR liên kết thiết bị sau khi đăng ký thành công.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「会議室新規登録」 |
| 2 | 会議室名 | テキストボックス | I | － | － | － | － | 〇 | 255 | 全角半角 | － | 重複チェック | － |
| 3 | フロア名 | プルダウン | I | － | － | － | － | 〇 | － | － | － | － | ADMX-010マスタから取得 |
| 4 | 収容人数 | テキストボックス | I | － | － | － | － | 〇 | 4 | 半角数字 | 1以上の整数 | － | 座席数を入力 |
| 5 | 会議室備品 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ADMX-010マスタから取得（複数選択） |
| 6 | システムモード | ラジオボタン | I | － | － | － | － | 〇 | － | － | － | － | シングルモード / マルチデバイスモード |
| 7 | 案内画像アップロード | ボタン | I/O | － | － | － | 画像 | － | － | － | 拡張子/サイズ確認 | － | プレビュー表示付き、案内マップ等の画像 |
| 8 | キャンセルボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-007へ戻る |
| 9 | 登録完了ボタン | ボタン | O | － | エラーなし | － | － | － | － | － | － | － | 情報保存、自動QR生成モーダル表示 |
| 10 | 登録完了モーダル | モーダル | O | 登録完了時 | － | － | － | － | － | － | － | － | 「登録が完了しました。端末紐付け用QRコードを発行しました。」ダウンロードボタン表示。完了後ADMX-007へ |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Meeting Room New Registration" |
| 2 | Room Name | Text Box | I | - | - | - | - | 〇 | 255 | Full/Half-width | - | Duplicate check | - |
| 3 | Floor Name | Dropdown | I | - | - | - | - | 〇 | - | - | - | - | Fetched from ADMX-010 Master |
| 4 | Capacity | Text Box | I | - | - | - | - | 〇 | 4 | Half-width numeric | Integer ≥ 1 | - | Enter number of seats |
| 5 | Room Equipment | Checkbox | I | - | - | - | - | - | - | - | - | - | Fetched from ADMX-010 (Multiple) |
| 6 | System Mode | Radio Button | I | - | - | - | - | 〇 | - | - | - | - | Single-mode / Multi-device-mode |
| 7 | Guide Image Upload | Button | I/O | - | - | - | Image | - | - | - | Extension & Size check | - | Preview available, e.g. guide maps |
| 8 | Cancel Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-007 |
| 9 | Complete Registration | Button | O | - | No errors | - | - | - | - | - | - | - | Save info, trigger QR Modal |
| 10 | Success Modal | Modal | O | On success | - | - | - | - | - | - | - | - | Shows success msg, QR download, then ADMX-007 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Complete Registration | Press | Submit new room data. Show success modal (ID: 10) on 201 Created. |
| 2 | Cancel Button | Press | Discard entries and return to Room List (ADMX-007). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Room Name|Required|ADMX-008-ERR-01|Field cannot be empty.|
| 2 |Floor|Required|ADMX-008-ERR-04|Must select a floor.|
| 3 |Capacity|Required|ADMX-008-ERR-01|Field cannot be empty.|
| 4 |Capacity|Numeric|ADMX-008-ERR-03|Must be a positive integer.|
| 5 |Guide Image|Size|ADMX-008-ERR-02|File size must be under 5MB.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request to fetch Master Data (ADMX-010):
      ▪ Endpoint: /admin/master/FLOOR
      ▪ Method: GET
    ○ Execute API request to fetch Master Data (ADMX-010):
      ▪ Endpoint: /admin/master/EQUIPMENT
      ▪ Method: GET
    ○ If successful:
      ▪ Populate Floor dropdown (ID: 3) and Equipment checkbox group (ID: 5).
  • Default "System Mode" (ID: 6) to "Single-mode".

Interaction
  • Logic: Image preview updates when a file is selected (ID: 7).
  • Activation: "Complete Registration" (ID: 9) button is enabled when all required fields are valid.

Action
  • Complete Registration button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/rooms
      ▪ Method: POST
      ▪ Body: { "name": "...", "floor_id": "...", "capacity": ..., "equipment_ids": [...], "mode": "...", "map_image": "..." }
    ○ If successful (201 Created):
      ▪ API returns the system-generated QR code link/data.
      ▪ Show Success Message (ADMX-008-SUC-01).
      ▪ Modal allows download of the Device Bind QR code.
    ○ If failed (400/409/500):
      ▪ Show Error Message (ADMX-007-ERR-03).

  • OK/Close is pressed in Success Modal:
    ○ Transition: Navigate to ADMX-007.
```
