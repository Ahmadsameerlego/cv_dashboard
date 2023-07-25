<template>
  <section id="app_pages" class="position-relative">
    <div class="container">

        <h3 class="text-center fw-bold"> {{ $t('site.appPages') }} </h3>
        <p class="fw-6 text-center grayColor"> {{ $t('site.pagesDesc') }} </p>



        <swiper
            class="mt-5"
            :slides-per-view="5"
            :spaceBetween="15"
            :modules="modules"
            :loop="true"
            :centeredSlides="true"
            :autoplay="{
                delay: 3500,
                disableOnInteraction: false,
            }"
             :breakpoints="swiperOptions.breakpoints"
        >
          <swiper-slide class="">
            <img :src="require('@/assets/imgs/Image 8 (1).png')" alt="">
          </swiper-slide>
          <swiper-slide class="">
            <img :src="require('@/assets/imgs/Image 8 (1).png')" alt="">
          </swiper-slide>
          <swiper-slide class="">
            <img :src="require('@/assets/imgs/Image 8 (1).png')" alt="">
          </swiper-slide>
          <swiper-slide class="">
            <img :src="require('@/assets/imgs/Image 8 (1).png')" alt="">
          </swiper-slide>
          <swiper-slide class="">
            <img :src="require('@/assets/imgs/Image 8 (1).png')" alt="">
          </swiper-slide>
          <swiper-slide class="">
            <img :src="require('@/assets/imgs/Image 8 (1).png')" alt="">
          </swiper-slide>
          <swiper-slide class="">
            <img :src="require('@/assets/imgs/Image 8 (1).png')" alt="">
          </swiper-slide>

          
        </swiper>

        <div class="centered_image">
            <img :src="require('@/assets/imgs/centered.png')" alt="">
        </div>
    </div>
  </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay , A11y} from 'swiper';


  // Import Swiper styles
  import 'swiper/css';

export default {
    data(){
        return{
        swiperOptions: {
          breakpoints: {       
            320: {       
                slidesPerView: 1,
                spaceBetween: 20     
            },          
            770: {       
                slidesPerView: 3,       
                spaceBetween: 20     
            },   
        
            771: {       
                slidesPerView: 5,       
                spaceBetween: 20     
      } }},

        }
    },
  components:{
      Swiper,
      SwiperSlide,
  },
    setup() {
    
    return {
        modules: [Autoplay, A11y]
    };
  },

}
</script>

<style  lang="scss">
    #app_pages{
        background-color: #F9F9F9;
        padding-top: 40px;
        padding-bottom: 40px;
        .centered_image{
        position: absolute;
        top: 10%;
        height: 458px;
        width: 240px;
        right: 50%;
        transform: translate(50%, 15%);
        img{
            width: 100%;
            height: 100%;
        }
    }
    .swiper-wrapper{
        padding-top: 40px;
    }
//   .swiper-slide img{
//     max-width: 200px;
//     width: 100%;
//   }
  #app_pages{
    background-color: #F9F9F9;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .swiper-slide.swiper-slide-active img{
    height: 434px;
    margin-top: -45px;
    border-radius: 20px;
  }
   .swiper-slide.swiper-slide-active {
    // margin-left: 40px !important;
   }
   .swiper-slide-prev{
    // margin-left: 40px !important;
   }
  .swiper-slide img{
    width: 100%;
    height: 400px;
  }
    }


.swiper-slide:not(.swiper-slide-active){
  transform: scale(0.9);
}


</style>