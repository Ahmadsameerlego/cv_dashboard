<template>
    <section id="subscribe" class="pt-2 pb-2 px-3">
        <h6 class="fw-bold mainColor">
            {{ $t('sub.title') }}
        </h6>
        <p class="fw-6 grayColor">
            Lorem ipsum dolor sit amet consectetur.
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
                <span class="fs-14 normal text-center"> ٢٨ يوم </span>
                <span class="fs-14 normal text-center">  {{  subscription.status  }}  </span>
                <span class="fs-14 normal text-center"> {{ endDateFormat }} </span>
                <span class="fs-14 text-center"> 
                    
                    <!-- current  -->
                    <div class="current whiteColor fw-6 fs-14 px-5 pt-2 pb-2 br-3" v-if="isSub==1">
                        {{ $t('sub.current')  }}
                    </div>
                    <!-- new  -->
                    <button class="main_btn fw-6 fs-14 px-5 pt-2 pb-2 br-3" @click="updateSub" :disabled="disabled"  v-if="isSub==0">
                        {{  $t('sub.renew')  }}
                    </button>
                </span>
            </div>

        </section>
    </section>

    <!-- pay  -->
    <Dialog v-model:visible="pay" modal :style="{ width: '35vw' }">
        <h5 class="fw-bold mainColor text-center mb-2"> 
            {{ $t('sub.choose')  }}
        </h5>

        <p class="text-center">
            مولد النص العربي هذا النص هو مثال لنص يمكن ان يستبدل في نفس
المساحه هنا للمصممين    
        </p>

    
        <div class="flex_center mt-4">
            <button class="main_btn pt-2 pb-2  w-50" @click="detelte"> {{  $t('sub.payNow')  }} </button>
        </div>
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
            currentPackage : {}
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
        async updateSub(){
            this.disabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
              Authorization: `Bearer ${token}`,
            };
            const fd = new FormData();
            await axios.post('company/subscription/update', fd,{headers})
            .then( (res)=>{
                if( res.data.key === 'successs' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
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
        let profile = JSON.parse(localStorage.getItem('profile'));
        this.isSub = profile.has_subscription ;
    },
    created(){
        // this.$store.dispatch('getSubscription');
        this.getSubscription();
    }
}
</script>

<style lang="scss">
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
</style>