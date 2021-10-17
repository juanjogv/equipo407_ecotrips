"use strict";

module.exports = (product_id, { dataStructuresRepository }) => {
  return dataStructuresRepository.findReviews(product_id);
};
