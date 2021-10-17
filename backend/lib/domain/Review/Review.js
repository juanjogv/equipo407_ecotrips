"use strict";

module.exports = class {
  constructor({
    id,
    id_user,
    product_id,
    review_title,
    review_desc,
    review_points,
    touristic_place_name,
  }) {
    this.id = id;
    this.id_user = id_user;
    this.product_id = product_id;
    this.review_title = review_title;
    this.review_desc = review_desc;
    this.review_points = review_points;
    this.touristic_place_name = touristic_place_name;
  }
};
