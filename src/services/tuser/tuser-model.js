'use strict';

// tuser-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tuserSchema = new Schema({
  _id: { type: String, required: true },
  keys: [{
    key: { type: String },
    kid: { type: String }
  }],
  signature: { type: String, 'default': '' },
  lang: { type: String, 'default': 'en' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const tuserModel = mongoose.model('tuser', tuserSchema);

module.exports = tuserModel;
