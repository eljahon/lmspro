<template>
  <v-app>

    <v-sheet max-height="700" >
      <Dialog v-if="loader"/>
      <portal to="student">
        <div>
          <v-row>

            <v-col cols="3">
              <v-tooltip bottom color="purple accent-1">
                <template v-slot:activator="{ on, attrs }">

                  <v-btn bottomcolor="purple"
                         dark
                         plain
                         v-bind="attrs"
                         v-on="on"

                  >
                    <v-icon @click="search=!search">mdi-account-search</v-icon>
                  </v-btn>
                </template>
                <span>filter</span>
              </v-tooltip>
            </v-col>

            <v-col cols="3">
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
                <span>sutudent  add</span>
              </v-tooltip>
            </v-col>

            <v-col cols="3">
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
          </v-row>
        </div>
      </portal>
      <v-text-field
                    style="position: absolute;
                    top: -40px;width: 100%"
                    v-if="search"
                    label="search"

                    filled
                    outlined
                    dense
                    v-model="input"
      ></v-text-field>


      <v-simple-table dense >
        <template v-slot:default>

          <thead>
          <tr>
            <th>checkbox</th>
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
              v-for="item in searchfilter"
              :key="item.id"
          >
<!--            students inside chexbox -->
            <td>
              <v-checkbox


                  color="success"
                  value="success"
                  hide-details
              ></v-checkbox>
            </td>
            <td>
              <v-list-item-avatar>
                <img src="../../assets/Acer-Nitro-5-DB-749x800-1591861689.png">
              </v-list-item-avatar>
            </td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.username }}</td>

            <td><div v-for="i in item.subjects " :key="i.subjectId">
              <div style="color:#AB47BC">{{i.subjectId}}.{{i.name}}</div>
            </div>
            </td>
            <td>
              <v-chip
                  class="ma-2"
                  color="red"
                  text-color="white"
              >
100%
              </v-chip>
            </td>
            <td>
              <v-chip
                class="ma-2"
                color="purple darken-4"
                text-color="white"
            >
              hellow i is student
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
                          <v-btn plain @click="updatestudent(item.id)">
                            <v-icon>mdi-pencil-outline</v-icon>
                          </v-btn>
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>
                          <v-btn plain @click="deletstudent(item.id)">
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
      <Newstudentadd ref="studenaddcomponents"></Newstudentadd>
      <Updatestudent ref="updatestudent"/>

    </v-sheet>
  </v-app>
</template>

<script>
import  Dialog from '../../components/loadeng/loadeng'
import Newstudentadd from '../../components/Studentcomponents/newstudentadddialog'
import  {mapActions,mapGetters} from 'vuex'
import Updatestudent from '../../components/Studentcomponents/updatestudent'

export default {
  name: "Students",
  components:{ Dialog ,Newstudentadd ,Updatestudent},
  data() {
    return {
      search:false,
      input: '',
      loader: true,
      couter:0
    }

  },
  methods:{
    ...mapActions(["getStudentList","getSubjectList"]),

    LoaderOpenClose(){
      this.loader=!this.loader
    },
    dialogopen(){
      this.$refs.studenaddcomponents.opendialog()


    },
    deletstudent(index){
      console.log(index)

      this.loader=!this.loader
      this.$store.dispatch("removeStudent",index)
      .finally(()=>{
        this.loader=!this.loader
      })

      console.log(index)
    },
    updatestudent(index){
      console.log(index)
      this.$refs.updatestudent.opendialog(index)
    }

  },
  mounted() {
    this.getStudentList();
    this.getSubjectList();
  },
  computed:{
...mapGetters(["studentinfo"]),
    searchfilter () {
      if (this.input === '') return this.studentinfo
      else return this.studentinfo.filter(e => {
        return e.firstName.toUpperCase().startsWith(this.input.trim().toUpperCase())
      })}


  },
  beforeMount() {
    setTimeout(()=>{
      this.loader=!this.loader
    }, 2000)
  },
  updated() {

  }

}
</script>

<style scoped>

</style>
