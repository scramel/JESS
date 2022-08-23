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
        <b-row>
          <b-col lg="12" class="text-center">
            <h2 class="mb-3 font-weight-bold">
              Gracias a nuestro profesionalismo, un importante grupo de empresas han depositado su confianza en nosotros
            </h2>
            <small>
              Nos esforzamos cada día en ofrecerles el mejor servicio minimizando sus costos y optimizando su operación. Si desea más información sobre nosotros.
            </small>
          </b-col>

          <b-col v-for="(image, index) in images"
            :key="index"
            col-lg="4"
            class="py-5 px-0"
          >
            <div class="py-4 board-bg text-white text-center">
              <div class="board-bg__overlay position-absolute" :style="`background-image: url(${image.bg})`"/>
              <div class="board-bg__gradient board-bg__gradient--blue" />
              <div class="py-4 board-bg__content">
                <b-img fluid :src="image.icon" alt="iamge"></b-img>
                <p class="py-4">
                  {{ image.text }}
                </p>
              </div>
            </div>
          </b-col>

          <b-col lg="12">
            <b-card border-variant="light" class="mx-5">
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.fullname"
                    type="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    placeholder="Enter name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.phone"
                    placeholder="Enter name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.enterprise"
                    placeholder="Enter name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                  <b-form-textarea
                    id="textarea"
                    v-model="form.about"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group class="text-right">
                  <b-button class="mr-3" type="reset" variant="danger">Reset</b-button>
                  <b-button type="submit" variant="primary">Submit</b-button>
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
  name: 'ContactView',
  components: {
    NavBar,
    Footer,
    BoardBackgorund
  },
  data() {
    return {
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

<style lang="scss" scoped>

</style>
