
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ESモジュールで __dirname を再現
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// 環境変数 PORT (デフォルト 8080) を使用
const PORT = process.env.PORT || 8080;

// ビルド済みの静的ファイル (dist) を配信
app.use(express.static(path.join(__dirname, 'dist')));

// SPA対応: 全てのパスで index.html を返す
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
