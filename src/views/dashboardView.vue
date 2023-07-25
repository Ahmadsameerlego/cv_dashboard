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
import homeViewVue from '@/components/dashboard/homeView.vue';
export default {
    components : {
        sideBarVue,
        dashHeaderVue,
        homeViewVue
    }
}
</script>

<style >
    .content{
        width: calc(100% - 300px);
        height: calc(100% - 150px);
        background-color: #F5F5F5;
        position: relative;
        left: 0;
        top: 100px;
        margin-right: 300px;
    }
</style>