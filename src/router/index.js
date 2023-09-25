import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import login from '@/views/loginView.vue';
import register from '@/views/registerView.vue';
import dashboard from '@/views/dashboardView.vue';
import search from '@/views/searchView.vue';
import profile from '@/views/employeeProfile.vue';
import chat from '@/views/chatRooms.vue';
import addJob from '@/views/addJobAds.vue';
import messages from '@/views/messagesView.vue';
import orders from '@/views/jobOrders.vue';
import details from '@/views/orderDetails.vue';
import settings from '@/views/jobSettings.vue';
import ownDetails from '@/views/ownOrdersDetails.vue';
import editJob from '@/views/editJobPost.vue';
import contactUs from '@/views/contactUs.vue';
import setting from '@/views/settingView.vue';
import access from '@/views/employeeAccess.vue';
import addEmp from '@/views/addEmp.vue';
import editEmp from '@/views/editEmp.vue';
import subscriptions from '@/views/subscribtionsView.vue';
import notifications from '@/views/notificationsView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter : ( to , from , next )=>{
      if( localStorage.getItem('isAuth') == 'true' ){
        next({name : 'dashboard'})
      }else{
        next()
      }
    }
  },
  {
    path : '/login',
    name : 'login',
    component : login,
    beforeEnter: (to, from, next) => {
      const token  = localStorage.getItem('token');
      if( token ){
        next({name : 'dashboard'})
      }else{
        next()
      }
    },

  },
  {
    path : '/register',
    name : 'register',
    component : register
  },
  {
    path : '/dashboard',
    name : 'dashboard',
    component : dashboard,
    meta : {
      requiresAuth : true
    }
  },
  {
    path : '/search',
    name : 'search',
    component : search
  },
  {
    path : '/profile/:id',
    name : 'profile',
    component : profile
  },
  {
    path : '/chat/:id',
    name : 'chat',
    component : chat
  },
  {
    path : '/addJob',
    name : 'addJob',
    component : addJob
  },
  {
    path : '/messages',
    name : 'messages',
    component : messages
  },
  {
    path : '/orders',
    name : 'orders',
    component : orders
  },
  {
    path : '/details/:id',
    name : 'details',
    component : details
  },
  {
    path : '/settings',
    name : 'settings',
    component : settings
  },
  {
    path : '/ownDetails/:id',
    name : 'ownDetails',
    component : ownDetails
  },
  {
    path : '/editJob',
    name : 'editJob',
    component : editJob
  },
  {
    path : '/contactUs',
    name : 'contactUs',
    component : contactUs
  },
  {
    path : '/setting',
    name : 'setting',
    component : setting
  },
  {
    path : '/access',
    name : 'access',
    component : access
  },
  {
    path : '/addEmp',
    name : 'addEmp',
    component : addEmp
  },
  {
    path : '/editEmp/:id',
    name : 'editEmp',
    component : editEmp
  },
  {
    path : '/subscriptions',
    name : 'subscriptions',
    component : subscriptions
  },
  {
    path : '/notifications',
    name : 'notifications',
    component : notifications
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if ( localStorage.getItem('isAuth') === 'false' ) {
      next({ name: 'home' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }

});


// import Vue from 'vue';

// const DEFAULT_TITLE = 'Some Default Title';
// router.afterEach((to) => {
//         document.title = to.meta.title || DEFAULT_TITLE;
// });


export default router
