<template>
    <!-- side bar  -->
    <sideBarVue />
    <!-- header  -->
    <dashHeaderVue />
  
    <section class="content px-3 pt-3">
      <!-- dashboard  -->
      <homeViewVue :applications="applications" :isGet="isGet" :isSub="isSub" @setAds="setNewAds" />
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
          applications : [],
          isGet : false,
          isSub : null
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
          await axios.get('company/advertisements', {headers })
          .then( (res)=>{
            if( res.data.key === 'success' ){
              this.applications = res.data.data ;
              this.isSub = true ;
              setTimeout(() => {
                this.isGet = true ;
              }, 500);
            }else{
              this.isSub = false ;
            }
          } )
        },

        setNewAds(value){
          this.applications = value
        }
      },
      mounted(){
        this.getOrders()
      } 
  }
  </script>
  
  <style>
      
  </style>