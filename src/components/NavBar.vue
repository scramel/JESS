<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand>
        <div class="navbarLogo">
          <img src="@/assets/images/jessLogoBlue.png" class="d-inline-block align-middle" alt="FSV Logo">
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-button variant="link" class="menu-items text-uppercase">
              <router-link class="white-to-primary" :to="{ name: 'home' }">
                Inicio
              </router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="link" class="menu-items text-uppercase">
            <router-link class="white-to-primary" :to="{ name: 'about' }">
                quiénes somos
              </router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="link" class="menu-items text-uppercase">
              <router-link class="white-to-primary" :to="{ name: 'services' }">
                nuestros servicios
              </router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button squared variant="outline-primary" class="text-uppercase">
              <router-link :to="{ name: 'contact' }">
                contáctenos
              </router-link>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
  .nav-link {
    cursor: default;
  }
  .navbarLogo > img {
    padding-left: 45px;
    height: 45px;
  }
</style>
