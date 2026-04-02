# UKET-004 - Scan reservation QR code

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Scan reservation QR code |

## Overview

Screen Name: Scan reservation QR code
URI: /reception/checkin/qr
Screen Overview: Scan reservation QR code (QR code issued at GRES-004)

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 案内メッセージ | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「お手元の予約QRコードをカメラにかざしてください」 |
| 2 | カメラ映像エリア | その他 | O | － | フロントカメラ起動時 | － | － | － | － | － | － | － | タブレットのフロントカメラの映像をリアルタイム表示する。 |
| 3 | 読取ガイド枠 | その他 | O | － | － | － | － | － | － | － | － | － | 画面中央付近にQRコードを合わせるためのガイド（枠線）を表示 |
| 4 | エラーメッセージ | ラベル | O | 読取失敗時、または無効なQRコード時 | － | － | － | － | － | － | － | － | 「無効なQRコードです」等のエラーを表示。 |
| 5 | 再読込 | ボタン | O | エラー発生時 | － | － | － | － | － | － | － | － | カメラ読取処理を再開する |
| 6 | 戻る | ボタン | O | － | － | － | － | － | － | － | － | － | 押下で「UKET-003（TOP画面）」へ遷移する。※成功時（F-099）は自動的に「UKET-010（案内地図とQRコード表示）」へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Guide message | Label | O | - | - | - | - | - | - | - | - | Fixed text "Hold reservation QR over the camera" |
| 2 | Camera image area | Other | O | - | Front camera active | - | - | - | - | - | - | Show real-time front camera feed |
| 3 | Reading guide frame | Other | O | - | - | - | - | - | - | - | - | Show frame in center to align QR |
| 4 | Error message | Label | O | Failed or invalid QR | - | - | - | - | - | - | - | E.g., "Invalid QR code" |
| 5 | Reload | Button | O | Error occurred | - | - | - | - | - | - | - | Resume QR scanning |
| 6 | Return | Button | O | - | - | - | - | - | - | - | - | Go to UKET-003. Auto-navigate to UKET-010 on success (F-099) |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Camera image area | Scan | Continuously scan for valid QR. Trigger `POST /reception/check-in/qr` upon successful capture. |
| 2 | Reload | Press | Restart camera scanning process after error. |
| 3 | Return | Press | Transition to UKET-003 |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | QR Data | Format | ERR-QR-001 | Local check if the scanned payload is corrupt before sending. |

## Processing Details

```plain
Initial display
  • Request `MediaStream` permissions and initialize the tablet's front-facing camera via `navigator.mediaDevices.getUserMedia({ video: true })`.
  • Display the camera feed inside the guide frame section. Ensure the stream is responsive and mirrors correctly if needed.
  • Guide user to scan.

Interaction
  • Execute continuous background scanning by drawing video frames to a hidden HTML `<canvas>` and parsing them (e.g., via `jsQR` or a native barcode SDK).
  • Implement throttling (e.g., parse every 100ms) to ensure the UI thread does not freeze.
  • If an error is caught in scanning algorithms, pause the camera feed, display error label, and show the 'Reload' button.
  • CRITICAL: Always implement a cleanup hook (`MediaStreamTrack.stop()`) when leaving this screen or destroying the component to prevent memory leaks and hardware locks.

Action
  • QR scanned successfully:
    ○ Pause frame analysis.
    ○ Invoke POST /reception/check-in/qr API with the extracted `qr_code_hash`.
    ○ If successful: Ensure camera is completely turned off and track stopped, then transition to UKET-010.
    ○ If failed: Display the "Invalid QR code" message, and prompt retry via the Reload button.
```
