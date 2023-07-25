<template>
    <section id="profile" class="pt-3 pb-3 px-3">
        <h6 class="fw-bold mainColor"> البروفايل الشخصي </h6>

        <div class="row mt-3">


            <div class="col-md-8 mb-2">

                

                <Skeleton v-if="showSkeleton" width="10rem" class="mb-2">x`</Skeleton>
                    <!-- single profile card => main info  -->
                    <section class="profile_card mb-3">
                        <!-- card header  -->
                        <div class="card_header">
                            <p class="header_title">البيانات الشخصيه:</p>
                        </div>
                        <!-- card content  -->
                        <div class="card_content pt-3">
                            <!-- top  -->
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                
                                <div class="main_info d-flex align-items-center">
                                    <!-- profile pic  -->
                                    <div class="profile_pic">
                                        <img :src="require('@/assets/imgs/logo.png')" alt="profile image">
                                    </div>
                                    <div class="mx-2">
                                        <p class="fw-bold fs-15 mb-1"> أحمد سمير  </p>
                                        <div>
                                            <img :src="require('@/assets/imgs/redGender.svg')" alt="">
                                            <span class="fw-bold fs-12 mx-1"> ذكر </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="main_btn">
                                    مطابق بنسبة 90%
                                </div>
                            </div>

                            <!-- bottom  -->
                            <div class="d-flex justify-content-between flex-wrap">

                                <!-- single feature  -->
                                <div>
                                    <p class="grayColor fw-6 mb-1">
                                        <img :src="require('@/assets/imgs/bluePhone.svg')" alt="">
                                        <span class="mx-2">رقم الجوال :</span>
                                    </p>
                                    <p class="fw-bold">
                                        01013746111
                                    </p>
                                </div>

                                <!-- single feature  -->
                                <div>
                                    <p class="grayColor fw-6 mb-1">
                                        <img :src="require('@/assets/imgs/blueMail.svg')" alt="">
                                        <span class="mx-2">البريد الالكتروني :</span>
                                    </p>
                                    <p class="fw-bold">
                                        01013746111
                                    </p>
                                </div>

                                <!-- single feature  -->
                                <div>
                                    <p class="grayColor fw-6 mb-1">
                                        <img :src="require('@/assets/imgs/blueCalender.svg')" alt="">
                                        <span class="mx-2">تاريخ الميلاد :</span>
                                    </p>
                                    <p class="fw-bold">
                                        01013746111
                                    </p>
                                </div>

                                <!-- single feature  -->
                                <div>
                                    <p class="grayColor fw-6 mb-1">
                                        <img :src="require('@/assets/imgs/blueNation.svg')" alt="">
                                        <span class="mx-2">الجنسية :</span>
                                    </p>
                                    <p class="fw-bold">
                                        01013746111
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                <!-- single profile card => location  -->
                <section class="profile_card mb-3">
                    <!-- card header  -->
                    <div class="card_header">
                        <p class="header_title">العنوان:</p>
                    </div>
                    <!-- card content  -->
                    <div class="card_content pt-3">
                        

                        <!-- bottom  -->
                        <div class="d-flex">

                            <!-- single feature  -->
                            <div>
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/location.svg')" alt="">
                                    <span class="mx-2">المدينة :</span>
                                </p>
                                <p class="fw-bold">
                                    الرياض
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mx-5">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/dot.svg')" alt="">
                                    <span class="mx-2">مكان الاقامة :</span>
                                </p>
                                <p class="fw-bold">
                                    المملكه العربيه السعوديه, حي المنفوحه
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <!-- single profile card => employee info  -->
                <section class="profile_card mb-3">
                    <!-- card header  -->
                    <div class="card_header">
                        <p class="header_title">بيانات الموظف:</p>
                    </div>
                    <!-- card content  -->
                    <div class="card_content pt-3">
                         <!-- bottom  -->
                        <div class="d-flex justify-content-between flex-wrap">

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redText.svg')" alt="">
                                    <span class="mx-2">المؤهل :</span>
                                </p>
                                <p class="fw-bold">
                                    بكالوريوس حاسبات ومعلومات
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">مجال العمل :</span>
                                </p>
                                <p class="fw-bold">
                                    الهندسه البرمجيه
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">المهارات :</span>
                                </p>
                                <p class="fw-bold">
                                    FIGMA - ADOBE XD
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">الشركة الحالية :</span>
                                </p>
                                <p class="fw-bold">
                                    شركه اوامر الشبكه
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redText.svg')" alt="">
                                    <span class="mx-2">المسمى الوظيفي :</span>
                                </p>
                                <p class="fw-bold">
                                    UI_UX Designer مصمم واجهات
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">الخبرة :</span>
                                </p>
                                <p class="fw-bold">
                                    2 - 5 سنوات
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">الشهادات المهنية :</span>
                                </p>
                                <p class="fw-bold">
                                    IBM - IEEE
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">التخصص :</span>
                                </p>
                                <p class="fw-bold">
                                    مصمم واجهات 
                                </p>
                            </div>



                        </div>
                    </div>
                </section>


                <!-- interaction  -->
                <section class="profile_buttons d-flex justify-content-evenly">

                    <router-link class="main_btn pt-2 px-4 pb-2 whiteColor" to="/chat/1">
                        <img :src="require('@/assets/imgs/message.svg')" alt="">
                        <span class="mx-1 whiteColor fw-6 fs-13"> الذهاب للمحاثة </span>
                    </router-link>

                    <!-- accept  -->
                    <button class="btn accept whiteColor main_btn pt-2 pb-2" v-ripple>قبول</button>
                    <!-- refuse  -->
                    <button class="btn refuse whiteColor main_btn pt-2 pb-2" v-ripple>رفض</button>
                </section>

            </div>


            <div class="col-md-4 mb-2">
                <!-- single profile card => files uploaded  -->
                <section class="profile_card files mb-3">
                    <!-- card header  -->
                    <div class="card_header">
                        <p class="header_title">الملفات المرفوعة:</p>
                    </div>
                    <!-- card content  -->
                    <div class="card_content pt-3">
                        

                        <!-- bottom  -->
                        <div>
                            <div class="file_download position-relative flex_between">
                                <p class="fw-6 mb-0"> السيرة الذاتية </p>
                                <img :src="require('@/assets/imgs/dash_pdf.svg')" alt="">
                                <button @click="downloadPDF('@/assets/imgs/pdf.pdf')"  class="download-button">Download PDF</button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- single profile card => location  -->
                <section class="profile_card mb-3">
                    <!-- card header  -->
                    <div class="card_header">
                        <p class="header_title">الفيديو التعريفي:</p>
                    </div>
                    <!-- card content  -->
                    <div class="card_content pt-3">
                        

                        <!-- bottom  -->
                        <div class="d-flex">
                              <video-player
                                src="https://dafftube.org/wp-content/uploads/2014/01/Sample_1280x720_mp4.mp4"
                                poster="/your-path/poster.jpg"
                                controls
                                :loop="true"
                                :volume="0.6"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>

    </section>
</template>

<script>
import Skeleton from 'primevue/skeleton';
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default {
    data(){
        return{
            showSkeleton : true,
            pdfFileName: 'my-pdf-file.pdf'
        }
    },
    methods: {
        downloadPDF(url) {
            // create element <a> for download PDF
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.download = this.pdfFileName;

            // Simulate a click on the element <a>
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    },
    components:{
        Skeleton,
        VideoPlayer
    },
    mounted(){
        setTimeout(() => {
            this.showSkeleton = false
        }, 1000);
    }

}
</script>

<style lang="scss">
    .file_download{
        background: #F5F5F5;
        padding:7px;
        .download-button{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            opacity: 0;
        }
    }
    .files{
        max-height: 300px;
        overflow-y: auto;
    }
    .profile_card{
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.97);
        padding: 20px;
        .card_header{
            padding-bottom: 0px;
            border-bottom: 1px solid #F5F5F5;
            .header_title{
                font-size: 14px;
                color: #4F4F4F;
                font-weight: 600;
            }
        }
        .card_content{
            .main_info{
                .profile_pic{
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
            }
        }
    }  
    .vjs_video_3-dimensions, .vjs_video_796-dimensions {
        height: 155px !important;
    }
    #profile{
        .accept{
            background-color: #169025 !important;
            width: 150px;
        }
        .refuse{
            background-color: #E83636 !important;
            width: 150px;
        }
    }
</style>