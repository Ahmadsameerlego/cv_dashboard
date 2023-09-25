<template>
  <div class="home">
      <navBarVue />
      <homeIntroVue  data-aos="zoom-in" data-aos-duration="1000"  data-aos-easing="ease-out-cubic"  />
      <introSliderVue/>
      <introVisionVue data-aos="zoom-in" data-aos-duration="1000"  data-aos-easing="ease-out-cubic" />
      <appPagesVue  data-aos="fade-left" data-aos-duration="1000"  data-aos-easing="ease-out-cubic" />
      <appStatisticsVue data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-out-cubic" />
  </div>
</template>

<script>
import navBarVue from '@/components/intro_site/page_header.vue';
import homeIntroVue from '@/components/intro_site/home_intro.vue';
import introSliderVue from '@/components/intro_site/intro_slider.vue';
import introVisionVue from '@/components/intro_site/intro_vision.vue';
import appPagesVue from '@/components/intro_site/app_pages.vue';
import appStatisticsVue from '@/components/intro_site/app_statistics.vue';
import AOS from "aos";

export default {
  name: 'HomeView',
  components: {
    navBarVue,
    homeIntroVue,
    introSliderVue,
    introVisionVue,
    appPagesVue,
    appStatisticsVue
  },
  mounted(){
      AOS.init();
  }
}
</script>
