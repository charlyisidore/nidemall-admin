import Vue from 'vue'
import VueI18n from 'vue-i18n' // translations

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import ElementLocale from 'element-ui/lib/locale'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control

import * as filters from './filters' // global filters

import permission from '@/directive/permission/index.js' // 权限判断指令

import Print from '@/utils/print' // 打印

Vue.use(VueI18n)

import en from './locales/en.js'
import zh_Hans from './locales/zh-Hans.js'

// VueI18n instance
const i18n = new VueI18n({
  locale: 'zh-Hans',
  fallbackLocale: {
    'en': ['zh-Hans'],
    'zh-Hans': ['en']
  },
  messages: {
    'en': en,
    'zh-Hans': zh_Hans
  }
})

// Update Element UI locale when Vue locale is changed
// https://element.eleme.cn/#/en-US/component/i18n
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.use(Print)

Vue.use(Element, {
  size: Cookies.get('size') || 'mini' // set element-ui default size
})

Vue.directive('permission', permission)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})

// Hot updates
// https://kazupon.github.io/vue-i18n/guide/hot-reload.html#basic-example
if (module.hot) {
  module.hot.accept(['./locales/en.js', './locales/zh-Hans.js'], function() {
    i18n.setLocaleMessage('en', require('./locales/en.js').default)
    i18n.setLocaleMessage('zh-Hans', require('./locales/zh-Hans.js').default)
  })
}
