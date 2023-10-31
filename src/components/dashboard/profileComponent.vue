<template>
    <section id="profile" class="pt-3 pb-3 px-3">
        <h6 class="fw-bold mainColor"> {{ $t('profile.title') }} </h6>

        <div class="row mt-3">


            <div class="col-md-8 mb-2">

                <Skeleton v-if="showSkeleton" width="10rem" class="mb-2"></Skeleton>
                <!-- single profile card => main info  -->
                <section class="profile_card mb-3">
                    <!-- card header  -->
                    <div class="card_header">
                        <p class="header_title">{{ $t('profile.main') }}:</p>
                    </div>
                    <!-- card content  -->
                    <div class="card_content pt-3">
                        <!-- 
                            top  
                        -->
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            
                            <div class="main_info d-flex align-items-center">
                                <!-- profile pic  -->
                                <div class="profile_pic">
                                    <img :src="require('@/assets/imgs/logo.png')" alt="profile image">
                                </div>
                                <div class="mx-2">
                                    <p class="fw-bold fs-15 mb-1"> {{  user.name  }}  </p>
                                    <div>
                                        <img :src="require('@/assets/imgs/redGender.svg')" alt="">
                                        <span class="fw-bold fs-12 mx-1"> ذكر </span>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="main_btn">
                                مطابق بنسبة 90%
                            </div> -->
                        </div>

                        <!-- bottom  -->
                        <div class="d-flex justify-content-between flex-wrap">

                            <!-- single feature  -->
                            <div>
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/bluePhone.svg')" alt="">
                                    <span class="mx-2">{{ $t('set.phone')  }} :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.phone }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div>
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/blueMail.svg')" alt="">
                                    <span class="mx-2"> {{ $t('set.email')  }} :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.email }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div>
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/blueCalender.svg')" alt="">
                                    <span class="mx-2"> {{ $t('profile.birthday')  }} :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.birth_date }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div>
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/blueNation.svg')" alt="">
                                    <span class="mx-2"> {{  $t('profile.nat')  }} :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.nationality }}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- single profile card => location  -->
                <section class="profile_card mb-3">
                    <!-- card header  -->
                    <div class="card_header">
                        <p class="header_title"> {{ $t('profile.address')  }} :</p>
                    </div>
                    <!-- card content  -->
                    <div class="card_content pt-3">
                        

                        <!-- bottom  -->
                        <div class="d-flex">

                            <!-- single feature  -->
                            <div>
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/location.svg')" alt="">
                                    <span class="mx-2"> {{ $t('search.city')  }} :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.city }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mx-5">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/dot.svg')" alt="">
                                    <span class="mx-2">مكان الاقامة :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.map_desc }}
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
                                    {{ user.qualification }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">مجال العمل :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.employment }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">المهارات :</span>
                                </p>
                                <p class="fw-bold" v-for="skill in user.skills" :key="skill">
                                    {{ skill }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">الشركة الحالية :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.company_name }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redText.svg')" alt="">
                                    <span class="mx-2">المسمى الوظيفي :</span>
                                </p>
                                <p class="fw-bold">
                                    {{  user.job_title  }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">الخبرة :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.experience }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">الشهادات المهنية :</span>
                                </p>
                                <p class="fw-bold" v-for="cer in user.certifications" :key="cer">
                                    {{ cer }}
                                </p>
                            </div>

                            <!-- single feature  -->
                            <div class="mb-2">
                                <p class="grayColor fw-6 mb-1">
                                    <img :src="require('@/assets/imgs/redBag.svg')" alt="">
                                    <span class="mx-2">التخصص :</span>
                                </p>
                                <p class="fw-bold">
                                    {{ user.specialization }} 
                                </p>
                            </div>



                        </div>
                    </div>
                </section>

                <!-- interaction  -->
                <section class="profile_buttons d-flex justify-content-evenly">

                    <router-link class="main_btn pt-2 px-4 pb-2 whiteColor" :to="'/chat/'+room_id" v-if="status=='accepted'">
                        <img :src="require('@/assets/imgs/message.svg')" alt="">
                        <span class="mx-1 whiteColor fw-6 fs-13"> الذهاب للمحاثة </span>
                    </router-link>

                    <!-- accept  -->
                    <button class="btn accept whiteColor main_btn pt-2 pb-2" v-ripple :disabled="acceptDisabled" @click.prevent="acceptApplication" v-if="status=='pending'">
                        <span v-if="!acceptDisabled">قبول</span>
                        <div class="spinner-border" role="status" v-if="acceptDisabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                    <!-- refuse  -->
                    <button v-if="status=='pending'" class="btn refuse whiteColor main_btn pt-2 pb-2" v-ripple @click="refuseApplication=true">رفض</button>
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
                                <button @click="downloadPDF(`${user.cv}`)"  class="download-button">Download PDF</button>
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
                                :src="user.video"
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
    <Toast />

    <!-- refuse application modal  -->
    <Dialog v-model:visible="refuseApplication" modal :style="{ width: '35vw' }">
        <h5 class="fw-bold  text-center mb-2"> رفض الطلب </h5>

        <p class="text-center">
            الرجاء ادخال سبب رفض المقدم على الوظيفة لكي يتم مراجعة معلوماته
        </p>

        <form>
            <textarea name="" v-model="refuseReason" id="" cols="30" rows="8" class="form-control refuse_textarea" placeholder="اكتب سبب الرفض هنا"></textarea>
        </form>
    
        <div class="flex_between mt-4">
            <button class="main_btn pt-3 pb-3  w-50" @click.prevent="rejectApplication" :disabled="acceptDisabled1"> 
                
                <span v-if="!acceptDisabled1"> ارسال </span>
                <div class="spinner-border" role="status" v-if="acceptDisabled1">
                    <span class="visually-hidden">Loading...</span>
                </div>

            </button>
            <button class="main_btn cancel pt-3 pb-3 w-50 mx-2" @click="refuseApplication=false"> {{ $t('emp.back')  }} </button>
        </div>
    </Dialog>
</template>

<script>
import Skeleton from 'primevue/skeleton';
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import Toast from 'primevue/toast';
import axios from 'axios';
import Dialog from 'primevue/dialog';

export default {
    data(){
        return{
            showSkeleton : true,
            pdfFileName: 'my-pdf-file.pdf',
            acceptDisabled : false,
            acceptDisabled1 : false,
            refuseApplication : false,
            refuseReason : '',
            status : '',
            room_id : ''
        }
    },
    computed:{
        user(){
            return this.$store.state.user_profile ;
        }
    },
    methods: {
        // get status 
        async getJobStatus(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const fd = new FormData();
            fd.append('job_application_id', localStorage.getItem('job_app_id'));

            await axios.post('company/job-applications/status', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    console.log(res.data.data)
                    this.status = res.data.data.status ;
                    this.room_id = res.data.data.room_id ;
                }
            } )
        },
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
        },
        async getUserInfo(){
            const fd = new FormData ;
            fd.append('user_id', this.$route.params.id);
            await this.$store.dispatch('getUserProfile', fd);
        },

        // accept application 
        async acceptApplication(){
            this.acceptDisabled = true ;
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const fd = new FormData();
            fd.append('job_application_id', localStorage.getItem('job_app_id'));

            await axios.post('company/job-applications/accept', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.acceptDisabled = false ;
                    this.getJobStatus();
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.acceptDisabled = false ;
                }
            } )
        },

        // reject application 
        async rejectApplication(){  
            this.acceptDisabled1 = true ;
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const fd = new FormData();
            fd.append('job_application_id', localStorage.getItem('job_app_id'));
            fd.append('reason', this.refuseReason);

            await axios.post('company/job-applications/reject', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    this.acceptDisabled1 = false ;
                    this.refuseApplication = false ;
                    this.getUserInfo();
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                    this.acceptDisabled1 = false ;
                }
            } )
        }
    },
    components:{
        Skeleton,
        VideoPlayer,
        Toast,
        Dialog
    },
    mounted(){
        setTimeout(() => {
            this.showSkeleton = false
        }, 1000);

        this.getUserInfo();   
        this.getJobStatus(); 
    }

}
</script>

<style lang="scss">
    .refuse_textarea{
        background-color: #f3f3f3 !important;
    }
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