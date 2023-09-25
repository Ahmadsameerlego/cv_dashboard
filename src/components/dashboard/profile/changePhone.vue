<template>
    <Dialog v-model:visible="showPhone" modal :style="{ width: '35vw' }">
              <h6 class="fw-bold mainColor text-center mb-2"> تغيير رقم الجوال </h6>
  
              <p class="text-center"> الرجاء ادخال رقم الجوال الجديد المراد اضافته لحسابك </p>
  
              <img class="deleteIcon" src="https://s3-alpha-sig.figma.com/img/96ec/a8e9/9d502c82d1acb4cfea0742335cbae553?Expires=1691366400&Signature=NOyehLr8~JhUlVJ5~iM2xYZH7GwmjQK3~mYue4Ajx8Oyw4TalLalpBeBqXyTvaTrkqUJSASfZGb4xCVIVdEIgigbLPrALNwpRQKorib1~5TaQltf~1-e6ZoQjTVxSMjtUsxHUMFdpWedLxhmqDRIxx0OfSUbAJ-R~ZXXkDa~GdalzC7APQIaHujSEqkayHmIzLmf4yxGZ-y15on1UFbBhCDtjMPlt1-xvojdO83JOnE-PN1KVf~ZUKyHNYPYpBZXpKzWWZqvS2qFNaGTaANg5Khi3~aaYx9iP8tDOR5ZI~QnPfD~kqRHlR0B-iw8aB1bexFRQCmSz6ICKU5t4Z2mnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
              <form class="changePass" @submit.prevent="send">
                  <!-- phone  -->
                  <div class="defaultInput phone position-relative flex-auto">
                        <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('auth.phone') }} </label>
                        <input type="number" class="form-control" v-model="phone" name="phone" maxlength="10" :placeholder="$t('auth.phoneDesc')">
                        <!-- icon  -->
                        <div class="inputIcon">
                            <img :src="require('@/assets/imgs/phone.svg')" alt="">
                        </div>

                        <!-- select phone  -->
                        <Dropdown v-model="country" :options="countries" optionLabel="name"  @change="setCountryCode" class="w-full md:w-14rem" />

                    </div>
                  <div class="flex_between mt-4">
                      <button class="main_btn pt-2 pb-2  w-75 mx-auto d-flex justify-content-center" @click="send" :disabled="disabled"> حفظ التغييرات </button>
                  </div>
              </form>
          </Dialog>

          <otp :openOtp="openOtp" />
  </template>
  
  <script>
  import Dialog from 'primevue/dialog';
//   import Passw  ord from 'primevue/password';
  import Dropdown from 'primevue/dropdown';

  import otp from './sendOtp.vue'
  export default {
      data(){
          return{
              showPhone : false,
              country : null,
              openOtp : false,
              phone : '',
              disabled : true
          }    
      },
      components:{
          Dialog,
        //   Password,
          Dropdown,
          otp
      },
      props:{
        changePhone : Boolean
      },
      watch:{
        changePhone(){
            this.showPhone = true ;
        },
        phone(){
            let phoneString = this.phone.toString();
            if( phoneString.length < 9 ){
                this.disabled = true ;
            }else{
                this.disabled = false ;
            }
        }
      },
      computed:{
        countries(){
            return this.$store.state.countries ;
        },
      },
      methods:{
        // set country code 
        setCountryCode(){
            document.querySelector('.phone .p-dropdown-label').innerHTML = this.country.key ;
        },
        send(){
            localStorage.setItem('new_phone', this.phone);
            localStorage.setItem('new_country_code', this.country.key);

            if( this.openOtp === true || this.openOtp === false ){
                this.openOtp = !this.openOtp ;
                this.showPhone = false ;
            }
        }
      },    
      mounted(){
        if( this.showPhone == true ){
            // set default value for country ( saudia )
            this.country = {id: 1, name: 'السعودية', key: '+966'};
            document.querySelector('.phone .p-dropdown-label').innerHTML = '+966' ;

        }
      },
      created(){
        this.$store.dispatch('getCounntries');
      }
  }
  </script>
  
  <style >
      .changePass .p-inputtext{
          width: 100% !important;
      }
      .changePass .form-control{
        height: 50px;
      }
  </style>