/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import { library } from '@fortawesome/fontawesome-svg-core';

import { faMagnifyingGlass, faCubes, faLeaf, faUserPlus, faChevronUp, faCartShopping, faLifeRing, faCalendarDays, faMoneyBill, faEye, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';

import { faReadme, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faMagnifyingGlass, faCubes, faLeaf, faFacebookF, faChevronUp, faInstagram, faTwitter, faUserPlus, faCartShopping, faReadme, faLifeRing, faPaperPlane, faCalendarDays, faUser, faMoneyBill, faEye);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
