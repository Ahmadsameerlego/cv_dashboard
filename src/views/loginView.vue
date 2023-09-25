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

                <form ref="loginForm" class="flex flex-wrap gap-3 p-fluid" @submit.prevent="login">
                    <!-- phone  -->
                    <div class="defaultInput phone position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.phone') }} </label>
                        <input type="number" class="form-control" v-model="phone" name="phone" :placeholder="$t('auth.phoneDesc')">
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/phone.svg')" alt="">
                        </div>

                        <!-- select phone  -->
                        <Dropdown v-model="country" :options="countries" optionLabel="name"  @change="setCountryCode" class="w-full md:w-14rem" />

                    </div>


                    <!-- password  -->
                    <div class="position-relative flex-auto mt-3">

                        <label for="integeronly" class="label fw-bold block mb-2 "> {{ $t('auth.password') }} </label>
                        <Password v-model="password" :feedback="false" toggleMask class="defaultInput" :placeholder="$t('auth.passwordPlace')"  />

                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/lock.svg')" alt="">
                        </div>
                    </div>

                    <!-- submit  -->
                    <div class="mt-4">
                        <button class="main_btn w-100 pt-3 pb-3 fs-5" :disabled="disabled"> 
                           
                            <span v-if="!disabled"> {{ $t('auth.login') }} </span>
                            <div class="spinner-border" role="status" v-if="disabled">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                         </button>
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

  <Toast />

  <!-- subscribe component  -->
  <subscribe :showPackageModal="showPackageModal" />


 

</template>

<script>
// import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import Toast from 'primevue/toast';

import subscribe from '@/components/dashboard/packagesCard.vue'
export default {
    data(){
        return{
            phone : null,
            country : null,
            password : null,
            disabled : false,
            showPackageModal : false
        }
    },
    components:{
        // InputNumber,
        Dropdown,
        Password,
        Toast,
        subscribe
    },
    computed:{
        countries(){
            return this.$store.state.countries ;
        },
        packages(){
            return this.$store.state.packages ;
        }
    },
    methods:{
        // set country code 
        setCountryCode(){
            document.querySelector('.phone .p-dropdown-label').innerHTML = this.country.key ;
        },

        // login 
        async login(){
            this.disabled = true ;
            const fd = new FormData();
            fd.append( 'phone' , this.phone );
            fd.append( 'password', this.password );
            fd.append('country_code', this.country.key);
            fd.append('device_type', 'ios');
            fd.append('device_id', localStorage.getItem('device_id'));

            const response = await this.$store.dispatch('login', fd)

            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;
                
                // set user after register 
                const user = this.$store.state.user
                localStorage.setItem('user', JSON.stringify(user) );
                // set token 
                localStorage.setItem('token',this.$store.state.token );
                // set is auth 
                localStorage.setItem('isAuth', 'true' );

                setTimeout(() => {
                    if( response.sub === null ){
                        if( this.showPackageModal === true || this.showPackageModal === false ){
                            this.showPackageModal = !this.showPackageModal ;
                        }
                    }else{
                        this.$router.push('/dashboard');
                    }
                }, 3000);
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }
        },
    },
    mounted(){
        setTimeout(() => {
            this.$refs.logo.classList.add('show')
        }, 1000);
        setTimeout(() => {
            this.$refs.logo.classList.remove('show');
            this.$refs.form.classList.add('active');
        }, 3000);

        // fake device id 
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => localStorage.setItem('device_id', data.ip))
        .catch(error => console.error(error));



        // set default value for country ( saudia )
        this.country = {id: 1, name: 'السعودية', key: '+966'};
        document.querySelector('.phone .p-dropdown-label').innerHTML = '+966' ;

    },
    created(){
        this.$store.dispatch('getCounntries');

        setTimeout(() => {
        // Assuming `fetchPackages` is a method to fetch your data
        this.dataFetched = false; // Mark data as fetched
        }, 1000); // Adjust the delay as needed
        this.$store.dispatch('getPackages');

    }
}
</script>


<style scoped>
    .form-control{
        height: 50px;
    }
    .phone .p-dropdown{
        top: 28px;
        width: 95px;
    }
</style>
<style lang="scss">
    .checkPkg{
        position:absolute;
        top:0;
        right:0;
        width:100%;
        height:100%;
        opacity:0;
        &:checked+.package_label{
            position:absolute;
            border-radius: 5px;
            top:0;
            right:0;
            width:100%;
            height:100%;
            border: 1px solid #FF7E68;
            background-color:#ff7f6813 ;
            z-index: 0;
        }
    }
    
    #subs{
        .single_sub{
            background-color:#F8F8F8 ;
            border: 1px solid #E2E2E2;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .sub_image{
                width:100px;
                height:100px;
                object-fit: cover;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
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
            width:50vw;
            height: auto;

            // &.active{
                
            // }
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