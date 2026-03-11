# Screens Input

## AUTH-001

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | － | － | － | 固定文言「サインイン」 |
| 2 | "ログインID

(メールアドレス)" | テキストボックス | I | － | － | － | － | 〇 | Max 255 | 半角英数記号 | メールアドレス形式 | － | |
| 3 | パスワード | テキストボックス | I | － | － | － | ●●● (伏せ字) | 〇 | 8-32 | 半角英数記号 | － | － | |
| 4 | パスワードを表示 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ONの場合、ID:3の伏せ字を解除 |
| 5 | ログイン状態を保持 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ONの場合、セッション有効期限延長 |
| 6 | ログイン | ボタン | I | － | 必須入力済 | － | － | － | － | － | － | DB認証照合 | 押下時、ローディング表示 |
| 7 | パスワードを忘れた方 | リンク | I | － | － | － | － | － | － | － | － | － | 押下時、AUTH-003へ遷移 |
| 8 | エラーメッセージ | ラベル | O | 認証失敗時 | － | － | 赤文字 | － | － | － | － | － | 初期表示は非表示 |

## AUTH-002

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 固定文言「TNG管理サインイン」 |
| 2 | 管理用アカウントID | テキストボックス | I | － | － | － | － | 〇 | Max 50 | 半角英数記号 | － | － | |
| 3 | パスワード | テキストボックス | I | － | － | － | ●●● (伏せ字) | 〇 | 8-32 | 半角英数記号 | － | － | |
| 4 | パスワードを表示 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ONの場合、ID:3の伏せ字を解除 |
| 5 | ログイン | ボタン | I | － | 必須入力済 | － | － | － | － | － | － | DB認証照合 | 押下時、認証API実行 |
| 6 | エラーメッセージ | ラベル | O | 認証失敗時 | － | － | 赤文字 | － | － | － | － | － | 初期表示は非表示 |

## AUTH-003

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 固定文言「パスワードリセット」 |
| 2 | 説明テキスト | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 登録済みのメールアドレスを入力 |
| 3 | メールアドレス | テキストボックス | I | － | － | － | － | 〇 | Max 255 | 半角英数記号 | メールアドレス形式 | － | DB: users.email |
| 4 | リセット実行 | ボタン | I | － | 入力済 | － | － | － | － | － | － | DB存在確認 | 押下後、メール送信しAUTH-004へ遷移 |
| 5 | ログインへ戻る | リンク | I | － | － | － | － | － | － | － | － | － | AUTH-001へ遷移 |
| 6 | エラーメッセージ | ラベル | O | 送信失敗時 | － | － | 赤文字 | － | － | － | － | － | 該当メアドなし等の場合 |

## AUTH-004

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 固定文言「送信完了」 |
| 2 | 完了メッセージ | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 「初期化パスワードを送信しました。」 |
| 3 | ログイン画面へ | ボタン | I | － | － | － | － | － | － | － | － | － | AUTH-001へ遷移 |

## AUTH-005

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 固定文言「パスワード設定」 |
| 2 | 現在のパスワード | テキストボックス | I | 再設定時 | － | － | ●●● | 〇 | － | 半角英数記号 | － | DB照合 | 初期パスワード等を入力 |
| 3 | 新しいパスワード | テキストボックス | I | － | － | － | ●●● | 〇 | 8-32 | 半角英数記号 | 英数混在必須 | － | HTML type="password" |
| 4 | パスワード強度 | その他 | O | 入力時 | － | － | － | － | － | － | － | － | パスワード強度推定 |
| 5 | 確認用パスワード | テキストボックス | I | － | － | － | ●●● | 〇 | 8-32 | 半角英数記号 | － | ID:3と一致 | HTML type="password" |
| 6 | パスワードを表示 | チェックボックス | I | － | － | － | － | － | － | － | － | － | ID:2,3,5の伏せ字解除 |
| 7 | 設定変更 | ボタン | I | － | 全項目入力済 | － | － | － | － | － | － | － | 押下後、AUTH-006へ遷移 |
| 8 | エラーメッセージ | ラベル | O | エラー時 | － | － | 赤文字 | － | － | － | － | － | 不一致、強度不足等 |

## AUTH-006

| ID | Item Name | Type | I/O | Display conditions | Active conditions | Over display | Output format | Required | Character length | Character type | Single item check | Correlation check | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 画面タイトル | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 固定文言「設定完了」 |
| 2 | 完了メッセージ | ラベル | O | － | － | － | － | － | － | 全角 | － | － | 「パスワードの設定が完了しました。」 |
| 3 | サインイン画面へ | ボタン | I | － | － | － | － | － | － | － | － | － | 押下時、AUTH-001へ遷移 |