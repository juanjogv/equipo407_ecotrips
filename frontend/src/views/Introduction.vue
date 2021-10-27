<template>
  <div>
    <main>
      <!---------------------------ANIMATION--------------------------->
        <div class="animation">
          <span class="one"></span>
          <span class="two"></span>
          <span class="three"></span>
          <span class="four"></span>
          <span class="five"></span>
          <span class="six"></span>
          <span class="seven"></span>
        </div>
        <!-------------------------END ANIMACION------------------------->
      <div class="introwallpaper" id="introwallpaper">
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
      <div class="content">
        <div class="titleSection">
          <h1>
            ECOTRIPS
            <hr class="stickTitle" />
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
            <p class="mt-4" style="width:80%;">
              Desarrollar un aplicativo web que promueva el turismo
              ecológico en Colombia, mostrando alternativas turísticas diferentes
              a las convencionales.
            </p>
          </div>
        </div>
        <div class="interestSection p-5" id="introduction">
          <div class="px-5" style="padding-right:4rem;text-align:justify;">
            <div>
              <h1>Nuestro interés</h1>
              <p>
                Se busca mostrar una mayor gamma de opciones turísticas en Colombia,
                saliendo de lo convencional y haciendo énfasis en el ecoturismo,
                ofreciendo las mejores opciones de viaje.
              </p>
              <button @click="goTo('home')" class="interestSectionBtn">
                Lugares 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>  
              </button>
            </div>
          </div>
          <div class="px-5">
            <img
              src="../assets/img/introduction/guy-walking.jpg"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </main>
    <footer class="footerSection d-flex justify-content-center">
      <div class="footerElementsContainer">
        <div class="footerElementContainer">
          <h2 class="footerTitleElement">
            Equipo de desarrollo
            <hr class="footerStickTitle"/>
          </h2>
          
          <ul class="footerList">
            <li class="footerElementList">
              Juan José García
            </li>
            <li class="footerElementList">
              Juan David Velásquez
            </li>
            <li class="footerElementList">
              Jacobo Uribe Domínguez
            </li>
          </ul>
        </div>
        <div class="footerElementContainer">
          <h2 class="footerTitleElement">
            Servicios
            <hr class="footerStickTitle"/>
          </h2>
          <ul class="footerList">
            <li class="footerElementList link" @click="goToInPage('#introwallpaper')">Inicio</li>
            <li class="footerElementList link" @click="goTo('home')">Reservar</li>
            <li class="footerElementList link">Reseñas</li>
          </ul>
        </div>
        <div class="footerElementContainer">
          <h2 class="footerTitleElement">
            EcoTrips
            <hr class="footerStickTitle"/>
          </h2>
          <div class="footerElementList" style="width:100%; height:100%; display:flex; justify-content:center;">
            El mejor sitio de ecoturismo en Colombia
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  components: {},
  methods : {
    goTo(site){
      this.$router.push(`/${site}`)
    },
    goToInPage(site){
      location.href=site
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

.btn {
  padding: 0.5vw 1vw;
  font-size: 1.25vw;
  line-height: 1.5;
  border-radius: 0.3vw;
}

.footerSection {
  background-color: rgb(0, 190, 201);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
  color: white;
  padding: 5rem 0px;
  width: 100%;
}

.footerElementsContainer {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  width:100%;
}

.footerElementContainer {
  align-items: center;
  display:flex;
  flex-direction: column;
}

.footerList {
  list-style: none;
  padding: 0;
}

.footerElementList {
  font-size:13px;
  letter-spacing: .5px;
  padding: .5rem 0px;
  text-align: center;
}

.footerElementList.link:hover {
  color: rgb(219, 219, 219);
}

.footerStickTitle {
  color:white;
  height:2px;
  width:100%;
}

.footerTitleElement {
  font-size:27px;
  margin-bottom: 2rem;
}

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
  display:grid;
  font-family: "Roboto", sans-serif;
  font-size: 1.25vw;
  grid-template-columns: 1fr 1fr;
  min-height:80vh;
}

.interestSectionBtn {
  align-items: center;
  background: rgb(0, 190, 201);;
  border: none;
  color:white;
  display:flex;
  gap:.5rem;
  justify-content: space-between;
  padding: .5rem 1.5rem;
}

.interestSection div:nth-child(1){
  display: flex;
  flex-direction: column;
}

.interestSection div:nth-child(1) div {
  margin-left:13%;
  width:80%;
}

.interestSection div:nth-child(1) div p {
  margin: .5rem 0px;
  margin-bottom: 2rem;
}

.interestSection div:nth-child(1) div button {
  font-size: 17px;
  width:12rem;
}

.interestSection div:nth-child(2){
  display:flex;
  justify-content: center;
}

.interestSection div:nth-child(2) img {
  width:90%;
}

.interestSection h1 {
  color: rgb(0, 190, 201);
  font-size: 45px;
}

.interestSection p {
  color: rgb(0, 76, 80);
  font-size: 17px;
  letter-spacing: 1px;
  text-align: left;
}

.objetiveSection {
  background-color: rgb(243, 243, 243);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  color: rgb(0, 76, 80);
  display: grid;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  grid-template-columns: repeat(2, 1fr);
  letter-spacing: 1px;
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

.titleSection {
  display:flex;
  justify-content: center;
  padding: 6vh 0px;
}

.titleSection h1 {
  color: rgb(0, 190, 201);
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size: 45px;
}

.stickTitle {
  color: rgb(0, 173, 182);
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -ms-transform: skew(-20deg);
  -o-transform: skew(-20deg);
  transform: skew(-20deg);
  height:5px;
  margin: 0;
  margin-top:5px;
  width:75%;
}

/*ANIMATION*/

.animation {
  height:100vh;
  position:fixed;
  width:100vw;
  z-index:-1;
}

span.one,
span.two,
span.three,
span.four,
span.five,
span.six,
span.seven {
  animation: vuela 10s linear infinite normal both;
  background: rgb(0, 190, 201);
  border:0;
  bottom:-100px;
  display:block;
  left: 0;
  position:absolute;
}

span.one {
  background: rgb(14, 122, 128);
  width:100px;
  height:100px;
}

span.two {
  background: rgb(1, 147, 155);
  width:80px;
  height:80px;
}

span.three {
  background: rgb(1, 147, 155);
  width:120px;
  height:120px;
}

span.four {
  background: rgb(24, 169, 177);
  width:65px;
  height:65px;
}

span.five {
  background: rgb(95, 218, 224);
  width:130px;
  height:130px;
}

span.six {
  background: rgb(1, 147, 155);
  width:16px;
  height:16px;
}

span.seven {
  width:99px;
  height:99px;
}

@keyframes vuela {
  from {
    transform: rotate(0deg);
    bottom: -100px;
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  to {
    transform: rotate(360deg);
    bottom: calc(100% + 100px);
    opacity: 0;
  }
}

.animation span:nth-child(1) {
  left: 20%;
  animation-delay: .63s;
}

.animation span:nth-child(2) {
  left: 43%;
  animation-delay: 7.2s;
}

.animation span:nth-child(3) {
  left: 78%;
  animation-delay: 3.3s;
}

.animation span:nth-child(4) {
  left: 63%;
  animation-delay: .18s;
}

.animation span:nth-child(5) {
  left: 22%;
  animation-delay: 5.3s;
}

.animation span:nth-child(6) {
  left: 14%;
  animation-delay: 1.5s;
}

.animation span:nth-child(7) {
  left: 83%;
  animation-delay: 2.5s;
}

</style>
