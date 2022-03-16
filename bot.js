const TelegramBot = require("node-telegram-bot-api");

const token = "5200643131:AAEU5DKQ-mNWAd71S9wInwaLwAibYkiEOks";

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
	bot.sendMessage(msg.from.id, "wellcome\n How can I help?\n (/contact-us)\n (/medias)")
})

bot.onText(/\/contact/, (msg) => {
	bot.sendMessage(msg.from.id, "contact links :\n https://bit.ly/3tkdXg4")
})

bot.onText(/\/medias/, (msg) => {
	bot.sendMessage(msg.from.id, "My Medias :\n http://bit.ly/36OYVqR\n https://instagram.com/Gametega_m")
})
