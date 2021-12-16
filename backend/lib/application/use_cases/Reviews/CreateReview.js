"use strict";

const Review = require("../../../domain/DataStructures/Review");

module.exports = async (user_email, product_id, review_title, review_desc, review_points, { reviewRepository, userRepository }) => {
  const user = await userRepository.getByEmail(user_email);
  const review = new Review({
    id_user: user.id,
    product_id,
    review_title,
    review_desc,
    review_points,
  });

  return reviewRepository.persist(review);
};
