import express from 'express';
import realTalkBot from './src/viber/viberBot';
const app = express();

app.use(express.json());

app.use(realTalkBot.middleware());

app.get('/', function (req, res) {
  res.status(200).json({ message: 'Hello' });
});

const port = process.env.PORT || 3000;
const webhookUrl = process.env.WEBHOOK_URL;

if (!webhookUrl) console.warn('NO WEBHOOK URL FOR BOT');

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  if (webhookUrl) realTalkBot.setWebHook(webhookUrl);
  else {
    console.error('NO WEBOOK URL FOR BOT!!!');
  }
});
