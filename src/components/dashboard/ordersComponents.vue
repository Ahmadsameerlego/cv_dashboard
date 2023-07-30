<template>
  <section id="orders" class="pt-2 pb-2 px-3">
    <div class="flex_between">
        <div>
            <h6 class="mainColor fw-bold"> طلبات التوظيف </h6>
            <p class="fw-6 grayColor">
                يتم عرض هنا جميع الوظائف المعلنه وجميع طلبات التوظيف التي تم التقديم عليها
            </p>
        </div>
        <div>
            <button class="main_btn px-2" @click="ordersFilter=true" v-if="ownOrders">
                <img :src="require('@/assets/imgs/Frame.svg')" width="20" alt="">
            </button>
        </div>
    </div>
    <!-- orders cards  -->
    <section class="orders_cards mt-4">
        <div class="row">
            <!-- single card  -->
            <div class="col-md-6 mb-2">
                <section class="single_order pt-2 pb-2 px-2">
                    <div class="d-flex">
                        <!-- image  -->
                        <div class="order_image">
                            <img :src="require('@/assets/imgs/logo.png')" alt="">
                        </div>
                        <!-- details  -->
                        <div class="order_details mx-3">
                            <h6 class="fw-bold"> frontend developer </h6>
                            <div class="d-flex align-items-baseline">
                                <img :src="require('@/assets/imgs/bag.svg')" alt="">
                                <p class="fw-6 mx-2"> دوام كامل </p>
                            </div>
                            <div class="d-flex align-items-baseline">
                                <img :src="require('@/assets/imgs/dot.svg')" alt="">
                                <p class="fw-6 mx-2 mainColor2"> الرياض تبعد ١٢ كم </p>
                            </div>
                            <div class="d-flex align-items-baseline">
                                <img :src="require('@/assets/imgs/people.png')" alt="">
                                <p class="fw-6 mx-2"> 24 متقدم </p>
                            </div>
                        </div>

                        <!-- abs values  -->
                        <div class="abs">
                            <!-- date  -->
                            <div class="date d-flex align-items-center">
                                <div class="grayColor d-flex align-items-baseline">
                                    <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                    <p class="mx-1"> تاريخ الانتهاء :</p>
                                </div>
                                <p class="fw-6 "> 11 - 2 -2023 </p>
                            </div>

                            <!-- more  -->
                            <router-link to="/details/1" class="more grayColor" v-if="ownOrders==true">
                                عرض المزيد
                                <i class="fa-solid fa-chevron-left"></i>
                            </router-link>
                            <!-- more  -->
                            <router-link to="/ownDetails/1" class="more grayColor" v-else>
                                عرض المزيد
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
                فلتر العرض
            </h5>

            <p class="text-center">
                هذا النص هو مثال على نص يمكن ان يستبدل
            </p>


            <form class="filter_form">

                <div class="form-group mb-2">
                    <input type="checkbox" id="all"  name="">
                    <label for="all" class="mx-2"> الكل </label>
                </div>

                <div class="d-flex justify-content-between">

                    <div class="form-group">
                        <input type="checkbox" id="full" name="">
                        <label class="mx-2" for="full"> دوام كامل </label>
                    </div>

                    <div class="form-group">
                        <input type="checkbox" id="part" name="">
                        <label class="mx-2" for="part"> دوام جزئي </label>
                    </div>
                    
                    <div class="form-group">
                        <input type="checkbox" id="remote" name="">
                        <label class="mx-2" for="remote"> عمل عن بعد </label>
                    </div>
                
                </div>

                <div class="flex_center mt-4">
                    <button class="main_btn w-50 pt-2 pb-2"> التالي </button>
                </div>
            </form>


    </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';

export default {
    data(){
        return{
            ordersFilter : false,
            ownOrders : true
        }
    },
    computed:{

    },
    components:{
        Dialog
    },
    mounted(){
        if( this.$route.fullPath.includes('settings') ){
            this.ownOrders = false ;
        }
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