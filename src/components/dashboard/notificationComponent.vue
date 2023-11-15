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
        <div class="mt-3 nb-3" v-for="not in nots" :key="not.id">

            <div class="notificationBox" v-if="not.type=='admin_notify'">
                <div class="d-flex align-items-center gap-10">
                    <div class="not_icon">
                        <img :src="require('@/assets/imgs/alert.png')" alt="" class="notificationLogo">
                    </div>
                    <div class="not_content mx-2"> 
                       <div class="body">
                            {{ not.data.body_ar  }}
                       </div>
                        <span> 
                            <img :src="require('@/assets/imgs/clock (2).png')" alt="">
                        </span>
                        <span class="created_at mx-2">
                            {{ not.created_at  }}
                        </span>
                    </div>
                </div>
                <!-- delete alert  -->
                <div class="delete_alert">
                    <button class="btn" @click.prevent="deleteNot(not.id)">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
            <div class="notificationBox" v-if="not.type=='job_application_added'">
                <router-link :to="'/details/'+not.data.advertisement_id">
                    <div class="d-flex align-items-center gap-10">
                        <div class="not_icon">
                            <img :src="require('@/assets/imgs/alert.png')" alt="" class="notificationLogo">
                        </div>
                        <div class="not_content mx-2"> 
                        <div class="body">
                                هناك تقديم على طلب وظيفي
                        </div>
                            <span> 
                                <img :src="require('@/assets/imgs/clock (2).png')" alt="">
                            </span>
                            <span class="created_at mx-2">
                                {{ not.created_at  }}
                            </span>
                        </div>
                    </div>
                    <!-- delete alert  -->
                    <div class="delete_alert">
                        <button class="btn" @click.prevent="deleteNot(not.id)">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </router-link>
               
            </div>
        </div>

        <paginate
            v-model="currentPage"
            :page-count="totalPages"
            :click-handler="page => pageClickHandler(page)"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            :page-class="'page-item'"    
            :no-li-surround="true"   
            v-if="nots.length>0"   
            class="d-flex justify-content-end"     
        >
      </paginate>

    </section>

    <Toast />
                
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';
import Paginate from 'vuejs-paginate-next';

export default {
    data(){
        return{
            nots : [],
            // city pagination 
            currentPage : 1,
            perPage : null,
            totalPages : null,

        }
    },
    methods:{
        // get all notifications 
        async getNotifications(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            await axios.get(`company/notifications?page=${this.currentPage}`, {headers})
            .then( (res)=>{
                const response = res.data ;
                if( response.key === 'success' ){
                    this.nots = response.data.data ;

                    this.currentPage  = response.data.pagination.current_page ;
                    this.perPage  = response.data.pagination.per_page ;
                    this.totalPages  = response.data.pagination.total_pages ;
                }
            } )
        },
        pageClickHandler(page) {
            this.currentPage = page
            this.getNotifications()
        },
        // delete notifications 
        async deleteNot(id){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const fd = new FormData();
            fd.append('notification_id', id)
            await axios.post('company/notification/delete', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg , life: 3000 });
                    setTimeout(() => {
                        this.getNotifications();
                    }, 1000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                }
            } )
        }
    },
    components:{
        Toast,
        Paginate
    },
    mounted(){
        this.getNotifications();
    },
    created() {
        this.totalPages = Math.ceil(this.nots.length / this.perPage);
    },

}
</script>
<style lang="scss">
    .page-link{
        font-size: 11px !important;
        width: 30px !important;
        height: 30px !important;
        display: flex !important;
        justify-content: center !important;
        border-radius: 50% !important;
        margin: 0 5px;
        color: #333 !important;
        &.active{
            background: #2a3255 !important;
            border: 1px solid #2a3255 !important;
            color: #fff !important;
        }
    }
</style>

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