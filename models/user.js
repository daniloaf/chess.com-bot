const mongoose = require('mongoose');

const User = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  telegram_id: {
    type: Number,
    required: true,
  },
  chat_id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('User', User);
