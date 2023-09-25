<template>
    <section class="dash_content mt-3">
        <h5 class="mainColor fw-bold"> {{ $t('home.main') }} </h5>
        <p class="grayColor fw-6"> {{  $t('home.desc')  }} </p>

        <div class="dash_statistics px-3 pt-4">
            <h4 class="fw-bold mainColor"> {{ $t('home.sta')  }} </h4>

            <div class="row">

                <div class="col-md-6 mb-3">
                    <!-- single statistic  -->
                    <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-between align-items-center">
                        
                        <div class="flex_center flex-column">
                            <p class="fw-bold"> المتقدمين على المنشأة </p>

                            <h2 class="fw-bold mainColor">
                                6544
                            </h2>
                        </div>

                        <div>
                            <img :src="require('@/assets/imgs/statistics.svg')" class="card_image" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- single statistic  -->
                    <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-center align-items-center">
                        
                        <div class="flex_center flex-column">
                            <p class="fw-bold"> المتقدمين على المنشأة </p>

                            <div>
                                <Chart type="pie" :data="chartData" :options="chartOptions" class="md:w-10rem" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- single statistic  -->
                    <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-between align-items-center">
                        
                        <div class="flex_center flex-column">
                            <p class="fw-bold mb-0"> المتقدمين على الاعلان 1 </p>
                            <p class="grayColor fw-6"> Lorem ipsum dolor sit amet. </p>

                            <h2 class="fw-bold mainColor">
                                6544
                            </h2>
                        </div>

                        <div>
                            <img :src="require('@/assets/imgs/statistics.svg')" class="card_image" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- single statistic  -->
                    <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-between align-items-center">
                        
                        <div class="flex_center flex-column">
                            <p class="fw-bold mb-0"> المتقدمين على الاعلان 1 </p>
                            <p class="grayColor fw-6"> Lorem ipsum dolor sit amet. </p>

                            <h2 class="fw-bold mainColor">
                                6544
                            </h2>
                        </div>

                        <div>
                            <img :src="require('@/assets/imgs/people.svg')" class="card_image" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- single statistic  -->
                    <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-between align-items-center">
                        
                        <div class="flex_center flex-column">
                            <p class="fw-bold mb-0"> المتقدمين على الاعلان 1 </p>
                            <p class="grayColor fw-6"> Lorem ipsum dolor sit amet. </p>

                            <h2 class="fw-bold mainColor">
                                6544
                            </h2>
                        </div>

                        <div>
                            <img :src="require('@/assets/imgs/statistics.svg')" class="card_image" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <!-- single statistic  -->
                    <div class="single_card px-4 pt-3 pb-3 d-flex justify-content-center align-items-center">
                        
                        <div class="flex_center flex-column">
                            <p class="fw-bold"> المتقدمين على المنشأة </p>

                            <div>
                                <Chart type="pie" :data="chartData2" :options="chartOptions2" class="md:w-10rem" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>

<script>
import Chart from 'primevue/chart';

export default {
    data(){
        return{
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
            }

        }
    },
    components:{
        Chart
    },

    mounted() {
        this.chartData = this.setChartData();
        this.chartData2 = this.setChartData2();
    },
    methods: {
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
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle2.getPropertyValue('--blue-500'), documentStyle2.getPropertyValue('--yellow-500'), documentStyle2.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle2.getPropertyValue('--blue-400'), documentStyle2.getPropertyValue('--yellow-400'), documentStyle2.getPropertyValue('--green-400')]
                    }
                ]
            };
        }
    }

}
</script>

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