<template>
<v-dialog v-if="opendialog">
  <template>
    <v-row justify="center">
      <v-col>
        <v-text-field
            label="Outlined"
            color="lime accent-2"
            outlined
            @click="time_picer=true"
        ></v-text-field>
        <v-time-picker
            v-if="time_picer"
            v-model="e7"
            format="24hr"
        >
          <v-bnt @click="time_picer=false">close</v-bnt>
        </v-time-picker>
      </v-col>
    </v-row>
  </template>
</v-dialog>
</template>

<script>
export default {
  data:()=>{
    return{
      time_picer:false,
      opendialog:false
    }
  },
  methods:{
    timepicker(){
      this.opendialog=true
    }
  }
}
</script>

<style scoped>

</style>