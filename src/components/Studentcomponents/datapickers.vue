<template>
  <v-row justify="center">


    <v-dialog
        v-model="dialog"
        max-width="390"
    >
      <v-card>
        <v-card-title class="headline">

        </v-card-title>

        <v-card-text>
          <v-row
              justify="space-around"
              align="center"
          >
            <v-time-picker
                v-model="picker"
                scrollable
            ></v-time-picker>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>



          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      picker: null,
      dialog:false,
      // picker: new Date().toISOString().substr(0, 10),

  }
},
  methods:{
    open(){
      this.dialog=!this.dialog
    }
  }

}
</script>

<style scoped>

</style>