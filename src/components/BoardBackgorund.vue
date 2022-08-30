<template>
  <div class="board-bg">
    <div class="board-bg__overlay position-absolute" :style="`background-image: url(${require('../assets/images/bg-0.jpg')})`"/>
    <div class="board-bg__gradient" />
    <div class="board-bg__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardBackgorund'
}
</script>

<style lang="scss">
  .board-bg {
    transition: .3s;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &__overlay {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      position: absolute;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    &__gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      transform: rotate(180deg);
      background: linear-gradient(#101820 0%, rgba(16, 24, 32, 0.449) 50%, #101820 100%);

      &:hover {
      transform: scale(1.1);
    }

      &--filtered {
        filter: brightness(0.5);
        filter: contrast(1.5);
      }
      &--blue {
        // transform: rotate(180deg);
        background: linear-gradient(0deg, #0e3744 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #0e3744 0%, rgba(0, 0, 0, 0) 100%);
      }
      &--emerald {
      background: linear-gradient(#07070750 0%, rgba(16, 24, 32, 0.449) 50%, #104666 100%);
      }
    }

    &__content {
      z-index: 50 !important;
    }
  }
</style>
