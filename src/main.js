import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import './validate'
import * as API from './api'
import HeaderGshop from './components/HeaderGshop/HeaderGshop.vue'
import store from './store'
import router from './router'
import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.prototype.$API = API
Vue.config.productionTip = false
Vue.component('HeaderGshop',HeaderGshop)
Vue.component(Button.name,Button)
new Vue({
  router, //使用路由器
  store, //安装store  
  render: h => h(App),
}).$mount('#app')
 