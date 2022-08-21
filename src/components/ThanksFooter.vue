<template>
  <b-row class="py-5 board-bg mx-0">
    <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('@/assets/images/bg-5.jpg')}); opacity: 0.1;`"/>
    <b-container class="py-4">
      <b-row>
        <b-col lg="12 text-center">
          <h2 class="mb-3 font-weight-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate odit corrupti eligendi poss.
          </h2>
          <b-button variant="primary" class="text-uppercase">
            contactenos >
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
