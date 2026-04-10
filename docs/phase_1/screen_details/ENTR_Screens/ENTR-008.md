# ENTR-008 - Room Start - Recording Setup

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-09 | 1 | New | Room Start - Recording Setup |

## Overview

Screen Name: Room Start - Recording Setup
URI: /room/consent
Screen Overview: A final preparation screen before the meeting begins. The host decides whether to record the session. If "Record" is enabled, a consent popup is displayed on all participant devices to ensure compliance with privacy policies. Recording only proceeds if all participants agree.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 録音する | トグルボタン | I | 主催者端末のみ | － | － | － | － | － | － | － | － | 商談内容を録音するかどうかのフラグを選択。デフォルトはプランや企業設定に依存 |
| 2 | 入室 | ボタン | I/O | 主主催者端末のみ | － | － | － | － | － | － | － | － | 入室処理を実行。「録音なし」の場合はENTR-010へ即時遷移。「録音あり」の場合は全端末に録音開始ポップアップを表示 |
| 3 | 録音開始の確認 | モーダル | O | マルチモードかつ録音フラグがON&<br>入室ボタン押下後 | － | － | － | － | － | － | － | － | 子機端末のみ表示（企業ごとのカスタマイズ文言を表示） |
| 3-1 | 利用規約本文 | テキストエリア | O | マルチモードかつ<br>モーダル内表示 | － | － | － | － | － | － | － | － | 利用規約のテキストを管理画面から動的に取得し、スクロール可能なエリアに表示する。 |
| 4 | 同意して参加 | ボタン | I/O | モーダル内表示 | － | － | － | － | － | － | － | － | 各参加者が押下することで、個別にストリームを開始。全員同意で「録音用QR表示」モーダル（マルチモード時）またはENTR-009へ（シングルモード時） |
| 5 | 拒否して参加 | ボタン | I/O | モーダル内表示 | － | － | － | － | － | － | － | － | 一人でも拒否すると、録音なしモード(ENTR-010)で全体開始 |
| 6 | 録音用QR表示 | モーダル | O | 全員が録音同意後<br>（マルチモードのみ表示） | － | － | － | － | － | － | － | － | 専用の録音スマホを接続するための案内モーダル |
| 7 | 録音用QRコード | 画像 | O | マルチモードかつ<br>モーダル内表示 | － | － | － | － | － | － | － | － | モーダル内：録音用スマホ接続用QR。QR読取で専用録音端末として追加可能 |
| 7-1 | 確認コード表示（録音用） | ラベル | O | マルチモードかつ<br>モーダル内表示 | － | － | － | － | － | － | － | － | モーダル内：録音用QRコードに併記される確認コード（数字4〜6桁）。PCブラウザ等QRスキャン不可の場合に手動入力で接続可能 |
| 8 | 会議開始 | ボタン | I/O | モーダル内表示 | － | － | － | － | － | － | － | － | モーダル内：スマホ接続完了後、または不要な場合に押下してENTR-009へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Note |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Record Toggle | Toggle | I | Host selects whether to record the meeting. Default depends on plan/settings. |
| 2 | Enter Room | Button | I/O | Transition to ENTR-010 if Recording is OFF, or trigger consent modal if ON. |
| 3 | Recording Consent Modal | Modal | O | Displayed on child devices if Recording is set to ON. |
| 3-1 | Terms of Use Content | Textarea | O | Scrollable area displaying terms fetched from the server. |
| 4 | I Agree & Join | Button | I/O | Participant agrees to recording. |
| 5 | I Decline & Join | Button | I/O | If any participant declines, the meeting starts without recording (ENTR-010). |
| 6 | Recording QR Modal | Modal | O | Displayed in multi-device mode after everyone agrees. |
| 7 | Recording QR Code | Image | O | Scan to connect a dedicated mobile recording device. |
| 7-1 | Confirmation Code (Recording) | Label | O | 4-6 digit code for manual connection (if QR scanning is unavailable). |
| 8 | Start Meeting | Button | I/O | Final transition to ENTR-009 after recording device is connected or skipped. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Record Toggle | Toggle | Sets the recording preference. |
| 2 | Enter Room | Press | Triggers the consent flow or starts the meeting. |
| 3 | I Agree & Join | Press | Registers consent and waits for others. |
| 4 | I Decline & Join | Press | Forces the meeting into non-recording mode. |
| 5 | Start Meeting | Press | Final confirmation to enter the recorded meeting (ENTR-009). |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Record Toggle | Permission | ENTR-008-ERR-01 | Microphone consent must be granted at the browser/OS level. |

## Processing Details

```plain
Initial display
  • The "Record Toggle" is visible only to the Host.
  • The default state of the toggle follows company policies (e.g., "Always Record" if Pro plan).
  • All child devices are in a "Wait" state.

Interaction
  • If Host switches the toggle, the status is updated globally via WebSocket.

Action
  • Host presses "Enter Room":
    ○ If "Record Toggle" is OFF:
      - Transition all devices to ENTR-010.
    ○ If "Record Toggle" is ON:
      - API Call: POST /room/:id/consent (Initiate consent flow)
      - Show "Recording Consent Modal" on all participant tablets.

  • Participant presses "I Agree & Join":
    ○ API Call: POST /room/:id/consent (Record individual consent)
    ○ If everyone has agreed:
      - If Multi-device mode: Display "Recording QR Modal" for host device connection.
      - If Single-mode: Transition to ENTR-009.

  • Participant presses "I Decline & Join":
    ○ Transition all devices to ENTR-010 (No Recording mode).
    ○ Show notification: "Meeting will proceed without recording due to participant request."

  • Host presses "Start Meeting" (from Recording QR Modal):
    ○ API Call: POST /room/:id/start
    ○ Transition all devices to ENTR-009.
```
