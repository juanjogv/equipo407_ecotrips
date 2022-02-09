<template>
  <div class="pt-4 pb-5" v-if="filtrarProducto != ''">
    <div class="">
      <h1 class="placesTitle">Alojamientos</h1>
    </div>
    <div class="elementsContainer justify-content-end align-items-center mt-5">
      <div v-for="(hotel, index) in hotels ? filtrarProducto.slice(0, 4) : 4" :key="index" class="element">
        <img
          :src="hotels ? hotel.home_photo : imageLoader"
          alt=""
          class="img-fluid"
          style="border-radius: 7px"
          v-on:click="storeProduct(hotel)"
        />
        <p class="elementName">{{ hotels ? hotel.name : "Loading..." }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index";
import { mapState } from "vuex";
export default {
  name: "Hotels",
  props: ["hotels", "findByCity"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    storeProduct(product) {
      this.$store.commit("addProductToShow", product);
      this.$store.commit("setProductType", "hotel");
      router.push("/product");
    },
  },
  computed: {
    ...mapState(["imageLoader"]),
    filtrarProducto() {
      if (this.findByCity === "" || !this.hotels) return this.hotels;
      return this.hotels.filter((hotel) => hotel.city.toLowerCase().includes(this.findByCity.toLowerCase()));
    },
  },
};
</script>

<style>
</style>
