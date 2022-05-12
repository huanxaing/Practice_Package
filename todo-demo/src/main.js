import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'

Vue.use(Antd)
    // axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
    // Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')