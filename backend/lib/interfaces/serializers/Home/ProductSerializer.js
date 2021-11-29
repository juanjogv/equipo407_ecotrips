const _serializeSingleProduct = (product) => {
  return {
    'id': product.id,
    'id_city': product.id_city,
    'name': product.product_name,
    'desc': product.product_desc,
    'photos': product.product_photos,
    'home_photo': product.product_home_photo,
    'city': product.product_city,
    'longitude':product.product_longitude,
    'latitude': product.product_latitude
  };
};

module.exports = class {
  serialize(data) {
    if (!data) {
      throw new Error("Expect data to be not undefined nor null");
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleProduct);
    }
    return _serializeSingleProduct(data);
  }
};
