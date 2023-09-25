<template>
    <section id="access" class="pt-2 pb-2 px-3">
        <div class="flex_between">
            <div>
                <h6 class="fw-bold mainColor">
                    {{ $t('emp.title')  }}
                </h6>
                <p class="fw-6 grayColor">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>

            <router-link to="/addEmp" class="main_btn whiteColor pt-2 pb-2 fw-6">
                <i class="fa-solid fa-plus whiteColor fw-6"></i>
                <span class="whiteColor mx-2">{{ $t('emp.add')  }}</span>
            </router-link>
        </div>

        <!-- employers  -->
        <div class="employers orders_cards mt-3">
            

            <div class="row" v-if="employees.length===0">
                <div class="col-md-3 mb-2" v-for="skeleton in 3" :key="skeleton">
                    <Skeleton  height="6rem"></Skeleton>
                </div>
            </div>
            <div class="row" v-else>
                <!-- single employer  -->
                <div class="col-md-4 mb-3" v-for="emp in employees" :key="emp.id">
                    <div class="single_order px-3 pt-3 pb-3">

                        <div class="d-flex align-items-center">
                            <div class="emp_image">
                                <img :src="emp.image" alt="">
                            </div>
                            <div class="mx-3">
                                <h6 class="fw-6"> {{  emp.name  }} </h6>
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/phone1.svg')" class="phone_icon" alt="">
                                    <span class="mx-2 fs-14"> {{  emp.phone  }} </span>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex mt-3">
                                <router-link :to="'/editEmp/'+emp.id" class="main_btn flex_center fw-6 w-50"> <span class="whiteColor">{{ $t('emp.edit') }}</span> </router-link>
                                <button class="main_btn refuse w-50 mx-2" @click="deleteEmpFun(emp.id)">  {{  $t('emp.delete')  }}  </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <!-- delete employee  -->
        <Dialog v-model:visible="deleteEmp" modal :style="{ width: '35vw' }">
            <h5 class="fw-6 mainColor text-center mb-2"> {{ $t('emp.delete') }} </h5>

            <p class="text-center"> {{ $t('emp.desc')  }} </p>

            <img class="deleteIcon" :src="require('@/assets/imgs/sad.gif')" alt="">
        
            <div class="flex_between mt-4">
                <button class="main_btn pt-2 pb-2  w-50" @click.prevent="detelte" :disabled="disabled"> 
                    
                    <span v-if="!disabled">{{ $t('emp.del')  }} </span>
                    <div class="spinner-border" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>

                </button>
                <button class="main_btn cancel pt-2 pb-2 w-50 mx-2" @click="deleteEmp=false"> {{ $t('emp.back')  }} </button>
            </div>
        </Dialog>

        <!-- success delete employee  -->
        <Dialog v-model:visible="successDelete" modal :style="{ width: '35vw' }">

            <img class="deleteIcon" :src="require('@/assets/imgs/done.gif')" alt="">
            
            <h5 class="fw-bold mt-3 mainColor text-center mb-2">
                {{ $t('emp.success')  }}
            </h5>
            
        </Dialog>

        <Toast />
</template>

<script>
import Dialog from 'primevue/dialog';
import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            deleteEmp : false,
            successDelete : false,
            emp_id : null,
            disabled : false
        }
    },
    methods:{
        deleteEmpFun(id){
            this.deleteEmp = true;
            this.emp_id = id ;
        },
        async detelte(){
            this.disabled = true ;
            const fd = new FormData();
            fd.append('employee_id', this.emp_id)
            const response = await this.$store.dispatch('deleteEmp', fd)
            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;

                this.successDelete = true ;
                this.deleteEmp = false ;
                setTimeout(() => {
                    this.successDelete = false ;
                }, 2000);
                
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
                
            }
            
        }
    },
    computed:{
        employees(){
            return this.$store.state.emps ;
        }
    },
    components:{
        Dialog,
        Skeleton,
        Toast
    },
    created(){

        this.$store.dispatch('getAllEmps');
    }
}
</script>

<style lang="scss">
    .single_order{
        .emp_image{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .phone_icon{
            width: 15px;
        }
    } 
</style>