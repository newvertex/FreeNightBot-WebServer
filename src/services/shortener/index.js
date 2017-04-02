'use strict';

const opizo = require('opizo-api');

const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return opizo(data.url);
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/shortener', new Service());

  // Get our initialize service to that we can bind hooks
  const shortenerService = app.service('/shortener');

  // Set up our before hooks
  shortenerService.before(hooks.before);

  // Set up our after hooks
  shortenerService.after(hooks.after);
};

module.exports.Service = Service;
