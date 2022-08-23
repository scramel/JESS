<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <b-button variant="link" class="text-uppercase font-weight-semibold">
              <router-link :to="{ name: 'home' }">
                Inicio
              </router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <b-button variant="link" class="text-uppercase font-weight-semibold">
            <router-link :to="{ name: 'about' }">
                quiénes sómos
              </router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <b-button variant="link" class="text-uppercase font-weight-semibold">
              <router-link :to="{ name: 'services' }">
                nuestros servicios
              </router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <b-button variant="outline-primary" class="text-uppercase font-weight-semibold">
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
