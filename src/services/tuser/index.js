'use strict';

const service = require('feathers-mongoose');
const tuser = require('./tuser-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: tuser,
	  lean: true,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/tusers', service(options));

  // Get our initialize service to that we can bind hooks
  const tuserService = app.service('/tusers');

  // Set up our before hooks
  tuserService.before(hooks.before);

  // Set up our after hooks
  tuserService.after(hooks.after);
};
