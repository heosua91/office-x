# UKET-001 - Enter Tablet ID & Password

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-27 | 1 | New | Enter Tablet ID & Password |

## Overview

Screen Name: Enter Tablet ID & Password
URI: /reception/auth
Screen Overview: Perform login to identify the company, requires login once a month

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「受付タブレット サインイン」 |
| 2 | サインイン案内メッセージ | ラベル | O | － | － | － | － | － | － | － | － | － | セキュリティ維持のため月1回の再ログインが必要です。 |
| 3 | タブレットID | テキストボックス | I | － | － | － | － | 〇 | Max 255 | 半角英数記号 | － | － | 受付タブレット固有のIDを入力 |
| 4 | パスワード | テキストボックス | I | － | － | － | 入力文字をマスク（＊など） | 〇 | Max 255 | 半角英数記号 | － | － | － |
| 5 | サインイン | ボタン | O | － | ID・パスワードが入力されていること | － | － | － | － | － | － | － | クリックで認証API（F-096）を実行し、成功すれば永続トークンを発行・保存して「UKET-002」へ遷移する |
| 6 | エラーメッセージ | ラベル | O | 認証失敗時 | － | － | － | － | － | － | － | － | ログイン失敗時にエラーメッセージを表示する |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character type | Single item check | Correlation check | Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Screen title | Label | O | - | - | - | - | - | - | - | - | Fixed text "Reception Tablet Sign In" |
| 2 | Sign-in guide message | Label | O | - | - | - | - | - | - | - | - | "Relogin is required once a month to maintain security." |
| 3 | Tablet ID | Textbox | I | - | - | - | - | Yes | Max 255 | Half-width alphanumeric/symbols | - | - | Enter unique tablet ID |
| 4 | Password | Textbox | I | - | - | - | Mask input (* etc) | Yes | Max 255 | Half-width alphanumeric/symbols | - | - | - |
| 5 | Sign in | Button | O | - | ID and password are entered | - | - | - | - | - | - | Click to execute authentication API (F-096). On success, issue/save persistent token and transition to UKET-002 |
| 6 | Error message | Label | O | Authentication fails | - | - | - | - | - | - | - | Show error on failure |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Sign in | Press | Trigger `POST /reception/auth`. Upon success, save device token and transition to UKET-002. |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| 1 | Tablet ID | Required | MSG-ERR-001 | Frontend check |
| 2 | Password | Required | MSG-ERR-001 | Frontend check |

## Processing Details

```plain
Initial display
  • Display input fields for Tablet ID and Password.
  • Disable "Sign in" button initially.

Interaction
  • Enable "Sign in" button when both Tablet ID and Password are not empty.

Action
  • [Sign in] button is pressed:
    ○ Validate tablet ID and password inputs (required).
    ○ Call POST /reception/auth API.
    ○ If successful: Save the persistent token and transition to UKET-002, show success message.
    ○ If failed: Display the error message label.
```
