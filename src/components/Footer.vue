<template>
  <div class="py-5 bg-secondary  text-white">
    <b-container>
      <b-row>
        <b-col lg="3">
          <div class="footerLogo">
            <img src="@/assets/images/jessLogoWhite.png" alt="Jess Logo">
          </div>
          <p>
            <small>
              Todos los derechos reservados 2022. corporacionjess.com
            </small>
          </p>
        </b-col>
        <b-col offset-lg="1" lg="2">
          <b-button variant="link" size="sm">
            <small class="footerLink">
              <router-link :to="{ name: 'home' }">
                Inicio
              </router-link>
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small class="footerLink">
              <router-link :to="{ name: 'about' }">
                Quiénes Sómos
              </router-link>
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small class="footerLink">
              <router-link :to="{ name: 'service' }">
                Nuestros Servicios
              </router-link>
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small class="footerLink">
              <router-link :to="{ name: 'contact' }">
                Contáctenos
              </router-link>
            </small>
          </b-button>
        </b-col>
        <b-col lg="6">
          <div class="d-flex">
            <div class="mr-4 social">
              <BIconTwitter font-scale="2"/>
            </div>
            <div class="mr-4 social">
              <BIconFacebook font-scale="2"/>
            </div>
            <div class="mr-4 social">
              <BIconInstagram font-scale="2"/>
            </div>
          </div>
          <br>
          <small>
            <div class="overlayFooter">
              <span class="overlayFooter-text_primary">Ubicación:</span> Av. Soublette. Edf. Centro Soublette Piso 6. Ofc 6-C. Sector El Cardonal. La Guaira. Estado Vargas.<br>
              <span class="overlayFooter-text_primary">Teléfonos:</span> +58(212) 3319119 / +58(424) 2590227. <br>
              <span class="overlayFooter-text_primary">E-mail:</span> info@corporacionjess.com <br>
            </div>
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

<style lang="scss">
  .footerLogo > img {
    padding-left: 15px;
    height: 45px;
  }

  .overlayFooter-text {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 60px;
    &_primary {
      color: #10CFC9;
    }
  }

  .social {
    color: #83C3E6;
  }

  .footerLink > a, a:visited {
    color: #FFFFFF;
  }

  .footerLink > a:hover {
    text-decoration: none;
    color: #FFFFFF;
  }
</style>
