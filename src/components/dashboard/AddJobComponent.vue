<template>
  <section id="addJob" class="pt-3 pb-3 px-3">
    <div>
      <h6 class="fw-bold mainColor"> {{ $t('dash.addJobTitle') }} </h6>
      <p class="grayColor fw-6"> يمكنك اضافة اعلان وظيفي من هنا </p>
    </div>

    <!-- form  -->
    <section class="addJobForm">
      <form>
        <div class="row">

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> المسمى الوظيفي </label>
              <input type="text" class="form-control job_form" placeholder="ادخل المسمى الوظيفي">
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
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> المجال الوظيفي </label>
              <select class="form-select job_form">
                <option value="" selected> اختر المجال الوظيفي </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> اسم التخصص </label>
              <select class="form-select job_form">
                <option value="" selected> اختر اسم التخصص </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> فئه الوظيفه </label>
              <select class="form-select job_form">
                <option value="" selected> الرحاء ادخال الوظيفه </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/gender.svg')" alt="">
              <label for=""> الجنس </label>
              <select class="form-select job_form">
                <option value="" selected> اختر نوع الجنس </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> المؤهل التعليمي </label>
              <select class="form-select job_form">
                <option value="" selected> الرحاء ادخال المؤهل المطلوب </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayBag.svg')" alt="">
              <label for=""> الخبرة </label>
              <select class="form-select job_form">
                <option value="" selected> الرجاء اختيار الخبره المطلوبه </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> المهام والمسئوليات </label>
              <input type="text" class="form-control job_form" placeholder="ادخل المهام والمسئوليات">
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayBorrow.svg')" alt="">
              <label for="">   الراتب  <span class="if_exist"> ان وجد* </span> </label>
              <input type="text" class="form-control job_form" placeholder="ادخل الراتب">
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayBag.svg')" alt="">
              <label for=""> المهارات </label>
              <select class="form-select job_form">
                <option value="" selected> الرجاء اختيار الخبره المطلوبه </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayBag.svg')" alt="">
              <label for=""> نسبة التطابق </label>
              <select class="form-select job_form">
                <option value="" selected> الرجاء اختيار الخبره المطلوبه </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayLocation.png')" alt="">
              <label for=""> المدينة </label>
              <select class="form-select job_form">
                <option value="" selected> الرجاء اختيار الخبره المطلوبه </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>


          <!-- google map stay  -->
          <div class="col-md-6 mb-3">
              <div class="position-relative flex-auto">

                  <label for="integeronly" class="label fw-bold block mb-2"> مكان الإقامة </label>
                  <input type="text" class="form-control job_form" v-model="address" @focus="googleMap=true" placeholder="الرجاء ادخال مكان الإقامة">
                  <!-- icon  -->
                  <div class="form_icon">
                    <img :src="require('@/assets/imgs/grayLocation.png')" alt="">
                  </div>
                  <div class="form_icon2">
                    <img :src="require('@/assets/imgs/location.svg')" alt="">
                  </div>

              </div>

                <!-- google map modal  -->      
              <Dialog v-model:visible="googleMap" modal :style="{ width: '50vw' }">
                    <GMapMap
                        :center="locations"
                        :zoom="11"
                        map-type-id="terrain"
                        style="width: 100vw; height: 900px"
                    >
                      <GMapAutocomplete
                          placeholder="This is a placeholder"
                          @place_changed="onPlaceChanged"
                        >
                      </GMapAutocomplete>
                    <GMapMarker
                      :position="locations"
                      :clickable="true"
                      :draggable="true"
                        @mouseover="onMarkerDragEnd($event)"
                    />
                    </GMapMap>

              </Dialog>
          </div>


          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> الشهادات المهنية </label>
              <select class="form-select job_form">
                <option value="" selected> الرجاء اختيار الشهادات المهنية </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <label for=""> شروط الوظيفة </label>
              <input type="text" class="form-control job_form" placeholder="ادخل شروط الوظيفة">
            </div>
          </div>

          <!-- birthday  -->
          <div class="col-md-6 mb-3">
            <div class="position-relative flex-auto">

                <label for="integeronly" class="label fw-bold block mb-2"> تاريخ الميلاد </label>
                <Calendar v-model="date" class="d-block" placeholder="الرجاء ادخال تاريخ الميلاد" />

                <!-- icon  -->
                <div class="inputIcon">
                  <img :src="require('@/assets/imgs/calendar-2.svg')" alt="">
                </div>

            </div>
          </div>
          <!-- birthday  -->
          <div class="col-md-6 mb-3">
            <div class="position-relative flex-auto">

                <label for="integeronly" class="label fw-bold block mb-2"> تاريخ الميلاد </label>
                <Calendar v-model="date2" class="d-block" placeholder="الرجاء ادخال تاريخ الميلاد" />

                <!-- icon  -->
                <div class="inputIcon">
                  <img :src="require('@/assets/imgs/calendar-2.svg')" alt="">
                </div>

            </div>
          </div>
              


          


        </div>
        <div class="flex_center" v-if="isAdd==true">
          <button class="main_btn pt-2 pb-2 px-3 w-25"> اضافة </button>
        </div>
        <div class="flex_center" v-if="isEdit==true">
          <button class="main_btn pt-2 pb-2 px-3 w-25"> حفظ التعديلات </button>
          <button class="main_btn cancel pt-2 pb-2 px-3 w-25 mx-3"> تراجع </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>

import Dialog from 'primevue/dialog';
import Calendar from 'primevue/calendar';

export default {
  data(){
    return{
      locations:
      {
          lat: 0,
          lng: 0
      },
      currentLocation: {},
      address: '',
      googleMap : false,
      date : null,
      date2: null,

      // check if this edit or add 
      isEdit : false,
      isAdd : false
    }
  },
  methods:{

        // get current location  
        geolocation() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.locations = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        },

        // get new value after dragged 
        onMarkerDragEnd(event) {
            // get new lat lang value 
            const newLat = event.latLng.lat()
            const newLng = event.latLng.lng()
            this.locations = {
                lat: newLat,
                lng: newLng
            }

            // get format_address 
            const latLng = event.latLng
            const geocoder = new window.google.maps.Geocoder()
            geocoder.geocode({ location: latLng }, (results, status) => {
                if (status === 'OK') {
                    this.address = results[0].formatted_address
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status)
                }
            })

        },

        onPlaceChanged(place) {
          if (place.geometry) {
            this.locations = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            this.address = place.formatted_address;
          }
        }
        
  },
  components:{
    Dialog,
    Calendar
  },  
  mounted(){
    this.geolocation();
    if( this.$route.fullPath.includes('editJob')){
      this.isEdit = true;
    }
    if( this.$route.fullPath.includes('addJob') ){
      this.isAdd = true;
    }
  }
}
</script>

<style lang="scss">
  .if_exist{
    font-weight: 500;
    font-size: 10px;
    color: #E83636;
  }
  .addJobForm{
    background-color: #fff;
    padding: 15px 18px;
    border-radius: 7px;
    label{
      color:#343333;
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .job_form{
      position: relative;
      background-color: #F8F8F8;
      border: 1px solid #E2E8F0;
      color:#9F9F9F;
      font-size: 12px;
      padding: 12px 30px;
      &::placeholder{
        color:#9F9F9F;
        font-size: 12px;
      }
    }
    .form_icon{
      position: absolute;
      z-index: 9;
      top: 37px;
      right: 5px;
    }
    .form_icon2{
      position: absolute;
      z-index: 9;
      top: 37px;
      left: 9px;

    }
  }


  
</style>

<style>
   .form-select{
        background-position: left 0.75rem center !important;
  }
  .vue-map{
    width: 100% !important;
    height: 72vh !important;
    position: relative;
    overflow: hidden;
  }
  .pac-container{
    z-index: 9999 !important;
  }
  .vue-map-hidden{
    position: absolute  !important;
    top: 92px !important;
    right: 50% !important;
    transform: translate(50%, 50%) !important;
  }
  .p-inputtext{
    position: relative !important;
      background-color: #F8F8F8 !important;
      border: 1px solid #E2E8F0 !important;
      color:#9F9F9F !important;
      font-size: 12px !important;
      padding: 12px 35px !important;
      font-family: "Cairo", sans-serif !important;

  }
  .p-calendar .p-inputtext{
    width:100% !important;
  }
</style>