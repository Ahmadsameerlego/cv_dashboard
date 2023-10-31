<template>
  <Dialog v-model:visible="showPass" modal :style="{ width: '35vw' }">
        <h6 class="fw-bold mainColor text-center mb-2"> تأكيد كلمة المرور </h6>

        <p class="text-center"> الرجاء تأكيد كلمة المرور  </p>

        <img class="deleteIcon" src="https://s3-alpha-sig.figma.com/img/96ec/a8e9/9d502c82d1acb4cfea0742335cbae553?Expires=1691366400&Signature=NOyehLr8~JhUlVJ5~iM2xYZH7GwmjQK3~mYue4Ajx8Oyw4TalLalpBeBqXyTvaTrkqUJSASfZGb4xCVIVdEIgigbLPrALNwpRQKorib1~5TaQltf~1-e6ZoQjTVxSMjtUsxHUMFdpWedLxhmqDRIxx0OfSUbAJ-R~ZXXkDa~GdalzC7APQIaHujSEqkayHmIzLmf4yxGZ-y15on1UFbBhCDtjMPlt1-xvojdO83JOnE-PN1KVf~ZUKyHNYPYpBZXpKzWWZqvS2qFNaGTaANg5Khi3~aaYx9iP8tDOR5ZI~QnPfD~kqRHlR0B-iw8aB1bexFRQCmSz6ICKU5t4Z2mnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
        <form class="changePass" @submit.prevent="updatePassword">

            <!-- password  -->
            <div class="position-relative flex-auto mt-3 mb-3">
                <label for="integeronly" class="label  block mb-2 d-block"> {{ $t('auth.password') }} </label>
                <Password v-model="password"  toggleMask class="defaultInput w-100" :placeholder="$t('auth.passwordPlace')" />

                <!-- icon  -->
                <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="">
                </div>
            </div>

            <!-- confirm password  -->
            <div class="position-relative flex-auto mb-2">

                <label for="integeronly" class="label block mb-2 d-block"> تأكيد كلمة المرور </label>
                <Password v-model="password_confirmation" name="password_confirmation" :feedback="false" toggleMask class="defaultInput w-100" placeholder="الرجاء تأكيد كلمة المرور" />

                <!-- icon  -->
                <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="">
                </div>
            </div>

            <div v-if="showValid">
                <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center text-success">
                    <i class="fa-regular fa-circle-check"></i>
                    <span>كلمة السر متطابقة</span>
                </p>
                <p v-else class="passwordWrong d-flex align-items-center text-danger">
                    <i class="fa-regular fa-circle-xmark"></i>
                    <span>كلمة السر غير متطابقة</span>
                </p>
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
    <Toast />
</template>

<script>
import Dialog from 'primevue/dialog';
import Password from 'primevue/password';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            showPass : false,
            showPhone : false,
            changePhone : false,
            country_code : null,
            phone : '',
            password : '',
            password_confirmation : '',
            disabled : false,
            openPassOtp : false,
            showValid : false
        }
    },
    components:{
        Dialog,
        Password,
        Toast
    },
    props:{
        updatePass : Boolean
    },
    watch:{
        updatePass(){
            this.showPass = true ;
        },
        password_confirmation(){
            this.showValid = true ;
        },
    },
    computed:{
        passwordMatch() {
            return this.password === this.password_confirmation;  
        },
    },
    methods:{
        // submit otp form 
        async updatePassword(){
            const fd = new FormData();
            this.disabled = true ;
            fd.append('password', this.password);
            fd.append('password_confirmation', this.password_confirmation);
            fd.append('code', localStorage.getItem('passOtp'));
            fd.append('phone', JSON.parse(localStorage.getItem('profile')).phone);
            // fd.append('new_phone', localStorage.getItem('new_phone'));
            fd.append('country_code', JSON.parse(localStorage.getItem('profile')).country_code);

            const response = await this.$store.dispatch('updatePassword',fd);

            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;
                
                this.showPass = false ;
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }

            
        },
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