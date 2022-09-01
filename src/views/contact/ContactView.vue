<template>
  <div>
    <BoardBackgorund>
      <NavBar />
      <div class="py-5 text-center text-white font-weight-bold">
        <h1 class="py-5 text-uppercase font-weight-bold">
          Contáctenos
        </h1>
      </div>
    </BoardBackgorund>

    <b-row class="py-5 board-bg mx-0">
      <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('@/assets/images/bg-5.jpg')}); opacity: 0.1;`"/>
      <b-container class="py-4">
        <b-row class="padding-sm-fix">
          <b-col lg="12" class="text-center">
            <h2 class="mb-3 font-weight-bold">
              Gracias a nuestro profesionalismo, un importante grupo de empresas han depositado su confianza en nosotros
            </h2>
            <small class="contact-text">
              Nos esforzamos cada día en ofrecerles el mejor servicio minimizando sus costos y optimizando su operación. Si desea más información sobre nosotros.
            </small>
          </b-col>

          <b-col v-for="(image, index) in images"
            :key="index"
            col-lg="4"
            class="py-5 px-0"
            sm>
            <div class="px-2 board-bg text-white text-center contact-block">
              <div class="board-bg__overlay position-absolute" :style="`background-image: url(${image.bg})`"/>
              <div class="board-bg__gradient board-bg__gradient--blue board-bg__gradient--filtered" />
              <div class="d-flex flex-column align-items-center justify-content-center board-bg__content" style="height: 100%;">
                <b-img fluid :src="image.icon" alt="iamge"></b-img>
                <br>
                <p class="px-4 m-0 contact-block_text">
                  <span class="overlay-text_primary">{{ image.span }}:</span> {{ image.text }}
                </p>
              </div>
            </div>
          </b-col>

          <b-col lg="12">
            <b-card border-variant="light" class="contact-form mx-auto col-lg-8">
              <h3>Llene el siguiente formulario:</h3>
              <br>
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group id="input-group-2" label="Nombre completo:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Correo electrónico:"
                  label-for="input-1"
                  description="Su dirección de correo no será compartida con nadie mas."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.fullname"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Teléfono:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.phone"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Nombre de la empresa:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.enterprise"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="¿En que podemos ayudarle?" label-for="input-2">
                  <b-form-textarea
                    id="textarea"
                    v-model="form.about"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group class="text-right">
                  <!-- <b-button class="mr-3" type="reset" variant="danger">Reset</b-button> -->
                  <b-button type="submit" squared variant="primary">Enviar ></b-button>
                </b-form-group>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-row>

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from '@/components/Footer.vue'
import BoardBackgorund from '@/components/BoardBackgorund.vue'
import { blocks } from './data.js'
export default {
  title() {
    return this.pageTitle
  },
  name: 'ContactView',
  components: {
    NavBar,
    Footer,
    BoardBackgorund
  },
  data() {
    return {
      pageTitle: ('Contáctenos'),
      images: blocks,
      form: {
        fullname: '',
        email: '',
        phone: '',
        enterprise: '',
        about: ''
      }
    }
  },
  methods: {
    onSubmit() {
    },
    onReset() {
    }
  }
}
</script>

<style lang="scss">
  .contact-text {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
  }

  .contact-block {
    height: 250px;
    &_text {
      font-family: 'Nunito Sans', sans-serif;
      font-size: 1rem;
      &_primary {
        color: #10CFC9;
      }
    }
  }

  .contact-form {
    h3 { font-weight: bold; }
    font-weight: bold;
    label {
      font-size: 14px;
    }
    input, textarea {
      background-color: #F5F5F5;
      border: none;
    }
  }

  .padding-sm-fix {
    @media only screen and (max-width: 768px) {
      > div:first-child, > div:nth-child(4) {
        margin-bottom: 5rem;
      }
      div:not(:last-child) {
        padding: 0 !important;
      }
    }
  }
</style>
