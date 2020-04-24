// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-write-svg')({
            utf8: false
          }),
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
}
