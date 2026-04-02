# GRES-004 - Hoàn tất đăng ký

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-02 | 1 | New | Registration Complete Screen |

## Overview

Screen Name: Registration Complete
URI: /guest/reserve/complete
Screen Overview: Display booking completion. Automatically register into host's calendar. Offline: show generated QR Code and Booking Code. Online: show meeting URL (or host's custom message). Send confirmation email (containing the GRES-005 document management URL). Show guidance to upload documents via the dedicated URL in the confirmation email.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 完了メッセージ | ラベル | O | − | − | − | − | − | − | − | − | − | 「予約が完了しました」 |
| 2 | QRコード画像 | 画像 | O | オフライン形式時 | − | − | − | − | − | − | − | − | 受付チェックイン用のQRコード |
| 3 | 予約番号（Booking Code） | ラベル | O | オフライン形式時 | − | − | − | − | − | − | − | − | 手動入力用の予約番号 |
| 4 | オンライン会議URL | リンク | O | オンライン時 & URL自動生成ON | − | − | − | − | − | − | − | − | Google Meet / Teams等のURL |
| 5 | ホストからのメッセージ | ラベル | O | オンライン時 & URL自動生成OFF | − | − | − | − | − | − | − | − | ホストが事前に設定した案内文 |
| 6 | 資料アップロード案内文 | ラベル | O | − | − | − | − | − | − | − | − | − | 「確認メール内のURLより資料をアップロードいただけます」 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Completion Message | Label | O | - | - | - | - | - | - | - | - | "Booking Complete" |
| 2 | QR Code Image | Image | O | Offline format | - | - | - | - | - | - | - | Used for reception check-in (UKET-004) |
| 3 | Booking Code (PIN) | Label | O | Offline format | - | - | - | - | - | - | - | Used for manual code input (UKET-005) |
| 4 | Online Meeting URL | Link | O | Online format & URL auto-gen ON | - | - | - | - | - | - | - | Link to Google Meet / Teams |
| 5 | Custom Host Message | Label | O | Online format & URL auto-gen OFF | - | - | - | - | - | - | - | Pre-configured message by the host |
| 6 | Document Upload Notice | Label | O | - | - | - | - | - | - | - | - | Inform guest to use dedicated URL in confirmation email to upload docs |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Online Meeting URL | Click | Open the meeting URL in a new browser tab |
| 2 | (Email link) | - | Guest uses the dedicated URL inside the confirmation email to reach GRES-005 for document management |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | (Screen) | Read-only | - | This is a confirmation screen only; no data entry |

## Processing Details

```plain
Initial display
  • Render success completion message.
  • Based on the API response from `POST /guest/reserve` (previously called from GRES-003):
    ○ If Offline format:
      - Render QR Code from `qr_code_hash` (encode and display as scannable QR).
      - Display `booking_code` as the Booking Code PIN.
    ○ If Online format & auto URL generation ON:
      - Display `meeting_url` as a clickable link.
    ○ If Online format & auto URL generation OFF:
      - Display the host's pre-configured custom message.
  • Always display the document upload notice informing the guest that the confirmation email contains a dedicated URL for future document management.

Background (triggered by API)
  • Backend processes initiated by the `POST /guest/reserve` call:
    ○ Register event into the host's Google/Outlook Calendar.
    ○ Send confirmation email to the guest (and all companions), which contains:
      - Booking summary (date, time, format, location or URL)
      - Dedicated document management link (→ GRES-005)

Interaction
  • Static display. No forms or inputs present on this screen.
  • If Online: the meeting URL link opens in a new tab onClick.
  • The QR Code image should be large and clear enough for scanning by a camera.
```
