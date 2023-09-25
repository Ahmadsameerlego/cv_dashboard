<template>
     <!-- subscribtion dialog  -->
     <Dialog v-model:visible="subscribtion" modal  :style="{ width: '50vw' }">
        <h5 class="fw-bold mainColor text-center"> الباقات المتاحة </h5>
        <p class="text-center grayColor">
            لعمل بروفايل للشركه الخاص بك اختر نوع الباقه التي تريدها
        </p>
        <!-- subscribtion cards -->
        <section id="subs">
            <div class="row">
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
                        <input type="radio" name="pkg" class="checkPkg" @change="setPkg"  :value="pkg.id">
                        <label for="" class="package_label">
                        </label>


                    </section>
                </div>

            </div>

            <div class="row">
                <div class="col-md-4">
                    <!-- skeleton  -->
                    <Skeleton v-if="dataFetched" width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div class="col-md-4">
                    <!-- skeleton  -->
                    <Skeleton v-if="dataFetched" width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div class="col-md-4">
                    <!-- skeleton  -->
                    <Skeleton v-if="dataFetched" width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>

            </div>
        </section>
    </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
import Skeleton from 'primevue/skeleton';

export default {
    data(){
        return{
            subscribtion : false,
            dataFetched : true,
            package_id : null
        }
    },
    components:{
        Dialog,
        Skeleton
    },
    computed:{
        packages(){
            return this.$store.state.packages ;
        }
    },
    watch:{
        showPackageModal(){
                this.subscribtion = true ;
            
        },
        subscribtion(){
            console.log(this.subscribtion)
        }
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