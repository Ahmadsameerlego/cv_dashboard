<template>
  <section id="login">
    <!-- LOGO  -->
    <div class="logo_centered"  ref="logo">
        <img :src="require('@/assets/imgs/logoWhite.png')" alt="logo">
    </div>

    <section class="position-relative login_form px-5 pt-5 pb-5">
        <h5 class="fw-bold mainColor">
            <span>حساب جديد</span>
            <img :src="require('@/assets/imgs/Waving hand.png')" class="mx-2" alt="">
        </h5>


        <form ref="loginForm" class="flex flex-wrap gap-3 p-fluid">

            <div class="row">

                <div class="col-md-6 mb-3">
                    <!-- company name  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> اسم المنشأة </label>
                        <InputText type="text" class="defaultInput2" v-model="name" placeholder="الرجاء ادخال اسم المنشأة" />
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
                                
                                <input class="" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                <label class="form-check-label mx-2 fw-6" for="exampleRadios1">
                                    منشأة حكومي
                                </label>
                            </div>
                            <div class="form-check d-flex align-items-center mx-3">
                                
                                <input class="" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
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
                        <InputText type="text" class="defaultInput2" v-model="name" placeholder="الرجاء ادخال نشاط المنشأة" />
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/user.svg')" alt="">
                        </div>

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- company number  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2">  رقم السجل التجاري   </label>
                        <InputNumber v-model="value1" class="defaultInput" inputId="integeronly" placeholder=" الرجاء ادخال رقم السجل التجاري  " />
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/phone.svg')" alt="">
                        </div>


                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- user name  -->
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> الشخص المسئول </label>
                        <InputText type="text" class="defaultInput2" v-model="name" placeholder="الرجاء ادخال الشخص المسئول" />
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/user.svg')" alt="">
                        </div>

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- phone  -->
                    <div class="phone position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.phone') }} </label>
                        <InputNumber v-model="value1" class="defaultInput" inputId="integeronly" :placeholder="$t('auth.phoneDesc')" />

                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/phone.svg')" alt="">
                        </div>

                        <!-- select phone  -->
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"  class="w-full md:w-14rem" />

                    </div>
                </div>

                <!-- email  -->
                <div class="col-md-6 mb-3">
                    <div class="position-relative flex-auto">

                        <label for="integeronly" class="label fw-bold block mb-2"> البريد الألكتروني </label>
                        <InputText type="email" class="defaultInput2" v-model="name" placeholder="الرجاء ادخال البريد الألكتروني" />
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
                        <Dropdown v-model="gender" :options="regions" optionLabel="name"  class="w-full md:w-14rem w-100 position-relative" placeholder="الرجاء تحديد المنطقة"  />
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
                        <Dropdown v-model="gender" :options="cities" optionLabel="name"  class="w-full md:w-14rem w-100 position-relative" placeholder="الرجاء تحديد المدينة"  />
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
                        <Password v-model="oldPass"  toggleMask class="defaultInput" placeholder="الرجاء ادخال كلمة المرور" />

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
                        <Password v-model="newPass" :feedback="false" toggleMask class="defaultInput" placeholder="الرجاء تأكيد كلمة المرور" />

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
                <button class="main_btn w-100 pt-3 pb-3 fs-5"> {{ $t('nav.login') }} </button>
            </div>

            <!-- new account  -->
            <div class="flex_center newAcc">
                <p class="fs-6 mt-4 fw-6"> {{ $t('auth.haveAnAcc') }} ؟  <router-link to="/register" class="mainColor fw-bold"> {{ $t('auth.register') }} </router-link> </p>  
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
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';

export default {
    data(){
        return{
            cities : [],
            regions : [],
            oldPass : null,
            newPass : null,
        }
    },
    components:{
        InputNumber,
        Dropdown,
        Password,
        InputText
    },
     watch:{
        newPass(){
                // if( this.passwordMatch == true ){
                //     this.disabled = false;
                // }else{
                //     this.disabled = true;
                // }
                this.showValid = true ;
            }
    },
    computed:{
        passwordMatch() {
            return this.oldPass === this.newPass;  
        }
    },
    mounted(){
        setTimeout(() => {
            this.$refs.logo.classList.add('show')
        }, 1000);
        setTimeout(() => {
            this.$refs.logo.classList.remove('show')
        }, 3000);
    }
}
</script>

<style lang="scss">
    input[type=radio]{
        accent-color:#293255
    }
    input[type=radio]:checked + label{
        color:#293255
    }
</style>

<style scoped lang="scss">
    #login{
        height: 180vh;
        .login_form {
            width: 70%;
        }
    }
    .p-dropdown{
        top:0;padding-left:12px;padding-right: 24px;
    }
    .phone .p-dropdown{
            top: 27px;
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
