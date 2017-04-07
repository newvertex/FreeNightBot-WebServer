'use strict';

// template-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, 'default': '' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const templateModel = mongoose.model('template', templateSchema);

module.exports = templateModel;
