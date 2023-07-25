<template>
  <section id="partners" class="pt-1 pb-3">
    <div class="container">

        <swiper
          class="mt-5"
          :slides-per-view="6"
          :space-between="20"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            }"
            :modules="modules"
            :loop="true"
        >
          <swiper-slide class="mx-2">
            <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide>
          <swiper-slide class="mx-2">
            <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide>
          <swiper-slide class="mx-2">
            <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide>
          <swiper-slide class="mx-2">
            <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide>
          <swiper-slide class="mx-2">
            <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide>
          <swiper-slide class="mx-2">
            <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide>
          <swiper-slide class="mx-2">
            <img :src="require('@/assets/imgs/total-logo.png')" alt="">
          </swiper-slide>

          
        </swiper>
    </div>
  </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper';


  // Import Swiper styles
  import 'swiper/css';

export default {
  components:{
      Swiper,
      SwiperSlide,
  },
    setup() {
    
    return {
        modules: [Autoplay],
    };
  },

}
</script>

<style scoped>
  .swiper-slide img{
    max-width: 200px;
    width: 100%;
  }
  #partners{
    background-color: #293255;
    margin-top: -20px;
  }
</style>