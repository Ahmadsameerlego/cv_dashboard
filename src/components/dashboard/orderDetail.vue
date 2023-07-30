<template>
  <section id="order_details" class="pt-2 pb-2 px-3">
    <h6 class="mainColor fw-bold">تفاصيل الوظيفة</h6>

    <!-- details  -->
    <section class="details mt-4">
      <div class="row orders_cards">
        <div class="col-md-8 mb-2">
          <!-- main info  -->
          <section class="single_order pt-4 pb-4 px-4">
            <div class="d-flex">
              <!-- image  -->
              <div class="order_image">
                <img :src="require('@/assets/imgs/logo.png')" alt="" />
              </div>
              <!-- details  -->
              <div class="order_details mx-3">
                <h6 class="fw-bold mb-3">frontend developer</h6>
                <div class="d-flex align-items-baseline">
                  <img :src="require('@/assets/imgs/bag.svg')" alt="" />
                  <p class="fw-6 mx-2">دوام كامل</p>
                </div>
              </div>

              <!-- abs values  -->
              <div class="abs">
                <!-- date  -->
                <div class="date d-flex align-items-center">
                  <div class="grayColor d-flex align-items-baseline">
                    <img :src="require('@/assets/imgs/clock.svg')" alt="" />
                    <p class="mx-1">تاريخ الانتهاء :</p>
                  </div>
                  <p class="fw-6">11 - 2 -2023</p>
                </div>
              </div>
            </div>
          </section>

          <!-- job requirements  -->
          <section class="profile_card mb-3 mt-3">
            <!-- card header  -->
            <div class="card_header">
              <p class="header_title">متطلبات الوظيفة:</p>
            </div>
            <!-- card content  -->
            <div class="card_content pt-3">
              <!-- bottom  -->
              <div class="d-flex justify-content-between flex-wrap">
                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/redText.svg')" alt="" />
                    <span class="mx-2">المؤهل :</span>
                  </p>
                  <p class="fw-bold">بكالوريوس حاسبات ومعلومات</p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/redBag.svg')" alt="" />
                    <span class="mx-2">الخبرة :</span>
                  </p>
                  <p class="fw-bold">2 - 5 سنوات</p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/redGender.svg')" alt="" />
                    <span class="mx-2">الجنس :</span>
                  </p>
                  <p class="fw-bold">الهندسه البرمجيه</p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <span class="mx-2">الفئة :</span>
                  </p>
                  <p class="fw-bold">سعودي</p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/timer.svg')" alt="" />
                    <span class="mx-2">نوع الوظيفة :</span>
                  </p>
                  <p class="fw-bold">شركه اوامر الشبكه</p>
                </div>

                <!-- single feature  -->
                <div class="mb-2">
                  <p class="grayColor fw-6 mb-1">
                    <img :src="require('@/assets/imgs/redClock.svg')" alt="" />
                    <span class="mx-2">الراتب :</span>
                  </p>
                  <p class="fw-bold">UI_UX Designer مصمم واجهات</p>
                </div>
              </div>
            </div>
          </section>


          <!-- own orders interaction  -->
          <div class="d-flex justify-content-evenly" v-if="ownOrders==false">
            <button class="main_btn pt-2 pb-2 w-25" @click="goEditJob"> تعديل </button>
            <button class="main_btn deleteOrder pt-2 pb-2 w-25" @click="deleteORder=true"> حذف </button>
          </div>
        </div>

        <div class="col-md-4 mb-2">
          <!-- consitions  -->
          <section class="profile_card mb-2">
            <!-- card header  -->
            <div class="card_header">
              <p class="header_title">شروط الوظيفة:</p>
            </div>
            <!-- content  -->
            <div class="card_content pt-3">
              <p class="fs-14">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam, animi.
              </p>
            </div>
          </section>
          <!-- responsabilites  -->
          <section class="profile_card mb-2">
            <!-- card header  -->
            <div class="card_header">
              <p class="header_title">المهام والمسئوليات::</p>
            </div>
            <!-- content  -->
            <div class="card_content pt-3">
              <ul class="responsabilites">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque.
                </li>
              </ul>
            </div>
          </section>
          <!-- skills  -->
          <section class="profile_card">
            <!-- card header  -->
            <div class="card_header">
              <p class="header_title">المهارات:</p>
            </div>
            <!-- content  -->
            <div class="card_content pt-3">
              <ul class="skills">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque.
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
          <h6 class="mainColor fw-bold">المقدمين للوظيفه</h6>
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
        <div class="row">
          <!-- single card  -->
          <div class="col-md-6 mb-3">
            <section class="best_match position-relative px-3 pt-3 pb-3">
              <!-- card header  -->
              <div
                class="card_header d-flex justify-content-between align-items-center"
              >
                <span class="fw-bold fs-16 mainColor"> احمد سمير </span>
                <router-link to="/profile/1" class="grayColor fw-6 fs-13">
                  عرض البروفايل
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
                    <span> السمى الوظيفي </span>
                  </p>
                  <p class="fw-6 fs-16">مهندس برمجيات</p>
                </div>

                <!-- single feature  -->
                <div>
                  <p class="grayColor mb-1 fw-6">
                    <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                    <span> الخبرة </span>
                  </p>
                  <p class="fw-6 fs-16">2-5 سنوات</p>
                </div>

                <!-- single feature  -->
                <div>
                  <p class="grayColor mb-1 fw-6">
                    <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                    <span> المدينة </span>
                  </p>
                  <p class="fw-6 fs-16">الرياض</p>
                </div>

                <!-- single feature  -->
                <div>
                  <p class="grayColor mb-1 fw-6">
                    <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                    <span> الفئة </span>
                  </p>
                  <p class="fw-6 fs-16">سعودي</p>
                </div>

                <!-- single feature  -->
                <div>
                  <p class="grayColor mb-1 fw-6">
                    <img :src="require('@/assets/imgs/briefcase.svg')" alt="" />
                    <span> المؤهل التعليمي </span>
                  </p>
                  <p class="fw-6 fs-16">بكالريوس حاسبات ومعلومات</p>
                </div>
              </div>

              <!-- percentage  -->
              <div class="main_btn iden_percent felx_center pt-2 pb-2 px-2">
                مطابق بنسبة ٩٠٪
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>

    
  </section>

  <!-- filter  -->
  <Dialog v-model:visible="ordersFilter" modal :style="{ width: '50vw' }">
    <h5 class="fw-6 mainColor text-center mb-2">فلتر العرض</h5>

    <p class="text-center">هذا النص هو مثال على نص يمكن ان يستبدل</p>

    <form class="filter_form addJobForm">
      <div class="form-group mb-2">
        <input type="checkbox" id="all" name="" />
        <label for="all" class="mx-2"> الكل </label>
      </div>

      <div class="row">
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
        <button class="main_btn w-50 pt-2 pb-2">التالي</button>
      </div>
    </form>
  </Dialog>

  <!-- delete order job  -->
  <Dialog v-model:visible="deleteORder" modal :style="{ width: '35vw' }">
    <h5 class="fw-6 mainColor text-center mb-2">حذف الاعلان</h5>

    <p class="text-center">هل انت متاكد من رغبتك بحذف اعلان الوظيفه الخاصه بك</p>

   <img class="deleteIcon" src="https://s3-alpha-sig.figma.com/img/96ec/a8e9/9d502c82d1acb4cfea0742335cbae553?Expires=1691366400&Signature=NOyehLr8~JhUlVJ5~iM2xYZH7GwmjQK3~mYue4Ajx8Oyw4TalLalpBeBqXyTvaTrkqUJSASfZGb4xCVIVdEIgigbLPrALNwpRQKorib1~5TaQltf~1-e6ZoQjTVxSMjtUsxHUMFdpWedLxhmqDRIxx0OfSUbAJ-R~ZXXkDa~GdalzC7APQIaHujSEqkayHmIzLmf4yxGZ-y15on1UFbBhCDtjMPlt1-xvojdO83JOnE-PN1KVf~ZUKyHNYPYpBZXpKzWWZqvS2qFNaGTaANg5Khi3~aaYx9iP8tDOR5ZI~QnPfD~kqRHlR0B-iw8aB1bexFRQCmSz6ICKU5t4Z2mnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
  
    <div class="flex_between mt-4">
      <button class="main_btn pt-2 pb-2  w-50"> حذف </button>
      <button class="main_btn cancel pt-2 pb-2 w-50 mx-2" @click="deleteORder=false"> تراجع </button>
    </div>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';

export default {
  data() {
    return {
      ordersFilter: false,
      ownOrders : true,
      deleteORder : false
    };
  },
  components:{
    Dialog
  },
  methods:{
    goEditJob(){
      this.$router.push('/editJob');
    }
  },  
  mounted(){
        if( this.$route.fullPath.includes('ownDetails') ){
            this.ownOrders = false ;
        }
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