<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="690">

      <v-card color="deep-orange lighten-5">
        <v-card-title class="headline">new Teacher add</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="1"></v-col>
            <!--            firsname input add inside -->
            <v-col cols="5">
              <v-text-field
                  label="Firsname"
                  outlined
                  :dense="true"
                  v-model="firstname"
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                  label="Lastname"
                  dense
                  outlined
                  v-model="lastname"
              ></v-text-field>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1"></v-col>
            <!--            login input add inside -->
            <v-col cols="5">
              <v-text-field
                  label="Login"
                  :dense="true"
                  outlined
                  v-model="login"
              ></v-text-field>
            </v-col>
            <!--            password input add-->
            <v-col cols="5">
              <v-text-field
                  label="password"
                  outlined
                  :dense="true"
                  type="password"
                  v-model="password"
              ></v-text-field>
            </v-col>

            <v-col cols="1"></v-col>
            <v-col cols="4">
              <!--              begin lesson data day -->
              <template>
                <v-container fluid>
                  <!--                  select input -->
                  <v-row align="center">
                    <v-select
                        v-model="select"
                        :hint="`${select.state}`"
                        :items="beginday"
                        item-text="state"
                        item-value=""
                        label="beginDay"
                        persistent-hint
                        return-object
                        outlined
                        :dense="true"

                    ></v-select>

                  </v-row>
                </v-container>
              </template>
            </v-col>
            <!--            begin lesson hour-->
            <v-col cols="4">
            <template >
              <v-row>

                  <v-menu
                      ref="menu"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="time"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="time"
                          label="beginHour"
                          readonly
                          style="position: relative;top:13px;"
                          outlined
                          dense
                          v-bind="attrs"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                        v-if="menu2"
                        v-model="time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                    ></v-time-picker>
                  </v-menu>

                <v-spacer></v-spacer>

              </v-row>
            </template>
            </v-col>
            <v-col cols="4">
              <template>


                  <v-dialog
                      ref="dialog"
                      v-model="modal2"
                      :return-value.sync="time"
                      persistent
                      width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="time"
                          label="beginMinute"
                          dense
                          readonly
                          outlined
                          v-bind="attrs"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                        v-if="modal2"
                        v-model="time"
                        full-width

                    >
                      <v-spacer></v-spacer>
                      <v-btn
                          text
                          color="primary"
                          @click="modal2 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog.save(time)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>

              </template>

            </v-col>

<!--
                     finish lesson day-->
            <v-col cols="4">
              <template>
                <v-container fluid>
                  <!--               finishlesson     select input -->
                  <v-row align="center">
                    <v-select
                        v-model="finishselect"

                        :items="finishday"
                        item-text="state"
                        :hint="`${finishselect.state}`"
                        item-value=""
                        label="FinishDay"
                        outlined
                        persistent-hint
                        :dense="true"
                        return-object

                    ></v-select>
                  </v-row>
                </v-container>
              </template>
            </v-col>

            <v-col cols="4">
              <template >
                <v-row>

                  <v-menu
                      ref="menu"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="time"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="time"
                          label="beginHour"
                          readonly
                          outlined
                          style="position: relative;top:13px;"
                          dense
                          v-bind="attrs"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                        v-if="menu2"
                        v-model="time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                    ></v-time-picker>
                  </v-menu>

                  <v-spacer></v-spacer>

                </v-row>
              </template>
            </v-col>
            <v-col cols="4">
              <template>


                <v-dialog
                    ref="dialog"
                    v-model="modal2"
                    :return-value.sync="time"
                    persistent
                    width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="time"
                        label="beginMinute"
                        dense
                        readonly
                        outlined
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                      v-if="modal2"
                      v-model="time"
                      full-width

                  >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="modal2 = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(time)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>

              </template>

            </v-col>

          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" @click="createnewteacher()">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import login from "@/store/Login/login";

export default {
  data: () => {
    return {
      time: null,
      menu2: false,
      modal2: false,
      dialog: false,
      firstname: '',
      lastname: '',
      login: '',
      password: '',
      select: "",
      beginHour: 0,
      beginMinute: 0,
      finishselect: '',
      finishHour: 0,
      finishMinute: 0,
      username: '',

      beginday: [
        {state: 'Sunday'},
        {state: 'Monday'},
        {state: 'Tuesday'},
        {state: 'Wendesday'},
        {state: 'Thursday'},
        {state: 'Firday'},
        {state: 'Saturday'},
      ],
      finishday: [
        {state: 'Sunday'},
        {state: 'Monday'},
        {state: 'Tuesday'},
        {state: 'Wendesday'},
        {state: 'Thursday'},
        {state: 'Firday'},
        {state: 'Saturday'},
      ],
    }
  },
  methods: {
    open() {
      this.dialog = !this.dialog;
    },
    createnewteacher() {
      this.dialog = !this.dialog;
      let bdays=this.select.state;
      let fdays=this.finishselect.state;
      let teacher = {
        firstName: this.firstname,
        lastName: this.lastname,
        password: this.password,
        promisedTimeSlots: [
          {
            beginDay:bdays.toUpperCase(),
            beginHour: parseInt(this.beginHour),
            beginMinute: parseInt(this.beginMinute),
            finishDay:fdays.toUpperCase(),
            finishHour: parseInt(this.finishHour),
            finishMinute: parseInt(this.finishMinute)
          }
        ],
        subjectIds: [1],
        username: this.login,
      }
      console.log(teacher)
      this.$store.dispatch("createTeacher",teacher)
          .finally(() => {
            this.dialog = false;

          })
    }
  },

}
</script>

<style scoped>

</style>