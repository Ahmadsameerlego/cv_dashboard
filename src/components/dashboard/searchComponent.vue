<template>
  <section id="search" class="px-3 pt-3 pb-3">
    <h6 class="fw-bold mainColor"> {{  $t('search.search')  }} </h6>
    <p class="fw-6 grayColor"> {{  $t('search.searchEmp')  }} </p>
    <form class="mt-3" @submit.prevent="search">

      <div class="row">
        <div class="col-md-4 mb-3 form-group ">
          <input type="text" class="form-control search_input  px-4" v-model="job_name" name="job_name" :placeholder="$t('search.jobName')" id="">

          
        </div>

        <div class="col-md-4 mb-3 search form-group">
          <!-- <input type="text" class="form-control search_input  px-4" name="" :placeholder="$t('search.spa')" id=""> -->
          <Dropdown v-model="selectedSpec" :options="specs" filter optionLabel="title" :placeholder="$t('search.spa')" class="search_input w-full md:w-14rem">
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

        <div class="col-md-4 mb-3 search form-group">
          <!-- <input type="text" class="form-control search_input  px-4" name="" :placeholder="$t('search.qual')" id=""> -->
          <Dropdown v-model="selectedQual" :options="quals" filter optionLabel="title" :placeholder="$t('search.qual')" class="search_input w-full md:w-14rem">
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

        <div class="col-md-4 mb-3 search form-group">
          <!-- <select class="form-select search_input  px-4" aria-label="Default select example">
            <option selected> {{  $t('search.jobType')  }} </option>
            <option value="1">One</option>
          </select> -->

          <Dropdown v-model="selectedActivity" @change="getTypeId" :options="activities" filter optionLabel="title" :placeholder="$t('search.jobType')" class="search_input w-full md:w-14rem">
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

        <div class="col-md-4 mb-3 search form-group">

          <MultiSelect v-model="selectedSkill" :options="skills" filter optionLabel="title" :placeholder="$t('search.skills')"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />


        </div>

        <div class="col-md-4 mb-3  search form-group">
          <!-- <select class="form-select search_input  px-4" aria-label="Default select example">
            <option selected> {{  $t('search.exper')  }} </option>
            <option value="1">One</option>
          </select> -->
          <Dropdown v-model="selectedExp" :options="expers" filter optionLabel="title" :placeholder="$t('search.exper')" class="search_input w-full md:w-14rem">
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

        <div class="col-md-4 mb-3 search form-group">
          

          <MultiSelect v-model="selectedCer" :options="certs" filter optionLabel="title" :placeholder="$t('search.cer')"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />


        </div>

        <div class="col-md-4 mb-3 search form-group">
          <!-- <select class="form-select search_input  px-4" aria-label="Default select example">
            <option selected> {{  $t('search.field')  }} </option>
            <option value="1">One</option>
          </select> -->
          <Dropdown v-model="selectedEmp" :options="emps" filter optionLabel="title" :placeholder="$t('search.field')" class="search_input  w-full md:w-14rem">
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

      <div class="flex_center mt-3">
        <button class="main_btn w-25 pt-2 pb-2 fs-16 fw-6" :disabled="disabled" > 
          <span v-if="!disabled">{{ $t('search.do')  }} </span>
          <div class="spinner-border" role="status" v-if="disabled">
              <span class="visually-hidden">Loading...</span>
          </div>
        </button>
      </div>
    </form>

    <!-- best match  -->
    <section class="best_match mt-4" v-if="showEmployee">
        <h6 class="fw-bold mainColor"> {{ $t('search.most')  }} </h6>
        <p class="fw-6 grayColor"> {{ $t('search.desc') }} </p>

        <section class="matches_cards mt-2">

          <section v-if="users.length>0">
            <div class="row" v-if="load">   
              <!-- single card  -->
              <div class="col-md-6 mb-3" v-for="user in users" :key="user.id">

                <section class="best_match px-3 pt-3 pb-3">

                  <!-- card header  -->
                  <div class="card_header d-flex justify-content-between align-items-center">
                    <span class="fw-bold fs-16 mainColor"> {{ user.name }} </span>
                    <router-link :to="'/profile/'+user.id" class="grayColor fw-6 fs-13"> 
                      {{  $t('search.show')  }}
                      <i class="fa-solid fa-chevron-left"></i>
                    </router-link>
                  </div>

                  <!-- card content  -->
                  <div class="card_content d-flex justify-content-between flex-wrap">
                    <!-- single feature  -->
                    <div>
                      <p class="grayColor mb-1 fw-6">
                        <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                        <span> {{  $t('search.jobName')  }} </span>
                      </p>
                      <p class="fw-6 fs-16">
                        {{user.job_title  }}
                      </p>
                    </div>

                    <!-- single feature  -->
                    <div>
                      <p class="grayColor mb-1 fw-6">
                        <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                        <span> {{ $t('search.skills')  }} </span>
                      </p>
                      <p class="fw-6 fs-16">
                       {{  user.experience  }}
                      </p>
                    </div>

                    <!-- single feature  -->
                    <div>
                      <p class="grayColor mb-1 fw-6">
                        <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                        <span> {{ $t('search.city') }} </span>
                      </p>
                      <p class="fw-6 fs-16">
                        {{ user.city }}
                      </p>
                    </div>

                    <!-- single feature  -->
                    <div>
                      <p class="grayColor mb-1 fw-6">
                        <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                        <span> {{ $t('search.type')  }} </span>
                      </p>
                      <p class="fw-6 fs-16">
                        {{  user.category  }}
                      </p>
                    </div>

                    
                    <!-- single feature  -->
                    <div>
                      <p class="grayColor mb-1 fw-6">
                        <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                        <span> {{  $t('search.qual')  }} </span>
                      </p>
                      <p class="fw-6 fs-16">
                        {{ user.qualification }}
                      </p>
                    </div>

                  </div>

                </section>

              </div>
            </div>

            <div class="row" v-else>
              <div class="col-md-6 mb-3" v-for="skeleton in 2" :key="skeleton">
                <Skeleton style="width:100%" height="4rem"></Skeleton>
              </div>
            </div>
          </section>
         

          <div v-else>
            <Message severity="error">
              لا يوجد موظفين مطابقين لخانات البحث
            </Message>
          </div>
        </section>

    </section>



  </section>
  <Toast />
</template>

<script>
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import Toast from 'primevue/toast';
import Message from 'primevue/message';
import Skeleton from 'primevue/skeleton';

export default {
  data(){
    return{
      selectedActivity: null,
      selectedSkill : [],
      selectedExp : null,
      selectedCer : [],
      selectedEmp : null,
      selectedSpec : null,
      selectedQual : null,
      job_name : '',
      disabled : false,
      // users : [],
      showEmployee : false,
      load : false
    }
  },
  computed:{
    activities(){
      return this.$store.state.activites ;
    },
    skills(){
      return this.$store.state.skills ;
    },
    expers (){
      return this.$store.state.expers ;
    },
    certs(){
      return this.$store.state.certifications ;
    },
    emps(){
      return this.$store.state.employments ;
    },
    quals(){
      return this.$store.state.qualifications ;
    },
    specs(){
      return this.$store.state.specializations ;
    },
    users(){
      return this.$store.getters.users ;
    }
  },
  components:{
    Dropdown,
    MultiSelect,
    Toast,
    Message,
    Skeleton
  },
  methods:{
     async search(){
      this.disabled= true ;
      const fd = new FormData();

      function appendedIfSelected( formData, key , selectedValue ){
        if( selectedValue ){
          formData.append(key , selectedValue.id)
        }
      }
      if( this.job_name !== '' ){
        fd.append('job_name', this.job_name);
      }
      
      appendedIfSelected(fd, 'filters[employment_id]', this.selectedEmp);
      appendedIfSelected(fd, 'filters[category_id]', this.selectedActivity);
      appendedIfSelected(fd, 'filters[qualification_id]', this.selectedQual);
      appendedIfSelected(fd, 'filters[specialization_id]', this.selectedSpec);
      appendedIfSelected(fd, 'filters[experience_id]', this.selectedExp);


      for (let i = 0; i < this.selectedSkill.length; i++) {
        appendedIfSelected(fd, `skills[${i}]`, this.selectedSkill[i]);
      }

      for (let i = 0; i < this.selectedCer.length; i++) {
        appendedIfSelected(fd, `certifications[${i}]`, this.selectedCer[i]);
      }

      const response = await this.$store.dispatch('search' , fd);
      console.log(response)

      if( response.success === true ){
        this.users = response.users;
        this.disabled = false ;
        this.showEmployee = true ;
        setTimeout(() => {
            this.load = true ;
        }, 1000);
        this.load = false ;
        this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
      }else{
        this.$toast.add({ severity: 'error', summary: response.messgae, life: 3000 });
        this.disabled = false ;
        this.showEmployee = true ;
      }
    }
  },
  created(){
    this.$store.dispatch('getActivities');
    this.$store.dispatch('getSkills');
    this.$store.dispatch('getExp');
    this.$store.dispatch('getCertifications');
    this.$store.dispatch('getEmp');
    this.$store.dispatch('getQual');
    this.$store.dispatch('getSpec');
  }
}
</script>

<style>
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
    padding-left: 1.75rem !important;
    margin-left: -1.75rem !important;
    padding-right:  1.75rem !important;
    margin-right: 0 !important;
}
#search .p-dropdown .p-dropdown-label.p-placeholder, .p-multiselect-label {
    color: #bfbfbf !important;
    font-family: 'Cairo', sans-serif !important;
    font-size: 14px;
}
#search .p-dropdown-trigger{
    top: 16px;
    position: absolute;
    width: 13px !important;
    left: 12px;
}
</style>
<style lang="scss" scoped>

  .search_input , .search_input::placeholder{
    position: relative;
    color: #BFBFBF;
    font-size: 12px;
    padding-top:15px  ;
    padding-bottom:15px  ;
    
  }
  .form-group{
    position: relative;
  }
  .form-group::before{
    content: "";
    position: absolute;
    width: 1px;
    height: 65%;
    top: 9px;
    right: 25px;
    background-color: #293255;
    z-index: 9;
  }
 

</style>

<style lang="scss">
  .search{
    .p-dropdown{
      position: relative !important;
      width: 100%;
      top: 0;
      left: 0;
      height: 50px !important;
      background: #fff !important;
      padding-top: 0;
      padding-right: 11px;
      color: #BFBFBF;
    }
  }
  .p-multiselect{
    position: relative !important;
      width: 100%;
      top: 0;
      left: 0;
      height: 50px !important;
      background: #fff !important;
      padding-top: 0;
      padding-right: 11px;
      color: #BFBFBF;

  }
   .form-select{
        background-position: left 0.75rem center;
  }
  .matches_cards{
    .best_match{
      border-radius: 8px;
      border: 1px solid #E3E3E3;
      background: #FFF;
      .card_header{
        border-bottom: 1px solid #DFDFDF;
        padding-bottom: 16px;
      }
      .card_content{
        padding-top: 16px;
      }
      a.grayColor{
        color:#86888A !important;
      }
    }
  }
</style>