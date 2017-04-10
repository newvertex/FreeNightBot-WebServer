'use strict';
const bot = require('./bot');
const template = require('./template');
const tuser = require('./tuser');
const shortener = require('./shortener');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(process.env.MONGODB_URI || app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(shortener);
  app.configure(tuser);
  app.configure(template);
  app.configure(bot);
};
