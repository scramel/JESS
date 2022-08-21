<template>
  <div class="py-5 bg-primary text-white">
    <b-container>
      <b-row>
        <b-col lg="3">
          <h1>
            ICON
          </h1>
          <p>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ever.
            </small>
          </p>
        </b-col>
        <b-col offset-lg="1" lg="2">
          <b-button variant="link" size="sm">
            <small>
              link-1
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small>
              link-2
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small>
              link-3
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small>
              link-4
            </small>
          </b-button>
        </b-col>
        <b-col lg="6">
          <div class="d-flex">
            <div class="mr-4">
              <BIconTwitter font-scale="2"/>
            </div>
            <div class="mr-4">
              <BIconFacebook font-scale="2"/>
            </div>
            <div class="mr-4">
              <BIconInstagram font-scale="2"/>
            </div>
          </div>
          <small>
            Lorem ipsum dolor sit amet consectetur <br>
            Lorem ipsum dolor sit amet consectetur <br>
            Lorem ipsum dolor sit amet consectetur <br>
            Lorem ipsum dolor sit amet consectetur
          </small>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BIconTwitter, BIconFacebook, BIconInstagram } from 'bootstrap-vue';
export default {
  name: 'FooterComponent',
  components: {
    BIconTwitter,
    BIconFacebook,
    BIconInstagram
  }
}
</script>
