<template>
    <!-- side bar  -->
    <sideBarVue />
    <!-- header  -->
    <dashHeaderVue />
  
    <section class="content px-3 pt-3">
      <!-- dashboard  -->
      <homeViewVue :ads="ads" :getAdLoad="getAdLoad" :isSub="isSub"/>
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
      ads : [],
      getAdLoad : false,
      isSub : null
    }
  },
    components : {
        sideBarVue,
        dashHeaderVue,
        homeViewVue
    },
    computed:{
      
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
            this.ads = res.data.data ;
            this.isSub = true ;
            setTimeout(() => {
              this.getAdLoad = true ;
            }, 500);
          }else{
            this.isSub = false ;
          }
        } )
      },
    },
    mounted(){
      this.getOrders()
    },
    created(){
      // this.getAdLoad = true ;
      // setTimeout(() => {
      //   this.$store.dispatch('getAds');
      // }, 500);
    }
}
</script>
  
<style>
    
</style>