let instance = null;

class Bot {
  constructor() {
    if (!instance) {
      instance = require('free-night-telegram-bot');
    } else {
      return instance;
    }
  }
}

module.exports = (new Bot());
