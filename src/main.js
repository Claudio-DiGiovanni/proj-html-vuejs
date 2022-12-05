import { library } from '@fortawesome/fontawesome-svg-core';

import { faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faMagnifyingGlass, faUserPlus);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
