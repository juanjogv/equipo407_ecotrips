"use strict";

const ReviewsController = require("../controllers/ReviewsController");

module.exports = {
  name: "Reviews",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "GET",
        path: "/reviews/{productType}/{id}",
        handler: ReviewsController.findReviews,
        options: {
          description: "Return a list of reviews for the product page",
          tags: ["api"],
        },
      },
      {
        method: "POST",
        path: "/reviews",
        handler: ReviewsController.createReview,
        options: {
          description: "Create a review",
          tags: ["api"],
        },
      },
    ]);
  },
};
