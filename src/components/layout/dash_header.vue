<template>
    <section id="header" class="px-5 pt-3 pb-3">
        <div class="header_content d-flex justify-content-between align-items-center">
            <!-- right hand  -->
            <div>
                <h5 class="fw-bold mainColor">
                    <span>لوحة التحكم</span>
                    <img class="laughImoji" src="https://s3-alpha-sig.figma.com/img/98d1/c79e/41dcac2f20e1edb2f87601070cfc270b?Expires=1690761600&Signature=gx0v8i0QkPDLLc7YXRrJd~j64uryl0O9yhrj7AjjQT9x6f4iQWGYKsQ~LUtvsKbRf9ef8QTXFgY4cpPYQTWyLLagnhghbavp6--HyAfVFgtQvuc3JhChWLSLvx0kXHj5bUDZL1lQKku1~6sM9jNgHaQZ3UOjxUTrVzL0iuzfV4uNgAJGctdnOh~fPnowyzsr-ZW6teKWJ9ykqgVZOqMzUtIPCvImtz2rEMGpy-iVZyutnMN7S5hClJum223Jo1-kQ5tMBAJ68craFv48v3r8s69xYJoYgA6AAO0jNVj5U8llAHnW6ZSwXfJ9B-UF0qbPOQ1F~fbu0dBHMFFOS17b5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                </h5>
                <p class="fw-6 grayColor fs-16">
                    مرحبا بك , اهلا بعودتك
                </p>
            </div>

            <!-- left hand  -->
            <div class="d-flex align-items-center">

                <button class="lang flex_center mx-5" @click="switchLang"> 
                    <span v-if="$i18n.locale=='en'" >AR</span>
                    <span v-else-if="$i18n.locale=='ar'" >EN</span> 
                </button>

                <!-- messages  -->
                <span class="messages position-relative">
                    <router-link to="/messages">
                        <img :src="require('@/assets/imgs/dash_messgae.png')" alt="">
                        <div class="count flex_center">
                            3
                        </div>
                    </router-link>
                </span>

                <!-- alerts  -->
                <span class="alerts position-relative mx-5">
                    <router-link to="/">
                        <img :src="require('@/assets/imgs/Group 45983.svg')" alt="">
                        <div class="count flex_center">
                            3
                        </div>
                    </router-link>
                    
                </span>


                <!-- company info  -->
                <div class="company_info d-flex align-items-center">
                    <img :src="require('@/assets/imgs/logo.png')" class="logo" alt="">
                    <div class="mx-2"> 
                        <p class="mainColor fs-16 fw-6 mb-0"> شركة اوامر الشبكة </p>
                        <p class="grayColor fs-13 fw-6"> المدير العام </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods:{
        // switch lang     
        switchLang(){
            let lang = 'ar';
            if(this.$i18n.locale == 'ar'){
                lang = 'en';
                this.arabic = false;
            }

            if(localStorage.getItem('locale')){
                localStorage.removeItem('locale');
            }

            localStorage.setItem('locale' ,lang);
            this.arabic = true;

            location.reload()
        },
    }
}
</script>

<style lang="scss" scoped>
    #header{
        width: calc(100% - 300px);
        position: fixed;
        top: 0;
        left: 0;
        height: 110px;
        background-color: #fff;
        z-index: 11;
        .laughImoji{
            width: 35px;
            height: 35px;
        }
        .company_info{
            .logo{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                object-fit: contain;
            }
        }
        .messages, .alerts{
            width: 35px;
            height: 35px;
            img{
                width: 100%;
                height: 100%;

            }
            .count{
                position: absolute;
                width: 17px;
                height: 17px;
                border-radius: 50%;
                background-color: #FF7E68;
                top: -6px;
                right: -6px;
                color:#fff;
            }
        }
    }

</style>