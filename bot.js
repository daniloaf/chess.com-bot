const rp = require('request-promise');
const dotenv = require('dotenv');
const TeleBot = require('telebot');
const cheerio = require('cheerio');
const userService = require('./services/users');
const rankingService = require('./services/rankings');

dotenv.config();

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on(/^\/register (.+)$/, async (msg, props) => {
  const username = props.match[1];
  try {
    const telegramId = msg.from.id;
    const chatId = msg.chat.id;

    let user = await userService.get({ username, chat_id: chatId });
    if (user) {
      return bot.sendMessage(msg.chat.id, `${username} already registered`);
    }

    user = await userService.create({ username: username, telegram_id: telegramId, chat_id: chatId });

    return bot.sendMessage(msg.chat.id, `${user.username} registered`);
  } catch (err) {
    console.err(err);
    return bot.sendMessage(msg.chat.id, `Could not register ${username}`);
  }
});

bot.on('/stats', async (msg) => {
  try {
    const chatId = msg.chat.id;
    const users = await userService.list({ chat_id: chatId });

    if (!users) {
      return bot.sendMessage(msg.chat.id, `No user registered yet. User /register to register new usernames`);
    }

    const stats = ['=========================\n ===== Live Chess (Blitz) ===== \n========================='];
    for (let user of users) {
      let url = `https://api.chess.com/pub/player/${user.username}/stats`;
      let res = await rp(url, { json: true });
      let rating = res.chess_blitz && res.chess_blitz.last && res.chess_blitz.last.rating || 'No score';
      stats.push(`${user.username} - ${rating} - ${rankingService.getLiveRating(rating)}`);
    }

    stats.push('\n========================\n ===== Tactics Ranking ===== \n========================')
    for (let user of users) {
      let url = `https://www.chess.com/stats/puzzles/${user.username}`;
      let res = await rp(url);
      let $ = cheerio.load(res);
      let rating = $('.main-chart-stats-current').text();
      stats.push(`${user.username} - ${rating} - ${rankingService.getTacticsRating(rating)}`);
    }

    return bot.sendMessage(msg.chat.id, stats.join('\n'));
  } catch (err) {
    console.err(err);
    return bot.sendMessage(msg.chat.id, `Could not list stats`);
  }
});

bot.on('/rankings', async (msg) => {
  try {
    return bot.sendMessage(msg.chat.id, rankingService.getAllRankings());
  } catch (err) {
    console.err(err);
    return bot.sendMessage(msg.chat.id, `Could not list all rankings`);
  }
});

module.exports = bot;
