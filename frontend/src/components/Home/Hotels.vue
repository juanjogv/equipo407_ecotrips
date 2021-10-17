<template>
  <div class="pt-4 pb-5" v-if="filtrarProducto != ''">
    <div class="">
      <p><span>Alojamientos</span></p>
    </div>
    <div class="row justify-content-end align-items-center">
      <div
        v-for="(hotel, index) in hotels ? filtrarProducto.slice(0, 3) : 3"
        :key="index"
        class="col-sm-3"
      >
        <img
          :src="hotels ? hotel.home_photo : imageLoader"
          alt=""
          class="img-fluid"
          v-on:click="storeProduct(hotel)"
        />
        <p>{{ hotels ? hotel.name : "Loading..." }}</p>
      </div>
      <div class="col-sm-3" v-if="findByCity == ''">
        <h3>Creemos que te podrian interesar estos hoteles</h3>
      </div>
      <div
        v-for="(hotel, index) in hotels ? filtrarProducto.slice(3, 6) : 3"
        :key="index"
        class="col-sm-3"
      >
        <img
          :src="hotels ? hotel.home_photo : imageLoader"
          alt=""
          class="img-fluid"
          v-on:click="storeProduct(hotel)"
        />
        <p>{{ hotels ? hotel.name : "Loading..." }}</p>
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
      if (this.findByCity === "") return this.hotels;
      return this.hotels.filter((hotel) =>
        hotel.city.toLowerCase().includes(this.findByCity.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
