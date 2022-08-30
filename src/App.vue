<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    font-family: 'Montserrat' !important;

    .btn-link {
      color: inherit;
      &:hover {
        text-decoration: none;
      }
    }

    .font-weight-semibold {
      font-weight: 600;
    }
  }
</style>
