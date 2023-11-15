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
    component : register,
    meta : {
      title : 'تسجيل حساب'
    }
  },
  {
    path : '/dashboard',
    name : 'dashboard',
    component : dashboard,
    meta : {
      requiresAuth : true,
      title : 'الرئيسية'
    }
  },
  {
    path : '/search',
    name : 'search',
    component : search,
    meta : {
      title : 'بحث'
    }
  },
  {
    path : '/profile/:id',
    name : 'profile',
    component : profile,
    meta : {
      title : 'الملف الشخصي'
    }
  },
  {
    path : '/chat/:id',
    name : 'chat',
    component : chat,
    meta : {
      title : 'المحادثة'
    }
  },
  {
    path : '/addJob',
    name : 'addJob',
    component : addJob,
    meta : {
      title : 'اضافة اعلان'
    }
  },
  {
    path : '/messages',
    name : 'messages',
    component : messages,
    meta : {
      title : 'المحادثات'
    }
  },
  {
    path : '/orders',
    name : 'orders',
    component : orders,
    meta : {
      title : 'الطلبات'
    }
  },
  {
    path : '/details/:id',
    name : 'details',
    component : details,
    meta : {
      title : 'التفاصيل'
    }
  },
  {
    path : '/settings',
    name : 'settings',
    component : settings,
    meta : {
      title : 'الاعدادات'
    }
  },
  {
    path : '/ownDetails/:id',
    name : 'ownDetails',
    component : ownDetails,
    meta : {
      title : 'التفاصيل'
    }
  },
  {
    path : '/editJob',
    name : 'editJob',
    component : editJob,
    meta : {
      title : 'تعديل الاعلان'
    }
  },
  {
    path : '/contactUs',
    name : 'contactUs',
    component : contactUs,
    meta : {
      title : 'تواصل معنا'
    }
  },
  {
    path : '/setting',
    name : 'setting',
    component : setting,
    meta : {
      title : 'الاعدادات'
    }
  },
  {
    path : '/access',
    name : 'access',
    component : access,
    meta : {
      title : 'الصلاحيات'
    }
  },
  {
    path : '/addEmp',
    name : 'addEmp',
    component : addEmp,
    meta : {
      title : 'اضافة موظف'
    }
  },
  {
    path : '/editEmp/:id',
    name : 'editEmp',
    component : editEmp,
    meta : {
      title : 'تعديل موظف'
    }
  },
  {
    path : '/subscriptions',
    name : 'subscriptions',
    component : subscriptions,
    meta : {
      title : 'الاشتراك'
    }
  },
  {
    path : '/notifications',
    name : 'notifications',
    component : notifications,
    meta : {
      title : 'الاشعارات'
    }
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
    if ( localStorage.getItem('isAuth') === 'false'|| !localStorage.getItem('isAuth')  ) {
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
