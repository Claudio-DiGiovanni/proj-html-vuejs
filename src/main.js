import { library } from '@fortawesome/fontawesome-svg-core';

// eslint-disable-next-line import/no-duplicates
import { faMagnifyingGlass, faUserPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/no-duplicates
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faMagnifyingGlass, faUserPlus, faCartShopping, faReadme, faLifeRing);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
