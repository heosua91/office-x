# ADMX-024 - Quản lý Quota AI (Corporate)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Quản lý Quota AI (Corporate) |

## Overview

Screen Name: Quản lý Quota AI (Corporate)
URI: /admin/billing/ai-quota
Screen Overview: Màn hình quản trị hiển thị tình trạng sử dụng thời gian tóm tắt AI của toàn doanh nghiệp (bao gồm hạn mức miễn phí, hạn mức trả trước/Prepaid, và phần sử dụng trả sau/Postpaid). Hỗ trợ biểu đồ trực quan và danh sách sử dụng theo từng người dùng.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「AI要約時間管理」 |
| 2 | 全体利用状況グラフ | 画像 | O | － | － | － | － | － | － | － | － | － | 円グラフ等で無料枠/プリ/ポスト等の消費状況を可視化 |
| 3 | プラン内無料枠情報 | ラベル | O | － | － | － | － | － | － | － | － | － | 残り時間、月末リセット日を表示 |
| 4 | プリペイド枠情報 | ラベル | O | － | － | － | － | － | － | － | － | － | 購入済み、消費済み、残り時間を表示 |
| 5 | ポストペイド利用情報 | ラベル | O | 従量課金設定時 | － | － | － | － | － | － | － | － | 当月利用時間、翌月請求見込額を表示 |
| 6 | ユーザー別利用一覧 | テーブル | O | － | － | － | － | － | － | － | － | － | 企業内ユーザーごとの利用時間詳細 |
| 7 | 時間追加購入ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-025へ遷移 |
| 8 | 設定変更ボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-027へ遷移して利用制限設定 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "AI Usage Management" |
| 2 | Usage Graph | Chart | O | - | - | - | - | - | - | - | - | - | Pie/Bar chart for Free/Pre/Post quota |
| 3 | Free Quota Info | Label | O | - | - | - | - | - | - | - | - | - | Remaining time and reset date |
| 4 | Prepaid Quota | Label | O | - | - | - | - | - | - | - | - | - | Bought/Consumed/Left time |
| 5 | Postpaid Usage | Label | O | If enabled | - | - | - | - | - | - | - | - | Current month usage and estimated bill |
| 6 | Per-user Usage | Table | O | - | - | - | - | - | - | - | - | - | Detailed usage per employee |
| 7 | Buy Credits | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-025 |
| 8 | Settings Button | Button | O | - | - | - | - | - | - | - | - | - | Transition to ADMX-027 (AI Settings) |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Buy Credits | Press | Navigate to the purchase credits screen (ADMX-025). |
| 2 | Settings Button | Press | Navigate to company AI configuration (ADMX-027). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |-|-|-|-|
## Processing Details

```plain
初期表示 / Initial display
  • **Immediately after screen load**:
    ○ Execute API request:
      - Endpoint: /admin/billing/ai-quota
      - Method: GET
    ○ **If successful**:
      - Render "Usage Graph" (ID: 2) with percentage data.
      - Display textual quota stats (ID: 3, 4, 5).
      - Populate "Per-user Usage" (ID: 6) table.

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • **Buy Credits is pressed**:
    ○ Transition: Navigate to ADMX-025.

  • **Settings Button is pressed**:
    ○ Transition: Navigate to ADMX-027.
```
