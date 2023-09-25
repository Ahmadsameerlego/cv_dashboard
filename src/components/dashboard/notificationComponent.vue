<template>
    <section class="pt-3 pb-3 px-3">
        <h6 class="fw-bold mainColor"> التنبيهات </h6>
        <p class="fw-6 grayColor">
            يتم هنا عرض جميع الاشعارات الخاصة بك
        </p>
    </section>
    <!-- notifications items  -->
    <section class="pb-5">
        <!-- single notification  -->
        <div class="mt-3 nb-3">
            <div class="notificationBox">
                <div class="d-flex align-items-center gap-10">
                    <div class="not_icon">
                        <img :src="require('@/assets/imgs/alert.png')" alt="" class="notificationLogo">
                    </div>
                    <div class="not_content mx-2"> 
                       <div class="body">
                            {{ notification  }}
                       </div>
                        <span> 
                            <img :src="require('@/assets/imgs/clock (2).png')" alt="">
                        </span>
                        <span class="created_at mx-2">
                            {{ date  }}
                        </span>
                    </div>
                </div>
                <!-- delete alert  -->
                <div class="delete_alert">
                    <button class="btn">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
                
</template>

<script>
export default {
data(){
    return{
        date: '1/1/1111',
        notification: 'نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص  نص نص نص نص  نص نص نص نص نص نص نص نص نص نص نص '

    }
}
}
</script>
<style lang="scss"  scoped>

.notificationBox {
    position: relative;
    gap: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    .not_icon{
        min-width: 55px;
        height: 55px;
       background: linear-gradient(180deg, #39446D 0%, #060F31 100%);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .notificationLogo {
            width: 30px;
            height: 30px;
            object-fit: contain;
        }

    }
    .body{
        color:#4F4F4F;
        font-weight:600;
    }
    .created_at{
        color:#989898 ;
    }
    .not_content{
        width:80%;
    }
    .delete_alert{
        position:absolute ;
        top: 10%;
        left:2%;
        background: #FFEFEF;
        border-radius: 4px;
        svg{
            color:#D81A1A
        }
    }
}

</style>