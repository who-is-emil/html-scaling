<template>
  <div class="app">
    <div class="hero mb-40">
      <div class="hero__container container">
        <div class="hero__content">
          <div class="hero__text">
            {{ device }}
          </div>
        </div>
      </div>
    </div>

    <div class="text-wrapper">
      <div class="text text--64">
        64 кратно увеличиваем продажи через создание цифровых продуктов
      </div>
      <div class="text text--48">
        48 кратно увеличиваем продажи через создание цифровых продуктов
      </div>
      <div class="text text--32">
        32 кратно увеличиваем продажи через создание цифровых продуктов
      </div>
      <div class="text text--24">
        24 кратно увеличиваем продажи через создание цифровых продуктов
      </div>
      <div class="text text--16">
        16 кратно увеличиваем продажи через создание цифровых продуктов
      </div>
      <div class="text text--12">
        12 кратно увеличиваем продажи через создание цифровых продуктов
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
import { isDesktop, isTablet } from '@/assets/js/breakpoints';

export default {
  name: 'App',
  data() {
    return {
      device: '',
    };
  },
  methods: {
    deviceCheck() {
      if (isDesktop()) {
        this.device = 'desktop';
      } else if (isTablet()) {
        this.device = 'tablet';
      } else {
        this.device = 'mobile';
      }
    },
  },
  mounted() {
    this.deviceCheck();

    window.addEventListener('resize', () => {
      this.deviceCheck();
    });
  },
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-black;
  }

  &__text {
    position: relative;
    z-index: 1;
    font-size: toRem(40);
    line-height: 1.2;
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

.text-wrapper {
  padding: toRem(40);
}

.text {
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: toRem(24);
  }

  &--64 {
    font-size: toRem(64);
  }
  &--48 {
    font-size: toRem(48);
  }
  &--32 {
    font-size: toRem(32);
  }
  &--24 {
    font-size: toRem(24);
  }
  &--16 {
    font-size: toRem(16);
  }
  &--12 {
    font-size: toRem(12);
  }
}
</style>
