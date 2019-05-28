const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bot = require('./bot');

dotenv.config();

mongoose.connection.on('error', (err) => {
  console.log('mongo connection error: %s', err.message || err);
});

mongoose.connection.on('open', () => {
  console.log('mongo connection opened');
});

console.log('MONGODB_URI', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

bot.start();
