'use strict';

// src\services\user\hooks\restrictFindToRoleAdmin.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    if (hook.params.user && hook.params.user.role !== 'admin') {
      return hook.service.get(hook.params.user._id)
        .then(res => {
          hook.result = {};
          hook.result.data = res;
          return hook;
        })
    } else {
      return hook;
    }
  };
};
