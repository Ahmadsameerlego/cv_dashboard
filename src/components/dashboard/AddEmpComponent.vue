<template>
    <section id="addEmp" class="pt-2 pb-2 px-3">
        <h6 class="fw-bold mainColor"> صلاحيات الموظفين </h6>

        <!-- add form  -->
        <section class="addForm mt-3 px-3 pt-3 pb-3">
            <p class="fw-bold">  اضافة موظف :  </p>
            <form class="addJobForm" ref="storeEmp">
                <!-- profile pic  -->
                <div class="pic flex_center">
                    <input type="file"  name="image" class="coverImage" @change="choosePic($event)">
                    <!-- cover image  -->
                    <img :src="PicImage" style="border-radius:50%;" class="cover_image" alt="" v-if="!ifUploaded2">
                    <img src="@/assets/imgs/cover.svg" class="cover_icon mb-2" alt="">
                </div>

                <div class="row mt-3">
                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/user.svg')" alt="">
                            <label for=""> اسم الموظف </label>
                            <input type="text" class="form-control job_form" placeholder="ادخل اسم الموظف" name="name">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/grayPhone.svg')" alt="">
                            <label for="">رقم التحويلة</label>
                            <input type="number" class="form-control job_form" placeholder="ادخل رقم التحويلة" name="transfer_no">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/lock.svg')" alt="">
                            <label for="">كلمة المرور</label>
                            <input type="password" class="form-control job_form" placeholder="ادخل كلمة المرور" name="password">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/lock.svg')" alt="">
                            <label for="">تأكيد كلمة المرور</label>
                            <input type="password" class="form-control job_form" placeholder="ادخل تأكيد كلمة المرور" name="password_confirmation">
                        </div>
                    </div>

                </div>
            </form>
        </section>

        <!-- permissions process  -->
        <section class="permissions mt-3 addForm px-3 pt-3 pb-3">

            <!-- header  -->
            <div class="flex_between border-bottom pb-2">
                <p class="fw-6 fs-15"> الصلاحيات :  </p>
                <!-- check all permissions  -->
                <div class="grayBack px-3 pt-2 pb-2 br-3">
                    <div class="form-group align-items-center">
                        <input type="checkbox" id="check_all_permissions" name="" class="check_all_permissions">
                        <label for="check_all_permissions" class="fw-6 mx-2"> تحديد الكل </label>
                    </div>  
                </div>
            </div>

            <!-- permissions cards  -->
            <div class="row mt-3">
                <!-- single permission card => advertisement -->
                <div class="col-md-4 mb-2" >
                    <section class="single_permission br-5">
                        <div class="flex_between align-items-baseline border-bottom pb-2 pt-2 px-2">
                        <p class="fw-6 fs-15"> {{  Object.keys( permissions )[0]  }}  </p>
                        <!-- check all permissions  -->
                        <div class="grayBack px-3 pt-2 pb-2 br-3">
                            <div class="form-group align-items-center">
                            <input type="checkbox"
                                id="check_all"
                                name="" 
                                v-model="checkAll"
                                @change="toggleAllCheckboxes()" 
                                class="check_all_permissions"
                            >
                            <!-- permissions key => advertisement , company ...  -->
                            <label for="check_all'" class="fw-6 mx-2"> تحديد الكل </label>
                            </div>  
                        </div>
                        </div>

                        <!-- permissions items  -->
                        <div class="pb-2 pt-2 px-2">
                            <div class="form-group mb-2" v-for="perm in permissions.advertisement" :key="perm">
                                <input 
                                    type="checkbox" 
                                    name="" 
                                    v-model="checkedPermissions[perm]" 
                                    :id="perm"
                                    class="perm_check"
                                >
                                <label :for="perm" class="fw-6 mx-2"> {{  perm  }} </label>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- single permission card => company -->
                <div class="col-md-4 mb-2" >
                    <section class="single_permission br-5">
                        <div class="flex_between align-items-baseline border-bottom pb-2 pt-2 px-2">
                        <p class="fw-6 fs-15"> {{  Object.keys( permissions )[1]  }}  </p>
                        <!-- check all permissions  -->
                        <div class="grayBack px-3 pt-2 pb-2 br-3">
                            <div class="form-group align-items-center">
                            <input type="checkbox"
                                id="check_all"
                                name="" 
                                v-model="checkAll1"
                                @change="toggleAllCheckboxes1()" 
                                class="check_all_permissions"
                            >
                            <!-- permissions key => advertisement , company ...  -->
                            <label for="check_all'" class="fw-6 mx-2"> تحديد الكل </label>
                            </div>  
                        </div>
                        </div>

                        <!-- permissions items  -->
                        <div class="pb-2 pt-2 px-2">
                            <div class="form-group mb-2" v-for="perm in permissions.company" :key="perm">
                                <input 
                                    type="checkbox" 
                                    name="" 
                                    v-model="checkedPermissions1[perm]" 
                                    :id="perm"
                                    class="perm_check1"
                                >
                                <label :for="perm" class="fw-6 mx-2"> {{  perm  }} </label>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- single permission card => subscripion -->
                <div class="col-md-4 mb-2" >
                    <section class="single_permission br-5">
                        <div class="flex_between align-items-baseline border-bottom pb-2 pt-2 px-2">
                        <p class="fw-6 fs-15"> {{  Object.keys( permissions )[2]  }}  </p>
                        <!-- check all permissions  -->
                        <div class="grayBack px-3 pt-2 pb-2 br-3">
                            <div class="form-group align-items-center">
                            <input type="checkbox"
                                id="check_all"
                                name="" 
                                v-model="checkAll2" 
                                @change="toggleAllCheckboxes2()" 
                                class="check_all_permissions"
                            >
                            <!-- permissions key => advertisement , company ...  -->
                            <label for="check_all'" class="fw-6 mx-2"> تحديد الكل </label>
                            </div>  
                        </div>
                        </div>

                        <!-- permissions items  -->
                        <div class="pb-2 pt-2 px-2">
                            <div class="form-group mb-2" v-for="perm in permissions.subscription" :key="perm">
                                <input 
                                    type="checkbox" 
                                    name="" 
                                    v-model="checkedPermissions2[perm]" 
                                    :id="perm"
                                    class="perm_check2"
                                >
                                <label :for="perm" class="fw-6 mx-2"> {{  perm  }} </label>
                            </div>
                        </div>
                    </section>
                </div>

                 <!-- single permission card => job_application -->
                 <div class="col-md-4 mb-2" >
                    <section class="single_permission br-5">
                        <div class="flex_between align-items-baseline border-bottom pb-2 pt-2 px-2">
                        <p class="fw-6 fs-15"> {{  Object.keys( permissions )[3]  }}  </p>
                        <!-- check all permissions  -->
                        <div class="grayBack px-3 pt-2 pb-2 br-3">
                            <div class="form-group align-items-center">
                            <input type="checkbox"
                                id="check_all"
                                name="" 
                                v-model="checkAll3"
                                @change="toggleAllCheckboxes3()" 
                                class="check_all_permissions"
                            >
                            <!-- permissions key => advertisement , company ...  -->
                            <label for="check_all'" class="fw-6 mx-2"> تحديد الكل </label>
                            </div>  
                        </div>
                        </div>

                        <!-- permissions items  -->
                        <div class="pb-2 pt-2 px-2">
                            <div class="form-group mb-2" v-for="perm in permissions.job_application" :key="perm">
                                <input 
                                    type="checkbox" 
                                    name="" 
                                    v-model="checkedPermissions3[perm]" 
                                    :id="perm"
                                    class="perm_check3"
                                >
                                <label :for="perm" class="fw-6 mx-2"> {{  perm  }} </label>
                            </div>
                        </div>
                    </section>
                </div>
                
            </div>

        </section>

        <!-- save changes  -->
        <div class="flex_center mt-3 mb-3">
            <button class="main_btn pt-2 pb-2 px-5 w-25" @click.prevent="storeEmp" :disabled="disabled"> 
                <span v-if="!disabled">حفظ البيانات</span>
                <div class="spinner-border" role="status" v-if="disabled">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </button>
        </div>

    </section>
    <Toast />
</template>

<script>
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            PicImage : '',
            ifUploaded2 : true,
            disabled : false ,
            checkAll: false ,
            checkAll1: false ,
            checkAll2: false ,
            checkAll3: false ,
            checkedPermissions : {},
            checkedPermissions1 : {},
            checkedPermissions2 : {},
            checkedPermissions3 : {},

            checkedPerms : []
        }
    },
    computed:{
        permissions(){
            return this.$store.state.permissions
        },
        // convert permissions object to an array 
        permissionsArray(){
            return Object.entries(this.permissions).map(([key, value]) => ({
                key,
                value,
            }));
        }
    },
    watch:{

        checkedPermissions:{
            handler() {
                // This will be triggered whenever any individual checkbox is changed.
                // You can add your custom logic here if needed.
                this.checkAll = Object.values(this.checkedPermissions).every((isChecked) => isChecked);

                for (const key in this.checkedPermissions) {
                    if (this.checkedPermissions[key]) {
                        this.checkedPerms.push(`advertisement:${key}`);
                    }
                }
                this.checkedPerms = [...new Set(this.checkedPerms)];
                console.log(this.checkedPerms)

            },
            deep: true,
        },
        checkedPermissions1:{
            handler() {
                // This will be triggered whenever any individual checkbox is changed.
                // You can add your custom logic here if needed.
                this.checkAll1 = Object.values(this.checkedPermissions1).every((isChecked) => isChecked);
                for (const key in this.checkedPermissions1) {
                    if (this.checkedPermissions1[key]) {
                        this.checkedPerms.push(`company:${key}`);
                    }
                }
                this.checkedPerms = [...new Set(this.checkedPerms)];
                console.log(this.checkedPerms)
            },
            deep: true,
        },
        checkedPermissions2:{
            handler() {
                // This will be triggered whenever any individual checkbox is changed.
                // You can add your custom logic here if needed.
                this.checkAll2 = Object.values(this.checkedPermissions2).every((isChecked) => isChecked);
                for (const key in this.checkedPermissions2) {
                    if (this.checkedPermissions2[key]) {
                        this.checkedPerms.push(`subscription:${key}`);
                    }
                }
                this.checkedPerms = [...new Set(this.checkedPerms)];
                console.log(this.checkedPerms)
            },
            deep: true,
        },
        checkedPermissions3:{
            handler() {
                // This will be triggered whenever any individual checkbox is changed.
                // You can add your custom logic here if needed.
                this.checkAll3 = Object.values(this.checkedPermissions3).every((isChecked) => isChecked);
                for (const key in this.checkedPermissions3) {
                    if (this.checkedPermissions3[key]) {
                        this.checkedPerms.push(`job_application:${key}`);
                    }
                }
                this.checkedPerms = [...new Set(this.checkedPerms)];
                console.log(this.checkedPerms)
            },
            deep: true,
        },
    },
    methods:{
        choosePic(event){
            const file = event.target.files[0];
            this.PicImage = URL.createObjectURL(file);
            this.ifUploaded2 = false ;
        },
        toggleAllCheckboxes() {
            const allCheckboxes = document.querySelectorAll('.perm_check');
            let allChecked = true;

            allCheckboxes.forEach((checkbox) => {
                checkbox.checked = this.checkAll;
                if (!checkbox.checked) {
                    allChecked = false;          
                }
            });

            // Update checkAll based on whether all individual checkboxes are checked
            this.checkAll = allChecked || false; 

        },
        toggleAllCheckboxes1() {
            const allCheckboxes = document.querySelectorAll('.perm_check1');
            allCheckboxes.forEach((checkbox) => {
                checkbox.checked = this.checkAll1 || false;
            });
        },
        toggleAllCheckboxes2() {
            const allCheckboxes = document.querySelectorAll('.perm_check2');
            allCheckboxes.forEach((checkbox) => {
                checkbox.checked = this.checkAll2 || false;
            });
        },
        toggleAllCheckboxes3() {
            const allCheckboxes = document.querySelectorAll('.perm_check3');
            allCheckboxes.forEach((checkbox) => {
            checkbox.checked = this.checkAll3 || false;
            });
        },

        // togglePermission(perm){
        //     const index = this.checkedPerms.indexOf(perm);
        //     if (index === -1) {
        //     // If not in the array, add it
        //     this.checkedPerms.push(perm);
        //     } else {
        //     // If already in the array, remove it
        //     this.checkedPerms.splice(index, 1);
        //     }

        //     console.log(this.checkedPerms)

        // },

        // store employee 
        async storeEmp(){
            const fd = new FormData(this.$refs.storeEmp);
            for( let i = 0 ; i < this.checkedPerms.length ; i++ ){
                fd.append( `permissions[${i}]` , String(this.checkedPerms[i]) )
            }
            fd.append('device_type', 'web');
            fd.append('device_id', localStorage.getItem('device_id'));
            this.disabled = true ;
            const response = await this.$store.dispatch('storeEmp', fd);
            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;
                setTimeout(() => {
                    this.$router.push('/access')
                }, 3000);
                
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }

            console.log(fd)
        }
    },
    created(){
        this.$store.dispatch('getPermissions')
    },
    components:{
        Toast
    }
}
</script>

<style scoped>
    .form_icon{
        object-fit: contain;
    }
</style>
<style lang="scss">
    .addForm{
        background-color: #fff;
        border-radius: 8px;
        .pic{
            position: relative;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #F5F5F5;
            border: 3px solid #909090;
            input, .cover_image{
                position: absolute;
                width: 100%;
                height: 100%;
                top:0;
                right: 0;
            }
            input{
                z-index: 5;
                opacity: 0;
            }
            .cover_image{
                z-index: 4;
            }
            
        }
    }
    input[type=checkbox]{
        accent-color: #293255;
    }
    .perm_check{
        width:15px;
        height: 15px;
    }
    .grayBack{
        background-color: #F5F5F5;
    }
    .single_permission{
        background-color: #FCFCFC;
        border: 1px solid #F0F0F0;
    }
</style>