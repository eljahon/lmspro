<template>
 
  <v-app>
    <Dialog v-if="losder" />
    </v-app>
  
</template>

<script>
import Dialog from '../components/loadeng/loadeng'
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
