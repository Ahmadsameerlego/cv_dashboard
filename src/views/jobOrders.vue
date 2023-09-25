<template>
    <!-- side bar  -->
    <sideBarVue />
    <!-- header  -->
    <dashHeaderVue />
  
    <section class="content px-3 pt-3">
      <!-- dashboard  -->
      <homeViewVue :applications="applications" />
    </section>
  </template>
  
  <script>
  import sideBarVue from '@/components/layout/sideBar.vue';
  import dashHeaderVue from '@/components/layout/dash_header.vue';
  import homeViewVue from '@/components/dashboard/ordersComponents.vue';
  import axios from 'axios';
  export default {
      data(){
        return{
          applications : []
        }
      },
      components : {
          sideBarVue,
          dashHeaderVue,
          homeViewVue
      },
      methods:{
        async getOrders(){
          const token = localStorage.getItem('token');
          const headers = {
            Authorization: `Bearer ${token}`,
          };
          await axios.get('company/job-applications', {headers })
          .then( (res)=>{
            this.applications = res.data.data ;
          } )
        },
      },
      mounted(){
        this.getOrders()
      } 
  }
  </script>
  
  <style>
      
  </style>