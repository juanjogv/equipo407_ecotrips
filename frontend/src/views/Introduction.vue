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
      <div class="titleSection">
        <h1>
          ECOTRIPS
        </h1>
      </div>
      <div class="objetiveSection">
        <div class="objetiveSectionImg" style="text-align: center">
          <img
            style="opacity:0.8;"
            src="../assets/img/introduction/cano-cristal.jpg"
            class="img-fluid"
          />
        </div>
        <div class="objetiveSectionText" style="text-align: left;">
          <h1 style="display:flex; align-items:center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" style="transform: scaleX(-1);" class="bi bi-megaphone me-4" viewBox="0 0 16 16">
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
            </svg>
            Objetivo
          </h1>
          <p class="mt-4" style="width:70%;">
            Desarrollar un aplicativo web que promueva el turismo
            ecológico en Colombia, mostrando alternativas turísticas diferentes
            a las convencionales.
          </p>
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
  background-color: rgba(243, 243, 243, 0.603);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  color: rgb(0, 76, 80);
  display: grid;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  grid-template-columns: repeat(2, 1fr);
}

.objetiveSection h1 {
  color: rgb(0, 190, 201);
  font-size: 40px;
}

.objetiveSectionText {
  display:flex;
  flex-direction: column;
  justify-content:center;
  margin-left:45px;
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
