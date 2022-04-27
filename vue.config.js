const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  // devServer: {
  //   open: true, //是否自动弹出浏览器页面
  //   host: "localhost",
  //   port: '8081',
  //   https: false,   //是否使用https协议
  //   proxy: {
  //     '/back-home': {
  //       target: 'http://localhost:18080/back-home', //API服务器的地址
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/back-home': ''
  //       }
  //     }
  //   }
  // }


})
