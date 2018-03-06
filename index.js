/* eslint-disable */

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  title: 'Arma3',
  name: 'test',
  type: 'game',
  requireVersion: '0.0.1',
  showOnStart: true,
  icon: 'assets/logo.png',
  routes: [
    {
      path: '/',
      name: 'home',
      vue: 'index.vue'
    }
  ],
  init: async function (wingardiumLeviosa, callback) {
    await delay(500)
    console.log(this.name + ' init func')

    callback()
  },
  start: async function () {
    await delay(2000)

    console.log(this.name + ' start func')
  },
  startButton: function () {
    console.log('I am called in Overwatch module')
  }
}