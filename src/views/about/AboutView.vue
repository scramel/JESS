<template>
  <div>
    <BoardBackgorund>
      <NavBar />
      <div class="py-5 text-center text-white font-weight-bold">
        <h1 class="py-5 text-uppercase font-weight-bold">
          quiénes somos
        </h1>
      </div>
    </BoardBackgorund>
    <br>
    <b-container>
      <b-row class="pb-5">
        <b-col offset-lg="1" lg="4" class="mt-5 overflow-hidden">
          <img src="@/assets/images/bg-2.jpg" alt="bg-2" height="500px" style="transform: translateX(-25%)" class="about-img">
          <!-- <b-img fluid :src="require('@/assets/images/bg-2.jpg')" alt="iamge"></b-img> -->
        </b-col>
        <b-col offset-lg="1" lg="5" class="mt-5">
          <h3 class="text-uppercase font-weight-semibold">
            NUESTRO OBJETIVO, ES SER SU DEPARTAMENTO DE LOGISTICA INTEGRAL
          </h3>
          <div class="about-text">
            <p>
              Somos una empresa que proporciona a nuestros clientes un eficiente e integral servicio logístico con soluciones que incluyen transporte aéreo, marítimo y terrestre, nacional e internacional.
            </p>
            <p>
              Nuestra propuesta incluye una amplia variedad de servicios adicionales, tales como:
            </p>
            <ul class="pl-3">
              <li>Trámites aduaneros</li>
              <li>Asesoría en comercio exterior.</li>
              <li>Trámites especiales</li>
              <li>Sistema de rastreo - control de embarques</li>
              <li>Almacenaje y Logística</li>
              <li>Empaque y embalaje</li>
              <li>Seguros de transporte</li>
              <li>Proyectos especiales y servicios intermodales.</li>
            </ul>
          </div>
        </b-col>
      </b-row>

      <b-row class="py-5">
        <b-col
          v-for="(image, index) in images"
          :key="index"
          lg="6"
          class="px-0"
        >
          <div class="board-bg text-white text-center" style="height: 100%;">
            <div class="board-bg__overlay position-absolute" :style="`background-image: url(${image.bg})`"/>
            <div class="board-bg__gradient board-bg__gradient--blue board-bg__gradient--filtered" />
            <div class="py-5 board-bg__content">
              <b-img fluid :src="image.icon" alt="iamge"></b-img>
              <h3 class="font-weight-semibold">
                {{ image.text }}
              </h3>
              <br>
                <p class="px-4 m-0 contact-block_text">
                  {{ image.subtext }}
                </p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="py-5">
        <b-col class="mb-4" lg="12">
          <h3 class=" text-uppercase font-weight-bold">
            ESTRATEGIAS
          </h3>
        </b-col>

        <b-col v-for="(strategy, index) in strategies" :key="index" lg="4">
          <div class="px-3 mb-5">
            <div class="position-absolute numbered-list__number text-center bg-primary text-white">
              <div class="numbered-list__text">
                {{ index + 1 }}
              </div>
            </div>
            {{ strategy }}
          </div>
        </b-col>
      </b-row>
    </b-container>

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
  title() {
    return this.pageTitle
  },
  name: 'AboutView',
  components: {
    NavBar,
    Footer,
    BoardBackgorund,
    ThanksFooter
  },
  data() {
    return {
      pageTitle: ('Quiénes Somos'),
      images: blocks,
      strategies
    }
  }
}
</script>

<style lang="scss">
  .about-text {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
  }
  .about-img {
    @media only screen and (max-width: 768px) {
        display: none;
    }
  }
</style>
