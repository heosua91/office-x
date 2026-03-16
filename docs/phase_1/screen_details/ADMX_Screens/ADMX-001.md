# ADMX-001 - Danh sách Admin Menu

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Danh sách Admin Menu |

## Overview

Screen Name: Danh sách Admin Menu
URI: /admin/menu
Screen Overview: Chỉ hiển thị cho những User login bằng tài khoản Admin. Cung cấp các liên kết điều hướng đến các chức năng quản trị của doanh nghiệp.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | 管理者権限あり | － | － | － | － | － | － | － | － | 固定文言「管理者メニュー」 |
| 2 | ダッシュボードリンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-002へ遷移 |
| 3 | ユーザー管理リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-003へ遷移 |
| 4 | 会議室設定リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-007へ遷移 |
| 5 | マスタ設定リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-010へ遷移 |
| 6 | 受付待機画面リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-011へ遷移 |
| 7 | 受付タブレット設定リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-013へ遷移 |
| 8 | 請求関連リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-016へ遷移 |
| 9 | 来訪履歴管理リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-023へ遷移 |
| 10 | AI利用管理リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-024へ遷移 |
| 11 | AIテンプレート管理リンク | リンク | O | 同上 | － | － | － | － | － | － | － | － | ADMX-030へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | With Admin privileges | - | - | - | - | - | - | - | - | Fixed text "Admin Menu" |
| 2 | Dashboard Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-002 |
| 3 | User Management Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-003 |
| 4 | Meeting Room Settings Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-007 |
| 5 | Master Settings Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-010 |
| 6 | Reception Wait Screen Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-011 |
| 7 | Reception Tablet Settings Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-013 |
| 8 | Billing Links | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-016 |
| 9 | Visit History Management Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-023 |
| 10 | AI Usage Management Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-024 |
| 11 | AI Template Management Link | Link | O | Same as above | - | - | - | - | - | - | - | - | Transition to ADMX-030 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Dashboard Link | Press | Navigate to Admin Dashboard (ADMX-002). |
| 2 | User Management Link | Press | Navigate to User List (ADMX-003). |
| 3 | Meeting Room Settings Link | Press | Navigate to Meeting Room List (ADMX-007). |
| 4 | Master Settings Link | Press | Navigate to Master Data Management (ADMX-010). |
| 5 | Reception Wait Screen Link | Press | Navigate to Branding Settings (ADMX-011). |
| 6 | Reception Tablet Settings Link | Press | Navigate to Reception Device List (ADMX-013). |
| 7 | Billing Links | Press | Navigate to Billing Menu (ADMX-016). |
| 8 | Visit History Management Link | Press | Navigate to Visit History (ADMX-023). |
| 9 | AI Usage Management Link | Press | Navigate to AI Usage Management (ADMX-024). |
| 10 | AI Template Management Link | Press | Navigate to AI Template List (ADMX-030). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Access Control|Role|ADMX-001-ERR-01|If the user is not an Admin, access is denied.|
## Processing Details

```plain
初期表示 / Initial display
  • Verify user role from session/token.
  • Render the list of functional links if the role is 'admin' or 'tng_admin'.
  • If access is unauthorized, redirect to standard dashboard (OFX-001) or 403 Forbidden.

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • **Any menu link is pressed**:
    ○ Transition: Navigate to the corresponding Screen URI.
```
