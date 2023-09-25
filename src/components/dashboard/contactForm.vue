<template>
  <section class="contactUs pt-2 pb-2 px-3">
    <h6 class="fw-bold mainColor"> {{  $t('contact.title')  }} </h6>
    <p class="fw-6 grayColor">
        يمكنك ارسال شكوى او اقتراح من هنا
    </p>

    <section v-if="showLoader">
        <Skeleton   height="6rem" class="mb-3"></Skeleton>
        <Skeleton  height="15rem"></Skeleton>
    </section>


    <section v-else>
            <!-- info  -->
            <section class="contactInfo flex_between flex-wrap mt-3 pt-3 pb-3 px-5">

                <div class="d-flex align-items-center">
                    <div class="info_icon">
                        <img :src="require('@/assets/imgs/mail.svg')" alt="">
                    </div>
                    <div class="mx-2 pt-3">
                        <a :href="'mailto:'+settings.email">
                            <h6 class="fw-6"> {{  $t('contact.emailCon')  }} </h6>
                            <p> {{ settings.email }} </p>
                        </a>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <div class="info_icon">
                        <img :src="require('@/assets/imgs/contactWhats.svg')" alt="">
                    </div>
                    <div class="mx-2 pt-3">
                        <a :href="'https://api.whatsapp.com/send?phone='+settings.whatsapp" target="_blank">
                            <h6 class="fw-6"> {{ $t('contact.whats')  }} </h6>
                            <p>{{settings.whatsapp}} </p>
                        </a>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <div class="info_icon">
                        <img :src="require('@/assets/imgs/contactPhone.svg')" alt="">
                    </div>
                    <div class="mx-2 pt-3">
                        <a :href="'tel:'+settings.phone">
                            <h6 class="fw-6"> {{  $t('contact.phone')  }} </h6>
                            <p> {{ settings.phone  }} </p>
                        </a>
                    </div>
                </div>

            </section>

            <!-- form  -->
            <section class="contact_form contactInfo mt-3">
                <!-- header  -->
                <div class="border-bottom pt-3 pb-3 px-4">
                    <span class="grayLight fs-13"> {{ $t('contact.desc') }} </span>
                </div>
                <!-- form  -->
                <form class="addJobForm mt-3" @submit.prevent="contactUs" ref="contact_us">
                    <div class="row">

                        <div class="col-md-6 mb-2">
                            <div class="form-group position-relative">
                                <img class="form_icon" :src="require('@/assets/imgs/user.svg')" alt="">
                                <label for=""> {{  $t('contact.name')  }} </label>
                                <input type="text" v-model="user_name" name="user_name" class="form-control job_form" :placeholder="$t('contact.namePlace')">
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group position-relative">
                                <img class="form_icon" :src="require('@/assets/imgs/grayPhone.svg')" alt="">
                                <label for=""> {{ $t('set.phone')  }} </label>
                                <input type="tel" v-model="phone" name="phone" class="form-control job_form" :placeholder="$t('set.phonePlace')">
                            </div>
                        </div>  
                        
                        <div class="col-12 mb-3">
                            <label for=""> {{ $t('contact.message') }} </label>
                            <textarea id="" rows="4" v-model="complaint" name="complaint" class="form-control job_form" :placeholder="$t('contact.messagePlace')"></textarea>
                        </div>

                        <div class="flex_center">
                            <button class="main_btn w-25 pt-2 pb-2" :disabled="disabled"> 
                                <span  v-if="!disabled">{{ $t('contact.send')  }} </span>
                                <div class="spinner-border" role="status" v-if="disabled">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
    </section>
  </section>
  <Toast />
</template>

<script>
import Toast from 'primevue/toast';
import Skeleton from 'primevue/skeleton';

export default {
    data(){
        return{
            user_name : null,
            phone : null,
            complaint : null,
            disabled : false,
            showLoader : true
        }
    },
    computed:{
        settings(){
            return this.$store.state.settings ;
        }      
    },
    components:{
        Toast,
        Skeleton

    },
    methods:{
        async contactUs(){
            const fd = new FormData(this.$refs.contact_us);
            this.disabled = true ;
            const response = await this.$store.dispatch('contactUs', fd);
            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;    
                this.user_name = '';
                this.phone = '';
                this.complaint = '';
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }
        }
    },
    created(){
        setTimeout(() => {
            this.showLoader = false ;
        }, 500);
        this.$store.dispatch('getSettings');
    }
}
</script>

<style lang="scss">
    .contactInfo{
        background-color: #fff;
        border-radius: 6px;
    }
    .grayLight{
        color: #A1A1A1;
    }
</style>