import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store';
import VueI18n from 'vue-i18n';
import i18n from './i18n'
// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import primevue 
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";
import ToastService from 'primevue/toastservice';



// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();


import VOtpInput from "vue3-otp-input";

import VueGoogleMaps from '@fawmi/vue-google-maps'


// import axios
import axios from 'axios';
axios.defaults.baseURL = 'https://backend.cvbroadcast.com/api/v1/';
// axios.defaults.baseURL = ' https://accept.paymob.com/api/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');   
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.lang = localStorage.getItem('locale');

axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Check if the error response matches the specific structure
      if (error.response && error.response.data) {
        const { data, key, msg } = error.response.data;
  
        // Check if the response matches your desired criteria
        if (data === 'قم بتجديد الاشتراك' && key === 'success' && msg === 'تم الارسال بنجاح') {
          // Trigger a common action here
          console.log('Common action triggered for the specific error response.');
  
          // You can perform any action you want here
          // For example, showing a modal, redirecting, or displaying a message.
        }
      }
  
      return Promise.reject(error);
    }
  );

// import sweat alert 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// import pagination
import Paginate from "vuejs-paginate-next";


// importing AOS css style globally
import 'aos/dist/aos.css'

// // InfiniteLoading 
// import InfiniteLoading from "v3-infinite-loading";
// import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots

  



import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

// main style 
import './assets/css/style.scss';

// main style 
import './assets/css/style-ltr.scss';

// responsive style 
import '@/assets/css/responsive.scss'

createApp(App)
.use(store)
.use(router)
.use(i18n)
.use(VueI18n)
.use(VueSweetalert2)
.use(FontAwesomeIcon)
.use(Paginate)
.component('v-otp-input', VOtpInput)
.use(PrimeVue)
.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB4d19CAL7u_hJ8k4P7EaQFcnner_Q9KEo',
        libraries: "places"

    },
})
.use(ToastService)
.use(VueVideoPlayer)
.mount('#app')
