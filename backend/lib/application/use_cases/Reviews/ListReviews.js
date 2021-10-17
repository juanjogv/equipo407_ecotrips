"use strict";

module.exports = (product_id, { reviewRepository }) => {
  return reviewRepository.findReview(product_id);
};
