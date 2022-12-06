/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import { library } from '@fortawesome/fontawesome-svg-core';

import { faMagnifyingGlass, faUserPlus, faCartShopping, faLifeRing, faCalendarDays, faMoneyBill, faEye, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';

import { faReadme } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faMagnifyingGlass, faUserPlus, faCartShopping, faReadme, faLifeRing, faPaperPlane, faCalendarDays, faUser, faMoneyBill, faEye);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
