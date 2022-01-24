<template>
  <div class="w-100">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="productToShow.home_photo" class="d-block w-100" alt="..." />
          </div>

          <div v-for="(photo, index) in productToShow.photos" :key="index" class="carousel-item">
            <img :src="photo" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["productToShow"],
};
</script>

<style scoped></style>
