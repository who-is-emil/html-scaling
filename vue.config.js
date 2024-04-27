const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/vars/index.scss"; @import "@/assets/scss/mixins/index.scss";',
      },
    },
  },
});
