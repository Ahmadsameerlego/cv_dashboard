<template>
    <section id="header" class="px-5 pt-3 pb-3">
        <div class="header_content d-flex justify-content-between align-items-center">
            <!-- right hand  -->
            <div>
                <h5 class="fw-bold mainColor">
                    <span> {{ $t('header.dash') }} </span>
                    <img class="laughImoji" :src="require('@/assets/imgs/113472-happy-eye-emoji-animation.png')" alt="">
                </h5>
                <p class="fw-6 grayColor fs-16">
                    {{ $t('header.welcome')  }}
                </p>

                <!-- toggle icon  -->
                <span class="toggle_bar" @click="toggle_bar" ref="toggleICon">
                    <i class="fa-solid fa-bars"></i>
                    <!-- <i class="fa-solid fa-x" v-else-if="open==false"></i> -->
                </span>
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
                        <!-- <div class="count flex_center">
                            3
                        </div> -->
                    </router-link>
                </span>

                <!-- alerts  -->
                <span class="alerts position-relative mx-5">
                    <router-link to="/notifications">
                        <img :src="require('@/assets/imgs/Group 45983.svg')" alt="">
                        <div class="count flex_center">
                            {{ count }}
                        </div>
                    </router-link>
                    
                </span>


                <!-- company info  -->
                <div class="company_info d-flex align-items-center">
                    <img :src="image" class="logo" alt="">
                    <div class="mx-2"> 
                        <p class="mainColor fs-16 fw-6 mb-0"> {{ name }} </p>
                        <p class="grayColor fs-13 fw-6"> {{ owner }} </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            name : '',
            owner : '',
            image : '',
            count : 0
        }
    },
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
        // toggle bar 
        toggle_bar(){
            document.querySelector('#sidebar').classList.toggle('active');

            let icon = this.$refs.toggleICon.children[0] ;
            if( !icon.classList.contains('fa-x') ){
                icon.classList.add('fa-x');
            }else{
                icon.classList.add('fa-bars');
            }
        },
        // get notifications count 
        async getNotificationCount(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.get('company/notifications/count', {headers})
            .then( (res)=>{
                if( (res.data.key === 'success') ){
                    this.count = res.data.data.count
                }
            } )
        }
    },
    mounted(){
        let user = JSON.parse(localStorage.getItem('user')) ;
        this.name = user.name ;
        this.owner = user.owner ;
        this.image = user.image ;
        this.getNotificationCount();
    }
}
</script>

<style lang="scss" scoped>
    .toggle_bar{
        display: none;
        cursor: pointer;
        position: absolute;
        left: 35px;
        top: 35px;
        svg{
            font-size: 25px;
        }
    }
    #header{
        width: calc(100% - 300px);
        position: fixed;
        top: 0;
        left: 0;
        height: 110px;
        background-color: #fff;
        z-index: 11;
        box-shadow: 0px 0px 10px #33333326;
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