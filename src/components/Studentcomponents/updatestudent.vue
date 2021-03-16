<template>
  <v-app>
    <Dialog v-if="loading" />
    <v-row justify="center">
      <v-dialog
          v-model="open"
          persistent
          max-width="600px"

      >
        <v-card :loading="loader" active-class="22" color="white">
          <v-card-title class="title">
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8"><span class="headline">New Students Add vue components</span>
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
                <v-row class="mt-5">
                  <!--             firstname and lastname-->
                  <v-col cols="1"></v-col>
                  <v-col cols="5">
                    <v-text-field
                        label="firstname"
                        outlined
                        dense
                        v-model="firstname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                        label="lastname"
                        outlined
                        dense
                        v-model="lastname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="1"></v-col>
                </v-row>
                <v-row class="mt-5" v-if="true">
                  <v-col cols="1"></v-col>
                  <v-col cols="5">
                    <v-text-field
                        label="login"
                        outlined
                        dense
                        v-model="login"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                        label="password"
                        outlined
                        dense
                        type="password"
                        v-model="username"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="1"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col cols="5">
                    <v-text-field
                        label="Retry_password"
                        outlined
                        dense
                        v-model="Retry_password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5"></v-col>
                  <v-col cols="1"></v-col>
                </v-row>

                <v-row>

                  <v-col cols="10">Subject</v-col>
                  <v-col cols="2">
                    <template>
                      <div class="text-center d-flex align-center justify-space-around">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                dark
                                plain
                                v-bind="attrs"
                                v-on="on"
                                @click="subjectcreate++"
                            >
                              <v-icon>mdi-book-check-outline</v-icon>
                            </v-btn>
                          </template>
                          <span>subject create</span>
                        </v-tooltip>


                        <v-tooltip bottom>

                          <span>Tooltip</span>
                        </v-tooltip>
                      </div>
                    </template>
                  </v-col>
                  <v-row v-for="(i ,index) in subjectcreate" :key="index">
                    <v-col cols="12">
                      <v-icon @click="subjectcreate--" color="red">mdi-window-close</v-icon>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                          v-model="subjectselect"
                          :items="subjectlistname()"
                          item-text="name"
                          item-value="subjectId"
                          dense
                          outlined
                          label="Subject"
                          single-line
                      ></v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                          v-model="level"
                          :items="Level"
                          item-text="state"
                          item-value="id"
                          dense
                          outlined
                          label="Level"
                          single-line
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          label="Comment"
                          outlined dense
                          v-model="comment"
                      ></v-text-field>
                    </v-col>
                  </v-row>


                  <v-col cols="5">Free times</v-col>
                  <v-col cols="5"></v-col>
                  <v-col cols="2">
                    <template>
                      <div class="text-center d-flex align-center justify-space-around">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                dark
                                plain
                                v-bind="attrs"
                                v-on="on"
                                @click="counter++"
                            >
                              <v-icon>mdi-domain-plus</v-icon>
                            </v-btn>
                          </template>
                          <span>subject create</span>
                        </v-tooltip>


                        <v-tooltip bottom>

                          <span>Tooltip</span>
                        </v-tooltip>
                      </div>
                    </template>
                  </v-col>
                </v-row>


                <v-row v-for="item in counter" :key="item">
                  <v-col cols="12">
                    <v-icon @click="counter--" color="red">mdi-window-close</v-icon>
                  </v-col>
                  <v-col cols="3">
                    <template>

                      <v-dialog
                          ref="dialog"
                          v-model="modal2"
                          :return-value.sync="begintime"
                          persistent
                          width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                              v-model="begintime"
                              label=" Begin time"
                              prepend-inner-icon="mdi-clock-time-four-outline"
                              outlined
                              dense
                              readonly
                              v-bind="attrs"
                              v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                            v-if="modal2"
                            v-model="begintime"
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
                              @click="save(begintime)"
                          >
                            OK
                          </v-btn>
                        </v-time-picker>
                      </v-dialog>
                    </template>

                  </v-col>
                  <v-col cols="3">
                    <template>

                      <v-dialog
                          ref="finishdialog"
                          v-model="finishmenu"
                          :return-value.sync="finishtime"
                          persistent
                          width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                              v-model="finishtime"
                              label=" Finish  time"
                              prepend-inner-icon="mdi-clock-time-four-outline"
                              outlined
                              dense
                              readonly
                              v-bind="attrs"
                              v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                            v-if="finishmenu"
                            v-model="finishtime"
                            full-width
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                              text
                              color="primary"
                              @click="finishmenu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                              text
                              color="primary"
                              @click="finish(finishtime)"
                          >
                            OK
                          </v-btn>
                        </v-time-picker>
                      </v-dialog>
                    </template>

                  </v-col>
                  <v-col cols="3">
                    <v-select
                        v-model="beginselectday"
                        :items="beginday"
                        item-text="state"
                        item-value="state"
                        dense
                        outlined
                        label="Begin Day"
                        single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="3">
                    <v-select
                        v-model="finishselectday"
                        :items="finishday"
                        item-text="state"
                        item-value="state"
                        dense
                        outlined
                        label="Finesh Day"
                        single-line
                    ></v-select>
                  </v-col>

                </v-row>


              </v-row>
            </v-container>


          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" plainm @click="clear()">clear</v-btn>
            <v-spacer></v-spacer>
            <!--          new room add button save  -->
            <v-btn
                color="blue darken-1"
                text
                @click="studentcreate()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-dialog>
    </v-row>
  </v-app>

</template>

<script>

import  {mapGetters} from 'vuex'
import Dialog from '../../components/loadeng/loadeng'
export default {
  components:{
    Dialog
  },
  data() {
    return {
      comment: '',
      beginselectday: '',
      finishmenu: false,
      finishtime: null,
      begintime: null,
      modal2: false,
      subjectselect: "",
      level: '',
      subjectcreate: 1,
      counter: 1,
      log: false,
      login: '',
      Retry_password: '',
      username: '',
      lastname: '',
      firstname: '',
      number: '',
      open: false,
      loader: false,
      loading:false,
      finishselectday: "",
      beginday: [{state: "MONDAY"}, {state: "TUESDAY"}, {state: "WEDNESDAY"},
        {state: "THURSDAY"}, {state: "FRIDAY"}, {state: "SATURDAY"}, {state: "SUNDAY"}],
      finishday: [{state: "MONDAY"}, {state: "TUESDAY"}, {state: "WEDNESDAY"},
        {state: "THURSDAY"}, {state: "FRIDAY"}, {state: "SATURDAY"}, {state: "SUNDAY"}],
      subjectitems: [
        {state: "Matematika"},
        {state: "Ona tili"},
        {state: "Biologiya"},
        {state: "Ingliz tili"},
        {state: "Tarix"},
        {state: "Fizika"}],
      Level: [
        {state: "Beginner",id:1},
        {state: "Advanced",id:2},

      ]

    }
  },
  methods: {
    ...mapGetters(["studentinfo"]),
    studentcreate() {
      this.loading=!this.loading
      let time = this.begintime.split(":", 2);
      let fintime = this.finishtime.split(":", 2);

      if (parseInt(fintime[0]) > parseInt(time[0])) {
        console.log(" true")
      } else {
        console.log("flase")
      }
      let student = {
        firstName: this.firstname,
        lastName: this.lastname,
        learningCentreId: localStorage.getItem("learningCentresid"),
        password:this.username,
        // marketPlaceId: localStorage.getItem("marketplaceId"),
        promisedtimeSlots: [{
          beginDay: this.beginselectday.state,
          beginHour: parseInt(time[0]),
          beginMinute: parseInt(time[1]),
          finishDay: this.finishselectday.state,
          finishHour: parseInt(fintime[0]),
          finishMinute: parseInt(fintime[1])
        }],

        subjectsWithLevel: [{
          subjectId:this.subjectselect,
          levelId:this.level  ,
          comment: this.comment,
          disabled:true
        }],
        username: this.login
      }
      this.$store.dispatch("createStudent", student)
          .finally(()=>{
            this.loading=!this.loading;
            this.open=!this.open;
          })

    },
    clear() {
      this.login = '';
      this.comment = '';
      this.finishtime = null;
      this.begintime = null;
      this.lastname = "";
      this.firstname = "";
      this.username = '';
      this.beginday.state = '';
      this.finishday.state = '';
      this.level = '';
      this.password = '';
      this.Retry_password = "";
      this.subjectitems.state = '';
    },
    save(time) {
      this.$refs.dialog[0].save(time)
    },
    finish(finish) {
      this.$refs.finishdialog[0].save(finish)
    },
    opendialog(index) {
      this.open = true;
      this.firstname=this.studentinfo[index].firstName;
      this.lastname=this.studentinfo[index].lastName;

    },
    dataopendilalog() {
      this.$refs.data.open()
    },
    data() {
      this.$refs.data.open();
    },


  },
  computed: {},
  watch: {
    begintime(val) {
      let res = val.split(":", 2);
      console.log(typeof (res[0]));
    }
  },
  updated() {
    console.log(this.subjectlistname());
    console.log(this.subjectselect)
    console.log(this.level)
  }


}
</script>

<style scoped>
.title {
  background-color: #9C27B0;
}
</style>
