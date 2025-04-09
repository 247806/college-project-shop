// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import {createBootstrap} from 'bootstrap-vue-next'
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css";

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, 
    faSignInAlt,  
    faSignOutAlt,
    faUserPlus,
    faCartShopping,
    faCartPlus,
    faXmark, 
    faMinus,
    faPlus, faUser, faReceipt, faStore, faDownload, faCircleInfo, faPen, faComment } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faHouse, faSignInAlt, faSignOutAlt, faUserPlus, faCartShopping, faCartPlus, faXmark, faPlus, faMinus, faUser, faReceipt, faStore, faDownload, faCircleInfo, faPen, faComment)


const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(createBootstrap())
.use(Toast)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
