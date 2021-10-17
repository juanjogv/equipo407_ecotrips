"use strict";

module.exports = class {
  constructor({
    id,
    id_city,
    product_name,
    product_desc,
    product_photos,
    product_home_photo,
    product_city,
  }) {
    this.id = id;
    this.id_city = id_city;
    this.product_name = product_name;
    this.product_desc = product_desc;
    this.product_photos = product_photos;
    this.product_home_photo = product_home_photo;
    this.product_city = product_city;
  }
};
