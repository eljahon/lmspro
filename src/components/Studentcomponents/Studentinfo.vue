
<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="390"
        style="height:350px;"

    >
      <template>

      </template>
      <v-card>
        <v-card-title class="headline">
          <v-row>
            <v-col cols="10"> <span>Roomsinfo</span>
            </v-col>
            <v-col cols="2">
               <span style="float: left"
                     @click="dialog = false"><v-icon>mdi-close-thick</v-icon>
               </span></v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">




            </v-col>


            <v-col cols="6">
              <br>
              <v-col cols="12" > <span> <v-chip color="indigo">Activated</v-chip></span></v-col>
              <v-col cols="12" > <span> <v-chip color="yellow">100%</v-chip></span></v-col>
            </v-col>
          </v-row>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {

  data(){
  return {
    dialog:false

  }

  },
  methods:{
    toploader(){
      this.dialog=true

  }

  },
}
</script>

<style scoped>

</style>
