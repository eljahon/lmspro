<template>
  <v-app>

    <v-sheet max-height="700" >
      <Dialog v-if="loader"/>
      <portal to="student">
        <div>
          <v-row>

            <!--       app-bar inside filter icon-->
            <v-col cols="4">
              <v-tooltip bottom color="purple accent-1">
                <template v-slot:activator="{ on, attrs }">
                  <!--      app-bar inside search function button  -->
                  <v-btn bottomcolor="purple"
                         dark
                         plain
                         v-bind="attrs"
                         v-on="on"

                  >
                    <v-icon>mdi-bell-alert-outline</v-icon>
                  </v-btn>
                </template>
                <span>Notifications</span>
              </v-tooltip>
            </v-col>
            <!--          room new create -->
            <v-col cols="4">
              <v-tooltip bottom color="purple accent-1">
                <!--        app-bar inside room add icon and button-->
                <template v-slot:activator="{ on, attrs }">
                  <v-btn bottomcolor="purple"
                         dark
                         plain
                         v-bind="attrs"
                         v-on="on"
                         @click="dialogopen()"
                  >
                    <v-icon>mdi-account-plus</v-icon>
                  </v-btn>
                </template>
                <span>subjects add</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </div>
      </portal>
<!--      v-else-->

      <v-simple-table dense >
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Avatar
            </th>
            <th class="text-left">
              First Name
            </th>
            <th class="text-left">
              Last Name
            </th>
            <th class="text-left">
              User Name
            </th>
            <th class="text-left">
              Subjects
            </th>
            <th class="text-left">
              Sratus
            </th>
            <th class="text-left">
              Result
            </th>
            <th class="text-left">
              Actions
            </th>

          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(item,index) in studentinfo"
              :key="index"
          >
            <td>
              <v-list-item-avatar>
                <img src="../../assets/Acer-Nitro-5-DB-749x800-1591861689.png">
              </v-list-item-avatar>
            </td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.subjects }}</td>
            <td>
              <v-chip
                  class="ma-2"
                  color="red"
                  text-color="white"
              >
                {{ item.Status }}
              </v-chip>
            </td>
            <td>{{ item.Resault }}</td>
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
            </td>

          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <newstudentadd ref="studenaddcomponents"></newstudentadd>

    </v-sheet>
  </v-app>
</template>

<script>
import  Dialog from '../../components/loadeng/loadeng'
import newstudentadd from '../../components/Studentcomponents/newstudentadddialog'
import  {mapActions,mapGetters} from 'vuex'

export default {
  name: "Students",
  components:{ Dialog ,newstudentadd },
  data() {
    return {
      loader:true,
      desserts: [
        {
          key:1,
          Avatarimg: 'Frozen Yogurt',
          Firstname: 'Eljahon',
          lastname: 'sdfgh',
          Username: 'oybek',
          Subjcts: 'fanalr',
          Status: "100%",
          Resault: 'salom',
          Actions: 'salom'
        },
        {
          key:2,
          Avatar: 'Frozen Yogurt',
          Firstname: 'Eljahon',
          lastname: 'sdfgh',
          Username: 'oybek',
          Subjcts: 'fanalr',
          Status: "100%",
          Resault: 'salom',
          Actions: 'salom'
        },
        {key:3,
          Avatar: 'Frozen Yogurt',
          Firstname: 'Eljahon',
          lastname: 'sdfgh',
          Username: 'oybek',
          Subjcts: 'fanalr',
          Status: "100%",
          Resault: 'salom',
          Actions: 'salom'
        },
        {key:4,
          Avatar: 'Frozen Yogurt',
          Firstname: 'Eljahon',
          lastname: 'sdfgh',
          Username: 'oybek',
          Subjcts: 'fanalr',
          Status: "100%",
          Resault: 'salom',
          Actions: 'salom'
        },
      ],
    }
  },
  methods:{
    ...mapActions(["getStudentList"]),

    LoaderOpenClose(){
      this.loader=!this.loader
    },
    dialogopen(){
      this.$refs.studenaddcomponents.opendialog()

    },

  },
  mounted() {
    this.getStudentList();


  },
  computed:{
...mapGetters(["studentinfo"])


  },
  beforeMount() {
    setTimeout(()=>{
      this.loader=!this.loader
    }, 2000)
  },
  updated() {
    // console.log(this.studentinfo)
  }

}
</script>

<style scoped>

</style>