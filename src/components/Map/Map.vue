<template>
<v-app>
  <div>
    <h1>Your coonrdinates:</h1>
    <p>{{coonrdinates.lat}} Latitude ,{{coonrdinates.lng}} Longitude</p>
  </div>
</v-app>
</template>

<script>
export default {
data:()=>{
  return{
    coonrdinates:{
      lat:0,
      lng:0
    }
  }
},
  created() {
    this.$getLocation({})
    .then(coonrdinates=>{
      this.coonrdinates=coonrdinates
         })
      .catch(err=>alert(errs))
  }

}
</script>

<style scoped>

</style>
