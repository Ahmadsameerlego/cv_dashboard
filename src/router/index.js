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
import contactUs from '@/views/contactUs.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/login',
    name : 'login',
    component : login
  },
  {
    path : '/register',
    name : 'register',
    component : register
  },
  {
    path : '/dashboard',
    name : 'dashboard',
    component : dashboard
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
