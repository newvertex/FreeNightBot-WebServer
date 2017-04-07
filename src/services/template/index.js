'use strict';

const service = require('feathers-mongoose');
const template = require('./template-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: template,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/templates', service(options));

  // Get our initialize service to that we can bind hooks
  const templateService = app.service('/templates');

  // Set up our before hooks
  templateService.before(hooks.before);

  // Set up our after hooks
  templateService.after(hooks.after);
};
