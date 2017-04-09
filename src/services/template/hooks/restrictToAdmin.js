'use strict';

const errors = require('feathers-errors');
// src\services\template\hooks\restrictToAdmin.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function (options) {
  options = Object.assign({}, defaults, options);

  return function (hook) {
    if (!hook.params.user || (hook.params.user && hook.params.user.role !== 'admin')) {
      throw new errors.NotAuthenticated('Access not allowed');
    }
    return hook;
  };
};
