<template>
  <header class="pt-3 pb-3">
    <div class="container">
        <div class="intro_content d-flex justify-content-between align-items-center">

            <!-- logo  -->
            <div class="site_logo">
                <img :src="require('@/assets/imgs/logo.png')" alt="logo image">
            </div>
            
            <!-- interaction  -->
            <div class="interAction d-flex align-items-center">
                <router-link to="/login" class="main_btn pt-3 pb-3 px-5 fw-6"> {{ $t('site.login') }} </router-link>
                <router-link to="/register" class="main_btn mx-3 pt-3 pb-3 px-5 fw-6"> {{ $t('site.register') }} </router-link>
                <button class="lang flex_center mx-2" @click="switchLang"> 
                    <span v-if="$i18n.locale=='en'" >AR</span>
                    <span v-else-if="$i18n.locale=='ar'" >EN</span> 
                </button>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    methods:{
        // switch lang     
        switchLang(){
            let lang = 'ar';
            if(this.$i18n.locale == 'ar'){
                lang = 'en';
                this.arabic = false;
            }

            if(localStorage.getItem('locale')){
                localStorage.removeItem('locale');
            }

            localStorage.setItem('locale' ,lang);
            this.arabic = true;

            location.reload()
        },
    }
}
</script>

<style lang="scss">
    .site_logo{
        width: 130px;
        height: 107px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .lang{
        background-color: #fff;
        color: #E57D61;
        border: 1px solid #E57D61;
        font-size: 13px;
        font-weight: 600;
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
    header{
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
        a{
            color:#fff !important;
        }
    }
</style>