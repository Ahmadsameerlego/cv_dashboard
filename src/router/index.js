import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import login from '@/views/loginView.vue';
import register from '@/views/registerView.vue';
import dashboard from '@/views/dashboardView.vue';
import search from '@/views/searchView.vue';
import profile from '@/views/employeeProfile.vue';
import chat from '@/views/chatRooms.vue';
import addJob from '@/views/addJobAds.vue';
import messages from '@/views/messagesView.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
