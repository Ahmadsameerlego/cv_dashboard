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
        >
          <swiper-slide class="mx-2" v-for="item in parteners" :key="item">
            <img :src="item.image" alt="partener image">
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
  computed:{
    parteners(){
      return this.$store.state.parteners ;
    }
  },
  setup() { 
    return {
        modules: [Autoplay],
    };
  },
  created(){
    this.$store.dispatch('getParteners');
  }

}
</script>

<style scoped>
  .swiper-slide img{
    max-width: 200px;
    width: 100%;
    height: 65px;
    object-fit: cover;
    background-color: white;
  }
  #partners{
    background-color: #293255;
    margin-top: -20px;
  }
</style>