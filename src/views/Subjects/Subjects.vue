<template>
  <Dialog v-if="losder"/>
  <v-sheet v-else style="margin-top:-50px">

    <portal to="subjects">
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
                       @click="opendialogsmall()"
                >
                  <v-icon>mdi-book-edit-outline</v-icon>
                </v-btn>
              </template>
              <span>subjects add</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </div>
    </portal>
    <template>
      <div>
        <v-data-table
            :headers="headers"

            style="background-color: #B3E5FC"
        >
<!--          <template v-slot:top>-->

<!--          </template>-->
            <template v-slot:body.append>
<tr v-for ="(item ,index) in subjectlistname" :key="item.name">


  <td><v-checkbox


      color="warning"
      value="warning"
      hide-details
  ></v-checkbox></td>
  <td>
    <v-avatar><img src="../../assets/Acer-Nitro-5-DB-749x800-1591861689.png" alt="">
    </v-avatar></td>
  <td>{{item.name}}</td>
  <td></td>
  <td></td>
  <td>
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
              <v-btn plain @click="dialogopenupdet(index)">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn plain @click="removesubject(item.subjectId)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <h1></h1>
            </v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
    </div>
  </td>


</tr>

          </template>

        </v-data-table>
      </div>
    </template>

<Subjectdialog ref="title" />
    <Updatesubject ref="updetcomponents" />
  </v-sheet>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Dialog from '../../components/loadeng/loadeng'
import Subjectdialog from "@/components/Subjectcomponents/subjectdialog";
import Updatesubject from "@/components/Subjectcomponents/subjectupdatedilog"

export default {
  components: {Dialog ,Subjectdialog,Updatesubject},
  data() {
    return {
      search: '',
      calories: '',
      losder: true,

    }
  },
  computed: {
    ...mapGetters(["subjectlistname"]),
    headers() {
      return [
        {
          text: ' chexbox',
          align: 'start',
          sortable: false,
          value: 'calories',

        },
        {
          text: 'Subject name',
          value: 'name',
          filter: value => {
            if (!this.calories) return true

            return value < parseInt(this.calories)
          },
        },
        {text: 'Protein (g)', value: 'protein'},
        {text: 'subject analysis', value: 'iron'},
        {text:""},
        {text:'Subject name'}
      ]
    },

  },
  methods: {
    filterOnlyCapsText(value, search, ) {
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(search) !== -1
    },
    ...mapActions(["getSubjectList"]),
    removesubject(id){
      this.losder=!this.losder
      console.log(id);
      this.$store.dispatch("removeSubject",id)
      .finally(()=>{
        this.losder=!this.losder
        this.getSubjectList()
      })
    },
    opendialogsmall(){
      this.$refs.title.dialogopen()
    },
    subjectinfo(){
      this.losder=!this.losder
      this.getSubjectList()
      .finally(()=>{
        this.losder=!this.losder

      })
    },
    dialogopenupdet(index){
      console.log(index)
      this.$refs.updetcomponents.openupdatedialog(index)
    }
  },
  mounted() {
    // this.getSubjectList();
    this.subjectinfo();
  },
  beforeMount() {
    setTimeout(() => {
      this.losder = !this.losder
    }, 1000)
  },
  updated() {



  }
}

</script>

<style scoped>

</style>