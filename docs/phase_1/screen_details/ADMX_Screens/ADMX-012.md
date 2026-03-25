# ADMX-012 - Cài đặt Screensaver

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Cài đặt Screensaver |

## Overview

Screen Name: Cài đặt Screensaver
URI: /admin/settings/screensaver
Screen Overview: Màn hình cho phép tải lên các tệp hình ảnh/video và cài đặt thời gian chuyển tiếp (Interval) để phát dưới dạng Digital Signage (màn hình chờ) trên tablet lễ tân.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「スクリーンセーバー設定」 |
| 2 | コンテンツリスト | テーブル | O | － | － | － | － | － | － | － | － | － | 現在設定されている画像/動画一覧 |
| 3 | サムネイル | 画像 | O | 各行 | － | － | － | － | － | － | － | － | テーブル要素 |
| 4 | 並び順変更 | その他 | O | 各行 | － | － | － | － | － | － | － | － | 行のドラッグ＆ドロップで再生順序を変更 |
| 5 | 削除ボタン | ボタン | O | 各行 | － | － | － | － | － | － | － | － | 再生リストからコンテンツを削除 |
| 6 | ファイル追加ボタン | ボタン | I/O | － | － | － | 画像/動画 | － | － | － | 拡張子/サイズ確認 | － | 新しい画像または動画をアップロード |
| 7 | 再生間隔（秒） | テキストボックス | I | － | － | － | － | 〇 | 3 | 半角数字 | 1〜999秒 | － | スライドあたりの表示時間 |
| 8 | 保存ボタン | ボタン | O | 変更あり | エラーなし | － | － | － | － | － | － | － | 変更内容を保存し、タブレット系システムへ反映 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Screensaver Settings" |
| 2 | Content List | Table | O | - | - | - | - | - | - | - | - | - | List of current images/videos |
| 3 | Thumbnail | Image | O | Per row | - | - | - | - | - | - | - | - | Table element |
| 4 | Sort Order | Other | O | Per row | - | - | - | - | - | - | - | - | Drag & drop to reorder |
| 5 | Delete Button | Button | O | Per row | - | - | - | - | - | - | - | - | Remove content from playlist |
| 6 | Add File Button | Button | I/O | - | - | - | Image/Video | - | - | - | Extension & Size check | - | Upload new image or video |
| 7 | Interval (sec) | Text Box | I | - | - | - | - | 〇 | 3 | Half-width numeric | 1-999 seconds | - | Duration per slide |
| 8 | Save Button | Button | O | If data changed | No errors | - | - | - | - | - | - | - | Save changes and apply to tablet system |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Save Button | Press | Execute update API to save the list and interval. |
| 2 | Add File Button | Press | Open file browser to select image or video files. |
| 3 | Sort Order | Drag | Reorder the playlist via drag-and-drop. |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Interval|Required|ADMX-012-ERR-01|Field cannot be empty.|
| 2 |Interval|Numeric|ADMX-012-ERR-03|Must be a number between 1 and 999.|
| 3 |Media|Size|ADMX-012-ERR-02|Image < 5MB, Video < 50MB.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/settings/branding
      ▪ Method: GET
    ○ If successful:
      ▪ Populate "Content List" (ID: 2) with existing signage media.
      ▪ Set "Interval" (ID: 7) value.

Interaction
  • Add File:
    ○ Selected file is temporarily added to the list and previewed as a thumbnail.
    ○ Enable "Save Button" (ID: 8).
  • Drag & Drop:
    ○ Rearrange items in local state.
    ○ Enable "Save Button" (ID: 8).

Action
  • Save Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/settings/branding
      ▪ Method: PATCH
      ▪ Body: { "signage_slides": [...], "signage_interval": ... }
    ○ If successful:
      ▪ Show Success Message (ADMX-012-SUC-01).
```
