<template>
  <div>
    <BoardBackgorund>
      <NavBar />

      <b-container class="my-5">
        <b-row class="pb-5">
          <b-col offset-lg="6" lg="6" class="mb-5 text-white">
            <h1 class="pt-5 font-weight-bold text-uppercase">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit reiciendis deleniti
            </h1>
            <p class="py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro hic alias eum natus aspernatur deleniti ea reprehenderit ut amet nesciunt modi enim distinctio sit accusantium voluptatem dolorem, dolores quas quia.
            </p>
            <b-button variant="primary" class="mb-5 text-uppercase">
              conozca mas >
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
        >
          <div class="board-bg text-white text-center about-block">
            <div class="board-bg__overlay position-absolute" :style="`background-image: url(${image.bg})`"/>
            <div class="board-bg__gradient board-bg__gradient--blue" />
            <div class="py-4 board-bg__content">
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

      <b-row class="pb-5">
        <b-col offset-lg="1" lg="5">
          <b-img fluid :src="require('@/assets/images/bg-4.jpg')" alt="iamge"></b-img>
        </b-col>
        <b-col lg="5">
          <h3 class="mb-3 text-uppercase font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda eligendi nisi.
          </h3>
          <p class="mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quaerat accusantium, facere veniam aperiam minus error esse, obcaecati totam nesciunt officia fugiat. Saepe officia adipisci rem praesentium vel tenetur mollitia?
          </p>
          <p class="mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, vero praesentium alias dolorem quisquam ad, in earum cumque sunt, ducimus omnis enim molestiae numquam minus fugit natus aliquid animi consectetur.
          </p>
          <b-button class="text-uppercase" variant="primary">
            learn more >
          </b-button>
        </b-col>
      </b-row>

    </b-container>

    <b-row class="py-5 board-bg mx-0" >
      <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('@/assets/images/bg-3.jpg')})`"/>
      <div class="board-bg__gradient position-absolute"/>
      <b-container>
        <b-row class="text-white py-5">
          <b-col class="mb-4" lg="12">
            <h3 class=" text-uppercase font-weight-bold">
              Title
            </h3>
          </b-col>

          <b-col v-for="(strategy, index) in strategies" :key="index" lg="4">
            <div class="px-3 mb-5">
              <div class="position-absolute list-strategies__number text-center">
                <div class="list-strategies__text">
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
  .about-block {
    transform: translateY(-50%);
  }

  .list-strategies {
    &__number {
      width: 30px;
      height: 30px;
      left: -20px;
      border-radius: 50%;
      border: 2px solid white;

    }
    &__text {
      margin-top: 1px;
      margin-left: 1px;
    }
  }
</style>
