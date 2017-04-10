'use strict';

const hooks = require('./hooks');

const Bot = require('./../../bot');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }
}

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/bot', new Service());

  // Get our initialize service to that we can bind hooks
  const botService = app.service('/bot');

  // Set up our before hooks
  botService.before(hooks.before);

  // Set up our after hooks
  botService.after(hooks.after);
};

module.exports.Service = Service;
