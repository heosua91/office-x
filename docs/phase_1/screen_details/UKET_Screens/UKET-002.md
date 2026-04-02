# UKET-002 - Screen Saver/Digital Signage

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Screen Saver/Digital Signage |

## Overview

Screen Name: Screen Saver/Digital Signage
URI: /reception/signage
Screen Overview: Loop playback of images/videos (digital signage) configured in ADMX-011/012. Tap to start.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | デジタルサイネージエリア | その他 | O | 管理画面（ADMX-011/012）で設定された画像・動画がある場合 | － | － | － | － | － | － | － | － | 設定された画像・動画をループ再生する（F-097） |
| 2 | デフォルト背景 | 画像 | O | デジタルサイネージの設定がない場合 | － | － | － | － | － | － | － | － | 企業ロゴとデフォルト背景画像を表示 |
| 3 | 案内メッセージ | ラベル | O | － | － | － | － | － | － | － | － | － | 画面中央付近に「画面をタップして受付を開始してください」等を表示 |
| 4 | 画面全体（タップイベント） | リンク | O | － | 常に活性 | － | － | － | － | － | － | － | 画面のどこをタップしてもタップイベントを検知し、「UKET-003（TOP画面）」へ遷移する |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Digital Signage Area | Other | O | If images/videos configured in Admin (ADMX-011/012) exist | - | - | - | - | - | - | - | Loop configured images and videos (F-097) |
| 2 | Default Background | Image | O | If no digital signage is configured | - | - | - | - | - | - | - | Show company logo and default background image |
| 3 | Guide message | Label | O | - | - | - | - | - | - | - | - | Display "Please tap the screen to start reception" etc near center |
| 4 | Entire screen (tap event) | Link | O | - | Always active | - | - | - | - | - | - | Detect tap anywhere on screen and transition to "UKET-003 (TOP screen)" |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Entire screen | Press | Detect touch event on the screen and transition to UKET-003. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | No inputs to validate. |

## Processing Details

```plain
Initial display
  • Initialize digital signage loop or default image display based on configuration fetched.
  • Display guide message instructing to tap.

Interaction
  • Continuously loop media using intervals determined by the fetched `GET /reception/signage` API or cached configuration.

Action
  • Immediately after screen load (if any):
    ○ Call GET /reception/signage API to fetch the latest signage data (unless cached recently).
    ○ If successful: Load media into the loop and begin playback.
    ○ If failed: Fallback to locally cached default image/logo.
  • [Entire screen] is pressed:
    ○ Transition to UKET-003. No validation is performed.
```
