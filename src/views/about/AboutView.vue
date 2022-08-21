<template>
  <div>
    <BoardBackgorund>
      <NavBar />
      <div class="py-5 text-center text-white font-weight-bold">
        <h1 class="py-5 text-uppercase">
          About
        </h1>
      </div>
    </BoardBackgorund>

    <b-container>
      <b-row class="pb-5">
        <b-col offset-lg="1" lg="4" class="mt-5 overflow-hidden">
          <img src="@/assets/images/bg-2.jpg" alt="bg-2" height="500px" style="transform: translateX(-25%)">
          <!-- <b-img fluid :src="require('@/assets/images/bg-2.jpg')" alt="iamge"></b-img> -->
        </b-col>
        <b-col offset-lg="1" lg="5" class="mt-5">
          <h3 class="text-uppercase font-weight-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem tenetur numquam aliquam nostrum reprehenderit veritatis excepturi sit quam, eum magni quidem distinctio libero perspiciatis ut nulla neque rem illo?
          </p>

          <ul class="pl-3">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>

        </b-col>
      </b-row>

      <b-row class="py-5">
        <b-col
          v-for="(image, index) in images"
          :key="index"
          lg="6"
          class="px-0"
        >
          <div class="board-bg text-white text-center">
            <div class="board-bg__overlay position-absolute" :style="`background-image: url(${image.bg})`"/>
            <div class="board-bg__gradient board-bg__gradient--blue" />
            <div class="py-5 board-bg__content">
              <b-img fluid :src="image.icon" alt="iamge"></b-img>
              <h3 class="font-weight-semibold">
                {{ image.text }}
              </h3>
              <b-button class="mb-5 text-uppercase" variant="link">
                ver mas +
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="py-5">
        <b-col class="mb-4" lg="12">
          <h3 class=" text-uppercase font-weight-bold">
            Title
          </h3>
        </b-col>

        <b-col v-for="(strategy, index) in strategies" :key="index" lg="4">
          <div class="px-3 mb-5">
            <div class="position-absolute list-strategies__number text-center bg-primary text-white">
              <div class="list-strategies__text">
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
  name: 'AboutView',
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
 .list-strategies {
    &__number {
      width: 30px;
      height: 30px;
      left: -20px;
      border-radius: 50%;
    }
    &__text {
      margin-top: 1px;
      margin-left: 1px;
    }
  }
</style>
