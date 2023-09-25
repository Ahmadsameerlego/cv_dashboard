<template>
    <section class="pt-3 pb-3 px-3">
        <h6 class="fw-bold mainColor"> الرسائل </h6>
        <p class="fw-6 grayColor">
            يتم هنا عرض جميع الرسائل الخاصة بك
        </p>
        <!-- all rooms  -->
        <section class="allRooms mt-3">
            <div class="row">
                <div class="col-md-9 mb-3" v-for="room in rooms" :key="room.id">

                    <router-link :to="'/chat/'+room.id" class="colorInherit">
                        <!-- single room  -->
                        <section class="room pt-3 pb-3 px-3 position-relative d-flex align-items-center">
                            <!-- chat image  -->
                            <div class="chat_image">
                                <img :src="room.members[0].image" alt="chat room image">
                            </div>
                            <!-- chat image  -->
                            <div class="chat_details mx-3">
                                <h5 class="fw-bold mb-3"> {{ room.members[0].name }} </h5>
                                <p class="grayColor fs-16 fw-6"> 
                                    {{ room.last_message_body }}
                                </p>
                            </div>

                            <!-- absolute  -->

                            <!-- unreadCounter  -->
                            <div class="unread_count br-50 flex_center whiteColor">
                                2
                            </div>

                            <!-- time  -->
                            <div class="time d-flex">
                                <img :src="require('@/assets/imgs/clock.svg')" alt="">
                                <span class="grayColor mx-2"> {{ room.last_message_created_dt  }} </span>
                            </div>
                        </section>
                    </router-link>
                    

                </div>
            </div>
        </section>
    </section>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        rooms(){
            return this.$store.state.rooms;
        }
    },
    created(){
        this.$store.dispatch('getchatRooms');
    }
}
</script>

<style lang="scss">
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