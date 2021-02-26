<template>
  <!--  <v-main class="main">-->

  <v-sheet class="main">
    <portal to="destination">
      <v-tooltip bottom color="purple accent-1" v-if="por">
        <template v-slot:activator="{ on, attrs }">
          <v-btn bottomcolor="purple"
                 dark
                 plain
                 v-bind="attrs"
                 v-on="on">
            <v-icon>mdi-filter</v-icon>
          </v-btn>
        </template>
        <span>filter</span>
      </v-tooltip>
      <v-tooltip bottom color="purple accent-1" v-if="por">
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
    </portal>
    <span v-if="loader">Loading ...</span>
    <v-simple-table dense v-else>
      <template v-slot:default>
        <thead>
        <tr>
          <th>checkbox</th>
          <th class="text-left">
            Avatar
          </th>
          <th>
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
        <tr
            v-for="(item) in roominfo"
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
              <img src="../../assets/Acer-Nitro-5-DB-749x800-1591861689.png">
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
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
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
                        <v-btn plain @click="openInfoDialog()">
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

            <PopopRoomsinfo ref="roominfo"/>
            <Roomsinfoinput ref="room_update"/>
            <Roomnewadd ref="roomadd"/>


          </td>

        </tr>
        </tbody>
      </template>
    </v-simple-table>

  </v-sheet>
  <!--  </v-main>-->
</template>

<script>

import PopopRoomsinfo from '../../components/Popoproomsinfo/DialogRoomsinfo'
import Roomsinfoinput from '../../components/Roomsupdate/InfoRoomsup'
import server from '../../service/axios_init'
import {mapGetters, mapActions} from 'vuex'
import Roomnewadd from '../../components/roomnewadd/roomnewadd'

export default {
  components: { PopopRoomsinfo, Roomsinfoinput, Roomnewadd},
  data() {
    return {
      loader: false,
      Adresroom: true,
      personlimt: true,
      Resault: true,
      dialog: false,
      roomsinput: false,
      person: '',
      Status: true,
      por: true
    }
  },
  computed: {
    ...mapGetters(["roominfo", "portal"]),

  },

  methods: {
    ...mapActions(['setAccountData', "getRoomList"]),
    deletroom(index) {
      server.remove("/v1/admin/learning-centre/room/" + index)
          .then((res) => {
                console.log(res, "ok")
                this.roomsinfodata();

              }
          )
          .catch(err =>
              console.log(err))
          .finally(() => console.log("salom"))
    },
    openInfoDialog() {
      console.log(this.$refs.room_update[0].show())
    },
    roominfodialog() {
      this.$refs.roominfo[0].shov()
    },
    roomsinfodata() {
      this.loader = true;
      this.getRoomList().finally(() => {
        this.loader = false
      })
    },
    roomadd() {
      this.$refs.roomadd[0].show()
      console.log("hellow")
    }
  },
  mounted() {
    this.roomsinfodata();
    this.setAccountData();


  }

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