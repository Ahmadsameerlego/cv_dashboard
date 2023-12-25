<template>
  <section id="addJob" class="pt-3 pb-3 px-3">
    <div>
      <h6 class="fw-bold mainColor"> {{ $t('dash.addJobTitle') }} </h6>
      <p class="grayColor fw-6"> {{  $t('job.desc')  }} </p>
    </div>

    <!-- form  -->
    <section class="addJobForm" v-if="isSub==1">
      <form @submit.prevent="addAdvertisement" ref="addAdvsForm">
        <div class="row">

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> {{ $t('search.jobName')  }} </label>
              <input type="text" class="form-control job_form" :placeholder="$t('job.namePlace')"  v-model="job_name" name="job_name">
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group  position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/clock.svg')" alt="">
              <label for=""> {{  $t('search.jobType')  }} </label>


              <Dropdown v-model="selectedActivity"  :options="activities" filter optionLabel="title" :placeholder="$t('job.chooseType')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.title }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.title }}</div>
                    </div>
                </template>
              </Dropdown>

            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> المجال الوظيفي </label>
              <Dropdown v-model="selectedEmp" ref="empRef"    :options="mergedOptions" filter optionLabel="title" :placeholder="$t('job.chooseEmp')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.title }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.title }}</div>
                    </div>
                </template>

                <template >
                  <div class="flex align-items-center">
                    <div>اخرى</div>
                  </div>
                </template>
              </Dropdown>
              
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> {{ $t('job.name')  }} </label>
              

              <Dropdown v-model="selectedSpec"  :options="specs" filter optionLabel="title" :placeholder="$t('job.chooseName')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.title }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.title }}</div>
                    </div>
                </template>
              </Dropdown>

            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> {{ $t('job.cat')  }} </label>

              <Dropdown v-model="selectedCat"  :options="cats" optionLabel="title" :placeholder="$t('job.chooseCat')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.title }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.title }}</div>
                    </div>
                </template>
              </Dropdown>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/gender.svg')" alt="">
              <label for=""> {{  $t('job.gender')  }} </label>

              <Dropdown v-model="selectedGender"  :options="genders" optionLabel="title" :placeholder="$t('job.chooseGender')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.title }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.title }}</div>
                    </div>
                </template>
              </Dropdown>


            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> {{  $t('search.qual')  }} </label>

              <Dropdown v-model="selectedQual"  :options="quals" filter optionLabel="title" :placeholder="$t('job.chooseQual')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.title }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.title }}</div>
                    </div>
                </template>
              </Dropdown>

            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayBag.svg')" alt="">
              <label for=""> {{ $t('search.exper') }} </label>
             
              <Dropdown v-model="selectedExper"  :options="expers" filter optionLabel="title" :placeholder="$t('job.chooseExper')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.title }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.title }}</div>
                    </div>
                </template>
              </Dropdown>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/book.svg')" alt="">
              <label for=""> {{  $t('job.res')  }} </label>
              <!-- <input type="text" class="form-control job_form" :placeholder="$t('job.resPlace')" name="tasks" v-model="tasks"> -->
              <textarea name="tasks" id="" cols="30" class="form-control job_form" :placeholder="$t('job.resPlace')"   v-model="tasks"></textarea>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayBorrow.svg')" alt="">
              <label for="">   {{  $t('job.salary')  }}  <span class="if_exist"> {{ $t('job.ifExist') }}* </span> </label>
              <input type="text" class="form-control job_form" placeholder="ادخل الراتب" v-model="salary" name="salary">
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayBag.svg')" alt="">
              <label for=""> {{  $t('search.skills')  }} </label>

              <!-- <select class="form-select job_form">
                <option value="" selected> {{  $t('job.chooseSkill')  }} </option>
                <option value="1" > 1 </option>
                
              </select> -->

              <MultiSelect v-model="selectedSkill" :options="skills" filter optionLabel="title" :placeholder="$t('search.skills')"
                :maxSelectedLabels="3" class="w-full md:w-20rem" />

                <div class="mt-2 mb-2 fs-13">
                  اذ لم تجد المهارات  <span class="text-danger" @click="addSkill=true" style="cursor:pointer">اضغط هنا</span>
              </div>
              <!-- add cer  Dialog -->
              <Dialog v-model:visible="addSkill" modal :style="{ width: '50vw' }">
                

                  <form ref="addSkills" @submit.prevent="addNewSkill" class="flex flex-wrap gap-3 p-fluid">

                    <h5 class="fw-bold text-center"> اضافة مهادة </h5>  


                    <div class="form-group mb-3">
                      <label for="">  اسم المهارة بالعربية </label>
                      <input type="text" class="form-control" name="title[ar]" v-model="cer_name_ar" placeholder=" الرجاء ادخال اسم المهارة بالعربية">
                    </div>

                    <div class="form-group">
                      <label for="">  اسم المهارة بالانجليزية </label>
                      <input type="text" class="form-control" name="title[en]" v-model="cer_name_en" placeholder="الرجاء ادخال اسم المهارة بالانجليزية">
                    </div>

                    <!-- submit  -->
                    <div class="mt-4">
                        <button class="main_btn  fs-5 w-75 mx-auto flex_center" :disabled="skill_disabled"> 
                            <span  v-if="!skill_disabled"> تأكيد </span>
                            <div class="spinner-border" role="status" v-if="skill_disabled">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button>
                    </div>


                    

                  </form>
              </Dialog>

            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayBag.svg')" alt="">
              <label for=""> {{ $t('job.percent')  }} </label>

              <Dropdown v-model="selectedRate"  :options="rates"  optionLabel="name" :placeholder="$t('job.choosePer')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.value }}</div>
                    </div>
                </template>
              </Dropdown>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <img class="form_icon" :src="require('@/assets/imgs/grayLocation.png')" alt="">
              <label for=""> {{  $t('search.city')  }} </label>

              <Dropdown v-model="selectedCity"  :options="cities" optionLabel="name" :placeholder="$t('job.chooseCity')" class="search_input w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
              </Dropdown>

            </div>
          </div>


          <!-- google map stay  -->
          <div class="col-md-6 mb-3">
              <div class="position-relative flex-auto">

                  <label for="integeronly" class="label fw-bold block mb-2"> {{ $t('job.place') }} </label>
                  <input type="text" class="form-control job_form" v-model="address"  @focus="googleMap=true" placeholder="الرجاء ادخال مكان الإقامة">
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
              <label for=""> {{  $t('job.cer')  }} </label>
              <!-- <select class="form-select job_form">
                <option value="" selected> {{ $t('job.cerDesc')  }} </option>
                <option value="1" > 1 </option>
                
              </select> -->
              <MultiSelect v-model="selectedCert" :options="certs" filter optionLabel="title" :placeholder="$t('job.cerDesc')"
                :maxSelectedLabels="3" class="w-full md:w-20rem" />

              

            </div>
            <div class="mt-2 mb-2 fs-13">
                اذ لم تجد الشهادات  <span class="text-danger" @click="addCer=true" style="cursor:pointer">اضغط هنا</span>
            </div>
            <!-- add cer  Dialog -->
            <Dialog v-model:visible="addCer" modal :style="{ width: '50vw' }">
              

                <form ref="addCert" @submit.prevent="addNewCertification" class="flex flex-wrap gap-3 p-fluid">

                  <h5 class="fw-bold text-center"> اضافة شهادة </h5>  


                  <div class="form-group mb-3">
                    <label for="">  اسم الشهادة بالعربية </label>
                    <input type="text" class="form-control" name="title[ar]" v-model="cer_name_ar" placeholder=" الرجاء ادخال اسم الشهادة بالعربية">
                  </div>

                  <div class="form-group">
                    <label for="">  اسم الشهادة بالانجليزية </label>
                    <input type="text" class="form-control" name="title[en]" v-model="cer_name_en" placeholder="الرجاء ادخال اسم الشهادة بالانجليزية">
                  </div>

                  <!-- submit  -->
                  <div class="mt-4">
                      <button class="main_btn  fs-5 w-75 mx-auto flex_center" :disabled="cer_disabled"> 
                          <span  v-if="!cer_disabled"> تأكيد </span>
                          <div class="spinner-border" role="status" v-if="cer_disabled">
                              <span class="visually-hidden">Loading...</span>
                          </div>
                      </button>
                  </div>


                   

                </form>
            </Dialog>


          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group position-relative">
              <label for=""> {{ $t('job.conditions') }} </label>
              <!-- <input type="text" class="form-control job_form" :placeholder="$t('job.conPlace')" v-model="conditions" name="conditions"> -->
              <textarea name="conditions" v-model="conditions" id="" cols="30" :placeholder="$t('job.conPlace')" class="form-control job_form" ></textarea>
            </div>
          </div>

          <!-- published_at  -->
          <div class="col-md-6 mb-3 calender_date">
            <div class="position-relative flex-auto">

                <label for="integeronly" class="label fw-bold block mb-2"> تاريخ بداية الاعلان </label>
                <Calendar v-model="published_at" name="published_at" class="d-block" placeholder="الرجاء ادخال تاريخ بداية الاعلان"  @change="show" />

                <!-- icon  -->
                <div class="inputIcon">
                  <img :src="require('@/assets/imgs/calendar-2.svg')" alt="">
                </div>

            </div>
          </div>
          <!-- expire_at  -->
          <div class="col-md-6 mb-3">
            <div class="position-relative flex-auto calender_date">

                <label for="integeronly" class="label fw-bold block mb-2"> تاريخ انتهاء الاعلان </label>
                <Calendar v-model="expire_at" name="expire_at" class="d-block" placeholder="الرجاء ادخال تاريخ انتهاء الاعلان" />

                <!-- icon  -->
                <div class="inputIcon">
                  <img :src="require('@/assets/imgs/calendar-2.svg')" alt="">
                </div>

            </div>
          </div>
                   

        </div>
        <div class="flex_center" v-if="isAdd==true" >
          <button class="main_btn pt-2 pb-2 px-3 w-25" :disabled="disabled">
            <span  v-if="!disabled"> اضافة </span>
            <div class="spinner-border" role="status" v-if="disabled">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        </div>
        <div class="flex_center" v-if="isEdit==true">
          <button class="main_btn pt-2 pb-2 px-3 w-25" 
            @click.prevent="editJob"
            :disabled="disabled2"
            >
             <span  v-if="!disabled2"> حفظ التعديلات </span>
              <div class="spinner-border" role="status" v-if="disabled2">
                <span class="visually-hidden">Loading...</span>
              </div>
          </button>
          <button class="main_btn cancel pt-2 pb-2 px-3 w-25 mx-3" type="button" @click="resetAd"> تراجع </button>
        </div>
      </form>
    </section>

    <section v-else-if="isSub==0">
      <Message severity="error">
            قم بتجديد الاشتراك
      </Message>
    </section>


  </section>

  <Toast />
</template>

<script>

import Dialog from 'primevue/dialog';
import Calendar from 'primevue/calendar';

import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import Toast from 'primevue/toast';
import Message from 'primevue/message';

import axios from 'axios';
export default {
  data(){
    return{
      addCer : false ,
      cer_disabled : false ,
      skill_disabled : false ,
      addSkill : false ,

      locations:
      {
          lat: 0,
          lng: 0
      },
      currentLocation: {},
      map_desc: '',
      address : '',
      googleMap : false,

      // check if this edit or add 
      isEdit : false,
      isAdd : false,

      selectedActivity: null,
      selectedEmp : null,
      selectedSpec : null,
      selectedQual : null,
      selectedExper : null,
      selectedSkill : [],
      selectedCert : [],
      genders : [
        {
          id : 1 ,
          title : 'ذكر',
          name : 'male'
        },
        {
          id : 2,
          title : 'انثى',
          name : 'female'
        },
        {
          id : 2 ,
          title : 'ذكور أو اناث',
          name : 'male_female'
        }
      ],
      selectedGender : null,
      selectedCat : null,
      selectedCity : null,
      job_name : '',
      tasks : '',
      salary : '',
      conditions : '',
      published_at : null,
      expire_at : null,
      rates : [
        {
          id :1 , 
          name : '10%',
          value : '10'
        },
        {
          id :2 , 
          name : '20%',
          value : '20'
        },
        {
          id :3 , 
          name : '30%',
          value : '30'
        },
        {
          id :4 , 
          name : '40%',
          value : '40'
        },
        {
          id :5 , 
          name : '50%',
          value : '50'
        },
        {
          id :6 , 
          name : '60%',
          value : '60'
        },
        {
          id :7 , 
          name : '70%',
          value : '70'
        },
        {
          id :8 , 
          name : '80%',
          value : '80'
        },
        {
          id :9 , 
          name : '90%',
          value : '90'
        },
        {
          id :10 , 
          name : '100%',
          value : '100'
        },
      ],
      selectedRate :null ,
      disabled : false,
      disabled2 : false ,
      // for edit 
      ad_id : null,
      ad : {},
      company : {},
      isSub : null,
      staticOption: { title: 'اخرى', value: 'other' },

      // skills : [],
      // certifications : []
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

            console.log(this.locations.lat)
            console.log(this.locations.lng)

        },

        onPlaceChanged(place) {
          if (place.geometry) {
            this.locations = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            this.address = place.formatted_address;
          }
        },

        // add advertisement 
        async addAdvertisement(){

          this.disabled = true ; 
          const fd = new FormData( this.$refs.addAdvsForm );

          function appendedIfSelected( formData, key , selectedValue ){
            if( selectedValue ){
              formData.append(key , selectedValue.id)
            }
          }

          appendedIfSelected(fd, 'employment_id', this.selectedEmp);
          appendedIfSelected(fd, 'specialization_id', this.selectedSpec);
          appendedIfSelected(fd, 'category_id', this.selectedCat);
          appendedIfSelected(fd, 'type_id', this.selectedActivity);
          appendedIfSelected(fd, 'qualification_id', this.selectedQual);
          appendedIfSelected(fd, 'experience_id', this.selectedExper);
          appendedIfSelected(fd, 'city_id', this.selectedCity);

          
          if( this.selectedRate ){
            fd.append('accept_rate', this.selectedRate.value)
          }
          if( this.address ){
            fd.append('map_desc', this.address)
          }
          if( this.locations ){
            fd.append('lat', this.locations.lat)
            fd.append('lng', this.locations.lng)
          }
          if( this.published_at ){
            const date = new Date(this.published_at);

            // Extract day, month, and year from the Date object
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based, so add 1
            const year = date.getFullYear();

            // Format the date components as a string in the desired format
            const formattedDate = `${day}-${month}-${year}`;

            fd.append('published_at', formattedDate)
          }
          if( this.expire_at ){
            const date = new Date(this.expire_at);

            // Extract day, month, and year from the Date object
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based, so add 1
            const year = date.getFullYear();

            // Format the date components as a string in the desired format
            const formattedDate = `${day}-${month}-${year}`
            fd.append('expire_at', formattedDate)
          }
          if( this.selectedGender ){
            fd.append('gender', this.selectedGender.name)
          }
          for (let i = 0; i < this.selectedSkill.length; i++) {
            appendedIfSelected(fd, `skills[${i}]`, this.selectedSkill[i]);
          }
          for (let i = 0; i < this.selectedCert.length; i++) {
            appendedIfSelected(fd, `certifications[${i}]`, this.selectedCert[i]);
          }

          const response = await this.$store.dispatch('addJobAdds', fd);
          if( response.success === true ){
            this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
            this.disabled = false ;
            setTimeout(() => {
              this.$router.push('/settings');
            }, 1000);

          }else{
            this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
            this.disabled = false ;
          }

          console.log(response)

        },

        // add certification 
        async addNewCertification(){
          this.cer_disabled = true ;
          const fd = new FormData(this.$refs.addCert);

          await axios.post('user/certifications/store', fd , {
            headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then( (res)=>{
            if( res.data.key === 'success' ){
              this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
              this.addCer = false ;
              setTimeout(() => {
                this.$store.dispatch('getCertifications');
              }, 1000);
            }else{
              this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
            }
            this.cer_disabled = false ;

          } )
          
        },
        // add skill 
        async addNewSkill(){
          this.skill_disabled = true ;
          const fd = new FormData(this.$refs.addSkills);

          await axios.post('user/skills/store', fd , {
            headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then( (res)=>{
            if( res.data.key === 'success' ){
              this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
              this.addSkill = false ;
              setTimeout(() => {
                this.$store.dispatch('getSkills');
              }, 1000);
            }else{
              this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
            }
            this.skill_disabled = false ;

          } )
          
        },

        // get ad details for edit 
        async getAdDetails(){
            const fd = new FormData;
            const token = localStorage.getItem('token');
            const headers = {
              Authorization: `Bearer ${token}`,
            };
            fd.append('advertisement_id', this.ad_id);
            await axios.post('company/advertisements/show', fd , {headers})
            .then( (res)=>{

              const response = res.data.data ;
              this.ad = response ;


              this.job_name = response.job_name ;
              this.address = response.map_desc ;
              this.map_desc = response.map_desc ;
              this.locations.lat = parseFloat(response.lat) ;
              this.locations.lng =  parseFloat(response.lng);
              this.salary = response.salary ;

              this.conditions = response.conditions ;
              this.expire_at = response.expire_at ;
              this.published_at = response.format_published_at ;
              this.selectedSkill = response.skills ;
              this.selectedCert = response.certifications ;

              // set employment here from backend 
              this.selectedEmp = response.employment ;

              this.selectedQual = response.qualification ;
              this.selectedExper = response.experience ;
              this.selectedCity = response.city ;
              this.selectedSpec = response.specialization ;
               
              this.selectedActivity = response.type ;
              this.selectedCat = response.category ;
              this.tasks = response.tasks ;

              for( let i = 0 ; i < this.rates.length ; i++ ){
                if ( response.accept_rate == this.rates[i].value ){
                  // console.log('the ratio is exist')
                  this.selectedRate = this.rates[i] ;
                }
              }


              if( response.gender == 'male' || response.gender == 'ذكوور' ){
                this.selectedGender = this.genders[0];
              }else if( response.gender == 'female' || response.gender == 'اناث' ){
                this.selectedGender = this.genders[1];
              }else if( response.gender == 'ذكور/اناث' || response.gender == 'male_female'){
                this.selectedGender = this.genders[2];
              }
              this.company = response.company;
            } )
        },

        // edit job ad 
        async editJob(){
          this.disabled2 = true ; 
          const fd = new FormData( this.$refs.addAdvsForm );
          fd.append('advertisement_id', localStorage.getItem('ad_id'))
          function appendedIfSelected( formData, key , selectedValue ){
            if( selectedValue ){
              formData.append(key , selectedValue.id)
            }
          }

          appendedIfSelected(fd, 'employment_id', this.selectedEmp);
          appendedIfSelected(fd, 'specialization_id', this.selectedSpec);
          appendedIfSelected(fd, 'category_id', this.selectedCat);
          appendedIfSelected(fd, 'type_id', this.selectedActivity);
          appendedIfSelected(fd, 'qualification_id', this.selectedQual);
          appendedIfSelected(fd, 'experience_id', this.selectedExper);
          appendedIfSelected(fd, 'city_id', this.selectedCity);

          if( this.selectedRate ){
            fd.append('accept_rate', this.selectedRate.value)
          }
          if( this.address ){
            fd.append('map_desc', this.address)
          }
          if( this.locations ){
            fd.append('lat', this.locations.lat)
            fd.append('lng', this.locations.lng)
          }
          if( this.published_at ){
            const date = new Date(this.published_at);

            // Extract day, month, and year from the Date object
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based, so add 1
            const year = date.getFullYear();

            // Format the date components as a string in the desired format
            const formattedDate = `${day}-${month}-${year}`;

            fd.append('published_at', formattedDate)
          }
          if( this.expire_at ){
            const date = new Date(this.expire_at);

            // Extract day, month, and year from the Date object
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based, so add 1
            const year = date.getFullYear();

            // Format the date components as a string in the desired format
            const formattedDate = `${day}-${month}-${year}`
            fd.append('expire_at', formattedDate)
          }
          if( this.selectedGender ){
            fd.append('gender', this.selectedGender.name)
          }
          for (let i = 0; i < this.selectedSkill.length; i++) {
            appendedIfSelected(fd, `skills[${i}]`, this.selectedSkill[i]);
          }
          for (let i = 0; i < this.selectedCert.length; i++) {
            appendedIfSelected(fd, `certifications[${i}]`, this.selectedCert[i]);
          }

          const response = await this.$store.dispatch('editJobAds', fd);
          if( response.success === true ){
            this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
            this.disabled2 = false ;
            this.getAdDetails();
            setTimeout(() => {
              this.$router.push(`/ownDetails/${this.ad_id}`)
            }, 1000);

          }else{
            this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
            this.disabled2 = false ;
          }

        },

        resetAd(){
          this.getAdDetails()
        }
        
  },
  computed:{
    mergedOptions() {
      // Combine array options with the static option
      return [...this.emps, this.staticOption];
    },
    activities(){
      return this.$store.state.activites ;
    },
    emps(){
      return this.$store.state.employments ;
    },
    specs(){
      return this.$store.state.specializations ;
    },
    quals(){
      return this.$store.state.qualifications ;
    },
    expers (){
      return this.$store.state.expers ;
    },
    skills(){
      return this.$store.state.skills ;
    },
    certs(){
      return this.$store.state.certifications ;
    },
    cats(){
      return this.$store.state.categories ;
    },
    cities(){
      return this.$store.state.cities; 
    },
    published(){
      const date = new Date(this.published_at);
      // Extract day, month, and year components
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().slice(-2);
      // Create the formatted date string
      return `${day}-${month}-${year}`;
    }
  },
  components:{
    Dialog,
    Calendar,
    Dropdown,
    MultiSelect,
    Toast,
    Message
  },  
  mounted(){
    this.geolocation();
    if( this.$route.fullPath.includes('editJob')){
      this.isEdit = true;
      // get add details for edit 
      this.getAdDetails()

    }
    if( this.$route.fullPath.includes('addJob') ){
      this.isAdd = true;
    }

    let user = JSON.parse( localStorage.getItem('user') );
    this.isSub = user.has_subscription ;

  },
  beforeMount(){
    // get ad_id for edit 
    this.ad_id = localStorage.getItem('ad_id');
  },
  created(){
    this.$store.dispatch('getActivities');
    this.$store.dispatch('getEmp');
    this.$store.dispatch('getSpec');
    this.$store.dispatch('getQual');
    this.$store.dispatch('getExp');
    this.$store.dispatch('getSkills');
    this.$store.dispatch('getCertifications');
    this.$store.dispatch('getCat');
    this.$store.dispatch('getCities');
  },
  watch:{
    
    selectedEmp(newVal) {
      if (newVal && newVal.value === 'other') {
        // Handle the "اخرى" option selection
        // For example, show a modal or perform a specific action
        console.log('Selected اخرى option');

         // Check if the ref exists and has the setAttribute method
        if (this.$refs.empRef && typeof this.$refs.empRef.setAttribute === 'function') {
          this.$refs.empRef.setAttribute('editable');
        } else {
          console.error('empRef not found or does not have setAttribute method');
        }
      }
    },
  }
  
}
</script>

<style lang="scss">
  .p-datepicker{
    .p-icon{
      transform: rotate(180deg) !important;
    }
  }
  #addJob{
    .p-dropdown{
      position: relative !important;
      width: 100%;
      top: 0;
      padding-right: 16px;
    }
    .p-dropdown-label{
      color: #a0a0a0;
      font-size: 14px;
      font-family: 'Cairo', sans-serif !important;
    }
    .p-multiselect{
      background: #f8f8f8 !important;
    }
    .p-calendar .p-inputtext{
      background: #f8f8f8;
      padding-left: 35px;
      padding-right: 37px;
      font-size: 14px;
      &::placeholder{
        color:#9f9f9f
      }
    }
  }
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
      top: 58%;
      right: 5px;
      width: 16px;
      height: 16px;
      object-fit: cover;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
  
  .p-calendar .p-inputtext{
    width:100% !important;
  }
</style>
<style scoped>
.p-inputtext{
    position: relative !important;
      background-color: #F8F8F8 !important;
      border: 1px solid #E2E8F0 !important;
      color:#9F9F9F !important;
      font-size: 12px !important;
      padding: 12px 35px !important;
      font-family: "Cairo", sans-serif !important;

  }
</style>