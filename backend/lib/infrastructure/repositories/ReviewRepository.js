"use strict";

const Review = require("../../domain/Review/Review");
const ReviewRepository = require("../../domain/Review/ReviewRepository");

const {
  review_touristic_places,
  touristic_places,
} = require("../orm/sequelize/relationalModel");

module.exports = class extends ReviewRepository {
  async findReview(product_id) {
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
        touristic_place_name:
          seqReview.id_touristic_place_touristic_place.touristic_place_name,
      });
    });
  }
  async persist(reviewEntity) {
    const { id_user, product_id, review_title, review_desc, review_points } =
      reviewEntity;

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
