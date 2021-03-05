<template>
  <v-row justify="center">
    <v-dialog
        v-model="open"
        persistent
        max-width="600px"
    >
      <v-card :loading="loader" active-class="22" color="deep-purple lighten-5">
        <v-card-title class="title">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8"><span class="headline">New Room Add vue components</span>
            </v-col>
            <v-col cols="2">
              <span style="float: right"
                    @click="open = false">
                <v-icon>mdi-close-thick</v-icon>
              </span></v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="6">
                <v-text-field
                    label="new room name"
                    outlined
                    dense
                    v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="3"></v-col>
              <v-col cols="3"></v-col>
              <v-col cols="6">
                <v-text-field
                    label="range"
                    outlined
                    dense
                    v-model="number"
                ></v-text-field>
              </v-col>
              <!--              begin exam text-->
              <v-col cols="12">
                <v-row>
                  <v-col cols="4"></v-col>
                  <v-col cols="4"><span style="color: #7C4DFF">Begin Lesson</span></v-col>
                  <v-col cols="4"></v-col>
                </v-row>
              </v-col>
              <v-row>

                <v-col cols="4">
                  <v-select
                      :items="days"
                      label="Solo field"
                      solo
                      v-model="days"
                      outlined
                      background-color="deep-purple lighten-5"
                  ></v-select>

                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="beginHour"
                      outlined
                      dense
                      v-model="beginhour"
                  ></v-text-field></v-col>
                <v-col cols="4">
                  <v-text-field
                      label="beginMinute"
                      outlined
                      dense
                      v-model="beginminute"

                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                      label="finishHour"
                      outlined
                      dense

                  ></v-text-field></v-col>
                <v-col cols="4">
                  <v-text-field
                      label="finishMinute"
                      outlined
                      dense

                  ></v-text-field></v-col>
                <v-col cols="4">
                  <v-text-field
                      label="duringTime"  outlined  dense

                  ></v-text-field>

                </v-col>
              </v-row>




            </v-row>
          </v-container>
          <small>*indicates required field</small>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!--          new room add button save  -->
          <v-btn
              color="blue darken-1"
              text
              @click="newaddroom()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapActions} from "vuex";


export default {

  data() {
    return {
      beginday:"",
      beginhour:'',
      beginminute:'',
      name: '',
      number: '',
      picker: new Date().toISOString().substr(0, 10),
      open: false,
      loader: false,
      days:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    }
  },
  methods: {

    opendialog() {
      this.open = true;
    },
    // newaddroom() {
    //   this.loader=!this.loader;
    //   // /* eslint-disable no-debugger */
    //   // debugger
    //   let room = {
    //     address: this.name,
    //     learningCentreId: localStorage.getItem("learningCentresid"),
    //     promisedTimeSlots: [],
    //     range: this.number
    //   }
    //   let res = this.$store.dispatch("createRoom", room)
    //       .finally(() => {
    //         this.loader = false
    //         this.open = false
    //       })
    //   console.log(res)
    // },
      // updateRoom(index){
      //
      //   console.log(index)
      //
      // }

  },
  computed:{

  }

}
</script>

<style scoped>
.title {
  background-color: #9C27B0;
}
</style>