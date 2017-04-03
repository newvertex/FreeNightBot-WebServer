'use strict';

// src\services\tuser\hooks\restrictToOwnerTid.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
    options = Object.assign({}, defaults, options);

    return function(hook) {
        return hook.service.get(hook.params.user.tid)
            .then(res => {
                console.log(res)
                hook.result = {};
                hook.result.data = res;
                return hook;
            })
    };
};
