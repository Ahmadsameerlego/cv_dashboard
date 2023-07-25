<template>
    <section id="singleChat" class="mt-3">
        <!-- content  -->
        <section class="Chat_content">
                <div class="row mt-3">
                    
                    <!-- single chat content  -->
                    <div class="col-md-8 mb-3">
                        <section class="chat_content" id="chat">

                            <!-- chat header  -->
                            <div class="chat_header px-3 pt-3 pb-3 mb-2 d-flex align-items-center">
                                <!-- chat image  -->
                                <div class="chat_image br-50">
                                    <img :src="require('@/assets/imgs/logo.png')" class="w-100 h-100 br-50" alt="user image">
                                </div>
                                <!-- chat details  -->
                                <div class="chat_details mx-3">
                                    <h6 class="fw-bold"> شركة أوامر الضحك </h6>
                                    <p class="grayColor fw-6 mb-0"> frontend </p>
                                </div>
                            </div>

                            <!-- chat content  -->
                            <div class="chat_messages pt-4 pb-4 px-3">

                                <!-- single message => sent by me  -->
                                <div class="single_message position-relative mb-3 sent_by_me d-flex align-items-center">
                                    <!-- user image  -->
                                    <div class="user_image br-50">
                                        <img :src="require('@/assets/imgs/logo.png')" class="br-50" alt="user image">
                                    </div>
                                    <!-- user message  -->
                                    <div class="user_message position-relative mx-3">
                                        <!-- content  -->
                                        <p class="mb-0"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis provident sunt! Non consectetur modi soluta! Incidunt tempore cupiditate itaque aspernatur ut quis iusto, vel, labore dolor, facilis repellat blanditiis. </p>
                                    </div>
                                    <!-- time  -->
                                    <span class="time grayColor">
                                        9 pm
                                    </span>
                                </div>

                                <!-- single message => sent by other  -->
                                <div class="single_message position-relative sent_by_other d-flex align-items-center">
                                    <!-- user image  -->
                                    <div class="user_image br-50">
                                        <img :src="require('@/assets/imgs/logo.png')" class="br-50" alt="user image">
                                    </div>
                                    <!-- user message  -->
                                    <div class="user_message position-relative mx-3">
                                        <!-- content  -->
                                        <p class="mb-0"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quis provident sunt! Non consectetur modi soluta! Incidunt tempore cupiditate itaque aspernatur ut quis iusto, vel, labore dolor, facilis repellat blanditiis. </p>
                                    </div>
                                    <!-- time  -->
                                    <span class="time grayColor">
                                        9 pm
                                    </span>
                                </div>


                            </div>
                            <InfiniteLoading target="#chat" @infinite="load"/>

                            <!-- chat footer  -->
                            <div class="chat_footer px-3 pt-2 pb-2 ">

                                <form class="d-flex align-items-center">
                                    <button class="btn upload" type="button">
                                        <i class="fa-solid fa-paperclip"></i>
                                    </button>

                                    <div class="w-100 form-group position-relative">
                                        <textarea name="" id="" class="form-control" placeholder="اكتب رسالتك هنا"></textarea>
                                        <button class="main_btn submit"> ارسال </button>
                                    </div>

                                </form>
                            </div>
                        </section>
                    </div>

                    <div class="col-md-4 mb-3">
                        <h6 class="fw-bold mainColor"> الرسائل </h6>
                        <p class="fw-6 grayColor"> يتم هنا عرض الرسائل الخاصة بك </p>
                        <!-- shown chat  -->
                        <div class="allRooms showChats">
                                <router-link to="/singleChat/1" class="colorInherit">
                                <!-- single room  -->
                                <section class="room pt-3 pb-3 px-3 position-relative d-flex align-items-center">
                                    <!-- chat image  -->
                                    <div class="chat_image">
                                        <img :src="require('@/assets/imgs/logo.png')" alt="chat room image">
                                    </div>
                                    <!-- chat image  -->
                                    <div class="chat_details mx-3">
                                        <h5 class="fw-bold mb-3 fs-14"> شركة أوامر الشبكة </h5>
                                        <p class="grayColor  fw-6 fs-12"> هذا النص هو مثال على نص يمكن ان يستدل </p>
                                    </div>

                                    <!-- absolute  -->

                                    <!-- unreadCounter  -->
                                    <div class="unread_count br-50 flex_center whiteColor">
                                        2
                                    </div>

                                    <!-- time  -->
                                    <div class="time d-flex">
                                        <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                        <span class="grayColor mx-2">منذ ساعة</span>
                                    </div>
                                </section>
                            </router-link>
                        </div>
                    </div>
                </div>
        </section>
    </section>
</template>

<script>

export default {
    data(){
        return{
            page : 1
        }
    },
    components:{
        
    }
}
</script>

<style >
.p-button {
    color: #ffffff;
    background: transparent;
    border: 1px solid transparent;
}
</style>
<style lang="scss">
    .showChats{
        .chat_image{
            width:45px !important;
            height: 45px !important;
        }
        .time{
            bottom: 10px !important;
        }
        .unread_count{
            top: 10px !important;
        }
    }
    .chat_content{
        .chat_header{
            background: #FFF;
            box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07);
            .chat_image{
                width:70px;
                height: 70px;
                border: 5px solid #E2EAF3;
            }
        }
        .chat_footer{
            background: #FFF;
            box-shadow: 0px -1px 9px 0px rgba(0, 0, 0, 0.06);
            .upload{
                svg{
                    color: #8E8E93;
                    font-size: 25px;
                }
            }
            textarea{
                background-color: #F4F4F4;
            }
            .submit{
                position: absolute;
                left: 10px;
                top: 17px;
            }
        }
    }
    .single_message{
        .user_image{
            width:50px;
            height: 50px;
            img{
                width: 100%;
                height:100%;
                object-fit: cover;
            }
        }
        .user_message{
            border-radius: 0px 32px 32px 20px;
            background: #EEE;
            padding: 20px;
            width: 70%;
            max-height: 70px;
            overflow-y: auto;
            overflow-x:hidden ;
            p{
                color:#5A5B5B;
                font-size: 14px;
            }
        }
        .time{
            margin-bottom: -45px;
        }
    }
    .sent_by_other{
        flex-direction: row-reverse;
        margin-bottom: 20px;
        .user_message{
            background: #E2EAF3;
        }
    }
    .chat_messages{
        background: rgba(251, 251, 251, 0.97);    
        min-height: 400px;
        height: 400px;
        overflow-y: auto;
    }


        .allRooms{
        .room{
            border-radius: 10px;
            border: 1px solid #F0F0F0;
            background: rgba(251, 251, 251, 0.97);
            .chat_image{
                width:75px;
                height: 75px;
                border-radius: 50%;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .unread_count , .time{
                position: absolute;
                left: 20px;
            }
            .unread_count{
                background-color: #F47B1D;
                width: 30px;
                height: 30px;
                top: 20px;
            }
            .time{
                bottom:20px;
            }
        }
    }
    
    .colorInherit{
        color:inherit 
    }


</style>