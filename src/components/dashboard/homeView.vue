<template>
    <section class="dash_content mt-3">
        <h5 class="mainColor fw-bold"> {{ $t('home.main') }} </h5>
        <p class="grayColor fw-6"> {{  $t('home.desc')  }} </p>

        <div class="dash_statistics px-3 pt-4 pb-5">
            <h4 class="fw-bold mainColor"> {{ $t('home.sta')  }} </h4>

            <swiper
                class="mt-5"
                :slides-per-view="5"
                :spaceBetween="15"
                :modules="modules"
                :centeredSlides="true"
                navigation

                :breakpoints="swiperOptions.breakpoints"
            >
                <!-- tab1  -->
                <swiper-slide class="">
                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <!-- single statistic  -->
                            <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-between align-items-center">
                                
                                <div class="flex_center flex-column">
                                    <p class="fw-bold"> {{ $t('home.appliers') }} </p>

                                    <h2 class="fw-bold mainColor">
                                        {{ job_applications }}
                                    </h2>
                                </div>

                                <div>
                                    <img :src="require('@/assets/imgs/statistics.svg')" class="card_image" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- ==== removed item ==== -->
                        <!-- <div class="col-md-6 mb-3">
                            <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-center align-items-center">
                                
                                <div class="flex_center flex-column">
                                    <p class="fw-bold"> متوسط نسبة التطابق للمتقدمين على الوظائف المعلنة </p>

                                    <div>
                                        <Chart type="pie" :data="chartData" :options="chartOptions" class="md:w-10rem" />
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        

                        <div class="col-md-6 mb-3">
                            <!-- single statistic  -->
                            <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-between align-items-center">
                                
                                <div class="flex_center flex-column">
                                    <p class="fw-bold mb-0"> {{ $t('home.applied') }} </p>
                                    <!-- <p class="grayColor fw-6"> Lorem ipsum dolor sit amet. </p> -->

                                    <h2 class="fw-bold mainColor">
                                        {{ emplyments }}
                                    </h2>
                                </div>

                                <div>
                                    <img :src="require('@/assets/imgs/people.svg')" class="card_image" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <!-- single statistic  -->
                            <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-center align-items-center" style="height:230px">
                                
                                <div class="flex_center flex-column">
                                    <p class="fw-bold pb-0"> {{ $t('home.rateDesc') }} </p>

                                    <div>
                                        <Chart type="pie" :data="chartData2" :options="chartOptions2" class="md:w-10rem" />
                                        <span class="rate text-center ">
                                            {{ $t('home.avr') }} : {{ rate }}
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </swiper-slide>
                <!-- tab 2  -->
                <swiper-slide class="">
                    <div class="row">

                        <div class="col-md-6 mb-3" v-for="job in jobs" :key="job.id">
                            <!-- single statistic  -->
                            <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-between align-items-center">
                                
                                <div class="flex_center flex-column">
                                    <p class="fw-bold"> {{ $t('home.applyOn') }} {{ job.id }} </p>
                                    <p class="grayColor fw-6"> {{ job.job_name }} </p>

                                    <h2 class="fw-bold mainColor">
                                        {{ job.job_applications_count }}
                                    </h2>
                                </div>

                                <div>
                                    <img :src="require('@/assets/imgs/statistics.svg')" class="card_image" alt="">
                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import Chart from 'primevue/chart';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation ,A11y} from 'swiper';


  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

import axios from 'axios';

export default {
    data(){
        return{
            swiperOptions: {
                breakpoints: {       
                        320: {       
                            slidesPerView: 1,
                            spaceBetween: 20     
                        },          
                        770: {       
                            slidesPerView: 3,       
                            spaceBetween: 20     
                        },   
                    
                        771: {       
                            slidesPerView: 1,       
                            spaceBetween: 20     
                        } 
                }
            },

            chartData: null,
            chartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            },
            chartData2: null,
            chartOptions2: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            },
            job_applications : 0 ,
            emplyments : 0,
            jobs : [],
            total : 0,
            employment : 0,
            rate : 0
        }
    },
    components:{
        Chart,
        Swiper,
        SwiperSlide,

    },
    setup() {
    
        return {
            modules: [Navigation ,A11y]
        };
    },
    beforeMount(){
    },
    mounted() {
        this.getRate();
        setTimeout(() => {
            this.chartData = this.setChartData();
            this.chartData2 = this.setChartData2();
        }, 1200);
        this.getJobApps();
        this.getEmployments();
        this.getJobs();
    },
    methods: {
        // get rate 
        async getRate(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get('company/job-application/employment/rate', {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.total = res.data.data.total ;
                    this.employment = res.data.data.employment ;
                    this.rate = res.data.data.rate ;
                }
            } )
        },
        setChartData() {
            const documentStyle = getComputedStyle(document.body);

            return {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    }
                ]
            };
        },
        setChartData2() {
            const documentStyle2 = getComputedStyle(document.body);

            return {
                labels: [this.$t('home.total'),this.$t('home.employment')],
                datasets: [
                    {
                        data: [this.total, this.employment],
                        backgroundColor: [documentStyle2.getPropertyValue('--blue-500'), documentStyle2.getPropertyValue('--yellow-500'), documentStyle2.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle2.getPropertyValue('--blue-400'), documentStyle2.getPropertyValue('--yellow-400'), documentStyle2.getPropertyValue('--green-400')]
                    }
                ]
            };
        },
        // get job applications 
        async getJobApps(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get('company/job-applications/count', {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.job_applications = res.data.data ;
                }else{
                    this.job_applications = 0
                }
            } )
        },
        // get emplyments  
        async getEmployments(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get('company/job-applications/employment', {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.emplyments = res.data.data ;
                }else{
                    this.emplyments = 0
                }
            } )
        },
        // get jobs  
        async getJobs(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get('company/advertisements/count/job-applications', {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.jobs = res.data.data ;
                }else{
                    this.jobs = []
                }
            } )
        },
    }

}
</script>


<style scoped>
    .rate{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-right: 15px;
        font-size: 14px;
        font-weight: 600;
    }
</style>
<style lang="scss">
.dash_statistics{
    .swiper-button-next, .swiper-button-prev{
        position: fixed;
        /* bottom: 13px !important; */
        top: 92% !important;

    }
    .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
        content: 'next';
        font-size: 16px;
        color: #fff;
        background: #2a3255;
        padding: 5px;
        border-radius: 3px;
    }
    .swiper-button-prev{
        left: 75px !important;
        right: auto;
    }
    .swiper-button-next{
        transform: rotate(180deg) !important;
        left: 35px;
    }
}

</style>
<style lang="scss">
    canvas{
        width: 150px !important;
    }
    .dash_content{
        .dash_statistics{
            border-radius: 3px;
            margin:auto;
            background-color: #fff;
            box-shadow: 0px 0px 8px #3333332f;
            .single_card{
                border-radius: 6px;
                border: 1px solid #F3F3F3;
                background: #FBFBFB;
                box-shadow: 0px 0px 3px rgb(51 51 51 / 8%);
                            height: 200px;

            }
        }
    }
</style>