import Vue from 'vue'
import Vuelidate from 'vuelidate'
import messagePlugin from '@/utils/message.plugin'
import App from './App.vue'
import './registerServiceWorker'
import dateFilter from '@/filters/date.filter'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyC2JC9Q0JWqIf40j4B7kBY47wjVPP90fUs",
  authDomain: "vue-crm-d6c4e.firebaseapp.com",
  projectId: "vue-crm-d6c4e",
  storageBucket: "vue-crm-d6c4e.appspot.com",
  messagingSenderId: "590464555013",
  appId: "1:590464555013:web:5eca2c08d5ba3bdeb7246c",
  measurementId: "G-FPTYV20C0V"
});

Vue.filter('date', dateFilter);

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})