<template>
  <section class="contactUs pt-2 pb-2 px-3">
    <h6 class="fw-bold mainColor"> تواصل معنا </h6>
    <p class="fw-6 grayColor">
        Lorem ipsum dolor sit amet consectetur adipisicing.
    </p>
    <!-- info  -->
    <section class="contactInfo flex_between flex-wrap mt-3 pt-3 pb-3 px-5">

        <div class="d-flex align-items-center">
            <div class="info_icon">
                <img :src="require('@/assets/imgs/mail.svg')" alt="">
            </div>
            <div class="mx-2 pt-3">
                <a href="mailto:example.info@gmail.com">
                    <h6 class="fw-6"> التواصل عبر البريد الإلكتروني </h6>
                    <p> example.info@gmail.com </p>
                </a>
            </div>
        </div>

        <div class="d-flex align-items-center">
            <div class="info_icon">
                <img :src="require('@/assets/imgs/contactWhats.svg')" alt="">
            </div>
            <div class="mx-2 pt-3">
                <a href="https://api.whatsapp.com/send?phone=15551234567">
                    <h6 class="fw-6"> التواصل عبر الواتساب </h6>
                    <p> +966 555555555 </p>
                </a>
            </div>
        </div>
        

        <div class="d-flex align-items-center">
            <div class="info_icon">
                <img :src="require('@/assets/imgs/contactPhone.svg')" alt="">
            </div>
            <div class="mx-2 pt-3">
                <a href="tel:example.info@contactPhone.com">
                    <h6 class="fw-6"> التواصل عبر الهاتف </h6>
                    <p> +966 555555555 </p>
                </a>
            </div>
        </div>


    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .contactInfo{
        background-color: #fff;
        border-radius: 6px;
    }
</style>