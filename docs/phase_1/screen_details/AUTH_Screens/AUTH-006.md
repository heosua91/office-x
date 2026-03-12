# AUTH-006 - Password Reset Complete

## History

| No | In charge | Date | Version | Category | Content |
|---|---|---|---|---|---|
| 1 | ALB | 2026-03-12 | 1 | New | Password Reset Complete |

## Overview

Screen Name: Password Reset Complete
URI: /auth/password-reset/complete
Screen Overview: Display a success message indicating that the new password has been successfully set.

## Item Definition (JP)

| ID | 項目名 | 種別 | I/O | 表示条件 | 活性条件 | 入力項目定義<br>超過時表示 | 入力項目定義<br>出力フォーマット | 入力項目定義<br>必須 | 入力項目定義<br>桁数 | 入力項目定義<br>文字種 | 入力項目定義<br>その他の単項目チェック | 入力項目定義<br>相関チェック | 備考 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「パスワード変更完了」 |
| 2 | 説明テキスト | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「パスワードの変更が完了しました。<br>新しいパスワードでログインしてください。」 |
| 3 | サインイン画面へ | ボタン | I | － | － | － | － | － | － | － | － | － | － | 押下時、AUTH-001へ遷移 |

## Item Definition (EN)

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Screen Title | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Password Change Complete" |
| 2 | Description Text | Label | O | - | - | - | - | - | - | - | - | - | Fixed text "Your password has been changed. Please log in with your new password." |
| 3 | To Sign In | Button | I | - | - | - | - | - | - | - | - | - | - | Press to transition to AUTH-001 |

## Actions

| No | Item Name | Action | Function |
|---|---|---|---|
| 1 | To Sign In | Press | Navigate to the Sign In screen (AUTH-001). |

## Validations

| No | Item Name | Constraint type | Message ID | Note |
|---|---|---|---|---|
| - | - | - | - | - |

## Processing Details

```plain
初期表示 / Initial display
  • Displays celebration/confirmation message indicating the password was successfully reset.

画面更新時 / Interaction
  • None.

アクション発生時 / Action
  • To Sign In button (ID: 3) is pressed:
    ○ Transition to AUTH-001.
```
