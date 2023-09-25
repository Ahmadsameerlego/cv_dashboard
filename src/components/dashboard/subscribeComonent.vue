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
                <span class="fs-14 normal text-center"> شهرية </span>
                <span class="fs-14 text-center details"> 
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                </span>
                <span class="fs-14 normal text-center"> ٢٨ يوم </span>
                <span class="fs-14 normal text-center"> pending </span>
                <span class="fs-14 normal text-center"> 16/8/2000 </span>
                <span class="fs-14 text-center"> 
                    
                    <!-- current  -->
                    <!-- <div class="current whiteColor fw-6 fs-14 px-5 pt-2 pb-2 br-3">
                        {{ $t('sub.current')  }}
                    </div> -->
                    <!-- new  -->
                    <button class="main_btn fw-6 fs-14 px-5 pt-2 pb-2 br-3" @click="pay=true">
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

</template>

<script>
import Dialog from 'primevue/dialog';

export default {
    data(){
        return{
            pay : false 
        }
    },
    components:{
        Dialog
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