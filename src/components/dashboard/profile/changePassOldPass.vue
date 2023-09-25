<template>
    <Dialog v-model:visible="showPass" modal :style="{ width: '35vw' }">
        <h6 class="fw-bold mainColor text-center mb-2"> كلمة المرور </h6>

        <p class="text-center"> الرجاء ادخال كلمة المرور لتتمكن من تغيير كلمة المرور الخاص بك </p>

        <img class="deleteIcon" src="https://s3-alpha-sig.figma.com/img/96ec/a8e9/9d502c82d1acb4cfea0742335cbae553?Expires=1691366400&Signature=NOyehLr8~JhUlVJ5~iM2xYZH7GwmjQK3~mYue4Ajx8Oyw4TalLalpBeBqXyTvaTrkqUJSASfZGb4xCVIVdEIgigbLPrALNwpRQKorib1~5TaQltf~1-e6ZoQjTVxSMjtUsxHUMFdpWedLxhmqDRIxx0OfSUbAJ-R~ZXXkDa~GdalzC7APQIaHujSEqkayHmIzLmf4yxGZ-y15on1UFbBhCDtjMPlt1-xvojdO83JOnE-PN1KVf~ZUKyHNYPYpBZXpKzWWZqvS2qFNaGTaANg5Khi3~aaYx9iP8tDOR5ZI~QnPfD~kqRHlR0B-iw8aB1bexFRQCmSz6ICKU5t4Z2mnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
        <form class="changePass" @submit.prevent="send">
            <!-- password  -->
            <div class="position-relative flex-auto mt-3">
                <label for="integeronly" class="label  block mb-2 d-block"> {{ $t('auth.password') }} </label>
                <Password v-model="password" :feedback="false" toggleMask class="defaultInput w-100" :placeholder="$t('auth.passwordPlace')" />

                <!-- icon  -->
                <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="">
                </div>
            </div>
            <div class="flex_between mt-4">
                <button class="main_btn pt-2 pb-2  w-75 mx-auto d-flex justify-content-center" :disabled="disabled"> 
                    <span v-if="!disabled">ارسال</span>
                    <div class="spinner-border" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>
        </form>
    </Dialog>
    <changePassOtp :openPassOtp="openPassOtp" />
    <Toast />
</template>

<script>
import Dialog from 'primevue/dialog';
import Password from 'primevue/password';
import Toast from 'primevue/toast';
import changePassOtp from '@/components/dashboard/profile/changePassOtp.vue'
export default {
    data(){
        return{
            showPass : false,

            showPhone : false,
            changePhone : false,
            country_code : null,
            phone : '',
            password : '',
            disabled : false,
            openPassOtp : false
        }
    },
    components:{
        Dialog,
        Password,
        Toast,
        changePassOtp
    },
    props:{
        changePass : Boolean
    },
    watch:{
        changePass(){
            this.showPass = true ;
        },
       
    },
    methods:{
        async send(){
            this.disabled = true ;
            const fd = new FormData();
            fd.append('password', this.password);
            fd.append('phone', this.phone);
            fd.append('country_code', this.country_code);

            const response = await this.$store.dispatch('changePassOldPass',fd)
            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;
                if( this.openPassOtp === true || this.openPassOtp === false ){
                    this.openPassOtp = !this.openPassOtp ;
                    this.showPass = false ;
                }
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }

        }
    },
    mounted(){
        const profile = JSON.parse(localStorage.getItem('profile'))
        this.phone = profile.phone ;
        this.country_code = profile.country_code ;
    }
}
</script>

<style>

</style>