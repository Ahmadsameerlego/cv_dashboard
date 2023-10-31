<template>
  <router-view/>
</template>
<script>
  export default{
     mounted(){  
      if (localStorage.getItem("locale") == "en") {
        document.querySelector("body").classList.add("ltr");
      } else {
        document.querySelector("body").classList.remove("ltr");
      }
    }
  }
</script>
<style lang="scss">

</style>
