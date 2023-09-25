<template>
  <section id="order_details" class="pt-2 pb-2 px-3">
    <h6 class="mainColor fw-bold"> 
      {{ $t('details.title')  }}
    </h6>

    <!-- details  -->
    <section class="details mt-4">
      <div class="row orders_cards">
        <div class="col-md-8 mb-2">
          <!-- main info  -->
          <section class="single_order pt-4 pb-4 px-4">
            <div class="d-flex">
              <!-- image  -->
              <div class="order_image">
                <img :src="company.image" alt="" />
              </div>
              <!-- details  -->
              <div class="order_details mx-3">
                <h6 class="fw-bold mb-3">{{ jobDetails.job_name  }}</h6>
                <div class="d-flex align-items-baseline">
                  <img :src="require('@/assets/imgs/bag.svg')" alt="" />
                  <p class="fw-6 mx-2"> {{   type.title }} </p>
                </div>
              </div>

              <!-- abs values  -->
              <div class="abs">
                <!-- date  -->
                <div class="date d-flex align-items-center">
                  <div class="grayColor d-flex align-items-baseline">
                    <img :src="require('@/assets/imgs/clock.svg')" alt="" />
                    <p class="mx-1">
                      {{  $t('order.date')  }}   
                    :</p>
                  </div>
                  <p class="fw-6">{{   jobDetails.expire_at }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- job requirements  -->
          <section class="profile_card mb-3 mt-3">
            <!-- card header  -->
            <div class="card_header">
              <p class="header_title"> {{ $t('details.req') }} :</p>
            </div>
            <!-- card content  -->
            <div class="card_content pt-3">
              <!-- bottom  -->
              <div class="d-flex justify-content-between flex-wrap">
                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/redText.svg')" alt="" />
                    <span class="mx-2"> {{ $t('details.qual')  }} :</span>
                  </p>
                  <p class="fw-bold"> {{  qualification.title  }} </p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/redBag.svg')" alt="" />
                    <span class="mx-2"> {{ $t('search.exper') }} :</span>
                  </p>
                  <p class="fw-bold"> {{  experience.title  }} سنوات</p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/redGender.svg')" alt="" />
                    <span class="mx-2"> {{ $t('job.gender')  }} :</span>
                  </p>
                  <p class="fw-bold"> {{  jobDetails.gender  }} </p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <span class="mx-2"> {{  $t('details.field')  }} :</span>
                  </p>
                  <p class="fw-bold"> {{   category.title }} </p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/timer.svg')" alt="" />
                    <span class="mx-2"> {{ $t('details.type') }} :</span>
                  </p>
                  <p class="fw-bold">{{   type.title }}</p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/redClock.svg')" alt="" />
                    <span class="mx-2"> {{  $t('job.salary')  }} :</span>
                  </p>
                  <p class="fw-bold"> {{   jobDetails.salary }} </p>
                </div>
              </div>
            </div>
          </section>


          <!-- own orders interaction  -->
          <div class="d-flex justify-content-evenly" v-if="ownOrders==false">
            <button class="main_btn pt-2 pb-2 w-25" @click="goEditJob(this.$route.params.id)"> {{ $t('details.edit')  }} </button>
            <button class="main_btn deleteOrder pt-2 pb-2 w-25" @click="deleteORder=true"> {{  $t('emp.del')  }} </button>
          </div>
        </div>

        <div class="col-md-4 mb-2">
          <!-- consitions  -->
          <section class="profile_card mb-2">
            <!-- card header  -->
            <div class="card_header">
              <p class="header_title"> {{ $t('details.condition')  }} :</p>
            </div>
            <!-- content  -->
            <div class="card_content pt-3">
              <p class="fs-14">
                {{  jobDetails.conditions  }}
              </p>
            </div>
          </section>
          <!-- responsabilites  -->
          <section class="profile_card mb-2">
            <!-- card header  -->
            <div class="card_header">
              <p class="header_title"> {{ $t('job.res')  }} :</p>
            </div>
            <!-- content  -->
            <div class="card_content pt-3">
              <ul class="responsabilites">
                <li>
                  {{ jobDetails.tasks }}
                </li>
               
              </ul>
            </div>
          </section>
          <!-- skills  -->
          <section class="profile_card">
            <!-- card header  -->
            <div class="card_header">
              <p class="header_title"> {{  $t('search.skills')  }} :</p>
            </div>
            <!-- content  -->
            <div class="card_content pt-3">
              <ul class="skills">
                <li v-for="skill in skills" :key="skill.id">
                  {{ skill.title }}
                </li>
                
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>

    <!-- job appliers  -->
    <section class="job_appliers mt-3" v-if="ownOrders==true">
      <div class="flex_between">
        <div>
          <h6 class="mainColor fw-bold"> {{  $t('details.det')  }} </h6>
          <p class="fw-6 grayColor">
            يتم عرض هنا جميع طلبات التوظيف التي تم التقديم عليها من الاعلي
            اطابقا للاقل
          </p>
        </div>
        <div>
          <button class="main_btn px-2" @click="ordersFilter = true">
            <img :src="require('@/assets/imgs/Frame.svg')" width="20" alt="" />
          </button>
        </div>
      </div>

      <!-- appliers cards  -->
      <section class="matches_cards mt-2" >

        <section>
          <div class="row" v-if="appliers.length===0">
            <div class="col-md-6 mb-2" v-for="skeleton in 2" :key="skeleton">
                <Skeleton  height="6rem"></Skeleton>
            </div>
          </div>

          <div class="row" v-else>
            <!-- single card  -->
            <div class="col-md-6 mb-3" v-for="applay in appliers" :key="applay.id">
              <section class="best_match position-relative px-3 pt-3 pb-3">
                <!-- card header  -->
                <div
                  class="card_header d-flex justify-content-between align-items-center"
                >
                  <span class="fw-bold fs-16 mainColor"> {{ applay.user.name }} </span>
                  <router-link :to="'/profile/'+applay.id" class="grayColor fw-6 fs-13">
                    {{  $t('search.show')  }}
                    <i class="fa-solid fa-chevron-left"></i>
                  </router-link>
                </div>

                <!-- card content  -->
                <div
                  class="card_content d-flex justify-content-between flex-wrap"
                >
                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                      <span> {{  $t('search.jobName')  }} </span>
                    </p>
                    <p class="fw-6 fs-16">
                      {{ applay.user.job_title }}
                    </p>
                  </div>

                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                      <span> {{  $t('search.exper')  }} </span>
                    </p>
                    <p class="fw-6 fs-16">
                      {{ applay.user.user_experience }}
                    </p>
                  </div>

                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                      <span> {{  $t('search.city')  }} </span>
                    </p>
                    <p class="fw-6 fs-16">
                      {{ applay.user.city }}
                    </p>
                  </div>

                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                      <span> {{ $t('search.type')  }} </span>
                    </p>
                    <p class="fw-6 fs-16">سعودي</p>
                  </div>

                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                      <span> {{  $t('search.qual')  }} </span>
                    </p>
                    <p class="fw-6 fs-16">
                      {{ applay.user.qualification }}
                    </p>
                  </div>
                </div>

                <!-- percentage  -->
                <div class="main_btn iden_percent felx_center pt-2 pb-2 px-2">
                  مطابق بنسبة {{  applay.accept_ratio  }} ٪
                </div>
              </section>
            </div>
          </div>
        </section>
        

        
      </section>
    </section>

    
  </section>

  <!-- filter  -->
  <Dialog v-model:visible="ordersFilter" modal :style="{ width: '50vw' }">
    <h5 class="fw-6 mainColor text-center mb-2"> {{  $t('order.filter')  }} </h5>

    <p class="text-center">هذا النص هو مثال على نص يمكن ان يستبدل</p>

    <form class="filter_form addJobForm">
      <div class="form-group mb-2">
        <input type="checkbox" id="all" name="" />
        <label for="all" class="mx-2"> {{ $t('order.all') }} </label>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/clock.svg')" alt="">
              <label for=""> {{ $t('details.type')  }} </label>
              <select class="form-select job_form">
                <option value="" selected> اختر نوع الوظيفة </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/clock.svg')" alt="">
              <label for=""> نوع الوظيفة </label>
              <select class="form-select job_form">
                <option value="" selected> اختر نوع الوظيفة </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/clock.svg')" alt="">
              <label for=""> نوع الوظيفة </label>
              <select class="form-select job_form">
                <option value="" selected> اختر نوع الوظيفة </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/clock.svg')" alt="">
              <label for=""> نوع الوظيفة </label>
              <select class="form-select job_form">
                <option value="" selected> اختر نوع الوظيفة </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/clock.svg')" alt="">
              <label for=""> نوع الوظيفة </label>
              <select class="form-select job_form">
                <option value="" selected> اختر نوع الوظيفة </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
        </div>
      </div>
      

      <div class="flex_center mt-4">
        <button class="main_btn w-50 pt-2 pb-2"> {{ $t('order.next') }} </button>
      </div>
    </form>
  </Dialog>

  <!-- delete order job  -->
  <Dialog v-model:visible="deleteORder" modal :style="{ width: '35vw' }">
    <h5 class="fw-6 mainColor text-center mb-2">{{ $t('details.delAd')  }}</h5>

    <p class="text-center">
      {{  $t('details.delDesc')  }}
    </p>

   <img class="deleteIcon" :src="require('@/assets/imgs/sad.gif')" alt="">
  
    <div class="flex_between mt-4">

      <button class="main_btn pt-2 pb-2  w-50" @click.prevent="detelte" :disabled="disabled"> 
          <span v-if="!disabled">{{ $t('emp.del')  }} </span>
          <div class="spinner-border" role="status" v-if="disabled">
              <span class="visually-hidden">Loading...</span>
          </div>
      </button>
      <button class="main_btn cancel pt-2 pb-2 w-50 mx-2" @click="deleteORder=false"> {{  $t('emp.back')  }} </button>
    </div>
  </Dialog>

  <Toast />
</template>


<script>
import Dialog from 'primevue/dialog';
import axios from 'axios';
import Toast from 'primevue/toast';
import Skeleton from 'primevue/skeleton';

export default {
  data() {
    return {
      ordersFilter: false,
      ownOrders : true,
      deleteORder : false,
      jobDetails : {},
      company : {},
      skills : [],
      disabled : false,
      qualification : {},
      experience : {},
      category : {},
      type : {},
      appliers : [],
      showAppliers : false
    };
  },
  components:{
    Dialog,
    Toast,
    Skeleton
  },
  methods:{
    goEditJob(id){
      this.$router.push('/editJob');
      localStorage.setItem('ad_id', id);
    },
    // get job details  
    async getJobDetails(){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const fd = new FormData();
      fd.append('advertisement_id',this.$route.params.id )
      await axios.post('company/advertisements/show', fd, {headers })
      .then( (res)=>{
        this.jobDetails = res.data.data ;
        this.company = res.data.data.company ;
        this.qualification = res.data.data.qualification ;
        this.experience = res.data.data.experience ;
        this.category = res.data.data.category ;
        this.type = res.data.data.type ;
        this.skills = res.data.data.skills ;
      } )
    },
    // delete job 
    async detelte(){
      this.disabled = true ;
      const fd = new FormData();
      fd.append('advertisement_id', this.$route.params.id);

      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      await axios.post('company/advertisements/delete', fd , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
          this.disabled = false ;
          setTimeout(() => {
            this.$router.push('/settings')
          }, 2000);
        }else{
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
          this.disabled = false ;
        }
      } )
    },
    // get job advertisements appliers 
    async getJobAppliers(){
      const fd = new FormData();
      fd.append('advertisement_id', this.$route.params.id);

      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.post('company/job-applications/users', fd , {headers})
      .then( (res)=>{
        this.appliers = res.data.data ;
        if( res.data.data.length > 0 ){
          this.showAppliers = true ;
        }
      } )
    }
  },  
  mounted(){
        if( this.$route.fullPath.includes('ownDetails') ){
            this.ownOrders = false ;
        }
        this.getJobDetails();
        setTimeout(() => {
          this.getJobAppliers();
        }, 1000);
    }
};
</script>

<style>
.iden_percent {
  position: absolute !important;
  bottom: 10px;
  left: 10px;
  width: 120px;
}
.main_btn.deleteOrder{
  background-color: #E83636 !important;
}
.main_btn.cancel{
  background-color: #D7D7D7 !important;
  color:#333;
}
.deleteIcon{
  width:25%;
  margin:auto;
  display: flex;
}
</style>