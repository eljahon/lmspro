<template>
  <v-row justify="center">
    <v-date-picker v-model="picker"></v-date-picker>
  </v-row>

</template>

<script>

export default {

name: "datasana",
  data:()=>{
  return {
    newdatapicker:false,
    picker: new Date().toISOString().substr(0, 10),
  }
  }
}
</script>

<style scoped>

</style>