<template>
  <section id="addJob" class="pt-3 pb-3 px-3">
    <div>
      <h6 class="fw-bold mainColor"> اضافة اعلان وظيفي </h6>
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
              <img class="form_icon" :src="require('@/assets/imgs/grayBag.svg')" alt="">
              <label for=""> المدينة </label>
              <select class="form-select job_form">
                <option value="" selected> الرجاء اختيار الخبره المطلوبه </option>
                <option value="1" > 1 </option>
                
              </select>
            </div>
          </div>


        </div>
      </form>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
  }
</style>

<style>
   .form-select{
        background-position: left 0.75rem center !important;
  }
</style>