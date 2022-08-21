<template>
  <div>
    <BoardBackgorund>
      <NavBar />
      <div class="py-5 text-center text-white font-weight-bold">
        <h1 class="py-5 text-uppercase">
          Services
        </h1>
      </div>
    </BoardBackgorund>

    <b-container>
      <b-row>
        <b-col lg="12" class="pt-5 pb-5 text-center">
          <b-button class="mr-5 text-uppercase" variant="outline-primary">
            button-1
          </b-button>
          <b-button class="mr-5 text-uppercase" variant="outline-primary">
            button-2
          </b-button>
          <b-button class="mr-5 text-uppercase" variant="outline-primary">
            button-3
          </b-button>
          <b-button class="text-uppercase" variant="outline-primary">
            button-4
          </b-button>
        </b-col>
      </b-row>

      <b-row class="py-5">
        <b-col lg="4" class="overflow-hidden">
          <img src="@/assets/images/bg-3.jpg" alt="bg-2" height="500px" style="transform: translateX(-25%)">
        </b-col>
        <b-col offset-lg="1" lg="7">
          <h2 class="text-uppercase font-weight-semibold">
            title
          </h2>
          <h6 class="font-weight-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas esse,
          </h6>

          <b-row>
            <b-col>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
              </ul>
            </b-col>
            <b-col>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
                <li>Lorem ipsum dolor sit amet consectetur. Ad voluptas esse,</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-row class="py-5 board-bg mx-0">
      <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('@/assets/images/bg-9.jpg')})`"/>
      <div class="board-bg__gradient position-absolute"/>
      <b-container>
        <b-row class="text-white py-5">
          <b-col class="mb-4" lg="7">
            <h3 class=" text-uppercase font-weight-bold">
              Title
            </h3>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse, aut nostrum magnam, ipsa magni aspernatur, deserunt odit architecto vel blanditiis cumque quidem a odio alias. Quam nesciunt saepe nostrum!
            </h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod culpa doloribus neque eius aperiam quae sit labore eaque exercitationem magnam, amet natus. Pariatur alias quidem ipsum tenetur voluptate ab adipisci?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor ad facere corrupti assumenda veniam nisi, molestiae, illo quae harum ab fugiat, possimus illum id aspernatur. Quae dolor corporis quod?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni autem ad dolores repudiandae hic eligendi est facere amet id, soluta ea molestiae nisi placeat accusamus provident beatae consectetur molestias?
            </p>
            <b-row>
              <b-col>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </b-col>
              <b-col>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
          <b-col offset="1" lg="4" class="overflow-hidden">
            <img src="@/assets/images/bg-8.jpg" alt="bg-8" height="500px" style="transform: translateX(-25%)">
          </b-col>
        </b-row>
      </b-container>
    </b-row>

    <b-container>
            <b-row class="py-5">
        <b-col lg="4" class="overflow-hidden">
          <img src="@/assets/images/bg-10.jpg" alt="bg-10" height="365px" style="transform: translateX(-25%)">
        </b-col>
        <b-col offset-lg="1" lg="7">
          <h2 class="text-uppercase font-weight-semibold">
            title
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit laboriosam dignissimos omnis eius pariatur praesentium cumque nulla magnam itaque accusamus, qui autem explicabo, ut perferendis. Eligendi atque voluptatem accusantium.
          </p>

          <b-row>
            <b-col class="py-3">
              <h6 class="py-3 font-weight-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odio, quasi illum ut vitae.
              </h6>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </b-col>
            <b-col class="py-3 ">
              <h6 class="py-3 font-weight-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quidem ab.
              </h6>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </b-col>
          </b-row>
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
export default {
  name: 'ServicesView',
  components: {
    NavBar,
    Footer,
    BoardBackgorund,
    ThanksFooter
  }
}
</script>
