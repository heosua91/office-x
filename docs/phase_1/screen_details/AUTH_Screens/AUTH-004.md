# AUTH-004 - Reset Email Sent

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-12 | 1 | New | Reset Email Sent |

## Overview

Screen Name: Reset Email Sent
URI: /auth/password-reset/sent
Screen Overview: Display a success message indicating the password reset URL has been sent.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「メール送信完了」 |
| 2 | 説明テキスト | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「再設定メールを送信しました。メール内のリンクから再設定を行ってください。」 |
| 3 | サインインに戻る | リンク | I | － | － | － | － | － | － | － | － | － | － | 押下時、AUTH-001へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Email Sent Success" |
| 2 | Description Text | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "A reset email has been sent. Please reset from the link in the email." |
| 3 | Back to Sign In | Link | I | - | - | - | - | - | - | - | - | - | - | Press to transition to AUTH-001 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | Back to Sign In | Press | Navigate back to the Sign In screen (AUTH-001). |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | - |

## Processing Details

```plain
初期表示 / Initial display
  • Displays simple confirmation text explaining that the reset link has been dispatched.

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • Back to Sign In link (ID: 3) is pressed:
    ○ Transition to AUTH-001.
```
