<template>
<v-app>
  <img :src="Img" alt=" this img ">
</v-app>
</template>

<script>
import img from '../assets/404-pages-850x365.jpg'
export default {
data:()=>{
  return{
    Img:img
  }
}
}
</script>

<style scoped>

</style>