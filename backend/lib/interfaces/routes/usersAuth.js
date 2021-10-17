'use strict';

const UsersController = require('../controllers/UsersController');

module.exports = {
  name: 'auth',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/signin',
        handler: UsersController.signInUser,
        options: {
          description: 'Create a user',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/login',
        handler: UsersController.logInUser,
        options: {
          description: 'Find a user and log it in',
          tags: ['api'],
        },
      },
    ]);
  }
};