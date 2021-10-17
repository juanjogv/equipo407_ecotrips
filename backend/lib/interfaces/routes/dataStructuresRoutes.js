'use strict';

const DataStructuresController = require('../controllers/DataStructuresController');

module.exports = {
  name: 'data structures',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/datastructures/reviews/{id}',
        handler: DataStructuresController.findReviews,
        options: {
          description: 'List all reviews',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/datastructures/reviews',
        handler: DataStructuresController.createReview,
        options: {
          description: 'Create a review',
          tags: ['api'],
        },
      },
    ]);
  }
};