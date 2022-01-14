"use strict";

module.exports = (product_type, product_id, { reviewRepository }) => {
  return reviewRepository.findReview(product_type, product_id);
};
