"use strict";

const Review = require("../../domain/Review/Review");
const ReviewRepository = require("../../domain/Review/ReviewRepository");

const { touristic_places, restaurants, hotels, review_touristic_places, review_restaurants, review_hotels } = require("../orm/sequelize/relationalModel");

module.exports = class extends ReviewRepository {
  async findReview(product_type, product_id) {
    if (product_type === "place") {
      const seqReviews = await review_touristic_places.findAll({
        where: {
          id_touristic_place: product_id,
        },
        include: [
          {
            model: touristic_places,
            as: "id_touristic_place_touristic_place",
            attributes: ["touristic_place_name"],
          },
        ],
      });
      return seqReviews.map((seqReview) => {
        return new Review({
          id: seqReview.id,
          id_user: seqReview.id_user,
          product_id: seqReview.id_touristic_place,
          review_title: seqReview.review_title,
          review_desc: seqReview.review_desc,
          review_points: seqReview.review_points,
          touristic_place_name: seqReview.id_touristic_place_touristic_place.touristic_place_name,
        });
      });
    } else if (product_type === "restaurant") {
      const seqReviews = await review_restaurants.findAll({
        where: {
          id_restaurant: product_id,
        },
        include: [
          {
            model: restaurants,
            as: "id_restaurant_restaurant",
            attributes: ["restaurant_name"],
          },
        ],
      });
      return seqReviews.map((seqReview) => {
        return new Review({
          id: seqReview.id,
          id_user: seqReview.id_user,
          product_id: seqReview.id_touristic_place,
          review_title: seqReview.review_title,
          review_desc: seqReview.review_desc,
          review_points: seqReview.review_points,
          restaurant_name: seqReview.id_restaurant_restaurant.restaurant_name,
        });
      });
    } else if (product_type === "hotel") {
      const seqReviews = await review_hotels.findAll({
        where: {
          id_hotel: product_id,
        },
        include: [
          {
            model: hotels,
            as: "id_hotel_hotel",
            attributes: ["hotel_name"],
          },
        ],
      });
      return seqReviews.map((seqReview) => {
        return new Review({
          id: seqReview.id,
          id_user: seqReview.id_user,
          product_id: seqReview.id_hotel,
          review_title: seqReview.review_title,
          review_desc: seqReview.review_desc,
          review_points: seqReview.review_points,
          hotel_name: seqReview.id_hotel_hotel.hotel_name,
        });
      });
    }
  }
  async persist(reviewEntity) {
    const { id_user, product_id, review_title, review_desc, review_points } = reviewEntity;

    const seqReview = await review_touristic_places.create({
      id_user,
      id_touristic_place: product_id,
      review_title,
      review_desc,
      review_points,
    });

    return new Review({
      id: seqReview.id,
      id_user: seqReview.id_user,
      product_id: seqReview.id_touristic_place,
      review_title: seqReview.review_title,
      review_desc: seqReview.review_desc,
      review_points: seqReview.review_points,
    });
  }
};
