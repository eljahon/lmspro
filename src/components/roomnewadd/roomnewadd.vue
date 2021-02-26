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
            <v-col cols="4"></v-col>
            <v-col cols="4"><span class="headline">New Room Add</span>
            </v-col>
            <v-col cols="4">
              <span style="float: right"
                    @click="open = false">
                <v-icon>mdi-close-thick</v-icon>
              </span></v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <!--              <v-col-->
              <!--                  cols="12"-->
              <!--                  sm="6"-->
              <!--                  md="4"-->
              <!--              >-->
              <!--                <v-text-field-->
              <!--                    label="Legal first name*"-->
              <!--                    required-->
              <!--                ></v-text-field>-->
              <!--              </v-col>-->
              <!--              <v-col-->
              <!--                  cols="12"-->
              <!--                  sm="6"-->
              <!--                  md="4"-->
              <!--              >-->
              <!--                <v-text-field-->
              <!--                    label="Legal middle name"-->
              <!--                    hint="example of helper text only on focus"-->
              <!--                ></v-text-field>-->
              <!--              </v-col>-->
              <!--              <v-col-->
              <!--                  cols="12"-->
              <!--                  sm="6"-->
              <!--                  md="4"-->
              <!--              >-->
              <!--                <v-text-field-->
              <!--                    label="Legal last name*"-->
              <!--                    hint="example of persistent helper text"-->
              <!--                    persistent-hint-->
              <!--                    required-->
              <!--                ></v-text-field>-->
              <!--              </v-col>-->
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
              <v-col cols="3"></v-col>
              <v-col cols="4"
                     sm="6">
                <v-select
                    label="Age*"
                    required>
                  <template>
                    <v-date-picker
                        v-model="picker"
                        color="green lighten-1"
                    ></v-date-picker>
                  </template>

                </v-select>
              </v-col>
              <v-col
                  cols="4"
                  sm="6"
              >
                <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                ></v-autocomplete>
              </v-col>

            </v-row>
          </v-container>
          <small>*indicates required field</small>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="open = false"
          >
            Update
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="roomnewadd()"
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
      name: '',
      number: '',
      picker: new Date().toISOString().substr(0, 10),
      open: false,
      loader: false
    }
  },
  methods: {
    ...mapActions(['createRoom']),
    show() {
      this.open = true;
    },
    roomnewadd() {

      this.loader = !this.loader;
      /* eslint-disable no-debugger */
      debugger
      let room = {
        address: this.name,
        learningCentreId: localStorage.getItem("learningCentresid"),
        promisedTimeSlots: [],
        range: this.number
      }

      let res = this.$store.dispatch("createRoom", room)
          // .finally(() => {
          //   this.loader = false
          //   this.open = false
          // })

      console.log(res)
    },

  }

}
</script>

<style scoped>
.title {
  background-color: #7C4DFF;
}
</style>