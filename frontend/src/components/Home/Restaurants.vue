<template>
  <div class="pt-4 pb-5" v-if="filtrarProducto != ''">
    <div>
      <h1 class="placesTitle">Restaurantes populares</h1>
    </div>
    <div class="elementsContainer mt-5">
      <div
        v-for="(restaurant, index) in restaurants ? filtrarProducto.slice(0, 3) : 3"
        :key="index"
        class="d-flex flex-column justify-content-between element"
      >
        <img
          :src="restaurants ? restaurant.home_photo : imageLoader"
          alt=""
          style="width: 100%; border-radius: 7px"
          class="img-fluid"
          v-on:click="storeProduct(restaurant)"
        />
        <p class="elementName">{{ restaurants ? restaurant.name : "Loading..." }}</p>
      </div>
      <div class="elementIsText" v-if="findByCity == ''"></div>
      <div class="elementIsText" v-if="findByCity == ''"></div>
      <div
        v-for="(restaurant, index) in restaurants ? filtrarProducto.slice(3, 6) : 3"
        :key="index"
        class="d-flex flex-column justify-content-between element"
      >
        <img
          :src="restaurants ? restaurant.home_photo : imageLoader"
          alt=""
          style="width: 100%; border-radius: 7px"
          class="img-fluid"
          v-on:click="storeProduct(restaurant)"
        />
        <p class="elementName">{{ restaurants ? restaurant.name : "Loading..." }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router/index";
import { mapState } from "vuex";
export default {
  name: "Restaurants",
  props: ["restaurants", "findByCity"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    storeProduct(product) {
      this.$store.commit("addProductToShow", product);
      this.$store.commit("setProductType", "restaurant");
      router.push("/product");
    },
  },
  computed: {
    ...mapState(["imageLoader"]),
    filtrarProducto() {
      if (this.findByCity === "" || !this.restaurants) return this.restaurants;
      return this.restaurants.filter((restaurant) => restaurant.city.toLowerCase().includes(this.findByCity.toLowerCase()));
    },
  },
};
</script>

<style>
.restaurantsContainer {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
}

.placesTitle {
  font-weight: bold;
  font-size: 2.8rem;
  margin-top: 2rem;
}
</style>
