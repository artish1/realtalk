"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const viberBot_1 = __importDefault(require("./src/viber/viberBot"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(viberBot_1.default.middleware());
app.get('/', function (req, res) {
    res.status(200).json({ message: 'Hello' });
});
const port = process.env.PORT || 3000;
const webhookUrl = process.env.WEBHOOK_URL;
if (!webhookUrl)
    console.warn('NO WEBHOOK URL FOR BOT');
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    if (webhookUrl)
        viberBot_1.default.setWebHook(webhookUrl);
    else {
        console.error('NO WEBOOK URL FOR BOT!!!');
    }
});
