# Luck Today App

今日の運勢を占うシンプルなウェブアプリです。名前と誕生日を入力して、今日の運勢をランダムに表示します。

## 機能

- 名前と誕生日を入力して運勢を占う
- 運勢は大吉、中吉、小吉、凶の4種類
- モダンなUI（shadcn/uiを使用）
- ダークモード対応（ただし一部色固定）

## 技術スタック

- **Frontend**: React + TypeScript + Vite
- **UI**: shadcn/ui + Tailwind CSS
- **Date Picker**: react-day-picker (shadcn/ui Calendar)
- **Build Tool**: Vite

## インストール

1. リポジトリをクローンします。
   ```bash
   git clone https://github.com/your-username/luck-today-app.git
   cd luck-today-app
   ```

2. 依存関係をインストールします。
   ```bash
   npm install
   ```

## 実行

開発サーバーを起動します。
```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

## ビルド

プロダクションビルドを作成します。
```bash
npm run build
```

## デプロイ

ビルドされたファイルは `dist` フォルダに生成されます。任意のホスティングサービスにデプロイしてください。

## ライセンス

MIT License