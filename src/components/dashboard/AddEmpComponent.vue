<template>
    <section id="addEmp" class="pt-2 pb-2 px-3">
        <h6 class="fw-bold mainColor"> {{ $t('emp.access') }} </h6>

        <!-- add form  -->
        <section class="addForm mt-3 px-3 pt-3 pb-3">
            <p class="fw-bold">  {{ $t('emp.addEmp') }} :  </p>
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
                            <label for=""> {{ $t('emp.empName') }} </label>
                            <input type="text" class="form-control job_form" :placeholder="$t('emp.namePlc')" name="name" v-model="name">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/grayPhone.svg')" alt="">
                            <label for="">{{ $t('emp.trans') }}</label>
                            <input type="number" class="form-control job_form" :placeholder="$t('emp.transPlc')" name="transfer_no" v-model="transfer_no" readonly v-if="isEdit==true">
                            <input type="number" class="form-control job_form" :placeholder="$t('emp.transPlc')" name="transfer_no" v-model="transfer_no" v-else>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/lock.svg')" alt="">
                            <label for=""> {{ $t('auth.password') }} </label>
                            <input type="password" class="form-control job_form" v-model="password" :placeholder="$t('auth.passwordPlace')" name="password">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <img class="form_icon" :src="require('@/assets/imgs/lock.svg')" alt="">
                            <label for=""> {{ $t('auth.conPass') }} </label>
                            <input type="password" class="form-control job_form" v-model="password_confirmation" :placeholder="$t('auth.conPlc')" name="password_confirmation">
                        </div>
                    </div>

                </div>
            </form>
        </section>

        <!-- permissions process  -->
        <section class="permissions mt-3 addForm px-3 pt-3 pb-3">

            <!-- header  -->
            <div class="flex_between border-bottom pb-2">
                <p class="fw-6 fs-15"> {{ $t('emp.permissions') }} :  </p>
                <!-- check all permissions  -->
                <div class="grayBack px-3 pt-2 pb-2 br-3">
                    <div class="form-group align-items-center">
                        <input 
                            type="checkbox" 
                            id="check_all_permissions" 
                            name="" 
                            class="check_all_permissions"
                            v-model="toggleAllGroupsModal"
                            @change="toggleAllGroups"
                        >
                        <label for="check_all_permissions" class="fw-6 mx-2"> {{ $t('emp.selectAll') }} </label>
                    </div>  
                </div>
            </div>

            <!-- permissions cards  -->
            <div class="row mt-3">
                <!-- single permission card => advertisement -->
                <div class="col-md-4 mb-2">
                    <section class="single_permission br-5">
                        <div class="flex_between align-items-baseline border-bottom pb-2 pt-2 px-2">
                            <p class="fw-6 fs-15"> {{ $t('home.ad') }} </p>
                            <div class="grayBack px-3 pt-2 pb-2 br-3">
                                <div class="form-group align-items-center">
                                <input
                                    type="checkbox"
                                    id="check_all"
                                    name=""
                                    v-model="checkAll"
                                    @change="toggleAllCheckboxes"
                                    
                                    class="check_all_permissions"
                                />
                                <label for="check_all" class="fw-6 mx-2">{{ $t('emp.selectAll') }}</label>
                                </div>
                            </div>
                        </div>

                        <div class="pb-2 pt-2 px-2">
                        <div class="form-group mb-2" v-for="perm in permissions.advertisement" :key="perm">
                            <input
                            type="checkbox"
                            name=""
                            v-model="checkedPermissions[perm]"
                            :id="perm"
                            :data-perm="Object.keys(permissions)[0]+':'+perm"
                            class="perm_check perm_custom"
                            />
                            <label :for="perm" class="fw-6 mx-2">{{ perm }}</label>
                        </div>
                        </div>
                    </section>
                </div>

                <!-- single permission card => company -->
                <div class="col-md-4 mb-2" >
                    <section class="single_permission br-5">
                        <div class="flex_between align-items-baseline border-bottom pb-2 pt-2 px-2">
                        <p class="fw-6 fs-15"> {{  $t('home.company')  }}  </p>
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
                            <label for="check_all'" class="fw-6 mx-2"> {{ $t('emp.selectAll') }} </label>
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
                                    :data-perm="Object.keys(permissions)[1]+':'+perm"
                                    class="perm_check1 perm_custom"
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
                        <p class="fw-6 fs-15"> {{  $t('home.sub')  }}  </p>
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
                            <label for="check_all'" class="fw-6 mx-2"> {{ $t('emp.selectAll') }} </label>
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
                                    :data-perm="Object.keys(permissions)[2]+':'+perm"
                                    class="perm_check2 perm_custom"
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
                        <p class="fw-6 fs-15"> {{  $t('home.job_add')  }}  </p>
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
                            <label for="check_all'" class="fw-6 mx-2"> {{ $t('emp.selectAll') }} </label>
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
                                    :data-perm="Object.keys(permissions)[3]+':'+perm"
                                    class="perm_check3 perm_custom"
                                >
                                <label :for="perm" class="fw-6 mx-2"> {{  perm  }} </label>
                            </div>
                        </div>
                    </section>
                </div>
                
            </div>

        </section>

        <!-- save changes  -->
        <div class="flex_center mt-3 mb-3" v-if="isEdit==false">
            <button class="main_btn pt-2 pb-2 px-5 w-25" @click.prevent="storeEmp" :disabled="disabled"> 
                <span v-if="!disabled"> {{ $t('auth.saveChanges') }} </span>
                <div class="spinner-border" role="status" v-if="disabled">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </button>
        </div>
        <!-- save changes  -->
        <div class="flex_center mt-3 mb-3" v-else-if="isEdit==true">
            <button class="main_btn pt-2 pb-2 px-5 w-25" @click.prevent="updateEmp" :disabled="disabled"> 
                <span v-if="!disabled"> {{ $t('auth.saveChanges') }} </span>
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
import axios from 'axios';

export default {
    data(){
        return{
            password : '',
            password_confirmation : '',
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

            checkedPerms : [],

            toggleAllGroupsModal : false,

            employee : null,

            name : '',
            transfer_no : '',
            isEdit : false

            // permissions : []
        }
    },
    computed:{
        permissions(){
            return this.$store.state.permissions
        },

    },
    watch:{
        checkedPermissions: {
            
            handler() {
                if( Object.values(this.checkedPermissions).length == this.permissions.advertisement.length  ){
                    this.checkAll = Object.values(this.checkedPermissions).every((isChecked) => isChecked);                    
                }
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
                if( Object.values(this.checkedPermissions1).length == this.permissions.company.length  ){
                    this.checkAll1 = Object.values(this.checkedPermissions1).every((isChecked) => isChecked);
                }
                for (const key in this.checkedPermissions1) {
                    if (this.checkedPermissions1[key]) {
                        this.checkedPerms.push(`company:${key}`);
                    }
                }
                
                this.checkedPerms = [...new Set(this.checkedPerms)];
                // console.log(this.checkedPerms)
            },
            deep: true,
        },
        checkedPermissions2:{
            handler() {
                if( Object.values(this.checkedPermissions2).length == this.permissions.subscription.length  ){
                    this.checkAll2 = Object.values(this.checkedPermissions2).every((isChecked) => isChecked);
                }
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
                if( Object.values(this.checkedPermissions3).length == this.permissions.job_application.length  ){
                    this.checkAll3 = Object.values(this.checkedPermissions3).every((isChecked) => isChecked);
                }
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
            allCheckboxes.forEach((checkbox) => {
                checkbox.checked = this.checkAll || false;
            });
            if( this.checkAll == true ){
                for( let i = 0 ; i < this.permissions.advertisement.length ; i++ ){
                    this.checkedPerms.push(`advertisement:${this.permissions.advertisement[i]}`)
                }
            }else if(this.checkAll == false ){
                for( let i = 0 ; i < this.permissions.advertisement.length ; i++ ){
                    this.checkedPerms.pop(`advertisement:${this.permissions.advertisement[i]}`)
                }
            }
            
            
            console.log(this.checkedPerms)
        },
        toggleAllCheckboxes1() {
            const allCheckboxes = document.querySelectorAll('.perm_check1');
            allCheckboxes.forEach((checkbox) => {
                checkbox.checked = this.checkAll1 || false;
            });
            if( this.checkAll1 == true ){
                for( let i = 0 ; i < this.permissions.company.length ; i++ ){
                    this.checkedPerms.push(`company:${this.permissions.company[i]}`)
                }
            }else if(this.checkAll1 == false ){
                for( let i = 0 ; i < this.permissions.company.length ; i++ ){
                    this.checkedPerms.pop(`company:${this.permissions.company[i]}`)
                }
            }
            
            
            console.log(this.checkedPerms)

        },
        toggleAllCheckboxes2() {
            const allCheckboxes = document.querySelectorAll('.perm_check2');
            allCheckboxes.forEach((checkbox) => {
                checkbox.checked = this.checkAll2 || false;
            });

            if( this.checkAll2 == true ){
                for( let i = 0 ; i < this.permissions.subscription.length ; i++ ){
                    this.checkedPerms.push(`subscription:${this.permissions.subscription[i]}`)
                }
            }else if(this.checkAll2 == false ){
                for( let i = 0 ; i < this.permissions.subscription.length ; i++ ){
                    this.checkedPerms.pop(`subscription:${this.permissions.subscription[i]}`)
                }
            }
            
            
            console.log(this.checkedPerms)
        },
        toggleAllCheckboxes3() {
            const allCheckboxes = document.querySelectorAll('.perm_check3');
            allCheckboxes.forEach((checkbox) => {
            checkbox.checked = this.checkAll3 || false;
            });

            if( this.checkAll3 == true ){
                for( let i = 0 ; i < this.permissions.job_application.length ; i++ ){
                    this.checkedPerms.push(`job_application:${this.permissions.job_application[i]}`)
                }
            }else if(this.checkAll3 == false ){
                for( let i = 0 ; i < this.permissions.job_application.length ; i++ ){
                    this.checkedPerms.pop(`job_application:${this.permissions.job_application[i]}`)
                }
            }

        },

        //toggle check all permissions in the page 
        toggleAllGroups(){
            // for( let i = 0 ; i < this.permissions.advertisement.length ; i++ ){
            //     this.checkedPerms.push(`advertisement:${this.permissions.advertisement[i]}`)
            // }
            // for( let i = 0 ; i < this.permissions.company.length ; i++ ){
            //     this.checkedPerms.push(`company:${this.permissions.company[i]}`)
            // }
            // for( let i = 0 ; i < this.permissions.subscription.length ; i++ ){
            //     this.checkedPerms.push(`subscription:${this.permissions.subscription[i]}`)
            // }
            // for( let i = 0 ; i < this.permissions.job_application.length ; i++ ){
            //     this.checkedPerms.push(`job_application:${this.permissions.job_application[i]}`)
            // }
                this.checkAll = true ;
                this.checkAll1 = true ;
                this.checkAll2 = true ;
                this.checkAll3 = true ; 
                this.toggleAllCheckboxes()
                this.toggleAllCheckboxes1()
                this.toggleAllCheckboxes2()
                this.toggleAllCheckboxes3()
                            console.log(this.checkedPerms)
 
        },

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
                }, 1000);
                
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }

            console.log(fd)
        },

        // update employee 
        async updateEmp(){
            this.disabled = true ;
            const fd = new FormData(this.$refs.storeEmp);
            // if( this.PicImage ){
            //     fd.append('image' , this.PicImage)
            // }
            if( this.password ){
                fd.append('password' , this.password)
            }
            if( this.password_confirmation ){
                fd.append('password_confirmation' , this.password_confirmation)
            }
            for( let i = 0 ; i < this.checkedPerms.length ; i++ ){
                fd.append( `permissions[${i}]` , String(this.checkedPerms[i]) )
            }
            fd.append('device_type', 'web');
            fd.append('device_id', localStorage.getItem('device_id'));
            fd.append('employee_id', this.$route.params.id);

            const response = await this.$store.dispatch('editEmp', fd);
            if( response.success === true ){
                this.$toast.add({ severity: 'success', summary: response.message, life: 3000 });
                this.disabled = false ;
                setTimeout(() => {
                    this.getEmpDetails();
                }, 1000);
                
            }else{
                this.$toast.add({ severity: 'error', summary: response.message, life: 3000 });
                this.disabled = false ;
            }
        },

        // get emp details ( for emp details ) 
        async getEmpDetails(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const fd = new FormData();
            fd.append('employee_id', this.$route.params.id)

            await axios.post('company/employees/show', fd , {headers})
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.employee = res.data.data ;
                    this.name = res.data.data.name ;
                    this.transfer_no = res.data.data.phone ;
                    this.checkedPerms = res.data.data.permissions ;
                    this.ifUploaded2 = false ;
                    this.PicImage = res.data.data.image ;
                    console.log(this.checkedPerms);
                    setTimeout(() => {
                        this.setCheckboxesBasedOnCheckedPerms()
                    }, 500);
                    
                }
            } )

        },

        // set checkboxes that exist in checkedPerms as checked 
        setCheckboxesBasedOnCheckedPerms() {
            const checkboxes = document.querySelectorAll('.perm_custom');
        
            this.checkedPerms.forEach((perm) => {
                console.log(perm)
                checkboxes.forEach((checkbox) => {
                    console.log(checkbox.getAttribute('data-perm'))

                    // Check if the data-perm attribute matches the perm
                    if (checkbox.getAttribute('data-perm') === perm) {
                        console.log('checked done')
                        checkbox.checked = true;
                    }
                });
            });
        }


    },
    created(){
        this.$store.dispatch('getPermissions')
    },
    mounted(){
        if( this.$route.fullPath.includes('editEmp') ){
            this.getEmpDetails();
            this.isEdit = true ;
        }
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