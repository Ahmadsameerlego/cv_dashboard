<template>
     <!-- subscribtion dialog  -->
     <Dialog v-model:visible="subscribtion" modal  :style="{ width: '50vw' }">
        <h4 class="fw-bold mainColor text-center"> الباقات المتاحة </h4>
        <p class="text-center grayColor">
            لعمل بروفايل للشركه الخاص بك اختر نوع الباقه التي تريدها
        </p>
        <!-- subscribtion cards -->
        <section id="subs">

            

            <div class="row" >
                <!-- single sub card -->
                <div class="col-md-4 mb-3" v-for="pkg in packages" :key="pkg.id">
                    <section class="position-relative single_sub pt-3 pb-2 px-3" >
                        <!-- sub image  -->
                        <div class="sub_image mb-3">
                            <img :src="pkg.image" alt="subscribtion icon">
                        </div>
                        <!-- title  -->
                        <h6 class="fw-bold">
                            {{ pkg.title }}
                        </h6>
                        <!-- desc  -->
                        <p class="text-center grayColor">
                            {{ pkg.description }}
                        </p>

                        <span class="fw-6 fs-16">
                            {{  pkg.price  }} ريال
                        </span>
                        
                        <!-- input  -->
                        <input type="radio" name="pkg" class="checkPkg" @change="setPkg(pkg.id, pkg.free)"  :value="pkg.id">
                        <label for="" class="package_label">
                        </label>


                    </section>
                </div>

            </div>

            <div class="flex_center" >
                <button class="main_btn w-50 pt-2 pb-2" @click.prevent="addSubscription" :disabled="disabled">
                    <span v-if="!disabled">دفع الان</span>
                    <div class="spinner-border" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>
           
        </section>
    </Dialog>

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
            subscribtion : false,
            dataFetched : true,
            package_id : null,
            disabled : false,
            free : null,
            pay_type : false,
            payment_gate_link : '',
            pay : false
        }
    },
    components:{
        Dialog,
        Toast
    },
    computed:{
        packages(){
            return this.$store.state.packages ;
        }
    },
    methods:{
        async addSubscription(){
            if( this.free == true ){
                this.disabled = true ;
                const fd = new FormData();
                fd.append('package_id', this.package_id);

                const token = localStorage.getItem('token');
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                await axios.post('company/subscription/add', fd , {headers})
                .then( (res)=>{
                    if( res.data.key === 'success' ){
                        this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                        this.disabled = false ;
                        setTimeout(() => {
                            this.$router.push('/dashboard');
                        }, 1000);
                    }else{
                        this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                        this.disabled = false ;
                    }
                } )
                .catch( (err)=> {
                    this.$toast.add({ severity: 'error', summary: err, life: 3000 });
                    this.disabled = false ;
                } )
            }else{
                this.pay_type = true ;
            }
            
        },
        setPkg(id, type){
            // console.log(id , type)
            this.package_id = id ;
            this.free = type
        },
        async updateSub(){
            this.disabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
              Authorization: `Bearer ${token}`,
            };
            const fd = new FormData();
            fd.append('card_type', this.payment_type);
            fd.append('package_id', this.package_id);
            await axios.post('company/package/payment', fd,{headers})
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
    },  
    watch:{
        showPackageModal(){
                this.subscribtion = true ;
            
        },
        subscribtion(){
            console.log(this.subscribtion)
        },
    },  
    props:{
        showPackageModal : Boolean
    },
    created(){
        if( this.subscribtion == true ){
            setTimeout(() => {
            // Assuming `fetchPackages` is a method to fetch your data
            this.dataFetched = false; // Mark data as fetched
            }, 1000); // Adjust the delay as needed
            this.$store.dispatch('getPackages');
        }
    }
}
</script>

<style>

</style>