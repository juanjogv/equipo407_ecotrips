"use strict";

const _serializeSingleReview = (review) => {
  return {
    id: review.id,
    id_user: review.id_user,
    product_id: review.product_id,
    review_title: review.review_title,
    review_desc: review.review_desc,
    review_points: review.review_points,
    touristic_place_name: review.touristic_place_name,
    restaurant_name: review.restaurant_name,
    hotel_name: review.hotel_name,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) {
      throw new Error("Expect data to be not undefined nor null");
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleReview);
    }
    return _serializeSingleReview(data);
  }
};
