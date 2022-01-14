"use strict";

const Boom = require("@hapi/boom");
const ListReviews = require("../../application/use_cases/Reviews/ListReviews");
const CreateReview = require("../../application/use_cases/Reviews/CreateReview");

module.exports = {
  async findReviews(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const product_type = request.params.productType;
    const product_id = request.params.id;

    // Treatment
    const reviews = await ListReviews(product_type, product_id, serviceLocator);

    // Output
    return reviews.map(serviceLocator.reviewSerializer.serialize);
  },
  async createReview(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { user_email, product_id, review_title, review_desc, review_points } = request.payload;

    // Treatment
    const review = await CreateReview(user_email, product_id, review_title, review_desc, review_points, serviceLocator);

    // Output
    return serviceLocator.dataStructuresReviewSerializer.serialize(review);
  },
};
