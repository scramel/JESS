<template>
  <div class="py-5 bg-primary text-white">
    <b-container>
      <b-row>
        <b-col lg="3">
          <div class="footerLogo">
            <img src="@/assets/images/jessLogoWhite.png" alt="Jess Logo">
          </div>
          <p>
            <small>
              Todos los derechos reservados 2022. Corporacionjess.com
            </small>
          </p>
        </b-col>
        <b-col offset-lg="1" lg="2">
          <b-button variant="link" size="sm">
            <small>
              Inicio
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small>
              Quiénes Sómos
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small>
              Nuestros Servicios
            </small>
          </b-button>
          <br>
          <b-button variant="link" size="sm">
            <small>
              Contáctenos
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
            Ubicación: Av. Soublette. Edf. Centro Soublette Piso 6. Ofc 6-C. Sector El Cardonal. La Guaira. Estado Vargas.<br>
            Teléfonos: +58(212) 3319119 / +58(424) 2590227. <br>
            E-mail: info@corporacionjess.com <br>
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
</style>
