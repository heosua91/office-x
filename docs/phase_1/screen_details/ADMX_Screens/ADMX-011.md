# ADMX-011 - Logo Corporate & Hình Background

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Logo Corporate & Hình Background |

## Overview

Screen Name: Logo Corporate & Hình Background
URI: /admin/settings/branding
Screen Overview: Màn hình cho phép tải lên và cài đặt Logo doanh nghiệp cùng ảnh nền (Background) cho màn hình chờ của Tablet lễ tân.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「企業ロゴ・背景画像設定」 |
| 2 | 企業ロゴ画像 | 画像 | O | － | － | － | － | － | － | － | － | － | 現在設定されているロゴを表示 |
| 3 | 企業ロゴ変更 | ボタン | I/O | － | － | － | 画像 | － | － | － | 拡張子/サイズ確認 | － | 画像アップロード（ローカルから選択） |
| 4 | 待機画面背景画像 | 画像 | O | － | － | － | － | － | － | － | － | － | 現在設定されている背景を表示 |
| 5 | 背景画像変更 | ボタン | I/O | － | － | － | 画像 | － | － | － | 拡張子/サイズ確認 | － | 画像アップロード（ローカルから選択） |
| 6 | プレビューエリア | その他 | O | 画像選択時 | － | － | － | － | － | － | － | － | 設定後の受付タブレット画面を模擬表示 |
| 7 | 保存ボタン | ボタン | O | 変更あり | エラーなし | － | － | － | － | － | － | － | 画像をサーバーへ保存・適用 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Corporate Logo & Background Settings" |
| 2 | Corporate Logo | Image | O | - | - | - | - | - | - | - | - | - | Displays current logo |
| 3 | Change Logo | Button | I/O | - | - | - | Image | - | - | - | Extension & Size check | - | Select image from local disk |
| 4 | Background Image | Image | O | - | - | - | - | - | - | - | - | - | Displays current background |
| 5 | Change Background | Button | I/O | - | - | - | Image | - | - | - | Extension & Size check | - | Select image from local disk |
| 6 | Preview Area | Other | O | If image chosen | - | - | - | - | - | - | - | - | Mock display of the reception screen |
| 7 | Save Button | Button | O | If data changed | No errors | - | - | - | - | - | - | - | Save and apply images to server |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Save Button | Press | Upload selected files to server and refresh branding settings. |
| 2 | Change Logo/BG | Press | Open file browser to select new media. |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Media|File Size|ADMX-011-ERR-01|Max file size 5MB.|
| 2 |Media|Extension|ADMX-011-ERR-02|Supports PNG, JPG, JPEG.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/settings/branding
      ▪ Method: GET
    ○ If successful:
      ▪ Display current Logo (ID: 2) and Background (ID: 4) using URLs provided.

Interaction
  • File Selection:
    ○ Show "Preview Area" (ID: 6) showing how the new logo/background will look together on a simulated tablet screen.
    ○ Enable "Save Button" (ID: 7).

Action
  • Save Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/settings/branding
      ▪ Method: PATCH
      ▪ Content-Type: multipart/form-data
      ▪ Body: { "logo": [File], "background": [File] }
    ○ If successful:
      ▪ Show Success Message (ADMX-011-SUC-01).
      ▪ Refresh displayed images with new versions.
```
