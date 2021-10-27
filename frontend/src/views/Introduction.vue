<template>
  <div>
    <main>
      <div class="introwallpaper">
        <div class="introductionText">
          <div class="pb-5">
            <p>
              <span>
                Reservas de
                <br />
                ecoturismo
              </span>
            </p>
            <p class="ms-4">
              Conoce lugares ecologicos, <br />
              reserva viajes, gana premios <br />
              e interactua con otros viajeros.
            </p>
            <div class="row">
              <div class="col align-content-center">
                <router-link to="/home" class="btn btn-primary" role="button">
                  Reservar
                </router-link>
              </div>
              <div class="col align-content-center">
                <a
                  class="btn btn-outline-light"
                  href="#introduction"
                  role="button"
                >
                  Conocenos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row interestSection p-5" id="introduction">
        <div class="col" style="padding-right:4rem;text-align:justify;">
          <p><span>Nuestro interés</span></p>
          <p>
            Se busca mostrar una mayor gamma de opciones turísticas en Colombia,
            saliendo de lo convencional y haciendo énfasis en el ecoturismo,
            ofreciendo las mejores opciones de viaje.
          </p>
          <a class="btn btn-primary" href="#" role="button"> Lugares </a>
        </div>
        <div class="col">
          <img
            src="../assets/img/introduction/guy-walking.jpg"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="objetiveSection">
        <div style="text-align: center">
          <img
            style="opacity:0.9;"
            src="../assets/img/introduction/cano-cristal.jpg"
            class="img-fluid"
          />
        </div>
        <div style="text-align: center;">
          <h1 style="font-size: 5vw;">Objetivo</h1>
          <p style="margin: 2rem 0px 3rem 0px;">
            Desarrollar un aplicativo web que promueva el turismo <br />
            ecológico en Colombia, mostrando alternativas turísticas diferentes
            <br />
            a las convencionales.
          </p>
        </div>
      </div>
    </main>
    <footer class="footerSection d-flex justify-content-center pt-2">
      <div class="row" style="width: 50%">
        <div class="col">
          <p><span>Equipo de desarrollo</span> <br /></p>
          <p>
            Juan José García,<br />
            Juan David Velásquez y <br />
            Jacobo Uribe Domínguez
          </p>
        </div>
        <div class="col">
          <p><span>Servicios</span> <br /></p>
          <p>
            <a href="#">Inicio</a> <br />
            <a href="#">Reseñas</a> <br />
            <a href="#">Reservar</a> <br />
          </p>
        </div>
        <div class="col">
          <p><span>EcoTrips</span> <br /></p>
          <p>
            El mejor sitio de ecoturismo en Colombia
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

.introwallpaper {
  background-image: url("../assets/img/introduction/paisaje.png");
  background-size: cover;
  padding: 2.55rem;
}

.introductionText {
  text-align: center;
  align-items: center;
  display: flex;
  padding-left: 8vw;
  height: 52vw;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.8vw;
}

.introductionText span {
  font-size: calc(4.5vw + 1rem);
  line-height: 1em;
  text-shadow: 3.5px 3.5px 6px #000000;
}

.interestSection {
  align-items:center;
  color: black;
  display:flex;
  font-family: "Roboto", sans-serif;
  font-size: 1.25vw;
  min-height:80vh;
}

.interestSection span {
  color: #2f2c43;
  font-size: 5vw;
}

.objetiveSection {
  background-color: rgb(0, 190, 201);
  color: white;
  display: grid;
  font-family: "Roboto", sans-serif;
  font-size: 1.25vw;
  grid-gap:20px;
  grid-template-columns: repeat(2, 1fr);
}

.objetiveSection span {
  text-align: center;
  font-size: 5vw;
}

.footerSection {
  background-color: #313131;
  width: 100%;
  color: white;
}

.footerSection p {
  font-size: 0.75vw;
  margin-bottom: 0.75vw;
}

.footerSection p span {
  font-weight: bold;
}

.btn {
  padding: 0.5vw 1vw;
  font-size: 1.25vw;
  line-height: 1.5;
  border-radius: 0.3vw;
}
</style>
