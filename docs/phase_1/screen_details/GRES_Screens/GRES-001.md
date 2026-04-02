# GRES-001 - Màn hình Select Date/Time

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-04-02 | 1 | New | Candidate Date/Time Selection Screen |

## Overview

Screen Name: Candidate Date/Time Selection
URI: /guest/reserve/step1
Screen Overview: Display company logo, show meeting format (Offline/Online - configured in OFX-003), enter number of participants if Offline, display smart candidate calendar (AND condition: host member availability × room availability), select Timezone.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 企業ロゴ画像 | 画像 | O | － | － | － | － | － | － | － | － | － | ホスト企業のロゴを表示 |
| 2 | 開催形式ラベル | ラベル | O | － | － | － | － | － | － | － | － | － | オフライン or オンライン（OFX-003での設定値） |
| 3 | 参加予定人数 | テキストボックス(数値) | I/O | オフライン時のみ | 参加人数 ≥ 1 | － | 整数 | 〇 | 最大2桁 | 整数 | 1以上 | − | オフライン形式の場合のみ入力可 |
| 4 | スマート候補カレンダー | カレンダー | I/O | － | − | − | − | 〇 | − | − | 過去日不可 | − | 参加者の空きとオフライン時は会議室の空き状況もANDで反映した候補日時を表示 |
| 5 | タイムゾーン選択 | ドロップダウン | I/O | − | − | − | − | 〇 | − | − | − | − | タイムゾーンを選択（例：Asia/Tokyo） |
| 6 | 次へ | ボタン | O | − | 必須入力済 | − | − | − | − | − | − | − | GRES-002へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Company logo | Image | O | - | - | - | - | - | - | - | - | Display host company's logo |
| 2 | Meeting format | Label | O | - | - | - | - | - | - | - | - | Offline or Online (set in OFX-003) |
| 3 | Number of participants | Textbox (Number) | I/O | Offline format only | - | - | Integer | Yes | Max 2 digits | Integer | 1 or more | - | Only available for Offline format |
| 4 | Smart candidate calendar | Calendar | I/O | - | - | - | - | Yes | - | - | Future dates only | - | Derived from AND of host availability × room availability (Offline only) |
| 5 | Timezone | Dropdown | I/O | - | - | - | - | Yes | - | - | - | - | Select timezone (e.g. Asia/Tokyo) |
| 6 | Next | Button | O | - | All required fields filled | - | - | - | - | - | - | - | Go to GRES-002 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Number of participants | Input | Update count. Trigger `GET /guest/availability` re-fetch if count changes (room capacity constraint) |
| 2 | Smart candidate calendar | Select | Choose requested date, time and timezone slot |
| 3 | Timezone | Select | Update timezone context; re-render calendar in selected timezone |
| 4 | Next | Press | Store selections in state/session and navigate to GRES-002 |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Number of participants | Required, Min value | ERR-CMN-001 | Required when Offline; must be integer ≥ 1 |
| 2 | Smart candidate calendar | Required | ERR-CMN-001 | At least one time slot must be selected |
| 3 | Timezone | Required | ERR-CMN-001 | A timezone must be selected before proceeding |

## Processing Details

```plain
Initial display
  • Resolve the smart URL session: extract invite_token from URL and call `GET /guest/availability` to retrieve available slots.
  • Parse the meeting format (Offline/Online) from the token metadata and conditionally display the participants input.
  • Display the host company logo from the token's company data.
  • Pre-populate the Timezone dropdown with browser locale detection as default.

Interaction
  • If format = Offline: show "Number of participants" field.
    ○ On change: re-call `GET /guest/availability?participants_count=N` to filter rooms by capacity.
  • If format = Online: hide the participants field entirely.
  • Calendar only shows time slots returned by the availability API (available = true).
  • Enable "Next" button only when: (calendar slot selected) AND (timezone selected) AND (participants filled if Offline).

Action
  • "Next" button pressed:
    ○ Persist selected slot, timezone, participant count, and format to local state/context.
    ○ Navigate to GRES-002 without calling any API yet.
```
