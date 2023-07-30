<template>
    <!-- side bar  -->
    <sideBarVue />
    <!-- header  -->
    <dashHeaderVue />
  
    <section class="content px-3 pt-3">
      <!-- dashboard  -->
      <homeViewVue />
    </section>
  </template>
  
  <script>
  import sideBarVue from '@/components/layout/sideBar.vue';
  import dashHeaderVue from '@/components/layout/dash_header.vue';
  import homeViewVue from '@/components/dashboard/orderDetail.vue';
  export default {
    components : {
        sideBarVue,
        dashHeaderVue,
        homeViewVue
    }
  }
  </script>
  
  <style>
      
  </style>