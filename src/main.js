import Vue from 'vue'
import Vuelidate from 'vuelidate'
import messagePlugin from '@/utils/message.plugin'
import App from './App.vue'
import './registerServiceWorker'
import dateFilter from '@/filters/date.filter'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.config.productionTip = false

Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
