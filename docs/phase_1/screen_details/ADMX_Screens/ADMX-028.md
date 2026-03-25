# ADMX-028 - Cài đặt Alert sử dụng AI (Corporate)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-13 | 1 | New | Cài đặt Alert sử dụng AI (Corporate) |

## Overview

Screen Name: Cài đặt Alert sử dụng AI (Corporate)
URI: /admin/members/ai-settings
Screen Overview: Màn hình thiết lập các quy tắc (Rules) gửi thông báo cảnh báo dựa trên lượng tiêu thụ AI của toàn doanh nghiệp hoặc từng người dùng cụ thể. Giúp quản trị viên kiểm soát chi phí và thông báo kịp thời cho người dùng.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「AI利用アラート設定」 |
| 2 | アラートルール一覧 | テーブル | O | － | － | － | － | － | － | － | － | － | 設定済みルールのリスト |
| 3 | ルール追加・編集エリア | その他 | I/O | － | － | － | － | － | － | － | － | － | 以下はルールの登録用項目 |
| 4 | 通知トリガー(閾値) | コンボボックス | I/O | － | － | － | － | 〇 | － | 半角数字・% | － | － | 残り時間（時間/分 または %） |
| 5 | 通知先ツール | チェックボックス | I/O | － | － | － | － | 〇 | － | － | － | － | メール、Slack、Teams等 |
| 6 | 通知対象者 | チェックボックス | I/O | － | － | － | － | 〇 | － | － | － | － | 「管理者のみ」「対象ユーザー本人も含める」 |
| 7 | 通知頻度 | プルダウン | I/O | － | － | － | － | 〇 | － | － | － | － | 初回のみ、毎日、毎週 |
| 8 | ルール保存ボタン | ボタン | O | － | エラーなし | － | － | － | － | － | － | － | 設定したルールを一覧に追加・保存 |
| 9 | 戻るボタン | ボタン | O | － | － | － | － | － | － | － | － | － | ADMX-024へ戻る |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "AI Usage Alert Settings" |
| 2 | Alert Rules List | Table | O | - | - | - | - | - | - | - | - | - | List of configured alert rules |
| 3 | Rule Config Area | Other | I/O | - | - | - | - | - | - | - | - | - | Container for adding/editing rules |
| 4 | Notification Trigger | Combobox | I/O | - | - | - | - | 〇 | - | Alphanum / % | - | - | Threshold (e.g. 80% or 5 hours left) |
| 5 | Notification Tools | Checkbox | I/O | - | - | - | - | 〇 | - | - | - | - | Email, Slack, Teams, etc. |
| 6 | Target Recipients | Checkbox | I/O | - | - | - | - | 〇 | - | - | - | - | "Admin only", "Include User" |
| 7 | Frequency | Dropdown | I/O | - | - | - | - | 〇 | - | - | - | - | "Once", "Daily", "Weekly" |
| 8 | Save Rule Button | Button | O | - | No errors | - | - | - | - | - | - | - | Create or update rule |
| 9 | Back Button | Button | O | - | - | - | - | - | - | - | - | - | Return to ADMX-024 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Save Rule Button | Press | Execute API to create/update alert rule and refresh rules list. |
| 2 | Back Button | Press | Return to AI Usage Management (ADMX-024). |

## Validations
| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 |Trigger|Required|ADMX-028-ERR-01|Must define a trigger threshold.|
| 2 |Recipients|Required|ADMX-028-ERR-02|Must select at least one recipient type.|
## Processing Details

```plain
Initial display
  • Immediately after screen load:
    ○ Execute API request:
      ▪ Endpoint: /admin/members/ai-settings
      ▪ Method: GET
    ○ If successful:
      ▪ Populate "Alert Rules List" (ID: 2).

Interaction
  • Interaction: Selecting a rule from the list populates the "Rule Config Area" (ID: 3) for editing.

Action
  • Save Rule Button is pressed:
    ○ Execute API request:
      ▪ Endpoint: /admin/members/ai-settings
      ▪ Method: POST (Create) or PATCH (Update)
      ▪ Body: { "trigger": "...", "tools": [...], "recipients": [...], "frequency": "..." }
    ○ If successful:
      ▪ Refresh the rules list and clear the input area.
```
