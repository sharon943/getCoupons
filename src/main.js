// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Distpicker from 'v-distpicker'
import './assets/js/rem.js'
import './assets/js/md5.js'
import vueWechatTitle from 'vue-wechat-title'
import axios from 'axios'
Vue.component('v-distpicker', Distpicker)
Vue.use(ElementUI);
Vue.use(vueWechatTitle);
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true
Vue.use(iView);


Vue.use(VueQuillEditor)
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
