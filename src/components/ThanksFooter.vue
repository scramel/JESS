<template>
  <b-row class="py-5 board-bg mx-0">
    <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('@/assets/images/bg-5.jpg')}); opacity: 0.1;`"/>
    <b-container class="py-4">
      <b-row>
        <b-col lg="12 text-center">
          <h2 class="mb-3 font-weight-bold">
            Gracias a nuestro profesionalismo, un importante grupo de empresas han depositado su confianza en nosotros
          </h2>
          <b-button squared variant="primary" class="text-uppercase">
            <router-link style="color: white;" :to="{ name: 'contact' }">
              contáctenos >
            </router-link>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-row>
</template>

<script>
export default {
  name: 'ThanksFooter'
}
</script>
