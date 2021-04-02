<template>
  <v-app>
    <Dialog v-if="loading"/>
    <v-form ref="form">
      <v-row justify="center">
        <v-dialog
            v-model="opendialogteacher"
            persistent
            max-width="600px"

        >
          <v-card :loading="loader" active-class="22" color="white">
            <v-card-title class="title">
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10"><span class="headline">New Teacher Add vue components</span>
                </v-col>
                <v-col cols="1">
              <span style="float: right"
                    @click="opendialogteacher = false">
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

                      </v-col>
                      <!--                    subject inside commit input -->
                      <v-col cols="12">

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
                  @click="teachercreate()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-dialog>
      </v-row>
    </v-form>

  </v-app>

</template>

<script>

import {mapGetters ,mapActions} from 'vuex'
import Dialog from '../../components/loadeng/loadeng'
import LoginPage from "@/views/LoginPage";
import login from "@/store/Login/login";

export default {
  components: {
    Dialog
  },
  data() {
    return {
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
      opendialogteacher: false,
      loader: false,
      loading: false,
      finishselectday: "",
      itemsubject: {},
      subjectsWithLevel: [],
      promisedtimeSlots: [
        {
          startDateModal: false,
          endDateModal: false,
          begin: null,
          // beginHour: null,
          // beginMinute: null,
          finish: null,
          // finishHour: null,
          // finishMinute: null,
          beginDay: null,
          finishDay: null
        }
      ],

    }
  },
  methods: {
    ...mapActions(["getSubjectList"]),
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
        diseble:false,
        disabled: true,
        subjectId: null
      });
      // console.log(this.subjectsWithLevel);


    },

    teachercreate() {
      this.loading = !this.loading
      this.$refs.form.validate(valid => {
        console.log('Valid FORM:', valid)
      })
      var newSubjectsArray=[...this.subjectsWithLevel];
      var  setNewArray=newSubjectsArray.map(e=>{
        return e.subjectId



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
      let newteacher  = {
        firstName: this.firstname,
        lastName: this.lastname,
        learningCentreId: localStorage.getItem("learningCentresid"),
        password: this.username,
        promisedtimeSlots: filteredTimeSlots,
        subjectIds:setNewArray,
        username: this.login
      }
      console.log(newteacher)


       if (
           newteacher.firstName!==""
           &&newteacher.lastName!==""
           &&newteacher.learningCentreId!==0&&
           newteacher.promisedtimeSlots!==[]&&
           newteacher.subjectIds!==[]&&
           newteacher.username!==""){
         this.$store.dispatch("createTeacher", newteacher)
             .finally(() => {
               this.loading = !this.loading;
               this.open = !this.open;
             })

       }
       else{
         alert("siz malumaotlarning ixtiyori bitasini to'ldirmadingiz")
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
open(){
      this.opendialogteacher=!this.opendialogteacher
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

      this.$store.dispatch("getLoginaAuht", user)
    },

    opendialog() {
      this.open = true;
    },
    dataopendilalog() {
      this.$refs.data.open()
    },
    data() {
      this.$refs.data.open();
    },
  },
  mounted() {
    this.getSubjectList()
  },


  computed: {
    ...mapGetters(["subjectlistname", 'studenterr', 'thistoday', 'thislevel'])
  },
  watch: {

//     login: Debounce(1000){
//
// }


    // },

  }


}
</script>

<style scoped>
.title {
  background-color: #9C27B0;
}
</style>
