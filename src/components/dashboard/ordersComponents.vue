<template>
  <section id="orders" class="pt-2 pb-2 px-3">
    <div class="flex_between">
        <div>
            <h6 class="mainColor fw-bold" v-if="ownOrders==true"> {{  $t('order.title')  }} </h6>
            <h6 class="mainColor fw-bold" v-else>   الوظائف المعلنة </h6>
            <p class="fw-6 grayColor">
                {{  $t('order.desc')  }}
            </p>
        </div>
        <div v-if="isSub==true">
            <button class="main_btn px-2" @click="ordersFilter=true" v-if="ownOrders">
                <img :src="require('@/assets/imgs/Frame.svg')" width="20" alt="">
            </button>
        </div>
    </div>



    <section v-if="isSub==true">
        
        <!-- طلبات التوظيف  -->
        <section class="orders_cards mt-4"  v-if="ownOrders==true">

            <div class="row" v-if="load">
                    <div class="col-md-6 mb-2" v-for="skeleton in 2" :key="skeleton">
                        <Skeleton  height="6rem"></Skeleton>
                    </div>
            </div>
            <section v-else>
                <div class="row" v-if="applications.length>0">

                    <!-- single card  -->
                    <div class="col-md-6 mb-2" v-for="ad in applications" :key="ad.id">
                        <section class="single_order pt-2 pb-2 px-2">
                            <div class="d-flex">
                                <!-- image  -->
                                <div class="order_image">
                                    <img :src="ad.company.image" alt="">
                                </div>
                                <!-- details  -->
                                <div class="order_details mx-3">
                                    <h6 class="fw-bold"> {{ ad.job_name }} </h6>
                                    <div class="d-flex align-items-baseline">
                                        <img :src="require('@/assets/imgs/bag.svg')" alt="">
                                        <p class="fw-6 mx-2"> {{ ad.type }} </p>
                                    </div>
                                    <div class="d-flex align-items-baseline">
                                        <img :src="require('@/assets/imgs/dot.svg')" alt="">
                                        <p class="fw-6 mx-2 mainColor2"> {{ ad.city  }}  </p>
                                    </div>
                                    <div class="d-flex align-items-baseline">
                                        <img :src="require('@/assets/imgs/people.png')" alt="">
                                        <div  v-if="ad.job_applications_count>0">
                                            <p class="fw-6 mx-2"> {{  ad.job_applications_count  }} متقدم </p>
                                        </div>
                                        <div  v-else-if="ad.job_applications_count==0">
                                            <p class="fw-6 mx-2">لا يوجد متقدمين</p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <!-- abs values  -->
                                <div class="abs">
                                    <!-- date  -->
                                    <div class="date d-flex align-items-center">
                                        <div class="grayColor d-flex align-items-baseline">
                                            <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                            <p class="mx-1"> {{ $t('order.date')  }} :</p>
                                        </div>
                                        <p class="fw-6 "> {{  ad.published_at  }} </p>
                                    </div>

                                    <!-- more  -->
                                    <router-link :to="'/details/'+ad.id" class="more grayColor" v-if="ownOrders==true">
                                        {{ $t('order.more')  }}
                                        <i class="fa-solid fa-chevron-left"></i>
                                    </router-link>
                                    <!-- more  -->
                                    <router-link :to="'/ownDetails/'+ad.id" class="more grayColor" v-else>
                                        {{ $t('order.more')  }}
                                        <i class="fa-solid fa-chevron-left"></i>
                                    </router-link>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

                <div v-else>
                    <Message severity="error">
                    لا توجد طلبات توظيف الى الان
                    </Message>
                </div>
            </section>
        </section>

        <!-- الوظائف المعلنة  -->
        <section class="orders_cards mt-4" v-else-if="ownOrders==false">
            <div class="row" v-if="loadAd">
                    <div class="col-md-6 mb-2" v-for="skeleton in 2" :key="skeleton">
                        <Skeleton  height="6rem"></Skeleton>
                    </div>
            </div>

            <section v-else>
                <div class="row" v-if="advertisements.length>0">      
                    <!-- single card  -->
                    <div class="col-md-6 mb-2" v-for="ad in advertisements" :key="ad.id">
                        <section class="single_order pt-2 pb-2 px-2">
                            <div class="d-flex">
                                <!-- image  -->
                                <div class="order_image">
                                    <img :src="ad.company.image" alt="">
                                </div>
                                <!-- details  -->
                                <div class="order_details mx-3">
                                    <h6 class="fw-bold"> {{ ad.job_name }} </h6>
                                    <div class="d-flex align-items-baseline">
                                        <img :src="require('@/assets/imgs/bag.svg')" alt="">
                                        <p class="fw-6 mx-2"> {{ ad.type }} </p>
                                    </div>
                                    <div class="d-flex align-items-baseline">
                                        <img :src="require('@/assets/imgs/dot.svg')" alt="">
                                        <p class="fw-6 mx-2 mainColor2"> {{ ad.city  }}   </p>
                                    </div>
                                    <div class="d-flex align-items-baseline">
                                        <img :src="require('@/assets/imgs/people.png')" alt="">
                                        <div v-if="ad.job_applications_count>0">
                                            <p class="fw-6 mx-2"> {{  ad.job_applications_count  }} متقدم </p>
                                        </div>
                                        <div v-else-if="ad.job_applications_count==0">
                                            <p class="fw-6 mx-2"> لا يوجد متقدمين </p>
                                        </div>
                                       
                                    </div>
                                </div>

                                <!-- abs values  -->
                                <div class="abs">
                                    <!-- date  -->
                                    <div class="date d-flex align-items-center">
                                        <div class="grayColor d-flex align-items-baseline">
                                            <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                            <p class="mx-1"> {{ $t('order.date')  }} :</p>
                                        </div>
                                        <p class="fw-6 "> {{  ad.expire_at  }} </p>
                                    </div>

                                    <!-- more  -->
                                    <router-link to="/details/1" class="more grayColor" v-if="ownOrders==true">
                                        {{ $t('order.more')  }}
                                        <i class="fa-solid fa-chevron-left"></i>
                                    </router-link>
                                    <!-- more  -->
                                    <router-link :to="'/ownDetails/'+ad.id" class="more grayColor" v-else>
                                        {{ $t('order.more')  }}
                                        <i class="fa-solid fa-chevron-left"></i>
                                    </router-link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div v-else>
                    <Message severity="error">
                    لا توجد وظائف معلنة الى الان
                    </Message>
                </div>

            </section>
        
        </section>
    </section>


    <section v-else-if="isSub==false">
        <Message severity="error">
            قم بتجديد الاشتراك
        </Message>
    </section>

    
  </section>


    <!-- filter  -->
    <Dialog v-model:visible="ordersFilter" modal :style="{ width: '50vw' }">
            <h5 class="fw-6 mainColor text-center mb-2">
            {{ $t('order.filter')  }}
            </h5>

            <p class="text-center">
                هذا النص هو مثال على نص يمكن ان يستبدل
            </p>


            <form class="filter_form">

                <div class="form-group mb-2">
                    <input type="checkbox" id="all"  name="" v-model="selectAll" @change="toggleSelectAll">
                    <label for="all" class="mx-2"> {{  $t('order.all')  }} </label>
                </div>

                <div class="d-flex justify-content-between">

                    <div class="form-group" v-for="activity in activities" :key="activity.id">
                        <input type="checkbox" id="full" name="activity" :value="activity.id" v-model="selectedActivities">
                        <label class="mx-2" for="full"> {{ activity.title }} </label>
                    </div>                
                </div>

                <div class="flex_center mt-4">
                    <button class="main_btn w-50 pt-2 pb-2" :disabled="disabled" @click.prevent="filterAds"> 
                        <span v-if="!disabled">
                            {{  $t('order.next')  }} 
                        </span>
                        <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </div>
            </form>


    </Dialog>

    <Toast />

</template>

<script>
import Dialog from 'primevue/dialog';
import Skeleton from 'primevue/skeleton';
import Message from 'primevue/message';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            ordersFilter : false,
            ownOrders : null,
            load : true,
            loadAd : true ,

            selectAll : false,
            selectedActivities : [],
            disabled : false,

            compAds : []

        }
    },
    computed:{
        activities(){
            return this.$store.state.activites ;
        },
        allActivitiesSelected() {
            // Check if all activities are selected
            return this.selectedActivities.length === this.activities.length;
        },

        advertisements(){
                return this.ads
           
            
        }

    },
    watch:{
        isGet(){
            if( this.isGet == true  ){
                this.load = false ;
            }else{
                this.load = true ;
            }
        },
        
        getAdLoad(){
            if( this.getAdLoad == true  ){
                this.loadAd = false ;
            }else{
                this.loadAd = true ;
            }
        },
        allActivitiesSelected(newVal) {
            // Update selectAll based on the state of all activities
            this.selectAll = newVal;
            console.log(this.selectedActivities)
        }

    },
    components:{
        Dialog,
        Skeleton ,
        Message,
        Toast
    },
    methods:{
        toggleSelectAll() {
            // Toggle the selected state of all checkboxes based on selectAll
            if (this.selectAll) {
                // If selectAll is true, select all activities
                this.selectedActivities = this.activities.map(activity => activity.id);
            } else {
                // If selectAll is false, clear selectedActivities
                this.selectedActivities = [];
            }
        },
        async filterAds(){
            this.disabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const fd = new FormData();
            for( let i = 0 ; i < this.selectedActivities.length ; i++ ){
                fd.append('types[]', this.selectedActivities[i])
            }

            await axios.post('company/advertisements/fillter', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.compAds = res.data.data ;
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                    
                    this.$emit('setAds', this.compAds);

                    this.ordersFilter = false ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.disabled = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err, life: 3000 });
                this.disabled = false ;
            } )
        }
    },
    mounted(){
        if( this.$route.fullPath.includes('settings') ){
            this.ownOrders = false ;
        }else if( this.$route.fullPath.includes('orders') ){
            this.ownOrders = true ;
        }
        this.$store.dispatch('getActivities');


    },
    props:{
        ads : Array,
        applications : Array,
        isGet : Boolean,
        getAdLoad : Boolean,
        isSub : Boolean
    }
}
</script>

<style lang="scss">
    .orders_cards{
        .single_order{
            position: relative;
            background-color: #fff;
            border-radius: 10px;
            border-top: 3px solid rgba(255, 126, 104, 0.13);
            .order_image{
                width:60px;
                height: 60px;
                border-radius: 4px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .abs{
                .date , .more{
                    position: absolute;
                    left:20px;
                }
                .date{
                    top: 20px;
                }
                .more{
                    bottom:20px;
                }
            }
        }
    }
    .p-component{
        font-family: 'Cairo', sans-serif !important;
    }
    .filter_form{
        input{
            accent-color: #293255;
            width: 15px;
            height: 15px;
        }
    }
</style>