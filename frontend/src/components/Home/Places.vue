<template>
  <div class="pt-4 pb-5" v-if="filtrarProducto != ''">
    <div>
      <h1 class="placesTitle">Lugares turisticos</h1>
    </div>
    <div class="elementsContainer justify-content-start align-items-center mt-5">
      <div class="elementIsText" v-if="findByCity == ''">
        <h3 style="font-size: 25px;width:80%;">Creemos que te podrian interesar estos lugares.</h3>
      </div>
      <div
        v-for="(place, index) in places ? filtrarProducto.slice(0, 6) : 6"
        :key="index"
        class=""
      >
        <img
          :src="places ? place.home_photo : imageLoader"
          alt=""
          class="img-fluid"
          v-on:click="storeProduct(place)"
        />
        <p class="elementName">
          {{ places ? place.name : "Loading..." }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index";
import { mapState } from "vuex";
export default {
  name: "Places",
  props: ["places", "findByCity"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    storeProduct(product) {
      this.$store.commit("addProductToShow", product);
      this.$store.commit("setProductType", "place");
      router.push("/product");
    },
  },
  computed: {
    ...mapState(["imageLoader"]),
    filtrarProducto() {
      if (this.findByCity === "") return this.places;
      return this.places.filter((place) =>
        place.city.toLowerCase().includes(this.findByCity.toLowerCase())
      );
    },
  },
};
</script>

<style>


.elementsContainer {
  display:grid;
  gap:15px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}

.elementIsText {
  height:100%;
  text-align: left;
  margin-top:6rem;
}

.elementName {
  font-size:17px;
  font-weight: bold;
  margin-top: .5rem;
}
.placesTitle {
  font-weight: bold;
  font-size:2.8rem;
  margin-top:2rem;
}

</style>
