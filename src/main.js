import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import './validate'
import * as API from './api'
import HeaderGshop from './components/HeaderGshop/HeaderGshop.vue'
import store from './store'
import router from './router'
Vue.prototype.$API = API
Vue.config.productionTip = false
Vue.component('HeaderGshop',HeaderGshop)
new Vue({
  router, //使用路由器
  store, //安装store  
  render: h => h(App),
}).$mount('#app')
 