<template>
  <v-row justify="center">
    <v-dialog
        v-model="open"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-card-title class="title">
          <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4"><span class="headline">New Room Add</span>
            </v-col>
            <v-col cols="4"><span style="float: right" @click="open = false"><v-icon>mdi-close-thick</v-icon></span>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="6">
                <v-text-field
                    label="address"
                    outlined
                    value="address"
                    v-model="adress"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <!--                input password-->
                <v-text-field
                    label="range"
                    type="number"
                    outlined
                    v-model="rang"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="Legal first name*"
                    outlined
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="Legal middle name"
                    hint="Tjum se hei piar Sokhib"
                    outlined
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    outlined
                    @click="opentimedialog()"
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer>{{ adress }} : {{ rang }}</v-spacer>
          <!--          update button-->
          <v-btn
              color="blue darken-1"
              text
              @click="updetRoomActions()"
          >
            Update
          </v-btn>
          <!--          save button-->
          <v-btn
              color="blue darken-1"
              text
              @click="open = false"
          >
            Save
          </v-btn>

        </v-card-actions>

      </v-card>
    </v-dialog>
    <TimePicker ref="time_picker"/>
  </v-row>

</template>

<script>
import TimePicker from '../../components/timepicker/timepicker'
import {mapGetters} from 'vuex'

export default {
  components: {TimePicker},
  data() {
    return {
      adress: '',
      rang: '',
      open: false,
      date: new Date().toISOString().substr(0, 7),
      e7: null,
      time_picer: false,
      Id: null
    }
  },
  methods: {
    show() {
      this.open = true;

    },
    updateRoom(index, id) {

      this.Id = id
      this.adress = this.roominfo[index].address;
      this.rang = this.roominfo[index].range;
    },
    updetRoomActions() {

      // debugger
      let rooms = {
        id: this.Id,
        room: {
          address: this.adress,
          id: this.Id,
          learningCentreId: localStorage.getItem("learningCentresid"),
          promisedTimeSlots: [],
          range: this.rang
        }
      }


      this.$store.dispatch("updateRoom", rooms)
          .then()
          .finally(() => {
            this.open = false
          })

    },
    opentimedialog() {
      this.$refs.time_picker.timepicker()

    }
  },
  computed: {
    ...mapGetters(["roominfo"])
  }
}
</script>

<style scoped>
.title {
  background-color: #76FF03;
}
</style>