<template>
    <Dialog v-model:visible="otp" modal :style="{ width: '50vw' }">
        <h5 class="fw-bold text-center"> {{  $t('auth.otp')  }} </h5>
        <p class=" text-center"> {{  $t('auth.otpPlc')  }} </p>
        <div class="logo d-flex justify-content-center mx-auto mb-3">
            <img :src="require('@/assets/imgs/forget2.svg')" alt="">
        </div>

        <form ref="loginForm" @submit.prevent="sendOtp" class="flex flex-wrap gap-3 p-fluid">

            <!-- otp  -->
            <div class="position-relative flex-auto">
                <div
                    style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    "
                >
                    <v-otp-input
                        ref="otpInput"
                        v-model:value="code"
                        name="code"
                        input-classes="otp-input"
                        separator=""
                        :num-inputs="4"
                        :should-auto-focus="true"
                        input-type="numeric"
                        class="flex-row-reverse"
                        @input="checkCode"
                        autofocus
                    />
                </div>

                
            </div>



            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center" :disabled="disabled"> 
                    <span  v-if="!disabled">{{ $t('auth.confirm')  }} </span>
                    <div class="spinner-border" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>


            <div class="flex_between w-75 mx-auto d-flex">
                <div class="flex_center newAcc">
                    <p class="fs-6 mt-4 fw-6"> {{ $t('auth.haveNot') }} <button type="button" class="mainColor fw-bold btn p-0" @click="resendCode"> {{ $t('auth.resend') }} </button> </p>  
                </div>
                
                <p v-if="timer > 0" class="text-center mt-3">{{ $t('auth.remain')  }}  <span class="mainColor">{{ timer }} {{ $t('auth.second') }}</span> </p>

            </div>

        </form>
    </Dialog>
    <Toast />
</template>

<script>
import Dialog from 'primevue/dialog';
import axios from 'axios';
// reset passwrod component 
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            otp : false,
            timer: 180,
            intervalId: null,
            openReset : false,
            disabled : false,
            code : ''
        }
    },
    components:{
        Dialog,
        Toast
    },
    watch:{
        openOtp(){
                this.otp = true ;    
        }
    },  
    methods:{
        startTimer() {
            this.intervalId = setInterval(() => {
                if (this.timer > 0) {
                this.timer--;
                } else {
                clearInterval(this.intervalId);
                this.disabled = false
                }
            }, 1000);
        },
        // submit otp form 
        async sendOtp(){
            const fd = new FormData();
            this.disabled = true ;
            fd.append('code', this.code);
            fd.append('phone', JSON.parse(localStorage.getItem('profile')).phone);
            fd.append('new_phone', localStorage.getItem('new_phone'));
            fd.append('country_code', localStorage.getItem('new_country_code'));

            await axios.post('company/active', fd)
            .then( (res)=>{
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;
            } )

            
        },
        // resend code 
        resendCode(){
            this.startTimer();
        },
        checkCode(){
            console.log(this.$refs.otpInput)
        }
    },
    props:{
        openOtp : Boolean
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
    mounted() {
        
    },
}
</script>

