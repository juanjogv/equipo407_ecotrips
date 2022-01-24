<template>
  <div>
    <NavBar />
    <div>
      <div class="container mt-3">
        <h3>{{ productToShow.name }}</h3>
        <p>{{ reviewsSize }} Opiniones</p>
      </div>
      <div style="background-color: #f2f2f2">
        <div class="container">
          <div class="row pt-4">
            <div class="col-sm-8">
              <Carousel :productToShow="productToShow" />
            </div>
            <div class="col">
              <div class="ms-5 p-4 mapSection" style="background-color: #fff">
                <div class="row">
                  <div class="col-sm-12">
                    <Map :coordsLng="productToShow.longitude" :coordsLat="productToShow.latitude" />
                  </div>
                  <div class="col-sm-10">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="bookProduct"
                      v-if="productType == 'hotel' || productType == 'restaurant'"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm-8">
              <div class="row tab">
                <div class="col-sm-2">
                  <div class="tablinks">Descripción general</div>
                </div>
                <div class="col-sm-2">
                  <div class="tablinks">Opiniones</div>
                </div>
              </div>
              <div class="info mt-1 mb-4 p-4">
                <Description :productToShow="productToShow" />
              </div>
              <div class="opinionSection mt-1 mb-4 p-4">
                <Review
                  :reviews="reviews"
                  :reviewsSize="reviewsSize"
                  :productToShow="productToShow"
                  :productType="productType"
                  @getReviews="getReviews"
                />
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
import router from "@/router/index";

import NavBar from "@/components/NavBar";
import Carousel from "@/components/Product/Carousel";
import Map from "@/components/Product/Map";
import Review from "@/components/Product/Review";
import Description from "@/components/Product/Description";

export default {
  name: "Product",
  components: { Carousel, Map, Review, Description, NavBar },
  data() {
    return {
      reviews: null,
      reviewsSize: 0,
    };
  },
  methods: {
    bookProduct() {
      if (!localStorage.getItem("user_email")) {
        alert("Primero debes de iniciar sesión para poder reservar");
        router.push("/auth");
      } else {
        alert("Se ha reservado correctamente");
      }
    },
    getReviews() {
      if (!this.productType) router.push("/home");
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/reviews/${this.productType}/${this.productToShow.id}`).then((res) => {
        this.reviews = res.data;
        this.reviewsSize = res.data.length;
      });
    },
  },
  computed: {
    ...mapState(["productToShow"]),
    ...mapState(["productType"]),
  },
  mounted() {
    this.getReviews();
  },
};
</script>

<style scoped>
h3 {
  font-size: 22px;
}
.mapSection {
  min-height: 65vh;
  max-height: 65vh;
  overflow: hidden;
}
.tab {
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;

  position: sticky;
  top: 1px;
}
.tab > * {
  text-align: center;
  line-height: 50px;
  border-right: 1px solid #e0e0e0;
}
.tablinks {
  border-bottom-color: #00aa6c;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 4px solid #fff;
}

.info {
  background-color: #fff;
}

.opinionSection {
  background-color: #fff;
}

.userImage {
  border-radius: 50%;
}
</style>
