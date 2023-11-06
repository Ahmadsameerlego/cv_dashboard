<template>
  <section id="statistics" class="pt-5 pb-2">
    <div class="container">
        <h4 class="text-center fw-bold"> {{ $t('site.statistics') }} </h4>
        <p class="fw-6 text-center grayColor"> {{ $t('site.statDesc') }} </p>

        <div class="d-flex justify-content-between mt-4">
            <div class="single_statistics d-flex justify-content-center flex-column align-items-center">
                <h5 class="fw-bold mainColor"> + {{ clients }} </h5>
                <p class="fw-6 fs-15"> {{ $t('site.clientNumbers') }} </p>
            </div>

            <!-- <div class="single_statistics d-flex justify-content-center flex-column align-items-center">
                <h5 class="fw-bold mainColor"> +1000 </h5>
                <p class="fw-6 fs-15"> {{ $t('site.userNumbers') }} </p>
            </div> -->

            <div class="single_statistics d-flex justify-content-center flex-column align-items-center">
                <h5 class="fw-bold mainColor"> +{{ companies }} </h5>
                <p class="fw-6 fs-15"> {{ $t('site.companiesNumbers') }} </p>
            </div>

            <div class="single_statistics d-flex justify-content-center flex-column align-items-center">
                <h5 class="fw-bold mainColor"> {{ downloads }} </h5>
                <p class="fw-6 fs-15"> {{ $t('site.downloads') }} </p>
            </div>
        </div>

        <!-- footer  -->
        <section class="footer ">
            <a href="https://aait.sa/" class="d-flex justify-content-between">
                <div class="down-footer-r fw-6">{{ $t('site.cvCopy') }}</div>
                <div class="down-footer-l fw-6">
                    <span> {{ $t('site.Awamer') }} </span>
                    <img class="awamerLogo" :src="require('@/assets/imgs/awamrtLogo.png')" alt="">
                </div>
            </a>
        </section>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            clients : 0,
            companies : 0,
            downloads : 0
        }
    },
    methods:{
        async getCounts(){
            await axios.get('counts')
            .then( (res)=>{
                this.clients = res.data.data.clients;
                this.companies = res.data.data.companies;
                this.downloads = res.data.data.downloads;
            } )
        }
    },
    mounted(){
        this.getCounts();
    }
}
</script>

<style scoped>
    .footer{
        padding-top: 15px;
        border-top: 1px solid #909090;
    }
    a{
        color:inherit;
        text-decoration: none;
    }
</style>