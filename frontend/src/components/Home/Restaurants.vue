<template>
  <div class="pt-4 pb-5" v-if="filtrarProducto != ''">
    <div class="">
      <p><span>Restauranates populares</span></p>
    </div>
    <div class="row">
      <div
        v-for="(restaurant, index) in restaurants
          ? filtrarProducto.slice(0, 4)
          : 4"
        :key="index"
        class="col-sm-3"
      >
        <img
          :src="restaurants ? restaurant.home_photo : imageLoader"
          alt=""
          class="img-fluid"
          v-on:click="storeProduct(restaurant)"
        />
        <p>{{ restaurants ? restaurant.name : "Loading..." }}</p>
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
      if (this.findByCity === "") return this.restaurants;
      return this.restaurants.filter((restaurant) =>
        restaurant.city.toLowerCase().includes(this.findByCity.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
