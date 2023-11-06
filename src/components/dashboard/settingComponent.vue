<template>
    <section class="pt-2 pb-2 px-3" id="setting">
        <h6 class="fw-bold mainColor"> {{  $t('set.title')  }} </h6>
        <p class="fw-6 grayColor"> 
            {{  $t('set.desc')  }}
        </p>

        <section class="setting_form mt-3 pt-3 pb-3 px-5">
            <form class="addJobForm" @submit.prevent="updateProfile" ref="profileForm">  
                <!-- cover & pic  -->
                <section class="pics">

                    <!-- cover  -->
                    <div class="cover">
                        <input type="file" accept="image/*" name="banner" class="coverImage" @change="chooseCover($event)">
                        <!-- cover image  -->
                        <img :src="profile.banner" ref="coverImg" class="cover_image" style="min-height:150px;" alt="" >

                        <div class="d-flex justify-content-center align-items-center flex-column" v-if="ifUploaded">
                            <img src="@/assets/imgs/cover.svg" class="cover_icon mb-2" alt="">
                            <p class="grayColor"> {{  $t('set.cover')  }} </p>
                        </div>
                    </div>

                    <!-- profile pic  -->
                    <div class="pic flex_center">
                        <input type="file"  name="image" class="coverImage" @change="choosePic($event)">
                        <!-- cover image  -->
                        <img :src="profile.image" ref="picImage" style="border-radius:50%;" :value="profile.image" class="cover_image" alt="" >
                        <img src="@/assets/imgs/cover.svg" class="cover_icon mb-2" alt="">
                    </div>

                </section>

                <div class="row mt-3">

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/buliding.svg')" alt="">
                            <label for=""> {{ $t('set.name')  }} </label>
                            <input type="text" class="form-control job_form" :placeholder="$t('set.namePlace')" name="name"  :value="profile.name">
                        </div>
                    </div>
                    
                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/buliding.svg')" alt="">
                            <label for=""> {{  $t('set.active')  }} </label>
                            <input type="text" class="form-control job_form" :placeholder="$t('set.activePlace')" name="activity"  :value="profile.activity">
                            <!-- <Dropdown v-model="activity" :options="activities" optionLabel="name" name="city_id"  class="w-full md:w-14rem w-100 position-relative"   /> -->

                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/user.svg')" alt="">
                            <label for=""> {{ $t('set.res')  }} </label>
                            <input type="text" class="form-control job_form" :placeholder="$t('set.resPlace')" :value="profile.owner" name="owner">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/clipboard-text.svg')" alt="">
                            <label for=""> {{  $t('set.com')  }} </label>
                            <input type="number" class="form-control job_form" :placeholder="$t('set.comPlace')" name="commercial_register" :value="profile.commercial_register">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/sms.svg')" alt="">
                            <label for=""> {{  $t('set.email')  }} </label>
                            <input type="email" class="form-control job_form" :placeholder="$t('set.emailPlace')" name="email"  :value="profile.email">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/grayPhone.svg')" alt="" style="object-fit: contain;">
                            <label for="">{{ $t('set.phone')  }}</label>
                            <input type="tel" class="form-control job_form" :placeholder="$t('set.phonePlace')" name="phone"  :value="profile.phone" @focus="openPhonePass">

                            <span class="editPhone">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </span>
                        </div>
                    </div>

                    <!-- regions  -->
                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/grayLocation.png')" alt="">
                            <label for=""> {{  $t('set.region')  }} </label>

                            <Dropdown v-model="region" :options="regions" @change="setRegionId" optionLabel="name" name="region_id" :value="region_id"  class="w-full md:w-14rem w-100 position-relative" :placeholder="region_name"  />

                        </div>
                    </div>
                    <!-- cities -->
                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                        <img class="form_icon" :src="require('@/assets/imgs/grayLocation.png')" alt="">
                        <label for=""> {{ $t('search.city')  }} </label>
                        
                        <Dropdown v-model="city" :options="cities" optionLabel="name" name="city_id"  @change="setCityId" :value="city_id"  class="w-full md:w-14rem w-100 position-relative" :placeholder="city_name"  />

                        </div> 
                    </div>

                    <div class="col-md-12 mb-3">
                        <div class="form-group position-relative">
                            <label for=""> {{  $t('set.comp')  }} </label>
                            <textarea name="description" class="form-control job_form" id="" cols="30" rows="3" :placeholder="$t('set.compPlace')" :value="profile.description"></textarea>
                        </div>
                    </div>


                </div>


                <div class="d-flex justify-content-evenly">
                    <button class="main_btn px-5 pt-2 pb-2 info_btn" type="button" @click="openChangePass"> {{  $t('set.pass')  }} </button>
                    <button class="main_btn px-5 pt-2 pb-2" :disabled="disabled"> 
                        <span  v-if="!disabled">{{  $t('set.save')  }} </span>
                        <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                    <button class="main_btn px-5 refuse pt-2 pb-2" type="button"> {{  $t('set.delete')  }} </button>
                </div>
            </form>
        </section>

    </section>

    <!-- change phone password  -->
    <changePhonePassword :showPhonePass="showPhonePass" />

    <!-- change password old pass  -->
    <changePass :changePass="changePass" />

    <Toast />

</template>

<script>
import changePhonePassword from '@/components/dashboard/profile/changePhonePass.vue';
import changePass from '@/components/dashboard/profile/changePassOldPass.vue'
import Dropdown from 'primevue/dropdown';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            coverImage : '',
            PicImage : '',
            ifUploaded : true,
            ifUploaded2: true,
            name : '',
            activity : null,
            email : '',
            phone : '',
            showPhonePass : false,
            changePass : false ,
            region : null,
            city : null,
            city_id : null,
            region_id : null,
            cities : [],
            disabled : false
            
        }
    },
    methods:{
        chooseCover(event){
            const file = event.target.files[0];
            this.$refs.coverImg.src = URL.createObjectURL(file) ;
            this.ifUploaded = false ;
        },
        choosePic(event){
            const file = event.target.files[0];
            this.$refs.picImage.src = URL.createObjectURL(file);
            this.ifUploaded2 = false ;
        },
        // open phone password 
        openPhonePass(){
            if( this.showPhonePass === true || this.showPhonePass === false ){
                this.showPhonePass = !this.showPhonePass
            }
        },
        // open change pass dialog 
        openChangePass(){
            if( this.changePass === true || this.changePass === false ){
                this.changePass = !this.changePass
            }
        },
        // set region id 
        setRegionId(){
            this.region_id = this.region.id;
            this.getCities();
        },
        setCityId(){
            this.city_id = this.city.id ;
        }, 
        // get cities based on region id 
        async getCities(){
            const fd = new FormData();
            fd.append('region_id', this.region_id)
            await axios.post('region/cities', fd)
            .then( (res)=>{
                this.cities = res.data.data;
            } )
        },
        // update profile 
        async updateProfile(){
            const fd = new FormData(this.$refs.profileForm);
            fd.append('type', this.type);
            fd.append('city_id', JSON.parse((localStorage.getItem('profile'))).city.id);
            fd.append('region_id', JSON.parse((localStorage.getItem('profile'))).region.id);
            fd.append('company_id', JSON.parse((localStorage.getItem('profile'))).id);
            this.disabled = true ;
            const response = await this.$store.dispatch('updateProfile', fd);

            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;
                this.$store.dispatch('getCompanyProfile');

                localStorage.setItem('profile', this.profile );
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }
        }
    },
    computed:{
        profile(){
            return this.$store.state.profile ;
        },
        // PicImage(){
        //     return this.$store.state.profile.image ;
        // },
        // coverImage(){
        //     return this.$store.state.profile.banner ;
        // },
        regions(){
            return this.$store.state.regions;
        },

        // city(){
        //     return this.$store.state.city ;
        // },
        city_name(){
            return this.$store.state.city_name ;
        },
        // city_id(){
        //     return this.$store.state.city_id ;
        // },
        // region(){
        //     return this.$store.state.region ;
        // },
        region_name(){
            return this.$store.state.region_name ;
        },
        // region_id(){
        //     return this.$store.state.region_id ;
        // },
        type(){
            return this.$store.state.companyType ;
        },
        activities(){
            return this.$store.state.activites ;
        }
    },
    components:{
        changePhonePassword  ,
        Dropdown,
        Toast,
        changePass
    },
    mounted(){
        console.log(this.$store.state.city)
        this.PicImage = this.$store.state.profile.image;
        this.region = this.$store.state.region;
        this.region_id = this.$store.state.region_id;
        this.city = this.$store.state.city;
        this.city_id = this.$store.state.city_id;
        console.log(this.city_id)
        console.log(this.region_id)
    },
    created(){
        this.$store.dispatch('getCompanyProfile');
        this.$store.dispatch('getRegions');
        this.$store.dispatch('getCounntries');
        this.$store.dispatch('getActivities');
    },
    
}
</script>

<style lang="scss">
    .setting_form{
        background-color: #fff;
        border-radius: 8px;
        
        .p-dropdown{
            position: relative !important;
            top: 0;
            padding-right: 20px;
            padding-left: 20px;
            .p-dropdown-label{
                font-size: 12px;
                color: #c4c4c4;
                font-family: "Cairo", sans-serif !important;
            }
        }
        
        .cover{
            position: relative;
            border: 2px solid #9299B3;
            background-color: #F5F5F5;
            border-radius: 4px;
            padding: 25px 0;
            min-height: 150px;
        }
        .coverImage,.cover_image{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
        }
        .coverImage{
            z-index: 5;
            opacity: 0;
        }
        .cover_image{
            z-index: 4;
        }
        .pics{
            position: relative;
            .pic{
                position: relative;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: #F5F5F5;
                border: 2px solid #9299B3;
                transform: translate(-30%, -50%);
                z-index: 10;
            }
        }
    }
    .main_btn.info_btn{
        background-color: #949494 !important;
    }
    .main_btn.refuse{
        background-color: #E83636 !important;
    }
    .editPhone{
        position: absolute;
        left: 15px;
        top: 39px;
        color: #a0a0a0;
        font-size: 16px;
        cursor: pointer;
    }
</style>