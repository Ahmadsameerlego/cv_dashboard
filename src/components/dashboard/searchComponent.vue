<template>
  <section id="search" class="px-3 pt-3 pb-3">
    <h6 class="fw-bold mainColor"> البحث </h6>
    <p class="fw-6 grayColor"> ابحث عن الموظفين من هنا </p>
    <form class="mt-3">

      <div class="row">
        <div class="col-md-4 mb-3 form-group ">
          <input type="text" class="form-control search_input  px-4" name="" placeholder="المسمى الوظيفي" id="">
        </div>

        <div class="col-md-4 mb-3 form-group">
          <input type="text" class="form-control search_input  px-4" name="" placeholder="التخصص العلمي" id="">
        </div>

        <div class="col-md-4 mb-3 form-group">
          <input type="text" class="form-control search_input  px-4" name="" placeholder="المؤهل التعليمي" id="">
        </div>

        <div class="col-md-4 mb-3 form-group">
          <select class="form-select search_input  px-4" aria-label="Default select example">
            <option selected> نوع الوظيفة </option>
            <option value="1">One</option>
          </select>
        </div>

        <div class="col-md-4 mb-3 form-group">
          <select class="form-select search_input  px-4" aria-label="Default select example">
            <option selected> المهارات </option>
            <option value="1">One</option>
          </select>
        </div>

        <div class="col-md-4 mb-3 form-group">
          <select class="form-select search_input  px-4" aria-label="Default select example">
            <option selected> الخبرة </option>
            <option value="1">One</option>
          </select>
        </div>

        <div class="col-md-4 mb-3 form-group">
          <select class="form-select search_input  px-4" aria-label="Default select example">
            <option selected> الشهادات المهنية </option>
            <option value="1">One</option>
          </select>
        </div>

        <div class="col-md-4 mb-3 form-group">
          <select class="form-select search_input  px-4" aria-label="Default select example">
            <option selected> المجال الوظيفي </option>
            <option value="1">One</option>
          </select>
        </div>

      </div>

      <div class="flex_center mt-3">
        <button class="main_btn w-25 pt-2 pb-2 fs-16 fw-6"> بحث </button>
      </div>
    </form>

    <!-- best match  -->
    <section class="best_match mt-4">
        <h6 class="fw-bold mainColor"> الاكثر تطابقا </h6>
        <p class="fw-6 grayColor"> الاطلاع علي بيانات الموظفين الاكثر تطابقا </p>

        <section class="matches_cards mt-2">
          <div class="row">
            
            <!-- single card  -->
            <div class="col-md-6 mb-3">

              <section class="best_match px-3 pt-3 pb-3">

                <!-- card header  -->
                <div class="card_header d-flex justify-content-between align-items-center">
                  <span class="fw-bold fs-16 mainColor"> احمد سمير </span>
                  <router-link to="/profile/1" class="grayColor fw-6 fs-13"> 
                    عرض البروفايل
                    <i class="fa-solid fa-chevron-left"></i>
                  </router-link>
                </div>

                <!-- card content  -->
                <div class="card_content d-flex justify-content-between flex-wrap">
                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                      <span> السمى الوظيفي </span>
                    </p>
                    <p class="fw-6 fs-16">
                      مهندس برمجيات
                    </p>
                  </div>

                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                      <span> الخبرة </span>
                    </p>
                    <p class="fw-6 fs-16">
                      2-5 سنوات
                    </p>
                  </div>

                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                      <span> المدينة </span>
                    </p>
                    <p class="fw-6 fs-16">
                      الرياض
                    </p>
                  </div>

                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                      <span> الفئة </span>
                    </p>
                    <p class="fw-6 fs-16">
                      سعودي
                    </p>
                  </div>

                  
                  <!-- single feature  -->
                  <div>
                    <p class="grayColor mb-1 fw-6">
                      <img :src="require('@/assets/imgs/briefcase.svg')" alt="">
                      <span> المؤهل التعليمي </span>
                    </p>
                    <p class="fw-6 fs-16">
                      بكالريوس حاسبات ومعلومات
                    </p>
                  </div>

                </div>

              </section>

            </div>
          </div>
        </section>

    </section>



  </section>
</template>

<script>
export default {

}
</script>

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

<style>
   .form-select{
        background-position: left 0.75rem center;
  }
</style>