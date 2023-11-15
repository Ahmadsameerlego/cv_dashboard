<template>
  <section id="login">
    <!-- LOGO  -->
    <div class="logo_centered"  ref="logo">
        <img :src="require('@/assets/imgs/logoWhite.png')" alt="logo">
    </div>

    <section class="position-relative login_form px-5 pt-5 pb-5" style="height:fit-content">
        <h5 class="fw-bold mainColor">
            <span>حساب جديد</span>
            <img :src="require('@/assets/imgs/Waving hand.png')" class="mx-2" alt="">
        </h5>


        <form  ref="register_form" @submit.prevent="regsiter" class="flex flex-wrap gap-3 p-fluid">

            <div class="row">

                <div class="col-md-6 mb-3">
                    <!-- company name  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> اسم المنشأة </label>
                        <InputText type="text" class="defaultInput2" v-model="name" name="name" placeholder="الرجاء ادخال اسم المنشأة" />
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/user.svg')" alt="">
                        </div>

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- company type  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> نوع المنشأة </label>
                        <div class="d-flex justify-content-start">
                            <div class="form-check d-flex align-items-center">
                                
                                <input class="" v-model="org_type" type="radio" name="type" id="exampleRadios1" value="governmental" checked>
                                <label class="form-check-label mx-2 fw-6" for="exampleRadios1">
                                    منشأة حكومي
                                </label>
                            </div>
                            <div class="form-check d-flex align-items-center mx-3">
                                
                                <input class="" v-model="org_type" type="radio" name="type" id="exampleRadios2" value="private">
                                <label class="form-check-label mx-2 fw-6" for="exampleRadios2">
                                    منشأة خاصة 
                                </label>
           
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- company name  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> نشاط المنشأة </label>
                        <InputText type="text" class="defaultInput2" v-model="activity" name="activity" placeholder="الرجاء ادخال نشاط المنشأة" />
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/user.svg')" alt="">
                        </div>

                    </div>
                </div>

                <div class="col-md-6 mb-3" v-if="privateCompany">
                    <!-- company number  -->
                    <div class="position-relative flex-auto defaultInput">

                        <label for="integeronly" class="label fw-bold block mb-2">  رقم السجل التجاري   </label>
                        <!-- <InputNumber v-model="commercial_register" name="commercial_register" class="defaultInput" inputId="integeronly" placeholder=" الرجاء ادخال رقم السجل التجاري  " /> -->
                        <input type="number" v-model="commercial_register" name="commercial_register" class="defaultInput form-control" placeholder=" الرجاء ادخال رقم السجل التجاري  ">
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/phone.svg')" alt="">
                        </div>


                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- phone  -->
                    <div class="defaultInput phone position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('set.phone') }} </label>
                        <input type="number" v-model="phone" name="phone" class="form-control" :placeholder="$t('set.phonePlace')">
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/phone.svg')" alt="">
                        </div>

                        <!-- select phone  -->
                        <Dropdown v-model="country" :options="countries" @change="setCountryCode" optionLabel="name"  class="w-full md:w-14rem" />

                    </div>
                </div>


                <div class="col-md-6 mb-3" >
                    <!-- user name  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> الشخص المسئول </label>
                        <InputText type="text" class="defaultInput2" v-model="owner" name="owner" placeholder="الرجاء ادخال الشخص المسئول" />
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/user.svg')" alt="">
                        </div>

                    </div>
                </div>

                

                <!-- email  -->
                <div class="col-md-6 mb-3">
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> البريد الألكتروني </label>
                        <InputText type="email" class="defaultInput2" v-model="email" name="email" placeholder="الرجاء ادخال البريد الألكتروني" />
                        <!-- icon  -->
                        <div class="inputIcon">
                        <img :src="require('@/assets/imgs/sms.svg')" alt="">
                        </div>

                    </div>
                </div>    
                <!-- region  -->
                <div class="col-md-6 mb-3">
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> المنطقة </label>
                        <Dropdown v-model="region" :options="regions" @change="setRegionId" optionLabel="name" name="region_id" :value="region_id"  class="w-full md:w-14rem w-100 position-relative" placeholder="الرجاء تحديد المنطقة"  />
                        <!-- icon  -->
                        <div class="inputIcon">
                        <img :src="require('@/assets/imgs/sms.svg')" alt="">
                        </div>

                    </div>
                </div>

                <!-- city  -->
                <div class="col-md-6 mb-3">
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> المدينة </label>
                        <Dropdown v-model="city" :options="cities" optionLabel="name" name="city_id" :value="city_id" @change="setCityId"  class="w-full md:w-14rem w-100 position-relative" placeholder="الرجاء تحديد المدينة"  />
                        <!-- icon  -->
                        <div class="inputIcon">
                        <img :src="require('@/assets/imgs/sms.svg')" alt="">
                        </div>

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- password  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> كلمة المرور </label>
                        <Password v-model="password" name="password"  toggleMask class="defaultInput" placeholder="الرجاء ادخال كلمة المرور" />

                        <!-- icon  -->
                        <div class="inputIcon">
                        <img :src="require('@/assets/imgs/lock.svg')" alt="">
                        </div>


                    </div>
                </div>  

                <div class="col-md-6 mb-3">
                    <!-- confirm password  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> تأكيد كلمة المرور </label>
                        <Password v-model="password_confirmation" name="password_confirmation" :feedback="false" toggleMask class="defaultInput" placeholder="الرجاء تأكيد كلمة المرور" />

                        <!-- icon  -->
                        <div class="inputIcon">
                        <img :src="require('@/assets/imgs/lock.svg')" alt="">
                        </div>


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
            </div>    

            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5" :disabled="disabled"> 
                    <span v-if="!disabled">{{ $t('set.register') }} </span>
                    <div class="spinner-border" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>

            <!-- new account  -->
            <div class="flex_center newAcc">
                <p class="fs-6 mt-4 fw-6"> {{ $t('set.haveAnAcc') }} ؟  <router-link to="/login" class="mainColor fw-bold"> {{ $t('set.login') }} </router-link> </p>  
            </div>
        </form>



        <!-- absolute logo  -->
        <div class="abs_logo">
            <img :src="require('@/assets/imgs/logo.png')" alt="">
        </div>
    </section>

    <!-- circled Images  -->
    <div class="circledImages">
        <img :src="require('@/assets/imgs/loginCircles.png')" class="bottom_circled" alt="">
        <img :src="require('@/assets/imgs/circledTop.png')" class="topCircled" alt="">
    </div>
  </section>

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
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center" :disabled="disabled2"> 
                    <span  v-if="!disabled2">{{ $t('auth.confirm')  }} </span>
                    <div class="spinner-border" role="status" v-if="disabled2">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>


            <div class="flex_between w-75 mx-auto d-flex">
                <div class="flex_center newAcc">
                    <p class="fs-6 mt-4 fw-6"> {{ $t('auth.haveNot') }} <button type="button" class="mainColor fw-bold btn p-0" @click.prevent="resendCode" :disabled="disabledResned"> {{ $t('auth.resend') }} </button> </p>  
                </div>
                <div  v-if="showResend">
                    <p v-if="timer > 0" class="text-center mt-3">{{ $t('auth.remain')  }}  <span class="mainColor">{{ timer }} {{ $t('auth.second') }}</span> </p>
                </div>
                
            </div>

        </form>
    </Dialog>


    <!-- success modal  -->
    <Dialog v-model:visible="successRegister" modal  :style="{ width: '35vw' }">
        <img :src="require('@/assets/imgs/animation_llujjrlh_small.gif')" alt="" class="mx-auto d-flex">
        <p class="text-center">
                    تم ارسال طلبك للانضمام للاداره الرجاء الانتظار للموافقه وسيتم ارسال بيانات
        الدخول علي الايميل الخاص بك        
        </p>
    </Dialog>
  <Toast />

</template>

<script>
// import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import axios from 'axios';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';

export default {
    data(){
        return{
            cities : [],
            password : null,
            password_confirmation : null,
            region : null,
            region_id : null,
            city : null,
            city_id : null,
            country : null,
            privateCompany : false,
            org_type : null,
            phone : null,
            commercial_register : null,
            disabled : false,
            successRegister : false,
            otp : false,
            disabled2 : false,
            timer: 60,
            intervalId: null,
            openReset : false,
            code : '',
            showResend : false,
            disabledResned : false
        }
    },
    components:{
        // InputNumber,
        Dropdown,
        Password,
        InputText,
        Toast,
        Dialog
    },
     watch:{
        password_confirmation(){
                // if( this.passwordMatch == true ){
                //     this.disabled = false;
                // }else{
                //     this.disabled = true;
                // }
                this.showValid = true ;
        },
        org_type(){
            if( this.org_type == 'private' ){
                this.privateCompany = true ;
            }else{
                this.privateCompany = false ;
            }
        }
    },
    computed:{
        passwordMatch() {
            return this.password === this.password_confirmation;  
        },
        regions(){
            return this.$store.state.regions;
        },
        countries(){
            return this.$store.state.countries ;
        },
        response(){
            return this.$store.getters.getRegisterResponse
        }
    },
    methods:{
        // set region id 
        setRegionId(){
            this.region_id = this.region.id;
            this.getCities();
        },
        setCityId(){
            this.city_id = this.city.id ;
        }, 
        // get cities based on region id 
        async getCities(){
            const fd = new FormData();
            fd.append('region_id', this.region_id)
            await axios.post('region/cities', fd)
            .then( (res)=>{
                this.cities = res.data.data;
            } )
        },
        // set country code 
        setCountryCode(){
            document.querySelector('.phone .p-dropdown-label').innerHTML = this.country.key ;
        },

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
            this.disabled2 = true ;
            fd.append('code', this.code);
            fd.append('phone', this.phone);
            fd.append('country_code', this.country.key);
            fd.append('device_type', 'web');
            fd.append('device_id', localStorage.getItem('device_id'));

            await axios.post('company/active', fd)
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.disabled2 = false ;
                    this.showResend = true ;
                    setTimeout(() => {
                        this.otp = false ;
                        this.successRegister = true ;
                        this.startTimer(); 
                    }, 2000);

                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 5000);
                
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.disabled2 = false ;
                }
                
            } )
        },

        // resend code 
        async resendCode(){
            const fd = new FormData ;
            fd.append('phone', this.phone);
            fd.append('country_code', this.country.key);

            await axios.post('company/code/resend', fd)
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.startTimer() ;
                    this.timer = 60 ;
                    this.showResend = true ;
                    this.disabledResned = true ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                }
            } ) 
        },


        // register 
        async regsiter(){
            this.disabled = true ;
            const fd = new FormData(this.$refs.register_form);
            fd.append( 'password', this.password );
            fd.append('password_confirmation', this.password_confirmation);
            fd.append('country_code', this.country.key);
            fd.append('city_id', this.city_id);
            fd.append('region_id', this.region_id);

            if( this.privateCompany == true ){
                fd.append('commercial_register', this.commercial_register);
            }

            const response = await this.$store.dispatch('register', fd);
            
            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;
                setTimeout(() => {
                    this.otp = true ;
                }, 1000);
                // set user after register 
                localStorage.setItem('registerUser',JSON.stringify(this.$store.state.user) );
                localStorage.setItem('regPhone', this.phone)
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }
        },



    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
    mounted(){
        setTimeout(() => {
            this.$refs.logo.classList.add('show')
        }, 1000);
        setTimeout(() => {
            this.$refs.logo.classList.remove('show')
        }, 3000);

        // set default value for country ( saudia )
        this.country = {id: 1, name: 'السعودية', key: '+966'};
        document.querySelector('.phone .p-dropdown-label').innerHTML = '+966' ;
    },
    created(){
        this.$store.dispatch('getRegions');
        this.$store.dispatch('getCounntries');
    }
}
</script>

<style lang="scss">
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


    input[type=radio]{
        accent-color:#293255
    }
    input[type=radio]:checked + label{
        color:#293255
    }
    .phone .p-dropdown{
        width: 22%;
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    .main_btn:disabled{
        opacity: .6;
        cursor: not-allowed;
    }
</style>

<style scoped lang="scss">
    .form-control{
        height:50px;
    }
    #login{
        height: 180vh;
        .login_form {
            width: 70%;
        }
    }
    .p-dropdown{
        position: relative !important;
        top:0;padding-left:12px;padding-right: 24px;
    }
    .phone .p-dropdown{
            top: 27px;
            position: absolute !important;
    }
    label{
        font-size: 12px;
    }
    .abs_logo{
        position: absolute;
        top: 14px;
        left: 7%;
        width: 101px;
        height: 79px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
 
</style>
