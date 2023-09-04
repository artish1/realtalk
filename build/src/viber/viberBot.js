"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viber_bot_1 = require("viber-bot");
const realTalkBot = new viber_bot_1.Bot({
    authToken: process.env.VIBER_API_KEY,
    name: 'RealTalk',
    avatar: 'http://viber.com/avatar.jpg',
});
realTalkBot.on(viber_bot_1.Events.MESSAGE_RECEIVED, (message, response) => {
    response.send('REALTALK: ' + message);
});
realTalkBot.onSubscribe((response) => console.log(`Subscribed: ${response.userProfile.name}`));
exports.default = realTalkBot;
