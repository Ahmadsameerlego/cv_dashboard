<template>
  <section id="login">
    <!-- LOGO  -->
    <div class="logo_centered"  ref="logo">
        <img :src="require('@/assets/imgs/logoWhite.png')" alt="logo">
    </div>

    <section class="login_form px-5 pt-5 pb-5"  ref="form">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-7">
                <h5 class="fw-bold mainColor">
                    <span>مرحبا بك</span>
                    <img :src="require('@/assets/imgs/Waving hand.png')" class="mx-2" alt="">
                </h5>

                <p class="grayColor fw-6 fs-17"> يرجى ادخال البيانات التالية لتسجيل الدخول </p>

                <form ref="loginForm" class="flex flex-wrap gap-3 p-fluid">
                    <!-- phone  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.phone') }} </label>
                        <InputNumber v-model="value1" class="defaultInput" inputId="integeronly" :placeholder="$t('auth.phoneDesc')" />

                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/phone.svg')" alt="">
                        </div>

                        <!-- select phone  -->
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"  class="w-full md:w-14rem" />

                    </div>


                    <!-- password  -->
                    <div class="position-relative flex-auto mt-3">

                        <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.password') }} </label>
                        <Password v-model="value" :feedback="false" toggleMask class="defaultInput" :placeholder="$t('auth.passwordPlace')" />

                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/lock.svg')" alt="">
                        </div>


                    </div>



                    <!-- submit  -->
                    <div class="mt-4">
                        <button class="main_btn w-100 pt-3 pb-3 fs-5"> {{ $t('nav.login') }} </button>
                    </div>

                    <!-- new account  -->
                    <div class="flex_center newAcc">
                        <p class="fs-6 mt-4 fw-6"> {{ $t('auth.haveAnAcc') }} ؟  <router-link to="/register" class="mainColor fw-bold"> {{ $t('auth.register') }} </router-link> </p>  
                    </div>
                </form>
            </div>
            <div class="col-md-5">
                <div class="logo">
                    <img :src="require('@/assets/imgs/logo.png')" alt="">
                </div>
            </div>
        </div>
    </section>

    <!-- circled Images  -->
    <div class="circledImages">
        <img :src="require('@/assets/imgs/loginCircles.png')" class="bottom_circled" alt="">
        <img :src="require('@/assets/imgs/circledTop.png')" class="topCircled" alt="">
    </div>
  </section>
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';

export default {
    data(){
        return{
        }
    },
    components:{
        InputNumber,
        Dropdown,
        Password
    },
    mounted(){
        setTimeout(() => {
            this.$refs.logo.classList.add('show')
        }, 1000);
        setTimeout(() => {
            this.$refs.logo.classList.remove('show');
            this.$refs.form.classList.add('active');
        }, 3000);
    }
}
</script>

<style lang="scss">
    #login{
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: #293255;
        .bottom_circled{
            position: absolute;
            bottom: 0;
            height: 120px;
            width: 100%;
        }
        .topCircled{
            position: absolute;
            top: 0;
            right: 0;
            width: 190px;
        }
        .logo_centered{
            transform: translate(50%, -50%);
            position: absolute;
            top: 50%;
            right: 50%;
            width: 0px;
            height: 0px;
            transition: .8s all ease-in-out;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            &.show{
                width: 250px;
                height: 250px;
            }
        }
        .login_form{
            background-color: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            width: 0;
            height: 0;
            transition: .8s all ease-in-out;
            &.active{
                width: auto;
                height: auto;
            }
        }
    }

  .defaultInput input{
    background-color: #f8f8f8 ;
    padding-left:  40px ;
    padding-right:  40px ;
  }
  .defaultInput2{
    background-color: #f8f8f8 !important;
    padding-left:  40px !important;
    padding-right:  40px !important;

  }
  .inputIcon{
    position: absolute;
    top: 57%;
    right: 10px;
  }
  .p-dropdown {
    position: absolute !important; 
    left: 0px;
    top: 32px;
    width: 17%;
    background-color: #f8f8f8 !important;
  }
  .p-dropdown .p-dropdown-trigger{
    width: 25px !important;
  }
  .p-input-icon-right > svg:last-of-type {
    left: 0.75rem !important;
    right: auto !important;
}

</style>