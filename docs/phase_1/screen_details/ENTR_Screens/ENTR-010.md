# ENTR-010 - In-Meeting (No Recording)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | In-Meeting (No Recording) |

## Overview

Screen Name: In-Meeting (No Recording)
URI: /room/meeting
Screen Overview: The meeting interface used when audio recording is disabled. It provides functions for non-verbal communication (reactions), document mirroring with laser pointer sync, and meeting management. Manual ToDo list entry is supported, as AI automatic extraction is not available without recording. The floating "AI Chat" remains accessible for querying past data.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 会議名 | ラベル | O | － | － | － | － | － | － | － | － | － | ヘッダー：現在の会議名（件名）を表示 |
| 1-1 | LIVEステータス | アイコン | O | － | － | － | － | － | － | － | － | － | ヘッダー：参加者をアイコンで表示。切断時は通知 |
| 1-2 | 会議経過時間表示 | ラベル | O | － | － | － | mm:ss | － | － | － | － | － | ヘッダー：会議時間の表示・退出時間超過の場合は強調 |
| 2 | アジェンダ表示 | アコーディオン | O | － | － | － | － | － | － | － | リアルタイム要約＋発言ポイント | － | 左〜中央：アジェンダ別要約等を表示（必要に応じて手動入力や静的表示） |
| 2-1 | ToDoリスト | リスト | O | － | － | － | － | － | － | － | 手動入力のみ | － | 右側：ToDoを手動入力・管理する。録音なしのためAI自動抽出は行わない。 |
| 3 | リアクション | ボタン | I/O | マルチモードのみ | － | － | － | － | － | － | － | － | 画面右下：絵文字によるリアクション提供。※文字起こしの各行（テキスト）に対してではなく、画面全体へのリアクション。 |
| 4 | AI対話（フローティング） | その他 | I/O | マルチモードのみ | 企業AI利用上限未達 | － | － | － | － | － | － | － | 画面右上：音声/テキスト入力で質問。「当日」または「過去」を参照可能 |
| 4-1 | 表示切り替え【資料⇔チャット等】 | ボタン | I/O | マルチモードのみ | － | － | － | － | － | － | － | － | 画面下段：資料共有とチャット等の表示のUI切り替え |
| 5 | 資料表示/共有 | その他 | O | マルチモードかつ<br>資料共有ON時 | － | － | － | － | － | － | － | － | 画面下段：共有データを全台へ表示するエリア。共有者のスワイプや指の動きをレーザーポインターとして同期 |
| 5-1 | 自律閲覧モード | トグルボタン | I | マルチモードのみ | ミラーリング表示時 | － | － | － | － | － | ミラーリング状態でも個人の手元で別ページを自由閲覧可能にする | － | － |
| 6 | 退出 | ボタン | I | 主催者端末のみ | － | － | － | － | － | － | － | － | 画面下部：これを押下することで全端末の会議セッションを終了し、ENTR-011へ移行する |
| 7 | 延長（15分） | ボタン | I | 主催者端末のみ | 次の予定と<br>被らない | － | － | － | － | － | － | － | カレンダーと連携し自動反映。次の予定や延長上限と被る場合はエラー表示 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Note |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Meeting Name | Label | O | Header: Displays current meeting subject. |
| 1-1 | LIVE Status | Icon | O | Shows participant icons and connection status. |
| 1-2 | Elapsed Meeting Time | Label | O | Timer (mm:ss). Highlights in red if over time. |
| 2 | Agenda/Summary Area | Accordion | O | Left/Center: Displays agendas. Manual entry or static view based on settings. |
| 2-1 | ToDo List | List | O | Right: Area for manual task entry (No AI auto-extraction). |
| 3 | Reaction Emoji | Button | I/O | Lower Right: Floating emoji feedback for all participants. |
| 4 | AI Chat (Floating) | Other | I/O | Upper Right: Query AI via text/voice for past context. |
| 4-1 | UI Switch [Docs ⇔ Chat] | Button | I/O | Footer: Toggle between shared data and chat/notes view. |
| 5 | Document Sharing Area | Other | O | Footer: Mirrored documents area with laser pointer sync. |
| 5-1 | Autonomous Browsing Mode | Toggle | I | Switch to independent document viewing. |
| 6 | Exit | Button | I | Footer (Host): Ends the session and transitions to ENTR-011. |
| 7 | Extend (15 mins) | Button | I | Footer (Host): Extend reservation via API if available. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Reaction Emoji | Select | Posts a reaction event to the meeting stream. |
| 2 | ToDo List | Input | Allows users to manually add or complete tasks. |
| 3 | Extend (15 mins) | Press | Extends the meeting reservation via API. |
| 4 | Exit | Press | Ends the meeting for everyone. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Extend (15 mins) | Reservation | ENTR-009-ERR-01 | Cannot extend if another meeting starts within 2 minutes. |
| 2 | ALL | Connection | ENTR-009-ERR-03 | Warning if network is disconnected. |

## Processing Details

```plain
Initial display
  • Header: Display "Recording: OFF". Timer starts from mm:ss based on start time.
  • Left/Center: Load static agendas from the meeting invitation.
  • Right: Render empty manual ToDo list.
  • Footer: Host controls (Extend, Exit) are visible.
  • WebSocket channel established for real-time reactions and mirroring.

Interaction
  • Manual ToDo: Users can type a task description and press Enter to save.
    ○ API Call: POST /room/:id/event (event_type: 'todo_manual')
  • Emoji Reactions: Handled exactly as in ENTR-009.
  • Document Mirroring: Handled exactly as in ENTR-009.

Action
  • "Extend (15 mins)" button is pressed (Host):
    ○ API Call: PATCH /room/:id/extend
    ○ If successful: Update reservation and reset timer highlighting.

  • "Exit" button is pressed (Host):
    ○ API Call: POST /room/:id/event (event_type: 'meeting_finish')
    ○ Transition all devices to ENTR-011.
```
