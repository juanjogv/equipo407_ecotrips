<template>
  <div>
    <div class="row">
      <div class="col">
        <h3>Opiniones {{ reviewsSize }}</h3>
      </div>
      <div class="col"></div>
    </div>
    <div class="row mt-4" v-for="(review, index) in reviews" :key="index">
      <div class="col-auto pe-5">
        <img
          src="https://juanjogv-development-bucket.s3.us-east-2.amazonaws.com/ecotrips/blank-user.png"
          alt=""
          srcset=""
          width="75"
          class="userImage"
        />
      </div>
      <div class="col">
        <h4>{{ review.review_title }}</h4>
        <p>
          {{ review.review_desc }}
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-10">
        <input
          type="text"
          v-model="review.review_desc"
          placeholder="Escribe una opinión..." style="font-size: 16px;"
        />
      </div>
      <div class="col-sm-2">
        <input type="submit" value="Enviar" @click.prevent="sendReview" style="font-size: 16px" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router/index";
export default {
  name: "Review",
  props: ["reviews", "reviewsSize", "productToShow", "productType"],
  data() {
    return {
      review: {
        user_email: "",
        product_id: this.productToShow.id,
        review_title: "Good",
        review_desc: "",
        review_points: 0,
      },
    };
  },
  methods: {
    sendReview() {
      if (!localStorage.getItem("user_email")) {
        alert("Primero debes de iniciar sesion para poder comentar");
        router.push("/auth");
      } else {
        if (this.productType == "place") {
          this.review.user_email = localStorage.getItem("user_email");
          axios
            .post(`${process.env.VUE_APP_BACKEND_URL}/reviews`, this.review)
            .finally(() => {
              this.$emit("getReviews");
              this.review.review_desc = "";
            });
        } else {
          this.review.user_email = localStorage.getItem("user_email");
          axios
            .post(
              `${process.env.VUE_APP_BACKEND_URL}/datastructures/reviews`,
              this.review
            )
            .finally(() => {
              this.$emit("getReviews");
              this.review.review_desc = "";
            });
        }
      }
    },
  },
};
</script>

<style scoped>
input {
  appearance: none;
  background: none;
  border: 0.1px solid #c7c7c7;
  outline: none;

  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: 0.4s;
}
input:focus {
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
}
</style>
