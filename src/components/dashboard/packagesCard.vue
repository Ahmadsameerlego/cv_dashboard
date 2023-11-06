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
                        <input type="radio" name="pkg" class="checkPkg" @change="setPkg(pkg.id)"  :value="pkg.id">
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
            disabled : false
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
        },
        setPkg(id){
            console.log(id)
            this.package_id = id ;
        }
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