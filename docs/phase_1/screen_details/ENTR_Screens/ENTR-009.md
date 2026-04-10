# ENTR-009 - In-Meeting (Recorded)

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | In-Meeting (Recorded) |

## Overview

Screen Name: In-Meeting (Recorded)
URI: /room/meeting
Screen Overview: The primary interface during an active, recorded meeting or sales negotiation. It provides document mirroring with laser pointer sync, emoji reactions, and real-time AI insights. A floating "AI Chat" allows users to query current or past meeting data. The host can pause recording or mark sections as "Confidential" to exclude them from AI-generated minutes. Mid-meeting device addition is supported via QR codes and confirmation codes.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | アナウンス/通知バー | ラベル | O | － | － | － | － | － | － | － | － | － | ヘッダー：録音開始のアナウンスやシステム通知の表示領域 |
| 1-1 | 会議名 | ラベル | O | － | － | － | － | － | － | － | － | － | ヘッダー：現在の会議名（件名）を表示 |
| 1-2 | LIVEステータス | アイコン | O | － | － | － | － | － | － | － | － | － | ヘッダー：参加者をアイコンで表示。録音中時は🔴表示、切断時はグレーアウト |
| 1-3 | 録音一時停止中表示 | ラベル | O | 録音一時停止中 | － | － | － | － | － | － | － | － | ヘッダー：主催者が一時停止ボタンを押下した際、全端末に「録音一時停止中」のバナーを表示 |
| 1-4 | 機密情報記録中表示 | ラベル | O | 機密情報モードON時 | － | － | － | － | － | － | － | － | ヘッダー：機密情報ボタンがONの際、全端末に「機密情報記録中（議事録対象外）」のバナーを表示 |
| 2 | 会議経過時間表示 | ラベル | O | － | － | － | mm:ss | － | － | － | － | － | ヘッダー：会議時間の表示・退出時間超過の場合は強調 |
| 3 | アジェンダ表示 | アコーディオン | O | － | － | － | － | － | － | － | リアルタイム要約＋発言ポイント | － | 左〜中央：アジェンダ別要約等を表示 |
| 4 | ToDoリスト | リスト | O | － | － | － | － | － | － | － | AI自動抽出ToDo | － | 右側：AIが自動抽出したToDoを表示 |
| 6 | リアクション | ボタン | I/O | マルチモードのみ | － | － | － | － | － | － | － | － | 画面右下：絵文字によるリアクション提供。※文字起こしの各行（テキスト）に対してではなく、画面全体へのリアクション。 |
| 7 | AI対話（フローティング） | その他 | I/O | マルチモードのみ | 企業AI利用上限未達 | － | － | － | － | － | － | － | 画面右上：音声/テキスト入力で質問。「当日」または「過去」を参照可能 |
| 7-1 | 表示切り替え【資料⇔要約/ToDo】 | ボタン | I/O | マルチモードのみ | － | － | － | － | － | － | － | － | 画面下段：資料共有と議事録表示のUI切り替え |
| 8 | 資料表示/共有 | その他 | O | マルチモードかつ<br>資料共有ON時 | － | － | － | － | － | － | － | － | 画面下段：共有データを全台へ表示するエリア。共有者のスワイプや指の動きをレーザーポインターとして同期 |
| 8-1 | 自律閲覧モード | トグルボタン | I | マルチモードのみ | ミラーリング表示時 | － | － | － | － | － | ミラーリング状態でも個人の手元で別ページを自由閲覧可能にする | － | － |
| 9 | 退出 | ボタン | I | 主催者端末のみ | － | － | － | － | － | － | － | － | 画面下部：これを押下することで全端末の会議セッションを終了し、ENTR-011へ移行する |
| 9-2 | 録音一時停止 | ボタン | I | 主催者端末のみ | 録音中 | － | － | － | － | － | － | － | 画面下部：押下で録音を一時停止し、全端末に「録音一時停止中」バナーを表示。再度押下で録音再開。休憩・雑談など記録自体が不要な場面で使用 |
| 9-3 | 機密情報 | トグルボタン | I | 主催者端末のみ | 録音中 | － | － | － | － | － | － | － | 画面下部：ON時は録音を継続しつつ該当区間を機密マーク。再押下でOFF（通常モードに復帰）。機密区間はAI要約・文字起こし生成時に自動除外され議事録には掲載されない。音声データ自体は保存される |
| 9-1 | 途中退出 | ボタン | I | マルチモードかつ<br>子機のみ | － | － | － | － | － | － | － | － | 画面下部：会議終了の退出ではなく、その子機の使用者だけが退出（マルチデバイス接続を終了）するためのボタン |
| 10 | 延長（15分） | ボタン | I | 主催者端末のみ | 次の予定と<br>被らない | － | － | － | － | － | － | － | カレンダーと連携し自動反映。次の予定や延長上限と被る場合はエラーで非活性 |
| 11 | 途中参加端末の追加 | ボタン | I/O | マルチモードかつ<br>主催者端末のみ | － | － | － | － | － | － | － | － | フッター等に配置。録音用スマホやマルチ表示用タブレットを追加するためのQRコードモーダルを起動 |
| 12 | 途中参加用QRコード表示 | モーダル | O | マルチモードかつ<br>主催者端末のみ | ID11押下後 | － | － | － | － | － | － | － | モーダル：途中参加用QRコードを表示するエリア |
| 13 | 途中参加用QRコード（録音用） | 画像 | O | マルチモードかつ<br>モーダル内表示 | － | － | － | － | － | － | － | － | モーダル内：録音用スマホ接続用QR。QR読取で途中からでも専用録音端末としてストリーム参加可能 |
| 13-1 | 確認コード表示（録音用） | ラベル | O | マルチモードかつ<br>モーダル内表示 | － | － | － | － | － | － | － | － | モーダル内：録音用QRコードに併記される確認コード（数字4〜6桁）。PCブラウザ等QRスキャン不可の場合に手動入力で接続可能 |
| 14 | 途中参加用QRコード（マルチ表示用） | 画像 | O | マルチモードかつ<br>モーダル内表示 | － | － | － | － | － | － | － | － | モーダル内：マルチ表示（資料閲覧）用タブレットを途中追加するためのQRコード |
| 14-1 | 確認コード表示（マルチ表示用） | ラベル | O | マルチモードかつ<br>モーダル内表示 | － | － | － | － | － | － | － | － | モーダル内：マルチ表示用QRコードに併記される確認コード（数字4〜6桁）。PCブラウザ等QRスキャン不可の場合に手動入力で接続可能 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Note |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Announcement/Notice Bar | Label | O | Header area for recording starts or system notices. |
| 1-1 | Meeting Name | Label | O | Displays current meeting subject. |
| 1-2 | LIVE Status | Icon | O | Shows participant icons. 🔴 for recording, gray for offline. |
| 1-3 | Recording Paused Banner | Label | O | Shown on all devices when the host pauses recording. |
| 1-4 | Confidential Recording Banner | Label | O | Shown on all devices when confidential mode is ON. |
| 2 | Elapsed Meeting Time | Label | O | Real-time meeting timer (mm:ss). Highlights if over time. |
| 3 | Agenda/Summary Display | Accordion | O | Left/Center: Real-time summary and speaker points per agenda. |
| 4 | ToDo List | List | O | Right: Automatically extracted tasks via AI. |
| 6 | Reaction Emoji | Button | I/O | Lower Right: Send emoji reactions to the entire screen. |
| 7 | AI Chat (Floating) | Other | I/O | Upper Right: Voice/Text questions to AI reference "Today" or "Past". |
| 7-1 | UI Switch [Docs ⇔ Summary] | Button | I/O | Footer: Toggle between document sharing and minutes view. |
| 8 | Document Sharing Area | Other | O | Footer: Area for mirrored documents with synchronized laser pointer. |
| 8-1 | Autonomous Browsing Mode | Toggle | I | Allows individuals to browse documents independently while mirroring is ON. |
| 9 | Exit | Button | I | Footer (Host): Ends the meeting session for everyone (Transitions to ENTR-011). |
| 9-2 | Pause Recording | Button | I | Footer (Host): Toggles recording pause state and displays/hides banner. |
| 9-3 | Confidential Mode | Toggle | I | Footer (Host): Tags recording segment as confidential (excluded from AI minutes). |
| 9-1 | Leave | Button | I | Footer (Attendees): Leave meeting without ending it for others. |
| 10 | Extend (15 mins) | Button | I | Footer (Host): Extend meeting if no following conflicts. |
| 11 | Add Device | Button | I/O | Footer (Host): Opens QR modal to add more tablets or phones mid-meeting. |
| 12 | Mid-meeting Join Modal | Modal | O | Displays QR codes for adding devices. |
| 13 | Join QR (Recording) | Image | O | For adding a smartphone as a recording stream mid-meeting. |
| 13-1 | Confirmation Code (Recording) | Label | O | 4-6 digit code for manual recorder connection. |
| 14 | Join QR (Display) | Image | O | For adding a tablet for document browsing mid-meeting. |
| 14-1 | Confirmation Code (Display) | Label | O | 4-6 digit code for manual display connection. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Reaction Emoji | Select | Posts a reaction event to the live meeting stream. |
| 2 | AI Chat | Input | Submits questions to AI via voice or text. |
| 3 | UI Switch | Press | Switches the layout between minutes and document sharing. |
| 4 | Pause Recording | Press | Pauses/Resumes the recording stream and syncs UI banner. |
| 5 | Confidential Mode | Toggle | Tags live segment as "Secret" for AI exclusion. |
| 6 | Extend (15 mins) | Press | Extends the meeting reservation via API. |
| 7 | Exit | Press | Ends meeting for all participants. |
| 8 | Leave | Press | Ends session only for the specific device. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Extend (15 mins) | Reservation | ENTR-009-ERR-01 | Cannot extend if another meeting starts within 2 minutes. |
| 2 | AI Chat | Usage Limit | SYS-000-ERR-02 | Disabled if company AI quota is reached. |
| 3 | ALL | Connection | ENTR-009-ERR-03 | Warning displayed if network connection is lost. |

## Processing Details

```plain
Initial display
  • Header: Display "Recording Started" notice. Status icons are 🔴.
  • Left/Center: Load Agendas and start empty real-time summary stream.
  • Right: Start empty ToDo list.
  • Footer: Host controls (Pause, Secret, Extend, Exit) are visible. Attendees see "Leave".
  • Real-time channel (WebSocket/SSE) is established.
    ○ API Call: GET /room/:id/live

Interaction
  • Real-time Summary (AI): As transcription progresses, AI updates the Agenda/Summary accordion.
  • ToDo Extraction: AI dynamically adds items to the Todo list as they are detected in speech.
  • Emoji Reactions: When clicked, the emoji floats across the screen for all participants.
    ○ API Call: POST /room/:id/event (event_type: 'reaction')
  • Document Mirroring: If a document is shared, touch coordinates (laser pointer) are synced via WebSocket.
  • Timer: Counter mm:ss updates every second. If time > end_time, color changes to red.

Action
  • "Pause Recording" button is pressed (Host):
    ○ API Call: POST /room/:id/event (event_type: 'pause')
    ○ Stop uploading audio stream from all recording devices.
    ○ Show "Recording Paused" banner on all tablets.

  • "Confidential Mode" toggle is flipped (Host):
    ○ API Call: POST /room/:id/event (event_type: 'secret_start')
    ○ Add "Secret" tag to the transcript segments until toggled OFF.
    ○ Show "Confidential Recording" banner.

  • "Extend (15 mins)" button is pressed (Host):
    ○ API Call: PATCH /room/:id/extend
    ○ If successful: Update reservation end time and reset timer highlighting.
    ○ If failed: Display Error Message [ENTR-009-ERR-01].

  • "Exit" button is pressed (Host):
    ○ API Call: POST /room/:id/event (event_type: 'meeting_finish')
    ○ Close recording streams and finalize transcript.
    ○ Transition all devices to ENTR-011.
```
