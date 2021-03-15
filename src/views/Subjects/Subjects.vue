<template>
  <Dialog v-if="losder"/>
  <v-sheet v-else style="margin-top:-50px">

    <portal to="subjects">
      <div>
        <v-row>


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
      <v-card style="margin-top: 25px;">
        <v-card-title>

<!--          <v-spacer></v-spacer>-->
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="subjectlistname"
            :search="search"
        >


          <template v-slot:item.chexbox="{ item }">
            <v-simple-checkbox
                v-model="item.chexbox"
                disabled
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.Actions="{ item }">
            <v-icon
                 color="deep-purple"
                class="mr-2"
                @click="editItem(item.subjectId)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
               color="purple"
                @click="deleteItem(item.subjectId)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn
                color="primary"

            >
              Reset
            </v-btn>
          </template>
          <template v-slot:item.subjectId="{ item }">
            <v-chip v-model="item.subjectId"  color="red" >
   100%
            </v-chip>
            </template>

          <template v-slot:item.text="{ item }">
            <v-chip v-model="item.text"  color="purple accent-4" >
              subjects
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
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
      headers: [
        {
          text: 'chexbox',
          align: 'start',
          sortable: false,
          value: 'chexbox',
        },
        { text: 'Calories', value: 'name' },
        { text: 'subjectId', value: 'subjectId' },
        { text:"text", value: 'text' },
        { text: "", value: 'protein' },
        { text: 'Ations', value: 'Actions' },
      ],

    }
  },
  computed: {
    ...mapGetters(["subjectlistname"]),
    // headers() {
    //   return [
    //     {
    //       text: ' chexbox',
    //       align: 'start',
    //       sortable: false,
    //       value: 'calories',
    //
    //     },
    //     {
    //       text: 'Subject name',
    //       value: 'name',
    //       filter: value => {
    //         if (!this.calories) return true
    //
    //         return value < parseInt(this.calories)
    //       },
    //     },
    //     {text: 'Protein (g)', value: 'protein'},
    //     {text: 'subject analysis', value: 'iron'},
    //     {text:""},
    //     {text:'Subject name'}
    //   ]
    // },

  },
  methods: {
    editItem(id){
      console.log(id)
    },
    filterOnlyCapsText(value, search, ) {
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(search) !== -1
    },
    ...mapActions(["getSubjectList"]),
    deleteItem(id){
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