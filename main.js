import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// #ifdef APP-PLUS
import Tab from '@/components/yll1024335892-tab/yll1024335892-tab.js';
Vue.prototype.Tab=Tab;
// #endif

import store from '@/store/yll1024335892-tab.js';
Vue.prototype.$store=store;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
