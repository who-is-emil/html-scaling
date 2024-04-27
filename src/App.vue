<template>
  <div class="app">
    <div class="hero mb-40">
      <div class="hero__container container">
        <div class="hero__content"></div>
      </div>
    </div>

    <div class="layout">
      <div class="layout__container container">
        <div class="layout__items">
          <div class="layout__item" v-for="(_, idx) in 12" :key="idx">
            <div class="card">
              <img
                src="https://economictimes.indiatimes.com/thumb/msid-106234016,width-1600,height-900,resizemode-4,imgsize-297956/is-the-mandalorian-season-4-heading-to-the-big-screen.jpg?from=mdr"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
.hero {
  height: toRem(320);

  @include media-breakpoint-up(lg) {
    height: toRem(600);
  }
  @include media-breakpoint-only(md) {
    height: toRem(450);
  }

  &__container {
    height: 100%;
  }

  &__content {
    background-color: darkorange;
    height: 100%;
  }
}

.layout {
  &__items {
    display: flex;
    flex-wrap: wrap;
    margin-left: toRem(-8);
    margin-right: toRem(-8);
  }

  &__item {
    width: 100%;
    padding-left: toRem(8);
    padding-right: toRem(8);

    &:not(:last-child) {
      margin-bottom: toRem(16);
    }

    @include media-breakpoint-up(lg) {
      width: 33.3333%;

      @include last-row(3) {
        margin-bottom: 0;
      }
    }
    @include media-breakpoint-only(md) {
      width: 50%;

      @include last-row(2) {
        margin-bottom: 0;
      }
    }
  }
}

.card {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
