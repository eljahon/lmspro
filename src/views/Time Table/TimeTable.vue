<template>
  <div>
    <Dialog v-if="losder" />
    <h1 v-else>Teachers........</h1>



    </div>

</template>

<script>
import Dialog from '../../components/loadeng/loadeng'
export default {
  components:{ Dialog},
  data:()=>{
    return {
      losder:true,
      menu2: false,
      time: null,

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
