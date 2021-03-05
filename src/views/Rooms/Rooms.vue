<template>
  <!--  <v-main class="main">-->
  <v-sheet class="main">
    <portal to="destination">
      <div>
        <v-row>
<!--        app-bar inside   search input-->
          <v-col cols="4" v-if="Search"><v-text-field
              label="Search"
              outlined
              color=""
              dense
              v-model="input"
          ></v-text-field></v-col>
<!--       app-bar inside filter icon-->
          <v-col cols="4">
        <v-tooltip bottom color="purple accent-1" v-if="por">
          <template v-slot:activator="{ on, attrs }">
<!--      app-bar inside search function button  -->
              <v-btn bottomcolor="purple"
                 dark
                 plain
                 v-bind="attrs"
                 v-on="on"
                     @click="search()"
              >
            <v-icon>
              mdi-filter
            </v-icon>
          </v-btn>
               </template>
          <span>filter</span>
      </v-tooltip>
          </v-col>
<!--          room new create -->
          <v-col cols="4">
      <v-tooltip bottom color="purple accent-1" v-if="por">
<!--        app-bar inside room add icon and button-->
        <template v-slot:activator="{ on, attrs }">
          <v-btn bottomcolor="purple"
                 dark
                 plain
                 v-bind="attrs"
                 v-on="on"
                 @click="roomadd()"
          >
            <v-icon>mdi-google-classroom</v-icon>
          </v-btn>
        </template>
        <span>room add</span>
      </v-tooltip>
          </v-col>
        </v-row>
      </div>
    </portal>
<!--    beformounted loader-->
    <Dialog v-if="loader"/>
    <v-simple-table dense v-else>
      <template v-slot:default>
        <!--        rooms  tabler header-->
        <thead><br>
        <tr>
          <th>checkbox</th>
          <th class="text-left">
            Avatar
          </th>
          <th>
<!--            room info icon mdi-down and mdi-up button-->
            <v-btn
                @click="Adresroom=!Adresroom"
                plain
                style="
                   text-transform: capitalize
                   ">
              Adres rooms
              <v-icon>
                {{ Adresroom ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
              </v-icon>
            </v-btn>
          </th>
          <th class="text-left">
            <v-btn @click="personlimt=!personlimt"
                   plain
                   style="
                   text-transform: capitalize
                   ">
              person limt
              <v-icon>
                {{ personlimt ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
              </v-icon>
            </v-btn>
          </th>
          <th class="text-left">

          </th>
          <th class="text-left">

          </th>
          <th class="text-left">
            <v-btn @click="Status=!Status"
                   plain
                   style="
                   text-transform: capitalize
                   ">
              Status
              <v-icon>
                {{ Status ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
              </v-icon>
            </v-btn>
          </th>
          <th class="text-left">
            <v-btn @click="Resault=!Resault"
                   plain
                   style="
                   text-transform: capitalize
                   ">
              Resault
              <v-icon>
                {{ Resault ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
              </v-icon>
            </v-btn>
          </th>
          <th class="text-left">
            Actions
          </th>

        </tr>
        </thead>
        <tbody>
<!--        //rooms for item  filter-->
        <tr
            v-for="(item,index) in searchfilter
"
            :key="item.id"
        >
          <td>
            <v-checkbox
                color="error"
                value="error"
                hide-details
                style="margin-top:-20px"
            ></v-checkbox>
          </td>
          <td>
            <v-list-item-avatar>
              <img src="../../assets/classroom_1542034403442_61914801_ver1.0.jpg">
            </v-list-item-avatar>
          </td>

          <td>{{ item.address }}</td>
          <td>{{ item.range }}</td>
          <td>{{ item.Username }}</td>
          <td>{{ item.Subjcts }}</td>
          <td>
            <v-chip

                color="purple"
                text-color="white"

            >
              <v-icon>mdi-check</v-icon>
              {{ item.Status }}
              Activated
            </v-chip>
          </td>
          <td>
            <v-chip color="yellow">
              100%
              {{ item.Resault }}
            </v-chip>
          </td>
          <td>
            <template>
<!--              room talbe reight icons vertical ... -->
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <!-- room talbe reight icons vertical button ... -->
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        max-width="0"
                        max-height="0"
                        style="margin-bottom: 30px"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>
                        <v-btn plain @click="roominfodialog()">
                          <v-icon>mdi-information
                          </v-icon>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>
                        <v-btn plain @click="openInfoDialog(index, item.id)">
                          <v-icon>mdi-pencil-outline</v-icon>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>
                        <v-btn plain @click="deletroom(item.id)">
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                        <h1></h1>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>

                </v-menu>
              </div>
            </template>
          </td>

        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <PopopRoomsinfo ref="roominfo"/>
    <Roomsinfoinput ref="room_update"/>
    <Newaddroom ref="roomadd"/>
    <TimePicker ref="timepicker"/>
  </v-sheet>
  <!--  </v-main>-->
</template>

<script>

import PopopRoomsinfo from '../../components/Popoproomsinfo/DialogRoomsinfo'
import Roomsinfoinput from '../../components/Roomsupdate/InfoRoomsup'
import {mapGetters, mapActions} from 'vuex'
import Newaddroom from '../../components/roomnewadd/newaddroom'
import Dialog from '../../components/loadeng/loadeng'
import  TimePicker from '../../components/timepicker/timepicker'
// import Search from '../../components/Filterrooms/filterrooms'
export default {
  components: { PopopRoomsinfo, Roomsinfoinput, Newaddroom, Dialog,TimePicker },
  data() {
    return {
      Search:false,
      loader: false,
      Adresroom: true,
      personlimt: true,
      Resault: true,
      dialog: false,
      roomsinput: false,
      person: '',
      Status: true,
      por: true,
      input:'',
      array:[]
    }
  },
  computed: {
    ...mapGetters(["roominfo", "portal"]),
          searchfilter () {
          if (this.input === '') return this.roominfo
          else return this.roominfo.filter(e => {
          return e.address.toUpperCase().startsWith(this.input.trim().toUpperCase())
      })
    }

    },



  methods: {
    ...mapActions(['setAccountData', "getRoomList",]),
    deletroom(index) {
      this.loader=true
      this.$store.dispatch("deletRoom",index)
      this.loader=false
    },
    search(){
      this.Search=! this.Search;


    },

    openInfoDialog(index, id) {
      this.$refs.room_update.show()
      this.$refs.room_update.updateRoom(index, id)
    },
    roominfodialog() {

      this.$refs.roominfo.shov()
    },
    roomsinfodata() {
      this.loader = true;
      this.getRoomList().
      finally(() => {
        this.loader = false
      })
    },
    roomadd() {
      this.$refs.roomadd.show()
    }
  },
  mounted() {
    this.roomsinfodata();
    // this.setAccountData();
  },


}
</script>

<style scoped>
.main {
  margin: -25px 20px 0 20px;
  height: 100%;
}

.table {
  width: 100%;
  padding: 0;
}

.bntbacolr {
  background-color: #FFFFFF;
  outline: none;
  box-shadow: none;
}
</style>