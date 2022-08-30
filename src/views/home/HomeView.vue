<template>
  <div>
    <BoardBackgorund>
      <NavBar />

      <b-container class="my-5">
        <b-row class="pb-5">
          <b-col offset-lg="6" lg="6" class="mb-5 text-white">
            <h1 class="styled-title pt-5 font-weight-bold text-uppercase">
              Nuestro objetivo, es ser su departamento de logistica integral
            </h1>
            <p class="py-2 overlay-text">
              Proporcionamos a nuestros clientes un eficiente e integral servicio logístico con soluciones que incluyen <span class="overlay-text_primary"> transporte aéreo, marítimo y terrestre, nacional e internacional.</span>
            </p>
            <b-button squared variant="primary" class="mb-5 text-uppercase home-button">
              <router-link style="color: white;" :to="{ name: 'about' }">
                conozca más >
              </router-link>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
      <br>
      <br>
      <br>
      <br>
    </BoardBackgorund>

    <b-container>
      <b-row>
        <b-col v-for="(image, index) in images"
          :key="index"
          col-lg="4"
          class="px-0"
          sm
        >
          <div class="board-bg text-white text-center px-4 about-block hoverable-adjacent">
            <div class="board-bg board-bg__overlay position-absolute" :style="`background-image: url(${image.bg})`"/>
            <div class="board-bg__gradient board-bg__gradient--emerald" />
            <div class="board-bg__gradient board-bg__gradient--blue hoverable" />
            <div class="d-flex flex-column align-items-center justify-content-center board-bg__content" style="height: 100%;">
              <b-img fluid :src="image.icon" alt="iamge"></b-img>
              <br>
              <h3 class="font-weight-semibold">
                {{ image.text }}
              </h3>
              <b-button class="text-uppercase" variant="link">
                <router-link class="white-to-primary" :to="{ name: 'services', hash: image.hash }">
                  conozca mas +
                </router-link>
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row style="margin-top: -4rem; margin-bottom: 4rem;">
        <b-col offset-lg="1" lg="5">
          <b-img fluid :src="require('@/assets/images/bg-4.jpg')" alt="iamge"></b-img>
        </b-col>
        <b-col lg="5">
          <h3 class="mb-3 text-uppercase font-weight-bold">
            PROPORCIONAMOS A NUESTROS CLIENTES UN EFICIENTE E INTEGRAL SERVICIO
LOGÍSTICO.
          </h3>
          <p class="mb-3 overlay-text">
            Somos una empresa que proporciona a nuestros clientes un eficiente e integral servicio
logístico con soluciones que incluyen transporte aéreo, marítimo y terrestre, nacional e
internacional.
          </p>
          <p class="mb-3 overlay-text">
            Nuestra propuesta incluye una amplia variedad de servicios adicionales, tales como
trámites aduaneros, asesoría en comercio exterior, trámites especiales, sistema de rastreo
- control de embarques, almacenaje, logística, empaque y embalaje, seguros de
transporte, proyectos especiales y servicios intermodales.
          </p>
          <b-button squared class="text-uppercase home-button" variant="primary">
            <router-link style="color: white;" :to="{ name: 'about' }">
              leer más >
            </router-link>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-row class="my-5 py-5 board-bg mx-0" >
      <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('@/assets/images/bg-3.jpg')})`"/>
      <div class="board-bg__gradient position-absolute"/>
      <b-container>
        <b-row class="text-white py-5">
          <b-col class="mb-4" lg="12">
            <h3 class="text-uppercase font-weight-bold">
              ESTRATEGIAS
            </h3>
          </b-col>
          <b-col class="list-sm-fix" v-for="(strategy, index) in strategies" :key="index" lg="4">
            <div class="px-3 mb-5">
              <div class="position-absolute numbered-list__number text-center">
                <div class="numbered-list__text">
                  {{ index + 1 }}
                </div>
              </div>
              {{ strategy }}
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <ThanksFooter />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from '@/components/Footer.vue'
import BoardBackgorund from '@/components/BoardBackgorund.vue'
import ThanksFooter from '@/components/ThanksFooter.vue'
import { blocks, strategies } from './data.js'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer,
    BoardBackgorund,
    ThanksFooter
  },
  data() {
    return {
      images: blocks,
      strategies
    }
  }
}
</script>

<style lang="scss">
  .overlay-text {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    &_primary {
      color: #10CFC9;
    }
  }

  .about-block {
    transform: translateY(-50%);
    height: 300px;
  }
</style>
