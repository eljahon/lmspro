<template>
  <Dialog v-if="losder" />
<h1 v-else>Teachers........</h1>
</template>

<script>
import Dialog from '../../components/loadeng/loadeng'
export default {
  components:{ Dialog},
data:()=>{
  return {
    losder:true
  }
},
  beforeMount() {
  setTimeout(()=>{
    this.losder=!this.losder
  },1000)
  }
}
</script>

<style scoped>

</style>