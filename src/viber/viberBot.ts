import { Bot, Events } from 'viber-bot';

const realTalkBot = new Bot({
  authToken: process.env.VIBER_API_KEY as string,
  name: 'RealTalk',
});

realTalkBot.on(Events.MESSAGE_RECEIVED, (message, response) => {
  response.send('REALTALK: ' + message);
});

realTalkBot.onSubscribe((response) =>
  console.log(`Subscribed: ${response.userProfile.name}`)
);

export default realTalkBot;
