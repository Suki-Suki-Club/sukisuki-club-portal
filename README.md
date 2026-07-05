# sukisuki.club ポータル

「蓮ノ空のこと好き好きクラブのみなさん」のためのファンサイトポータル。
https://sukisuki.club のルートドメインで公開する、`Suki-Suki-Club` オーガナイゼーションの玄関ページです。

『ラブライブ！蓮ノ空女学院スクールアイドルクラブ』の非公式ファンサイトであり、公式とは一切関係ありません。

## 構成

ビルド不要の純静的サイトです。

```
public/
├── index.html   # ページ本体(全コンテンツ)
├── styles.css   # スタイル
└── favicon.svg  # 蓮の花のファビコン(自作SVG)
```

デザインコンセプトは「第1章の一日」。ページ全体をひとつの空に見立て、
スクロールとともに朝(103期の始まり)から夕暮れ・夜(第2章を待つ)へ降りていきます。
詳細は `docs/superpowers/specs/` の設計書を参照してください。

## 開発

```bash
npm install
npm run dev      # wrangler dev でローカル確認
```

## デプロイ

Cloudflare Workers(静的アセット配信)。`main` ブランチへの push で GitHub Actions
(`.github/workflows/deploy.yml`)が `wrangler deploy` を実行します。

- リポジトリシークレット `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` が必要です
- 設定は `wrangler.jsonc`(カスタムドメイン `sukisuki.club` を割当)
- 手動デプロイは `npm run deploy`(要 Cloudflare 認証)

## 掲載サイト

| サイト | URL |
|---|---|
| スクステMyPick | https://skst-mypick.sukisuki.club |
| Link! Like! デッキビルダー | https://link-like-essentials.vercel.app |

掲載サイトを追加する場合は `public/index.html` の「ファンサイト」セクションにカードを1枚追加してください。
