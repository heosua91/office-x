# UKET-009 - Call screen

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Call screen |

## Overview

Screen Name: Call screen
URI: /reception/call
Screen Overview: In case calling is needed, open connection screen with the person in charge. Guest only transmits audio, person in charge will use video (WebRTC).

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 担当者映像エリア | その他 | O | 通話接続成功時 | － | － | － | － | － | － | － | － | 担当者側のWebカメラ（映像）を表示する（F-104）。 |
| 2 | 担当者名・情報 | ラベル | O | 担当者情報が取得可能な場合 | － | － | － | － | － | － | － | － | 通話相手である担当者の名前・部署等を表示 |
| 3 | 案内メッセージ（来訪者側） | ラベル | O | － | － | － | － | － | － | － | － | － | 「※お客様の映像は送信されません（音声のみ）」等の説明を表示 |
| 4 | 音声入力ステータス | その他 | O | － | － | － | － | － | － | － | － | － | タブレットマイクからの音声入力を視覚的に表現するインジケーター（波形等） |
| 5 | 通話終了 | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で通話を強制終了し、受付完了フロー「UKET-010（案内地図とQRコード表示）」へ遷移する。（担当者側から切断された場合も自動遷移） |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Host video area | Other | O | Call connected | - | - | - | - | - | - | - | Display host camera (video) stream (F-104). |
| 2 | Host Name/Info | Label | O | If host data available | - | - | - | - | - | - | - | Display host name and department |
| 3 | Guide message | Label | O | - | - | - | - | - | - | - | - | "Your video is not transmitted (audio only)" |
| 4 | Audio input indicator | Other | O | - | - | - | - | - | - | - | - | Visual indicator (waveform) showing microphone active |
| 5 | End Call | Button | O | - | - | - | - | - | - | - | - | Disconnect call -> UKET-010. Also auto-transitions if host disconnects. |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | End Call | Press | Terminate WebRTC session and transition to UKET-010. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | No direct inputs needed. |

## Processing Details

```plain
Initial display
  • Request `navigator.mediaDevices.getUserMedia({ audio: true, video: false })` to acquire local microphone without camera.
  • Instantiate `RTCPeerConnection` with STUN/TURN servers.
  • Generate WebRTC Offer, and call POST /reception/calls/signal to send SDP payload to the host.
  • Display audio input waveform using Web Audio API (`AnalyserNode`) indicating mic activity.
  • Show text: "Your video is not transmitted (audio only)".

Interaction
  • Implement an `ontrack` event listener to capture the remote host's incoming video/audio stream and attach it to the hidden `<video>` element for the "Host video area" to autoplay.
  • Send local ICE candidates to the signal API as they are gathered.
  • Bind an `oniceconnectionstatechange` listener to detect network drops (`disconnected`, `failed`, `closed`).
  • If the host drops the call or the state indicates failure, gracefully destroy the `RTCPeerConnection`, stop local audio tracks, and auto-transition to UKET-010.

Action
  • [End Call] is pressed:
    ○ Stop all `MediaStreamTrack` instances (microphone).
    ○ Call `RTCPeerConnection.close()`.
    ○ Transition to UKET-010.
```
