<template>
  <v-app>
    <Dialog v-if="loading"/>
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
              <v-col cols="8"><span class="headline">New Students updet vue components</span>
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
                          :items="subjectlistname"
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
                          :items="thislevel"
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
                        :items="thistoday"
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
                        :items="thistoday"
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

import {mapGetters} from 'vuex'
import Dialog from '../../components/loadeng/loadeng'

export default {
  components: {
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
      loading: false,
      finishselectday: "",
      subjects: []


    }
  },
  methods: {

    studentcreate() {
      this.loading = !this.loading
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
        password: this.username,
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
          subjectId: this.subjectselect,
          levelId: this.level,
          comment: this.comment,
          disabled: true
        }],
        username: this.login
      }
      this.$store.dispatch("createStudent", student)
          .finally(() => {
            this.loading = !this.loading;
            this.open = !this.open;
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

    dataopendilalog() {
      this.$refs.data.open()
    },
    subjectspush() {
      this.subjects.push({})
    },
    data() {
      this.$refs.data.open();
    },


  },
  computed: {
    ...mapGetters([
      "studentinfo",
      'subjectlistname',
      "thistoday",
      "thislevel"]),
  },
  watch: {
    begintime(val) {
      let res = val.split(":", 2);
      console.log(typeof (res[0]));
    }
  },
  updated() {
    // console.log(this.studentinfo[0])
    // console.log(this.subjectlistname);
    // console.log(this.subjectselect)
    // console.log(this.level)
  }


}
</script>
<template>
  <v-app>
    <Dialog v-if="loading"/>
    <v-form ref="form">
      <v-row justify="center">
        <v-dialog
            v-model="open"
            persistent
            max-width="600px"

        >
          <v-card :loading="loader" active-class="22" color="white">
            <v-card-title class="title">
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10"><span class="headline">New Students Add vue components</span>
                </v-col>
                <v-col cols="1">
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

                    <v-col cols="1"></v-col>
                    <!--                  firstname-->
                    <v-col cols="5">
                      <v-text-field
                          label="firstname"
                          outlined
                          :rules="validations.firstnameResuls"
                          dense
                          v-model="firstname"
                      ></v-text-field>
                    </v-col>
                    <!--                  lastname-->
                    <v-col cols="5">
                      <v-text-field
                          label="lastname"
                          outlined
                          :rules="validations.lastnameResuls"
                          dense
                          v-model="lastname"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="1"></v-col>
                  </v-row>
                  <v-row class="mt-5" v-if="true">
                    <v-col cols="1"></v-col>
                    <!--                  username-->
                    <v-col cols="5">
                      <v-text-field
                          :error="studenterr"
                          label="login"
                          outlined
                          hint="plase you this user from the past yes"
                          dense
                          :rules="validations.userlogin"
                          v-model="login"
                          @change="userauht"
                      ></v-text-field>
                    </v-col>
                    <!--                  password-->
                    <v-col cols="5">
                      <v-text-field
                          label="password"
                          outlined
                          dense
                          :rules="validations.validatorpassword"
                          type="password"
                          v-model="username"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="1"></v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="1"></v-col>
                    <!--                  Retry_password input -->
                    <v-col cols="5">
                      <v-text-field
                          label="Retry_password"
                          outlined
                          dense
                          :rules="validations.retrypassword"
                          v-model="Retry_password"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="5"></v-col>
                    <v-col cols="1"></v-col>
                  </v-row>

                  <v-row>

                    <v-col cols="10">Subject</v-col>
                    <!--                  subjectsWithLevel push button-->
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
                                  @click="addnewcomitandsubject()"
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
                    <v-row v-for="(item ,index) in subjectsWithLevel" :key="item[index]">
                      <!--                    subjectsWithLevel inside delet button-->
                      <v-col cols="12">
                        <v-icon @click="deletsubject(index)" color="red">mdi-window-close</v-icon>
                      </v-col>
                      <!--                    select subject name-->
                      <v-col cols="6">
                        <v-select
                            v-model="item.subjectId"
                            :items="subjectlistname"
                            item-text="name"
                            item-value="subjectId"
                            dense
                            @change="validator(item.subjectId)"
                            outlined
                            :error="diseble"
                            label="Subject"
                            single-line
                        ></v-select>
                      </v-col>
                      <!--                  subject   select level-->
                      <v-col cols="6">
                        <v-select
                            v-model="item.levelId"
                            :items="thislevel"
                            item-text="state"
                            item-value="id"
                            dense
                            outlined
                            label="Level"
                            single-line
                        ></v-select>
                      </v-col>
                      <!--                    subject inside commit input -->
                      <v-col cols="12">
                        <v-text-field
                            label="Comment"
                            outlined dense
                            v-model="item.comment"
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
                                  @click="promisedTimeSlots()"
                              >
                                <v-icon>mdi-domain-plus</v-icon>
                              </v-btn>
                            </template>
                            <span>free times</span>
                          </v-tooltip>


                          <v-tooltip bottom>

                            <span>Tooltip</span>
                          </v-tooltip>
                        </div>
                      </template>
                    </v-col>
                    <v-row v-for="(item,i ) in promisedtimeSlots" :key="'item' + i">
                      <!--promisedtimeSlots    array push button-->
                      <v-col cols="12">

                        <v-btn plain @click="promised(i)">
                          <v-icon color="red">mdi-window-close</v-icon>
                        </v-btn>

                      </v-col>
                      <!--beginhourdialog-->
                      <v-col cols="3">
                        <template>

                          <v-dialog
                              ref="dialog"
                              v-model="item.startDateModal"
                              :return-value.sync="item.begin"
                              persistent
                              width="290px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                  v-model="item.begin"
                                  label="Begin time"
                                  prepend-inner-icon="mdi-clock-time-four-outline"
                                  outlined
                                  dense
                                  :rules="validations.beginTime"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"

                              ></v-text-field>
                            </template>
                            <v-time-picker
                                v-if="item.startDateModal"
                                v-model="item.begin"
                                full-width
                            >
                              <v-spacer></v-spacer>
                              <v-btn
                                  text
                                  color="primary"
                                  @click="item.startDateModal = false"
                              >
                                Cancel
                              </v-btn>
                              <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.dialog[i].save(item.begin)"
                              >
                                OK
                              </v-btn>
                            </v-time-picker>
                          </v-dialog>
                        </template>

                      </v-col>
                      <!--  finishdialog-->
                      <v-col cols="3">
                        <template>

                          <v-dialog
                              ref="finishdialog"
                              v-model="item.endDateModal"
                              :return-value.sync="item.finish"
                              persistent
                              width="290px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                  v-model="item.finish"
                                  label=" Finish  time"
                                  prepend-inner-icon="mdi-clock-time-four-outline"
                                  outlined
                                  :rules="validations.finishTime"
                                  dense
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                              ></v-text-field>
                            </template>
                            <v-time-picker
                                v-if="item.endDateModal"
                                v-model="item.finish"
                                full-width
                            >
                              <v-spacer></v-spacer>
                              <v-btn
                                  text
                                  color="primary"
                                  @click="item.endDateModal = false"
                              >
                                Cancel
                              </v-btn>
                              <v-btn
                                  color="primary"
                                  @click="$refs.finishdialog[i].save(item.finish)"
                              >
                                OK
                              </v-btn>
                            </v-time-picker>
                          </v-dialog>
                        </template>

                      </v-col>
                      <!--beginday-->
                      <v-col cols="3">
                        <v-select
                            v-model="promisedtimeSlots[i].beginDay"
                            :items="thistoday"
                            item-text="state"
                            item-value="state"
                            dense
                            :rules="validations.beginDay"
                            outlined
                            label="Begin Day"
                            single-line
                        ></v-select>
                      </v-col>
                      <!--                    finishday-->
                      <v-col cols="3">
                        <v-select
                            v-model="promisedtimeSlots[i].finishDay"
                            :items="thistoday"
                            item-text="state"
                            item-value="state"
                            dense
                            :rules="validations.finishDay"
                            outlined
                            label="Finesh Day"
                            single-line
                        ></v-select>
                      </v-col>

                    </v-row>


                  </v-row>
                </v-row>


              </v-container>


            </v-card-text>
            <v-card-actions>
              <v-btn color="blue darken-1" plain @click="clear()">clear</v-btn>
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
    </v-form>
    <v-snackbar
        v-model="snackbar"
        color="success"
        outlined
        shaped
        left
    >
     plase you  input  required

      <template v-slot:action="{ attrs }">
        <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </v-app>

</template>

<script>

import {mapGetters} from 'vuex'
import Dialog from '../../components/loadeng/loadeng'
import LoginPage from "@/views/LoginPage";
import login from "@/store/Login/login";

export default {
  components: {
    Dialog
  },
  data() {
    return {
      snackbar:false,
      validations: {
        firstnameResuls: [
          f => !!f || "firstname is required"
        ],
        lastnameResuls: [
          l => !!l || "lastnamename is required"
        ],
        retrypassword: [
          l => !!l || "retrypassword is required",
          l => l == this.username || "kechrasiz qaytakiritgan passworda main passwordga teng emas "
        ],
        validatorpassword: [
          p => !!p || "password required",
          p => p.length >= 5 || "password  must be less than 5  characters"

        ],
        userlogin: [
          u => !!u || "plase you  new login input ",
          u => u == this.login || "plase you new login required "
        ],
        beginTime: [
          t => !!t || "plase you begintim required"
        ],
        beginDay: [
          bd => !!bd || "plase you beginDay to ghange "
        ],
        finishTime: [
          ft => !!ft || "plase you finishtime required",
        ],
        finishDay: [
          d => !!d || "plase you finishDay"
        ]
      },


      comment: '',
      beginselectday: '',
      finishmenu: false,
      // finishtime: null,
      // begintime: null,
      modal2: false,
      modal1: false,
      subjectId: "",
      levelId: '',
      counter: 0,
      log: false,
      login: '',
      Retry_password: '',
      username: '',
      lastname: '',
      firstname: '',
      number: '',
      diseble: false,
      open: false,
      loader: false,
      loading: false,
      finishselectday: "",
      itemsubject: {},
      subjectsWithLevel: [

      ],
      promisedtimeSlots: [],

    }
  },
  methods: {
    chengebegintime(time) {
      console.log(time)
    },

    promised(index) {
      this.promisedtimeSlots.splice(index, 1);
    },
    validator(id) {
      // validations functions
      let subj = this.subjectsWithLevel;

      if (subj == [] && subj.length == 1) {
        this.diseble = false;
      } else {
      }
      if (subj.length > 1) {
        let s = subj.map(e => e.subjectId);
        for (let i = 0; i < s.length; i++) {
          if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
            this.diseble = true
          } else {
            this.diseble = false;


          }
        }


      }
      console.log(id)

    },
    promisedTimeSlots() {
      this.promisedtimeSlots.push({
        startDateModal: false,
        endDateModal: false,
        begin: null,
        beginHour: null,
        beginMinute: null,
        finish: null,
        finishHour: null,
        finishMinute: null,
        beginDay: null,
        finishDay: null

      })
      console.log(this.promisedtimeSlots);

    },
    addnewcomitandsubject() {
      this.subjectsWithLevel.push({
        diseble: false,
        comment: null,
        levelId: null,
        disabled: true,
        subjectId: null
      });
      // console.log(this.subjectsWithLevel);


    },

    studentcreate() {
      this.snackbar=!this.snackbar
      this.$refs.form.validate(valid => {
        console.log('Valid FORM:', valid)
      })
      var newSubjectsArray=[...this.subjectsWithLevel];
      var  setNewArray=newSubjectsArray.map(e=>{
        return {
          comment:e.comment,
          levelId:e.levelId,
          disabled:e.disabled,
          subjectId:e.subjectId
        }


      })
      // console.log('Valid', this.$refs.form.validate())
      let newArray = [...this.promisedtimeSlots]
      let filteredTimeSlots = newArray.map(e => {
        return {
          beginHour: parseInt(e.begin.split(':')[0]),
          beginMinute: parseInt(e.begin.split(':')[1]),
          finishHour: parseInt(e.finish.split(':')[0]),
          finishMinute: parseInt(e.finish.split(':')[1]),
          beginDay: e.beginDay,
          finishDay: e.finishDay
        }
      });
      let student = {
        firstName: this.firstname,
        lastName: this.lastname,
        learningCentreId: localStorage.getItem("learningCentresid"),
        password: this.username,
        promisedtimeSlots: filteredTimeSlots,
        subjectsWithLevel:setNewArray,
        username: this.login
      }
      console.log(student)
      if (student.firstName!==""&&student.lastName!==""&&student.username!==""){
        this.snackbar=!this.snackbar
        this.$store.dispatch("updateStudent", student)
            .finally(() => {
              this.loading = !this.loading;
              this.open = !this.open;
            })
      }
      else{

        this.loading = !this.loading
      }

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

    finish(finish) {
      console.log(finish)

    },

    deletsubject(index) {
      console.log("salom")
      this.subjectsWithLevel.splice(index, 1);
      this.diseble = false;
    },
    userauht(val) {
      let user = {
        username: val
      }
      console.log(user.username);
      this.$store.dispatch("getLoginaAuht", user)
    },

    opendialog(data) {
      console.log(data)
      console.log(data.promisedTimeSlots)
      this.open = true;
      // console.log(index)
      this.firstname = data.firstName;
      this.lastname = data.lastName;
      this.login = data.username;
      this.promisedtimeSlots = data.promisedTimeSlots.map(e => {
        return {
          startDateModal: false,
          endDateModal: false,
          begin: (e.beginHour.toString().length === 1 ? ('0' + e.beginHour.toString()) : e.beginHour.toString()) + ':'
              + (e.beginMinute.toString().length === 1 ? ('0' + e.beginMinute.toString()) : e.beginMinute.toString()),
          finish: (e.finishHour.toString().length === 1 ? ('0' + e.finishHour.toString()) : e.finishHour.toString()) + ':'
              + (e.finishMinute.toString().length === 1 ? ('0' + e.finishMinute.toString()) : e.finishMinute.toString()),
          beginDay: e.beginDay,
          finishDay: e.finishDay
        }
      });
      this.subjectsWithLevel=data.subjectsWithPromisedLevels.map(e=>{
        return {
          subjectId:e.subjectId,
          levelId:e.levelId,
          comment:e.comment

        }
      })
    },
    dataopendilalog() {
      this.$refs.data.open()
    },
    data() {
      this.$refs.data.open();
    },
  },


  computed: {
    ...mapGetters(["subjectlistname", 'studenterr', 'thistoday', 'thislevel'])
  },
  watch: {
    subjects(val){
      console.log(val)
    },
    snackbar(val) {

      setTimeout(()=>{
        this.snackbar = false

      },2000)
    }
  }


}
</script>

<style scoped>
.title {
  background-color: #9C27B0;
}
</style>

<style scoped>
.title {
  background-color: #9C27B0;
}
</style>
