<template>
    <section id="subscribe" class="pt-2 pb-2 px-3">
        <h6 class="fw-bold mainColor">
            {{ $t('sub.title') }}
        </h6>
        <p class="fw-6 grayColor">
            <!-- Lorem ipsum dolor sit amet consectetur. -->
        </p>
        <!-- subscribe table  -->
        <section class="subs">
            <!-- header  -->
            <div class="flex_between border-bottom pt-4 pb-4 px-4">
                <span class="fw-6 text-center normal fs-15"> {{ $t('sub.name')  }} </span>
                <span class="fw-6 text-center fs-15 details"> {{ $t('sub.details')  }} </span>
                <span class="fw-6 text-center normal fs-15"> {{ $t('sub.time')  }} </span>
                <span class="fw-6 text-center normal fs-15"> {{ $t('sub.status')  }} </span>
                <span class="fw-6 text-center normal fs-15"> {{ $t('sub.date')  }} </span>
                <span class="fw-6 text-center normal fs-15"> {{ $t('sub.sub')  }} </span>
            </div>

            <!-- body  -->
            <div class="flex_between  pt-4 pb-4 px-4">
                <span class="fs-14 normal text-center"> {{ currentPackage.title }} </span>
                <span class="fs-14 text-center details"> 
                    {{ currentPackage.description }}
                </span>
                <span class="fs-14 normal text-center"> {{ subscription.reminder_days }} </span>
                <span class="fs-14 normal text-center">  {{  subscription.status  }}  </span>
                <span class="fs-14 normal text-center"> {{ endDateFormat }} </span>
                <span class="fs-14 text-center"> 
                    <div v-if="subscription.free==true">
                        <div class="current whiteColor fw-6 fs-14 px-5 pt-2 pb-2 br-3" v-if="subscription.is_expired===false">
                            {{ $t('sub.current')  }}
                        </div>
                        <button class="main_btn fw-6 fs-14 px-5 pt-2 pb-2 br-3" v-else :disabled="disabled" @click="updateFree" >
                            {{  $t('sub.renew')  }}
                        </button>
                    </div>
                    <div v-else>
                        <!-- current  -->
                        <div class="current whiteColor fw-6 fs-14 px-5 pt-2 pb-2 br-3" v-if="subscription.is_expired===false">
                            {{ $t('sub.current')  }}
                        </div>
                        <!-- new  -->
                        <button class="main_btn fw-6 fs-14 px-5 pt-2 pb-2 br-3" @click="pay_type=true"   v-else>
                            {{  $t('sub.renew')  }}
                        </button>
                    </div>
                    
                </span>
            </div>
            <!-- {{ currentPackage.price }} -->

        </section>
    </section>


    <!-- select payment way  -->
    <Dialog  v-model:visible="pay_type" modal :style="{ width: '40vw' }">
        <h5 class="fw-bold mainColor text-center mb-4"> 
            اختر وسيلة الدفع
        </h5> 

        <section class="pay_methods">
            <div class="single_pay position-relative flex_between">
                <input type="radio" name="payment_type" value="mada" class="payment_input" v-model="payment_type" id="">
                <h5>MADA</h5>
                <div class="mx-3">
                    <img :src="require('@/assets/imgs/mada.png')" alt="">
                </div>
            </div>
            <div class="single_pay position-relative flex_between">
                <input type="radio" name="payment_type" value="visa" class="payment_input" v-model="payment_type" id="">
                <h5>VISA</h5>
                <div class="mx-3">
                    <img :src="require('@/assets/imgs/visa.png')" alt="">
                </div>
            </div>
            <div class="single_pay position-relative flex_between">
                <input type="radio" name="payment_type" value="master" class="payment_input" v-model="payment_type" id="">
                <h5>MASTER CARD</h5>
                <div class="mx-3">
                    <img :src="require('@/assets/imgs/master.png')" alt="">
                </div>
            </div>
            <!-- <div class="single_pay position-relative flex_between">
                <input type="radio" name="payment_type" value="AMEX"  class="payment_input" v-model="payment_type" id="">
                <h5>AMEX</h5>
                <div class="mx-3">
                    <img :src="require('@/assets/imgs/amex.svg')" alt="">
                </div>
            </div> -->

            <div class="flex_center">
                <button class="main_btn btn pt-2 pb-2 px-5" :disabled="disabled" @click.prevent="updateSub"> ادفع الان </button>
            </div>
        </section>
    </Dialog>
    <!-- pay  -->
    <Dialog v-model:visible="pay" modal :style="{ width: '65vw' }">
        <h5 class="fw-bold mainColor text-center mb-2"> 
            {{  $t('sub.payNow')  }}
        </h5>

        <iframe :src="payment_gate_link" frameborder="0" class="payment_gate"></iframe>
    </Dialog>




    <Toast />
</template>

<script>
import Dialog from 'primevue/dialog';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            pay : false ,
            isSub : false,
            disabled : false,
            subscription : {},
            currentPackage : {},
            payment_gate_link : '',
            pay_type :false,
            payment_type : ''
        }
    },
    computed:{
        // subscription(){
        //     return this.$store.state.subscription ;
        // },
        // currentPackage(){
        //     return this.$store.state.currentPackage ;
        // }
        endDateFormat(){
            const date = new Date(this.subscription.end_date);
            const month = (date.getMonth() + 1).toString();
      const day = date.getDate().toString();
      const year = date.getFullYear().toString();
      return `${month}-${day}-${year}`;


        }
    },
    methods:{
        async updateFree(){
            this.disabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
              Authorization: `Bearer ${token}`,
            };
            const fd = new FormData();
            // fd.append('card_type', this.payment_type);
            await axios.post('company/subscription/update', fd,{headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                    // this.pay_type = false ;
                    // setTimeout(() => {
                    //     this.pay = true ;
                    // }, 1000);
                    this.getSubscription();
                    // this.payment_gate_link = res.data.data.checkoutUrl ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                }
            } )
        },
        async updateSub(){
            this.disabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
              Authorization: `Bearer ${token}`,
            };
            const fd = new FormData();
            fd.append('card_type', this.payment_type);
            await axios.post('company/subscription/update', fd,{headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    // this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                    this.pay_type = false ;
                    setTimeout(() => {
                        this.pay = true ;
                    }, 1000);
                    this.payment_gate_link = res.data.data.checkoutUrl ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                }
            } )
            
        },
        getSubscription(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const data = {};
            return axios.post('company/get-subscription' , data ,{headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.subscription = res.data.data ;
                    this.currentPackage = res.data.data.package ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err, life: 3000 });
            } )
        }
    },
    components:{
        Dialog,
        Toast
    },
    mounted(){
        let profile = JSON.parse(localStorage.getItem('user'));
        this.isSub = profile.has_subscription ;
    },
    created(){
        // this.$store.dispatch('getSubscription');
        this.getSubscription();
    }
}
</script>

<style lang="scss">
    .payment_input{
        position: absolute;
        width:100%;
        height:100%;
        top:0;
        right:0;
        opacity: 0;
    }
    .single_pay:has(.payment_input:checked){
        border: 1px solid #A2AAE2;
        background-color: #a2a9e224;
    }
    .single_pay{
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
        img{
            width:120px;
            height:60px;
            object-fit: contain;
        }
    }
    .subs{
        background-color: #fff;
        border-radius: 8px;
        .current{
            background-color: #A2AAE2;
        }
        .details{
            width: 200px;
        }
        .normal{
            width: 120px;
        }
    }
    .payment_gate{
        width: 100%;
        height:500px;
    }
</style>