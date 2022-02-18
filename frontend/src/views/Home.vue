<template>
  <div>
    <div v-if="opacity" class="blinder"></div>
    <NavBar class="sticky-top" />
    <div class="container">
      <div class="searcher-wallpaper row">
        <div class="col mainSearcher">
          <form class="my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="¿A dónde quieres ir?" aria-label="Search" v-model="findByCity" />
          </form>
        </div>
      </div>
      <Places :places="places" :findByCity="findByCity" />
    </div>
    <Hotels :hotels="hotels" :findByCity="findByCity" />
    <div class="container">
      <Restaurants :restaurants="restaurants" :findByCity="findByCity" />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import Places from "@/components/Home/Places";
import Restaurants from "@/components/Home/Restaurants";
import Hotels from "@/components/Home/Hotels";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    NavBar,
    Places,
    Hotels,
    Restaurants,
  },
  data() {
    return {
      opacity: false,
      findByCity: "",
    };
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  methods: {},
  computed: {
    ...mapState(["places"]),
    ...mapState(["restaurants"]),
    ...mapState(["hotels"]),
    ...mapState(["alertMessage", "alertToShow"]),
  },
};
</script>
<style scoped>
@import "./Styles/mediaQueriesHome.css";

.blinder {
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: absolute;
  z-index: 2;
  opacity: 0.4;
  top: 0;
}

.mainSearcher {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.mainSearcher form {
  width: 50%;
}

.searcher-wallpaper {
  background-image: url("../assets/colombia.jpg");
  background-size: cover;
  height: 40vh;
}

.form-control {
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  font-size: 18px;
  padding: 1rem 2.5rem;
}

@media (max-width: 991px) {
  .mainSearcher form {
    width: 75%;
  }
}

@media (max-width: 575px) {
  .mainSearcher form {
    width: 90%;
  }
}
</style>
