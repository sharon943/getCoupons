import Vue from 'vue'
import Router from 'vue-router'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import VueClipboard from 'vue-clipboard2'

import index from '@/components/index'
import Vueresource from "vue-resource"


Vue.use(Router)
Vue.use(Vueresource)
Vue.use(IScrollView, IScroll)
Vue.use(VueClipboard)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index,
    },
  ]
})

