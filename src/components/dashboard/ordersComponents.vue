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
        <div>
            <button class="main_btn px-2" @click="ordersFilter=true" v-if="ownOrders">
                <img :src="require('@/assets/imgs/Frame.svg')" width="20" alt="">
            </button>
        </div>
    </div>


    <!-- طلبات التوظيف  -->
    <section class="orders_cards mt-4"  v-if="ownOrders==true">
        <div class="row" v-if="applications.length===0">
                <div class="col-md-6 mb-2" v-for="skeleton in 2" :key="skeleton">
                    <Skeleton  height="6rem"></Skeleton>
                </div>
        </div>
        <div class="row" v-else>
            
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
                                <p class="fw-6 mx-2 mainColor2"> {{ ad.city  }} تبعد ١٢ كم </p>
                            </div>
                            <div class="d-flex align-items-baseline">
                                <img :src="require('@/assets/imgs/people.png')" alt="">
                                <p class="fw-6 mx-2"> {{  ad.job_applications_count  }} متقدم </p>
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
    </section>

    <!-- الوظائف المعلنة  -->
    <section class="orders_cards mt-4" v-else-if="ownOrders==false">
        <div class="row" v-if="ads.length===0">
                <div class="col-md-6 mb-2" v-for="skeleton in 2" :key="skeleton">
                    <Skeleton  height="6rem"></Skeleton>
                </div>
            </div>
        <div class="row" v-else>
            
            <!-- single card  -->
            <div class="col-md-6 mb-2" v-for="ad in ads" :key="ad.id">
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
                                <p class="fw-6 mx-2 mainColor2"> الرياض تبعد ١٢ كم </p>
                            </div>
                            <div class="d-flex align-items-baseline">
                                <img :src="require('@/assets/imgs/people.png')" alt="">
                                <p class="fw-6 mx-2"> {{  ad.job_applications_count  }} متقدم </p>
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
                    <input type="checkbox" id="all"  name="">
                    <label for="all" class="mx-2"> {{  $t('order.all')  }} </label>
                </div>

                <div class="d-flex justify-content-between">

                    <div class="form-group">
                        <input type="checkbox" id="full" name="">
                        <label class="mx-2" for="full"> {{  $t('order.total')  }} </label>
                    </div>

                    <div class="form-group">
                        <input type="checkbox" id="part" name="">
                        <label class="mx-2" for="part"> {{  $t('order.sub')  }} </label>
                    </div>
                    
                    <div class="form-group">
                        <input type="checkbox" id="remote" name="">
                        <label class="mx-2" for="remote"> {{ $t('order.remote')  }} </label>
                    </div>
                
                </div>

                <div class="flex_center mt-4">
                    <button class="main_btn w-50 pt-2 pb-2"> {{  $t('order.next')  }} </button>
                </div>
            </form>


    </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
import Skeleton from 'primevue/skeleton';

export default {
    data(){
        return{
            ordersFilter : false,
            ownOrders : null
        }
    },
    computed:{

    },
    components:{
        Dialog,
        Skeleton
    },
    mounted(){
        if( this.$route.fullPath.includes('settings') ){
            this.ownOrders = false ;
        }else if( this.$route.fullPath.includes('orders') ){
            this.ownOrders = true ;
        }
    },
    props:{
        ads : Array,
        applications : Array
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