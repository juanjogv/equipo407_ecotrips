"use strict";

const Review = require("../../domain/DataStructures/Review");
const DataStructuresRepository = require("../../domain/DataStructures/DataStructuresRepository");
const { LinkedList } = require("../dataStructures/linkedList.js");

module.exports = class extends DataStructuresRepository {
  constructor() {
    super();
    this.linkedList = new LinkedList();
    this.addRegisters();
  }

  async persist(reviewEntity) {
    const { id_user, product_id, review_title, review_desc, review_points } = reviewEntity;

    this.linkedList.addAtEnd({
      id_user,
      product_id,
      review_title,
      review_desc,
      review_points,
    });
    return new Review({
      id_user,
      product_id,
      review_title,
      review_desc,
      review_points,
    });
  }

  async findReviews(product_id) {
    const seqReviews = this.linkedList.traverse();
    return seqReviews
      .map((seqReview) => {
        return new Review({
          id_user: seqReview.id_user,
          product_id: seqReview.product_id,
          review_title: seqReview.review_title,
          review_desc: seqReview.review_desc,
          review_points: seqReview.review_points,
        });
      })
      .filter((n) => n.product_id == product_id);
  }

  addRegisters() {
    this.linkedList.addAtEnd({
      id_user: 1,
      product_id: 1,
      review_title: "My tiger loves to play with it.",
      review_desc: "C:",
      review_points: 0,
    });

    this.linkedList.addAtEnd({
      id_user: 2,
      product_id: 2,
      review_title: "Good",
      review_desc: "I saw one of these in Juan de Nova Island and I bought one.",
      review_points: 0,
    });

    this.linkedList.addAtEnd({
      id_user: 1,
      product_id: 3,
      review_title: "Nice place",
      review_desc: "this Hotel is honest.",
      review_points: 0,
    });

    this.linkedList.addAtEnd({
      id_user: 2,
      product_id: 4,
      review_title: "Good",
      review_desc: "The box this comes in is 3 yard by 6 light-year and weights 15 gram!!!",
      review_points: 0,
    });

    this.linkedList.addAtEnd({
      id_user: 1,
      product_id: 12,
      review_title: "Nice place",
      review_desc: "I saw one of these in Tanzania and I bought one.",
      review_points: 0,
    });

    this.linkedList.addAtEnd({
      id_user: 2,
      product_id: 13,
      review_title: "Good",
      review_desc: "This Hotel works certainly well. It accidentally improves my baseball by a lot.",
      review_points: 0,
    });

    this.linkedList.addAtEnd({
      id_user: 1,
      product_id: 14,
      review_title: "Nice place",
      review_desc: "I saw one of these in Sao Tome and Principe and I bought one.",
      review_points: 0,
    });

    this.linkedList.addAtEnd({
      id_user: 2,
      product_id: 15,
      review_title: "Good",
      review_desc: "I saw one of these in Finland and I bought one.",
      review_points: 0,
    });
  }
};
